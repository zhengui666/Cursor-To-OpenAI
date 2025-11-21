# Cursor to OpenAI Bridge

An OpenAI-compatible API bridge that enables tool calling with Cursor's AI models, perfect for use with CLI tools like Crush.

## Overview

This bridge converts Cursor Editor's AI chat interface into a fully OpenAI-compatible API with working tool execution. Unlike other bridges, this implementation successfully enables tool calling through a system prompt approach, bypassing Cursor's complex background composer requirements.

## Key Features

- ✅ **Full OpenAI API compatibility** - Works with any OpenAI-compatible client
- ✅ **Working tool calls** - Supports function calling with proper execution
- ✅ **Automatic authentication** - Reads auth tokens from local Cursor storage
- ✅ **Streaming support** - Real-time response streaming
- ✅ **Multiple models** - Access to Claude-3.5-Sonnet, GPT-4, and other Cursor models
- ✅ **CLI tool integration** - Perfect for [Crush CLI](https://github.com/charmbracelet/crush) and similar tools

## Prerequisites

1. **Cursor Editor installed** - Download from [cursor.com](https://www.cursor.com)
2. **Active Cursor account** with available credits
3. **Node.js** (version 14 or higher)

## Configuration

### Environment Variables

项目支持通过 `.env` 文件进行配置。首先复制示例配置文件：

```bash
cp .env.example .env
```

然后编辑 `.env` 文件，配置以下环境变量：

| 变量名 | 说明 | 默认值 | 必填 |
|--------|------|--------|------|
| `PORT` | 服务器监听端口 | `3010` | 否 |
| `CURSOR_CLIENT_VERSION` | Cursor 客户端版本 | `1.1.3` | 否 |
| `CURSOR_TIMEZONE` | 时区配置 | `Asia/Shanghai` | 否 |
| `MORGAN_FORMAT` | 日志格式 (combined/common/dev/short/tiny) | `tiny` | 否 |
| `CURSOR_COOKIE` | Cursor 认证 Cookie（手动认证时使用） | - | 否 |

**配置示例：**

```bash
# .env
PORT=3010
CURSOR_CLIENT_VERSION=1.1.3
CURSOR_TIMEZONE=Asia/Shanghai
MORGAN_FORMAT=tiny
# CURSOR_COOKIE=your_cookie_here  # 仅在自动认证失败时使用
```

> **注意：** 如果不创建 `.env` 文件，项目将使用默认配置值。大多数情况下，默认配置即可正常工作。

## Quick Start

### Installation

```bash
git clone <this-repo>
cd cursor-to-openai
npm install
```

### Automatic Setup (Recommended)

The bridge automatically reads authentication tokens from your local Cursor installation:

```bash
npm start
```

The server will start on `http://localhost:3010` and automatically authenticate using your local Cursor credentials.

### Manual Authentication (Alternative)

If automatic auth fails, you can manually obtain a Cursor cookie:

```bash
npm run login
```

Follow the prompts to get your authentication token, then set it as an environment variable:

```bash
export CURSOR_COOKIE="your_cookie_here"
npm start
```

## Usage

### Using with Crush CLI (Recommended)

[Crush](https://github.com/charmbracelet/crush) is a powerful CLI tool that works perfectly with this bridge:

```bash
# Install Crush
go install github.com/charmbracelet/crush@latest

# Configure Crush to use the bridge
export OPENAI_BASE_URL="http://localhost:3010/v1"
export OPENAI_API_KEY="dummy"  # Not needed with auto-auth

# Start chatting with tool support
crush
```

In Crush, you can now use tools like:
- `bash` - Execute shell commands
- `edit` - Edit files
- `grep` - Search through files
- `glob` - Find files by pattern
- `read` - Read file contents

### Direct API Usage

#### Get Available Models
```bash
curl http://localhost:3010/v1/models
```

#### Chat Completion
```bash
curl -X POST http://localhost:3010/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "claude-3.5-sonnet",
    "messages": [{"role": "user", "content": "Hello!"}],
    "stream": false
  }'
```

#### Tool Calling Example
```bash
curl -X POST http://localhost:3010/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "claude-3.5-sonnet",
    "messages": [{"role": "user", "content": "List files in current directory"}],
    "tools": [
      {
        "type": "function",
        "function": {
          "name": "bash",
          "description": "Execute shell commands",
          "parameters": {
            "type": "object",
            "properties": {
              "command": {"type": "string", "description": "Command to execute"}
            },
            "required": ["command"]
          }
        }
      }
    ],
    "stream": false
  }'
```

### Python Client Example

```python
from openai import OpenAI

# With automatic authentication
client = OpenAI(
    api_key="dummy",  # Not needed with auto-auth
    base_url="http://localhost:3010/v1"
)

# Basic chat
response = client.chat.completions.create(
    model="claude-3.5-sonnet",
    messages=[{"role": "user", "content": "Hello!"}],
    stream=False
)

print(response.choices[0].message.content)

# Tool calling
tools = [
    {
        "type": "function",
        "function": {
            "name": "bash",
            "description": "Execute shell commands",
            "parameters": {
                "type": "object",
                "properties": {
                    "command": {"type": "string", "description": "Command to execute"}
                },
                "required": ["command"]
            }
        }
    }
]

response = client.chat.completions.create(
    model="claude-3.5-sonnet",
    messages=[{"role": "user", "content": "What's the current date?"}],
    tools=tools,
    stream=False
)

# Handle tool calls
if response.choices[0].message.tool_calls:
    for tool_call in response.choices[0].message.tool_calls:
        print(f"Tool: {tool_call.function.name}")
        print(f"Args: {tool_call.function.arguments}")
```

## Available Models

- `claude-3.5-sonnet` - Claude 3.5 Sonnet (recommended)
- `claude-3-haiku` - Claude 3 Haiku (fast)
- `gpt-4o` - GPT-4 Omni
- `gpt-4o-mini` - GPT-4 Omni Mini

Check `/v1/models` endpoint for the full list.

## How It Works

This bridge uses a novel approach to enable tool calling:

1. **System Prompt Injection** - Adds tool calling instructions to system prompts
2. **XML Parsing** - Parses structured tool calls from AI responses using `<tool_call>` tags
3. **OpenAI Conversion** - Converts parsed calls to standard OpenAI tool call format
4. **Automatic Authentication** - Reads Cursor auth tokens from local SQLite storage

The AI is instructed to format tool calls like:
```
<tool_call>
bash
{"command": "ls -la"}
</tool_call>
```

Which gets converted to OpenAI's standard format for compatibility.

## Troubleshooting

### Authentication Issues

If automatic authentication fails:

1. **Check Cursor Installation**: Ensure Cursor is installed and you're logged in
2. **Manual Token**: Use `npm run login` to get a token manually
3. **Token Location**: The bridge looks for tokens in:
   - macOS: `~/Library/Application Support/Cursor/User/globalStorage/storage.vscdb`
   - Linux: `~/.config/Cursor/User/globalStorage/storage.vscdb`  
   - Windows: `%APPDATA%\Cursor\User\globalStorage\storage.vscdb`

### Tool Calls Not Working

1. **Check System Prompts**: Ensure tool instructions are being added
2. **Verify Parsing**: Check console logs for parsing errors
3. **Test Format**: Verify AI responses contain `<tool_call>` tags

### Performance Issues

- Use streaming for better responsiveness: `"stream": true`
- Try different models - `claude-3-haiku` is fastest
- Check Cursor credit limits

## Docker Support

```bash
# Build
docker build -t cursor-to-openai .

# Run with auto-auth (mount Cursor config)
docker run -d --name cursor-to-openai \
  -p 3010:3010 \
  -v ~/.config/Cursor:/root/.config/Cursor:ro \
  cursor-to-openai

# Run with manual auth
docker run -d --name cursor-to-openai \
  -p 3010:3010 \
  -e CURSOR_COOKIE="your_cookie_here" \
  cursor-to-openai
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with Crush CLI
5. Submit a pull request

## License

This project is for educational and research purposes. Please respect Cursor's Terms of Service.

## Acknowledgements

- Based on [cursor-api](https://github.com/zhx47/cursor-api) by zhx47
- Incorporates improvements from [cursor-api](https://github.com/lvguanjun/cursor-api) by lvguanjun
- Tool calling approach inspired by system prompt techniques
- Built for compatibility with [Crush CLI](https://github.com/charmbracelet/crush)
