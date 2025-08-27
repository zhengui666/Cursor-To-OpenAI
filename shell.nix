{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_20
    just
    curl
    jq
    python3
    bash
  ];

  shellHook = ''
    echo "Cursor-To-OpenAI Development Environment"
    echo "Node.js $(node --version)"
    echo "npm $(npm --version)"
    
    # Install npm dependencies if needed
    if [ ! -d "node_modules" ]; then
      echo "Installing npm dependencies..."
      npm install
    fi
    
    echo "Ready! Use 'just' to see available commands"
  '';
}