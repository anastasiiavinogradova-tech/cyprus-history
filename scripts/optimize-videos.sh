#!/bin/bash

# Video Optimization Script
# This script re-encodes videos for optimal web streaming
# 
# Prerequisites: Install ffmpeg
#   macOS: brew install ffmpeg
#   Ubuntu: sudo apt install ffmpeg
#   Windows: Download from https://ffmpeg.org/

set -e

echo "Video Optimization Script"
echo "========================="
echo ""

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ ffmpeg is not installed!"
    echo ""
    echo "To install:"
    echo "  macOS:   brew install ffmpeg"
    echo "  Ubuntu:  sudo apt install ffmpeg"
    echo "  Windows: Download from https://ffmpeg.org/"
    exit 1
fi

echo "✓ ffmpeg found"
echo ""

# Create backup directory
BACKUP_DIR="public/videos/originals"
mkdir -p "$BACKUP_DIR"

# Video directory
VIDEO_DIR="public/videos"

# Find all MP4 files
videos=$(find "$VIDEO_DIR" -maxdepth 1 -name "*.mp4" -type f)

if [ -z "$videos" ]; then
    echo "No videos found in $VIDEO_DIR"
    exit 0
fi

echo "Found videos to optimize:"
echo "$videos"
echo ""

for video in $videos; do
    filename=$(basename "$video")
    output="${VIDEO_DIR}/${filename%.mp4}_optimized.mp4"
    
    echo "Optimizing: $filename"
    echo "  Current size: $(du -h "$video" | cut -f1)"
    
    # Move original to backup
    if [ ! -f "${BACKUP_DIR}/${filename}" ]; then
        echo "  Backing up original..."
        cp "$video" "$BACKUP_DIR/"
    fi
    
    # Optimize video
    # - libx264: H.264 codec (widely supported)
    # - preset slow: Better compression (slower encoding)
    # - crf 22: Quality (18-28 range, 22 is good balance)
    # - movflags +faststart: Enable streaming (moov atom at start)
    # - scale: Ensure even dimensions (required by some codecs)
    # - aac: Audio codec
    # - b:a 128k: Audio bitrate
    
    ffmpeg -i "$video" \
        -c:v libx264 \
        -preset slow \
        -crf 22 \
        -movflags +faststart \
        -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
        -c:a aac \
        -b:a 128k \
        -y \
        "$output"
    
    echo "  New size: $(du -h "$output" | cut -f1)"
    
    # Replace original with optimized
    mv "$output" "$video"
    
    echo "  ✓ Optimized successfully!"
    echo ""
done

echo "========================="
echo "✓ All videos optimized!"
echo ""
echo "Originals backed up to: $BACKUP_DIR"
echo ""
echo "Next steps:"
echo "1. Test the videos on your site"
echo "2. Commit and push the changes"
echo "3. Deploy to Vercel"

