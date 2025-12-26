#!/bin/bash

# Script to migrate videos from Git LFS to direct commits
# WARNING: This will increase your repository size

cd "$(dirname "$0")/.."

echo "Removing videos from Git LFS..."

# Remove LFS tracking
git lfs uninstall

# Remove .gitattributes for mp4 files
if [ -f .gitattributes ]; then
  sed -i.bak '/\.mp4/d' .gitattributes
  rm .gitattributes.bak
fi

# Fetch the actual files from LFS
git lfs pull

# Re-add the video files
echo "Re-adding video files to git..."
git rm --cached public/videos/*.mp4
git add public/videos/*.mp4

echo "Done! Now commit and push:"
echo "git commit -m 'Move videos from LFS to direct commits'"
echo "git push"

