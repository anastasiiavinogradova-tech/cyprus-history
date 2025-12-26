# Video Performance Optimization Guide

## Issues Identified

1. **No autoplay** - Videos require manual play button click
2. **Slow initial loading** - Large MP4 files served through Next.js static file handler

## Solutions Implemented

### 1. OptimizedVideoPlayer Component ✅

Created `components/OptimizedVideoPlayer.tsx` with:
- **Autoplay on scroll** - Videos start when user scrolls to them
- **Smart preloading** - Only loads metadata initially
- **Mobile support** - playsInline attribute
- **Browser-friendly** - Handles autoplay restrictions gracefully

### 2. Video Serving Optimization

For better performance, you have several options:

#### Option A: Use Vercel's CDN (Current Setup)
Videos are served through Vercel's edge network, which is good but not optimal for streaming.

#### Option B: Add Proper Video Headers (Recommended)
Create a custom API route for video streaming with proper range request support.

#### Option C: Use Vercel Blob Storage (Best for Production)
- Optimized for large files
- Built-in CDN
- Range request support
- Better performance

## Performance Optimizations

### Why videos load slowly:

1. **Large file size** - 46MB+ per video
2. **No streaming optimization** - Entire file needs to buffer
3. **Static file serving** - Not optimized for video streaming

### Solutions:

1. **Compress videos** - Use H.264 with web-optimized settings
2. **Use streaming** - Enable HTTP range requests
3. **Add CDN** - Use dedicated video hosting

## Quick Wins

### 1. Optimize Video Encoding

```bash
# Use ffmpeg to create web-optimized videos
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 22 \
  -movflags +faststart -c:a aac -b:a 128k output.mp4
```

The `-movflags +faststart` flag moves the moov atom to the beginning of the file, allowing playback to start before the entire file is downloaded.

### 2. Compress Videos

Your current videos:
- `Древняя Греция за 18 минут (1).mp4` - 46MB
- Could be compressed to ~15-20MB without quality loss

### 3. Use Lower Resolution for Previews

Serve 720p for initial preview, offer 1080p as an option.

## Implementation Steps

### Step 1: Update video components to use OptimizedVideoPlayer

Replace current `<video>` tags with the new component.

### Step 2: Re-encode videos with web optimization

Use the ffmpeg command above to optimize all videos.

### Step 3: Consider Vercel Blob Storage

For best results, migrate to Vercel Blob Storage which handles video streaming natively.

## Expected Results

- **Faster initial load** - Videos start playing within 1-2 seconds
- **Autoplay on scroll** - Better user engagement
- **Smoother playback** - Better buffering and streaming

