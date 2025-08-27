#!/usr/bin/env just --justfile

# Default recipe - show available commands
default:
    @just --list

# Install npm dependencies
install:
    npm install

# Start the Cursor-To-OpenAI bridge server
start:
    npm start

# Start server in development mode with auto-restart
dev:
    npm run dev || npm start

# Run the login tool to get Cursor cookie
login:
    npm run login

# Test the server with a simple request
test-health:
    curl -s "http://localhost:3010/v1/models" \
        -H "Authorization: Bearer $(python3 ../cursor_auth_reader.py | grep 'bearer_token = ' | cut -d"'" -f2)" \
        | jq '.data | length' && echo " models available"

# Test chat completion with GPT-4o
test-chat-gpt4o prompt="Hello! Please respond with exactly: Bridge working":
    #!/usr/bin/env bash
    TOKEN=$(python3 ../cursor_auth_reader.py | grep 'bearer_token = ' | cut -d"'" -f2)
    curl -X POST "http://localhost:3010/v1/chat/completions" \
        -H "Authorization: Bearer $TOKEN" \
        -H "Content-Type: application/json" \
        -d '{
            "model": "gpt-4o",
            "messages": [{"role": "user", "content": "{{prompt}}"}],
            "stream": false
        }' | jq -r '.choices[0].message.content'

# Test chat completion with Claude 4 Sonnet  
test-chat-claude prompt="Hello! Please respond with exactly: Claude bridge working":
    #!/usr/bin/env bash
    TOKEN=$(python3 ../cursor_auth_reader.py | grep 'bearer_token = ' | cut -d"'" -f2)
    curl -X POST "http://localhost:3010/v1/chat/completions" \
        -H "Authorization: Bearer $TOKEN" \
        -H "Content-Type: application/json" \
        -d '{
            "model": "claude-4-sonnet",
            "messages": [{"role": "user", "content": "{{prompt}}"}],
            "stream": false
        }' | jq -r '.choices[0].message.content'

# Test streaming chat completion
test-stream prompt="Count from 1 to 3":
    #!/usr/bin/env bash
    TOKEN=$(python3 ../cursor_auth_reader.py | grep 'bearer_token = ' | cut -d"'" -f2)
    curl -X POST "http://localhost:3010/v1/chat/completions" \
        -H "Authorization: Bearer $TOKEN" \
        -H "Content-Type: application/json" \
        -d '{
            "model": "gpt-4o",
            "messages": [{"role": "user", "content": "{{prompt}}"}],
            "stream": true
        }'

# Show server logs (if running in background)
logs:
    @echo "Server logs:"
    @ps aux | grep "node src/app.js" | grep -v grep || echo "Server not running"

# Kill any running server instances
kill:
    @pkill -f "node src/app.js" || echo "No server processes found"

# Clean install (remove node_modules and reinstall)
clean:
    rm -rf node_modules package-lock.json
    npm install

# Show current Cursor authentication status
auth-status:
    python3 ../cursor_auth_reader.py

# Run all tests
test: test-health test-chat-gpt4o test-chat-claude
    @echo "All tests completed!"

# Setup development environment
setup: install
    @echo "Development environment setup complete!"
    @echo "Run 'just start' to start the server"
    @echo "Run 'just test' to run tests"