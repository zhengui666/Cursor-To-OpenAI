# OpenAI Tool Seed Prompt for Crush CLI

This document provides the OpenAI tool definitions for use with the Cursor-to-OpenAI bridge and Crush CLI. These tools enable powerful file manipulation, code editing, and system interaction capabilities.

**✅ All tools listed below are verified as implemented in Crush CLI v1.0+**

## Available Tools (12 Total)

### 1. bash - Shell Command Execution
Execute shell commands in a persistent bash session with security controls.

```json
{
  "type": "function",
  "function": {
    "name": "bash",
    "description": "Executes a given bash command in a persistent shell session with optional timeout, ensuring proper handling and security measures. Use for system operations, file operations, running scripts, installing packages, etc.",
    "parameters": {
      "type": "object",
      "properties": {
        "command": {
          "type": "string",
          "description": "The bash command to execute"
        },
        "timeout": {
          "type": "number",
          "description": "Optional timeout in milliseconds (default: 60000, max: 600000)"
        }
      },
      "required": ["command"]
    }
  }
}
```

### 2. ls - Directory Listing
Display directory contents in a tree structure for project exploration.

```json
{
  "type": "function",
  "function": {
    "name": "ls",
    "description": "Directory listing tool that shows files and subdirectories in a tree structure, helping you explore and understand the project organization. Use when you need to explore directory structure or understand project layout.",
    "parameters": {
      "type": "object",
      "properties": {
        "path": {
          "type": "string",
          "description": "The path to the directory to list (defaults to current working directory)"
        },
        "ignore": {
          "type": "array",
          "description": "List of glob patterns to ignore",
          "items": {
            "type": "string"
          }
        }
      },
      "required": ["path"]
    }
  }
}
```

### 3. view - File Content Viewer (replaces "read"/"cat")
Read and display file contents with syntax highlighting and optional range selection.

```json
{
  "type": "function", 
  "function": {
    "name": "view",
    "description": "View file contents with syntax highlighting. Supports reading specific line ranges for large files. Use to examine code, configuration files, or any text content. This is Crush's equivalent to 'read' or 'cat' commands.",
    "parameters": {
      "type": "object",
      "properties": {
        "file_path": {
          "type": "string",
          "description": "The path to the file to view"
        },
        "offset": {
          "type": "number",
          "description": "Optional line number to start reading from"
        },
        "limit": {
          "type": "number", 
          "description": "Optional number of lines to read"
        }
      },
      "required": ["file_path"]
    }
  }
}
```

### 4. edit - File Editor
Edit files by replacing text, creating new files, or deleting content.

```json
{
  "type": "function",
  "function": {
    "name": "edit",
    "description": "Edits files by replacing text, creating new files, or deleting content. Use for precise code modifications. For moving/renaming files, use bash with 'mv' command instead.",
    "parameters": {
      "type": "object",
      "properties": {
        "file_path": {
          "type": "string",
          "description": "The path to the file to edit"
        },
        "old_string": {
          "type": "string",
          "description": "The text to replace (empty string for new file creation)"
        },
        "new_string": {
          "type": "string", 
          "description": "The replacement text (empty string to delete)"
        },
        "replace_all": {
          "type": "boolean",
          "description": "Replace all occurrences of old_string (default: false)"
        }
      },
      "required": ["file_path", "old_string", "new_string"]
    }
  }
}
```

### 5. multiedit - Multiple File Edits
Perform multiple edit operations on a single file in one atomic operation.

```json
{
  "type": "function",
  "function": {
    "name": "multiedit", 
    "description": "Perform multiple edit operations on a single file atomically. More efficient than multiple single edits. Use for complex file modifications requiring multiple changes.",
    "parameters": {
      "type": "object",
      "properties": {
        "file_path": {
          "type": "string",
          "description": "The path to the file to edit"
        },
        "edits": {
          "type": "array",
          "description": "Array of edit operations to perform sequentially",
          "items": {
            "type": "object",
            "properties": {
              "old_string": {
                "type": "string",
                "description": "Text to replace"
              },
              "new_string": {
                "type": "string", 
                "description": "Replacement text"
              },
              "replace_all": {
                "type": "boolean",
                "description": "Replace all occurrences (default: false)"
              }
            },
            "required": ["old_string", "new_string"]
          }
        }
      },
      "required": ["file_path", "edits"]
    }
  }
}
```

### 6. write - File Writer
Write complete file content, creating new files or overwriting existing ones.

```json
{
  "type": "function",
  "function": {
    "name": "write",
    "description": "Write complete file content, creating new files or overwriting existing ones. Use for creating new files or completely rewriting existing files.",
    "parameters": {
      "type": "object",
      "properties": {
        "file_path": {
          "type": "string",
          "description": "The path to the file to write"
        },
        "content": {
          "type": "string",
          "description": "The complete file content to write"
        }
      },
      "required": ["file_path", "content"]
    }
  }
}
```

### 7. grep - Text Search
Search for patterns within files using powerful regular expressions.

```json
{
  "type": "function",
  "function": {
    "name": "grep",
    "description": "Search for text patterns within files using regular expressions. Supports various filtering options and output modes for finding specific content in codebases.",
    "parameters": {
      "type": "object",
      "properties": {
        "pattern": {
          "type": "string",
          "description": "The regular expression pattern to search for"
        },
        "path": {
          "type": "string", 
          "description": "File or directory to search in (defaults to current directory)"
        },
        "file_pattern": {
          "type": "string",
          "description": "Glob pattern to filter files (e.g., '*.js', '*.{ts,tsx}')"
        },
        "ignore_case": {
          "type": "boolean",
          "description": "Case insensitive search (default: false)"
        },
        "context": {
          "type": "number",
          "description": "Number of lines to show before and after each match"
        }
      },
      "required": ["pattern"]
    }
  }
}
```

### 8. glob - File Pattern Search
Find files by name patterns using glob syntax.

```json
{
  "type": "function",
  "function": {
    "name": "glob",
    "description": "Find files by name patterns using glob syntax. Efficient for locating specific files or file types across directory trees.",
    "parameters": {
      "type": "object",
      "properties": {
        "pattern": {
          "type": "string", 
          "description": "Glob pattern to match files (e.g., '**/*.js', 'src/**/*.ts')"
        },
        "path": {
          "type": "string",
          "description": "Directory to search in (defaults to current directory)"
        }
      },
      "required": ["pattern"]
    }
  }
}
```

### 9. fetch - Web Content Retrieval
Fetch content from URLs with support for various web resources.

```json
{
  "type": "function",
  "function": {
    "name": "fetch",
    "description": "Fetch content from URLs including web pages, APIs, and remote files. Useful for downloading resources or accessing web-based documentation.",
    "parameters": {
      "type": "object",
      "properties": {
        "url": {
          "type": "string",
          "description": "The URL to fetch content from"
        },
        "timeout": {
          "type": "number",
          "description": "Request timeout in milliseconds (default: 30000)"
        }
      },
      "required": ["url"]
    }
  }
}
```

### 10. download - File Download
Download files from remote URLs to local filesystem.

```json
{
  "type": "function",
  "function": {
    "name": "download",
    "description": "Download files from remote URLs to local filesystem. Use for retrieving remote resources, packages, or documentation files.",
    "parameters": {
      "type": "object",
      "properties": {
        "url": {
          "type": "string",
          "description": "The URL to download from"
        },
        "file_path": {
          "type": "string",
          "description": "Local path where the file should be saved"
        },
        "timeout": {
          "type": "number",
          "description": "Download timeout in milliseconds (default: 120000)"
        }
      },
      "required": ["url", "file_path"]
    }
  }
}
```

### 11. diagnostics - Code Analysis (LSP Required)
Get diagnostics information from language servers for code analysis.

```json
{
  "type": "function",
  "function": {
    "name": "diagnostics",
    "description": "Get diagnostics information (errors, warnings, hints) from language servers for code analysis and debugging. Only available when LSP clients are configured in Crush.",
    "parameters": {
      "type": "object",
      "properties": {
        "file_path": {
          "type": "string",
          "description": "Path to the file to get diagnostics for"
        }
      },
      "required": ["file_path"]
    }
  }
}
```

### 12. sourcegraph - Code Search
Search code using Sourcegraph's powerful search capabilities.

```json
{
  "type": "function",
  "function": {
    "name": "sourcegraph",
    "description": "Search code using Sourcegraph's search API. Useful for finding code examples, API usage, or understanding large codebases.",
    "parameters": {
      "type": "object",
      "properties": {
        "query": {
          "type": "string",
          "description": "Sourcegraph search query"
        },
        "repo": {
          "type": "string",
          "description": "Optional repository to search within"
        }
      },
      "required": ["query"]
    }
  }
}
```

## Usage Examples

### Basic File Operations
```javascript
// List directory contents
{"name": "ls", "arguments": {"path": "."}}

// View a file
{"name": "view", "arguments": {"file_path": "package.json"}}

// Edit a file
{"name": "edit", "arguments": {"file_path": "README.md", "old_string": "# Old Title", "new_string": "# New Title"}}
```

### Search Operations
```javascript
// Search for text in files
{"name": "grep", "arguments": {"pattern": "TODO", "file_pattern": "*.js"}}

// Find files by pattern
{"name": "glob", "arguments": {"pattern": "**/*.test.js"}}
```

### System Operations
```javascript
// Run shell commands
{"name": "bash", "arguments": {"command": "npm install express"}}

// Download a file
{"name": "download", "arguments": {"url": "https://example.com/file.zip", "file_path": "./downloads/file.zip"}}
```

## Tool Call Format

When using these tools with the Cursor-to-OpenAI bridge, format tool calls as:

```
<tool_call>
tool_name
{"param": "value"}
</tool_call>
```

Example:
```
<tool_call>
bash
{"command": "ls -la"}
</tool_call>
```

## Tool Implementation Status

All 12 tools documented above are **fully implemented and available** in Crush CLI:

- **Core File Operations**: `bash`, `ls`, `view`, `edit`, `multiedit`, `write`
- **Search & Discovery**: `grep`, `glob`, `sourcegraph`  
- **Network Operations**: `fetch`, `download`
- **Development Tools**: `diagnostics` (when LSP is configured)
- **Extensions**: MCP (Model Context Protocol) tools are also supported

## Best Practices

1. **Use ls first** - Explore directory structure before making changes
2. **View before edit** - Always examine files before modifying them (use `view`, not `read`)
3. **Grep for context** - Search for patterns to understand codebase structure
4. **Use multiedit for complex changes** - More efficient than multiple single edits
5. **Bash for system operations** - Use for git, npm, package management
6. **Fetch for remote resources** - Get documentation or API responses
7. **Diagnostics for debugging** - Check for errors in code files (requires LSP setup)

## Notes

- **No separate `read` or `cat` tools**: Use `view` instead for file reading
- **Diagnostics requires LSP**: Only available when language servers are configured
- **MCP extensions**: Crush supports additional tools via Model Context Protocol
- **Permission system**: Some tools may require user permission for security-sensitive operations

These tools provide comprehensive file system, code editing, and system interaction capabilities when used with the Cursor-to-OpenAI bridge and Crush CLI.