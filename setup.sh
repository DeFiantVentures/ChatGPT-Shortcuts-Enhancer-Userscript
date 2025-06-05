#!/bin/bash

# Setup Git authentication using environment token
git config --global user.name "Codex Automation"
git config --global user.email "codex@defiantventures.io"
git config --global credential.helper store

# Clone the private repo using token
git clone https://${GITHUB_TOKEN}@github.com/DeFiantVentures/ChatGPT-Shortcuts-Enhancer-Userscript.git
cd ChatGPT-Shortcuts-Enhancer-Userscript

# Create commit helper script
cat <<'EOF' > commit-and-push.sh
#!/bin/bash
git add .
msg=${1:-"Codex automated update"}
git commit -m "$msg"
git push origin main
EOF
chmod +x commit-and-push.sh

# Mark setup complete
echo "✅ Codex workspace initialized successfully."
