const express = require('express');
const router = express.Router();
const { fetch, ProxyAgent, Agent } = require('undici');

const { v4: uuidv4, v5: uuidv5 } = require('uuid');
const config = require('../config/config');
const $root = require('../proto/message.js');
const { generateCursorBody, chunkToUtf8String, generateHashed64Hex, generateCursorChecksum, parseToolCallsFromResponse, removeToolCallsFromContent } = require('../utils/utils.js');
const cursorAuth = require('../services/cursorAuth');

router.get("/models", async (req, res) => {
  try{
    // Use local Cursor auth token instead of requiring it from request
    let authToken = await cursorAuth.extractBearerToken();
    
    if (authToken && authToken.includes('%3A%3A')) {
      authToken = authToken.split('%3A%3A')[1];
    }
    else if (authToken && authToken.includes('::')) {
      authToken = authToken.split('::')[1];
    }

    const cursorChecksum = req.headers['x-cursor-checksum'] 
      ?? generateCursorChecksum(authToken.trim());
    const cursorClientVersion = "1.1.3"

    const availableModelsResponse = await fetch("https://api2.cursor.sh/aiserver.v1.AiService/AvailableModels", {
      method: 'POST',
      headers: {
        'accept-encoding': 'gzip',
        'authorization': `Bearer ${authToken}`,
        'connect-protocol-version': '1',
        'content-type': 'application/proto',
        'user-agent': 'connect-es/1.6.1',
        'x-cursor-checksum': cursorChecksum,
        'x-cursor-client-version': cursorClientVersion,
        'x-cursor-config-version': uuidv4(),
        'x-cursor-timezone': 'Asia/Shanghai',
        'x-ghost-mode': 'true',
        'Host': 'api2.cursor.sh',
      },
    })
    const data = await availableModelsResponse.arrayBuffer();
    const buffer = Buffer.from(data);
    try{
      const models = $root.AvailableModelsResponse.decode(buffer).models;

      return res.json({
        object: "list",
        data: models.map(model => ({
          id: model.name,
          created: Date.now(),
          object: 'model',
          owned_by: 'cursor'
        }))
      })
    } catch (error) {
      const text = buffer.toString('utf-8');
      throw new Error(text);      
    }
  }
  catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Internal server error',
    });
  }
})

router.post('/chat/completions', async (req, res) => {

  try {
    const { model, messages, stream = false, tools, tool_choice } = req.body;
    
    // Use local Cursor auth token instead of requiring it from request
    let authToken = await cursorAuth.extractBearerToken();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        error: 'Invalid request. Messages should be a non-empty array',
      });
    }

    if (authToken && authToken.includes('%3A%3A')) {
      authToken = authToken.split('%3A%3A')[1];
    }
    else if (authToken && authToken.includes('::')) {
      authToken = authToken.split('::')[1];
    }

    const cursorChecksum = req.headers['x-cursor-checksum']
      ?? generateCursorChecksum(authToken.trim());

    const sessionid = uuidv5(authToken,  uuidv5.DNS);
    const clientKey = generateHashed64Hex(authToken)
    const cursorClientVersion = "1.1.3"
    const cursorConfigVersion = uuidv4();

    // Request the AvailableModels before StreamChat.
    const availableModelsResponse = fetch("https://api2.cursor.sh/aiserver.v1.AiService/AvailableModels", {
      method: 'POST',
      headers: {
        'accept-encoding': 'gzip',
        'authorization': `Bearer ${authToken}`,
        'connect-protocol-version': '1',
        'content-type': 'application/proto',
        'user-agent': 'connect-es/1.6.1',
        'x-amzn-trace-id': `Root=${uuidv4()}`,
        'x-client-key': clientKey,
        'x-cursor-checksum': cursorChecksum,
        'x-cursor-client-version': cursorClientVersion,
        'x-cursor-config-version': cursorConfigVersion,
        'x-cursor-timezone': 'Asia/Shanghai',
        'x-ghost-mode': 'true',
        "x-request-id": uuidv4(),
        "x-session-id": sessionid,
        'Host': 'api2.cursor.sh',
      },
    })
    
    const cursorBody = generateCursorBody(messages, model, tools, tool_choice);
    const dispatcher = config.proxy.enabled
      ? new ProxyAgent(config.proxy.url, { allowH2: true })
      : new Agent({ allowH2: true });
    const response = await fetch('https://api2.cursor.sh/aiserver.v1.ChatService/StreamUnifiedChatWithTools', {
      method: 'POST',
      http2: true,
      headers: {
        'authorization': `Bearer ${authToken}`,
        'connect-accept-encoding': 'gzip',
        'connect-content-encoding': 'gzip',
        'connect-protocol-version': '1',
        'content-type': 'application/connect+proto',
        'user-agent': 'connect-es/1.6.1',
        'x-amzn-trace-id': `Root=${uuidv4()}`,
        'x-client-key': clientKey,
        'x-cursor-checksum': cursorChecksum,
        'x-cursor-client-version': cursorClientVersion,
        'x-cursor-config-version': cursorConfigVersion,
        'x-cursor-timezone': 'Asia/Shanghai',
        'x-ghost-mode': 'true',
        'x-request-id': uuidv4(),
        'x-session-id': sessionid,
        'Host': 'api2.cursor.sh'
      },
      body: cursorBody,
      dispatcher: dispatcher,
      timeout: {
        connect: 5000,
        read: 30000
      }
    });

    if (response.status !== 200) {
      return res.status(response.status).json({ 
        error: response.statusText 
      });
    }

    if (stream) {
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');

      const responseId = `chatcmpl-${uuidv4()}`;

      try {
        let thinkingStart = "<thinking>";
        let thinkingEnd = "</thinking>";
        let hasToolCalls = false;
        let allToolCalls = [];
        
        let fullContent = '';
        
        for await (const chunk of response.body) {
          const { thinking, text } = chunkToUtf8String(chunk);
          
          let content = ""

          if (thinkingStart !== "" && thinking.length > 0 ){
            content += thinkingStart + "\n"
            thinkingStart = ""
          }
          content += thinking
          if (thinkingEnd !== "" && thinking.length === 0 && text.length !== 0 && thinkingStart === "") {
            content += "\n" + thinkingEnd + "\n"
            thinkingEnd = ""
          }

          content += text
          fullContent += content

          // Check for tool calls in the accumulated content
          const toolCallsInContent = parseToolCallsFromResponse(fullContent);
          if (toolCallsInContent.length > 0 && !hasToolCalls) {
            hasToolCalls = true;
            allToolCalls.push(...toolCallsInContent);
            
            // Send tool call chunks
            for (const toolCall of toolCallsInContent) {
              res.write(
                `data: ${JSON.stringify({
                  id: responseId,
                  object: 'chat.completion.chunk',
                  created: Math.floor(Date.now() / 1000),
                  model: model,
                  choices: [{
                    index: 0,
                    delta: {
                      role: 'assistant',
                      tool_calls: [toolCall]
                    },
                  }],
                })}\n\n`
              );
            }
            
            // Send clean content without tool call tags
            const cleanContent = removeToolCallsFromContent(fullContent);
            if (cleanContent.length > 0) {
              res.write(
                `data: ${JSON.stringify({
                  id: responseId,
                  object: 'chat.completion.chunk',
                  created: Math.floor(Date.now() / 1000),
                  model: model,
                  choices: [{
                    index: 0,
                    delta: {
                      content: cleanContent,
                    },
                    finish_reason: 'tool_calls'
                  }],
                })}\n\n`
              );
            }
          } else if (!hasToolCalls && content.length > 0) {
            // Send regular content chunks if no tool calls detected yet
            res.write(
              `data: ${JSON.stringify({
                id: responseId,
                object: 'chat.completion.chunk',
                created: Math.floor(Date.now() / 1000),
                model: model,
                choices: [{
                  index: 0,
                  delta: {
                    content: content,
                  },
                  finish_reason: null
                }],
              })}\n\n`
            );
          }
        }
      } catch (streamError) {
        console.error('Stream error:', streamError);
        if (streamError.name === 'TimeoutError') {
          res.write(`data: ${JSON.stringify({ error: 'Server response timeout' })}\n\n`);
        } else {
          res.write(`data: ${JSON.stringify({ error: 'Stream processing error' })}\n\n`);
        }
      } finally {
        res.write('data: [DONE]\n\n');
        res.end();
      }
    } else {
      // Non-streaming response
      try {
        let thinkingStart = "<thinking>";
        let thinkingEnd = "</thinking>";
        let content = '';
        let allToolCalls = [];
        
        for await (const chunk of response.body) {
          const { thinking, text } = chunkToUtf8String(chunk);
          
          if (thinkingStart !== "" && thinking.length > 0 ){
            content += thinkingStart + "\n"
            thinkingStart = ""
          }
          content += thinking
          if (thinkingEnd !== "" && thinking.length === 0 && text.length !== 0 && thinkingStart === "") {
            content += "\n" + thinkingEnd + "\n"
            thinkingEnd = ""
          }

          content += text
        }

        // Parse tool calls from the full content
        allToolCalls = parseToolCallsFromResponse(content);
        const cleanContent = allToolCalls.length > 0 ? removeToolCallsFromContent(content) : content;

        // Prepare the response message
        const message = {
          role: 'assistant',
          content: allToolCalls.length > 0 ? cleanContent : content,
        };

        // Add tool calls if present
        if (allToolCalls.length > 0) {
          message.tool_calls = allToolCalls;
        }

        return res.json({
          id: `chatcmpl-${uuidv4()}`,
          object: 'chat.completion',
          created: Math.floor(Date.now() / 1000),
          model: model,
          choices: [
            {
              index: 0,
              message: message,
              finish_reason: allToolCalls.length > 0 ? 'tool_calls' : 'stop',
            },
          ],
          usage: {
            prompt_tokens: 0,
            completion_tokens: 0,
            total_tokens: 0,
          },
        });
      } catch (error) {
        console.error('Non-stream error:', error);
        if (error.name === 'TimeoutError') {
          return res.status(408).json({ error: 'Server response timeout' });
        }
        throw error;
      }
    }
  } catch (error) {
    console.error('Error:', error);
    if (!res.headersSent) {
      const errorMessage = {
        error: error.name === 'TimeoutError' ? 'Request timeout' : 'Internal server error'
      };

      if (req.body.stream) {
        res.write(`data: ${JSON.stringify(errorMessage)}\n\n`);
        return res.end();
      } else {
        return res.status(error.name === 'TimeoutError' ? 408 : 500).json(errorMessage);
      }
    }
  }
});

module.exports = router;
