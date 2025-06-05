#!/bin/bash
git add .
msg=${1:-"Codex automated update"}
git commit -m "$msg"
git push origin main
