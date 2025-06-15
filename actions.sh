#!/bin/bash

git add .
echo "✓ Files staged"
echo "Enter your commit message (or press Enter for 'An update'):"
read commit_message
if [ -z "$commit_message" ]; then
  commit_message="An update"
fi
git commit -m "$commit_message"
echo "✓ Commit successful with message: \"$commit_message\""
git push -u origin main

sudo systemctl restart website 
