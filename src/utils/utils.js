const os = require('os');
const zlib = require('zlib');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
const $root = require('../proto/message.js');

// Tool mapping between OpenAI function names and Cursor ClientSideToolV2 enum values
const OPENAI_TO_CURSOR_TOOLS = {
  'bash': $root.ClientSideToolV2.CLIENT_SIDE_TOOL_V2_RUN_TERMINAL_COMMAND,
  'run_terminal_command': $root.ClientSideToolV2.CLIENT_SIDE_TOOL_V2_RUN_TERMINAL_COMMAND, 
  'run_terminal_command_v2': $root.ClientSideToolV2.CLIENT_SIDE_TOOL_V2_RUN_TERMINAL_COMMAND_V2,
  'read_file': $root.ClientSideToolV2.CLIENT_SIDE_TOOL_V2_READ_FILE,
  'write_file': $root.ClientSideToolV2.CLIENT_SIDE_TOOL_V2_EDIT_FILE, // Edit file can create/write
  'create_file': $root.ClientSideToolV2.CLIENT_SIDE_TOOL_V2_CREATE_FILE,
  'edit_file': $root.ClientSideToolV2.CLIENT_SIDE_TOOL_V2_EDIT_FILE,
  'delete_file': $root.ClientSideToolV2.CLIENT_SIDE_TOOL_V2_DELETE_FILE,
  'list_dir': $root.ClientSideToolV2.CLIENT_SIDE_TOOL_V2_LIST_DIR,
  'file_search': $root.ClientSideToolV2.CLIENT_SIDE_TOOL_V2_FILE_SEARCH,
  'ripgrep_search': $root.ClientSideToolV2.CLIENT_SIDE_TOOL_V2_RIPGREP_SEARCH,
  'semantic_search': $root.ClientSideToolV2.CLIENT_SIDE_TOOL_V2_SEMANTIC_SEARCH_FULL,
  'web_search': $root.ClientSideToolV2.CLIENT_SIDE_TOOL_V2_WEB_SEARCH,
  'search_symbols': $root.ClientSideToolV2.CLIENT_SIDE_TOOL_V2_SEARCH_SYMBOLS
};

const CURSOR_TO_OPENAI_TOOLS = Object.fromEntries(
  Object.entries(OPENAI_TO_CURSOR_TOOLS).map(([k, v]) => [v, k])
);

function transformToolsToClientSideTools(tools) {
  if (!tools || !Array.isArray(tools)) return [];
  
  return tools.map(tool => {
    const cursorToolType = OPENAI_TO_CURSOR_TOOLS[tool.function.name];
    if (cursorToolType === undefined) {
      throw new Error(`Unsupported tool: ${tool.function.name}. Available tools: ${Object.keys(OPENAI_TO_CURSOR_TOOLS).join(', ')}`);
    }
    
    // Return just the enum value for the clientSideToolV2s array
    return cursorToolType;
  });
}

function processToolMessages(messages) {
  return messages.map(msg => {
    if (msg.role === 'tool') {
      // Convert OpenAI tool result to Cursor format
      return {
        content: msg.content,
        role: 2, // assistant role in Cursor
        messageId: uuidv4(),
        toolResult: {
          tool_call_id: msg.tool_call_id,
          result: msg.content
        }
      };
    } else if (msg.role === 'assistant' && msg.tool_calls) {
      // Convert OpenAI assistant tool calls to Cursor format
      return {
        content: msg.content || '',
        role: 2,
        messageId: uuidv4(),
        toolCalls: msg.tool_calls.map(tc => ({
          id: tc.id,
          tool: OPENAI_TO_CURSOR_TOOLS[tc.function.name],
          name: tc.function.name,
          arguments: tc.function.arguments
        }))
      };
    } else {
      // Regular message processing
      return {
        content: msg.content,
        role: msg.role === 'user' ? 1 : 2,
        messageId: uuidv4(),
        ...(msg.role === 'user' ? { chatModeEnum: 1 } : {})
      };
    }
  });
}

function transformCursorToolCallsToOpenAI(cursorToolCall) {
  if (!cursorToolCall) return null;
  
  const openaiToolName = CURSOR_TO_OPENAI_TOOLS[cursorToolCall.tool] || cursorToolCall.tool.toLowerCase();
  
  return {
    id: cursorToolCall.tool_call_id,
    type: 'function',
    function: {
      name: openaiToolName,
      arguments: typeof cursorToolCall.arguments === 'string' ? 
        cursorToolCall.arguments : 
        JSON.stringify(cursorToolCall.arguments || {})
    }
  };
}

function generateCursorBody(messages, modelName, tools, toolChoice) {

  const instruction = messages
    .filter(msg => msg.role === 'system')
    .map(msg => msg.content)
    .join('\n')

  // Process messages with tool support
  const formattedMessages = processToolMessages(
    messages.filter(msg => msg.role !== 'system')
  );

  // Transform OpenAI tools to Cursor format
  const clientSideTools = transformToolsToClientSideTools(tools);

  const messageIds = formattedMessages.map(msg => {
    const { role, messageId, summaryId } = msg;
    return summaryId ? { role, messageId, summaryId } : { role, messageId };
  });

  const body = {
    request:{
      messages: formattedMessages,
      unknown2: 1,
      instruction: {
        instruction: instruction
      },
      unknown4: 1,
      model: {
        name: modelName,
        empty: '',
      },
      webTool: "",
      unknown13: 1,
      cursorSetting: {
        name: "cursor\\aisettings",
        unknown3: "",
        unknown6: {
          unknwon1: "",
          unknown2: ""
        },
        unknown8: 1,
        unknown9: 1
      },
      unknown19: 1,
      //unknown22: 1,
      conversationId: uuidv4(),
      metadata: {
        os: "linux",
        arch: "x64",
        version: "6.13.0",
        path: "/usr/bin/node",
        timestamp: new Date().toISOString(),
      },
      unknown27: 0,
      //unknown29: "",
      messageIds: messageIds,
      largeContext: 0,
      unknown38: 0,
      chatModeEnum: tools && tools.length > 0 ? 2 : 1, // Use agent mode when tools are available
      // Add client-side tools if provided
      ...(clientSideTools.length > 0 && {
        clientSideToolV2s: clientSideTools,
      }),
      unknown47: "",
      unknown48: 0,
      unknown49: 0,
      unknown51: 0,
      unknown53: 1,
      chatMode: tools && tools.length > 0 ? "Agent" : "Ask",
      ...(toolChoice && {
        toolChoice: toolChoice
      })
    }
  };

  const errMsg = $root.StreamUnifiedChatWithToolsRequest.verify(body);
  if (errMsg) throw Error(errMsg);
  const instance = $root.StreamUnifiedChatWithToolsRequest.create(body);
  let buffer = $root.StreamUnifiedChatWithToolsRequest.encode(instance).finish();
  let magicNumber = 0x00
  if (formattedMessages.length >= 3){
    buffer = zlib.gzipSync(buffer)
    magicNumber = 0x01
  }

  const finalBody = Buffer.concat([
    Buffer.from([magicNumber]),
    Buffer.from(buffer.length.toString(16).padStart(8, '0'), 'hex'),
    buffer
  ])

  return finalBody
}

function chunkToUtf8String(chunk) {
  const thinkingOutput = []
  const textOutput = []
  const toolCalls = []
  const buffer = Buffer.from(chunk, 'hex');
  //console.log("Chunk buffer:", buffer.toString('hex'))

  try {
    for(let i = 0; i < buffer.length; i++){
      const magicNumber = parseInt(buffer.subarray(i, i + 1).toString('hex'), 16)
      const dataLength = parseInt(buffer.subarray(i + 1, i + 5).toString('hex'), 16)
      const data = buffer.subarray(i + 5, i + 5 + dataLength)
      //console.log("Parsed buffer:", magicNumber, dataLength, data.toString('hex'))

      if (magicNumber == 0 || magicNumber == 1) {
        const gunzipData = magicNumber == 0 ? data : zlib.gunzipSync(data)
        const response = $root.StreamUnifiedChatWithToolsResponse.decode(gunzipData);

        // Handle tool calls from Cursor response
        if (response?.client_side_tool_v2_call) {
          const toolCall = response.client_side_tool_v2_call;
          const openaiToolCall = transformCursorToolCallsToOpenAI(toolCall);
          if (openaiToolCall) {
            toolCalls.push(openaiToolCall);
          }
        }

        const thinking = response?.message?.thinking?.content
        if (thinking !== undefined){
          thinkingOutput.push(thinking)
          //console.log(thinking)
        }

        const content = response?.message?.content
        if (content !== undefined){
          textOutput.push(content)
          //console.log(content)
        }
        
      }
      else if (magicNumber == 2 || magicNumber == 3) { 
        // Json message
        const gunzipData = magicNumber == 2 ? data : zlib.gunzipSync(data)
        const utf8 = gunzipData.toString('utf-8')
        
        try {
          const message = JSON.parse(utf8)
          
          // Handle tool-related JSON messages
          if (message?.tool_call_id || message?.tool_calls) {
            // This might be a tool call or tool result
            console.log('Tool-related JSON message:', utf8);
          }

          if (message != null && (typeof message !== 'object' || 
            (Array.isArray(message) ? message.length > 0 : Object.keys(message).length > 0))){
              //results.push(utf8)
              console.error(utf8)
          }
        } catch (parseErr) {
          console.error('Failed to parse JSON message:', utf8);
        }

      }
      else {
        //console.log('Unknown magic number when parsing chunk response: ' + magicNumber)
      }

      i += 5 + dataLength - 1
    }
  } catch (err) {
    console.log('Error parsing chunk response:', err)
  }

  return {
    thinking: thinkingOutput.join(''), 
    text: textOutput.join(''),
    toolCalls: toolCalls
  }
}

function generateHashed64Hex(input, salt = '') {
  const hash = crypto.createHash('sha256');
  hash.update(input + salt);
  return hash.digest('hex');
}

function obfuscateBytes(byteArray) {
  let t = 165;
  for (let r = 0; r < byteArray.length; r++) {
    byteArray[r] = (byteArray[r] ^ t) + (r % 256);
    t = byteArray[r];
  }
  return byteArray;
}

function generateCursorChecksum(token) {
  const machineId = generateHashed64Hex(token, 'machineId');
  const macMachineId = generateHashed64Hex(token, 'macMachineId');

  const timestamp = Math.floor(Date.now() / 1e6);
  const byteArray = new Uint8Array([
    (timestamp >> 40) & 255,
    (timestamp >> 32) & 255,
    (timestamp >> 24) & 255,
    (timestamp >> 16) & 255,
    (timestamp >> 8) & 255,
    255 & timestamp,
  ]);

  const obfuscatedBytes = obfuscateBytes(byteArray);
  const encodedChecksum = Buffer.from(obfuscatedBytes).toString('base64');

  return `${encodedChecksum}${machineId}/${macMachineId}`;
}

module.exports = {
  generateCursorBody,
  chunkToUtf8String,
  generateHashed64Hex,
  generateCursorChecksum,
  transformToolsToClientSideTools,
  processToolMessages,
  transformCursorToolCallsToOpenAI,
  OPENAI_TO_CURSOR_TOOLS,
  CURSOR_TO_OPENAI_TOOLS
};
