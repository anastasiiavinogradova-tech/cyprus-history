# Video Hosting Solutions for Vercel Deployment

## Problem
Vercel doesn't support Git LFS out of the box, so videos tracked by LFS are served as pointer files (plain text) instead of actual video content.

## Solutions

### ⭐ Option 1: Quick Fix - Remove from Git LFS (Recommended for now)

Since your videos are relatively small (~46MB), you can commit them directly:

```bash
cd cyprus-history

# Pull the actual video files from LFS
git lfs pull

# Remove LFS tracking for mp4 files
git lfs untrack "*.mp4"

# Remove the LFS filter from .gitattributes
# Edit .gitattributes and remove: *.mp4 filter=lfs diff=lfs merge=lfs -text

# Re-add videos to git (this time without LFS)
git rm --cached public/videos/*.mp4
git add public/videos/*.mp4

# Commit and push
git commit -m "chore: migrate videos from LFS to direct commits"
git push
```

**Then redeploy on Vercel** (it will trigger automatically with the push, or manually in Vercel dashboard)

---

### 🚀 Option 2: Use Vercel Blob Storage (Best Long-term Solution)

1. **Install dependencies:**
```bash
npm install @vercel/blob
```

2. **Upload videos using the script:**
```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# Login and link project
vercel login
vercel link

# Run the upload script
node scripts/upload-videos-to-blob.js
```

3. **Update your code to use blob URLs:**

Replace `/videos/filename.mp4` with the blob URLs returned by the upload script.

Example in `app/mvp-concept/page.tsx`:
```tsx
<source src="https://your-blob-url.vercel-storage.com/video.mp4" type="video/mp4" />
```

---

### Option 3: Use External CDN

Upload videos to:
- **Cloudflare R2** (free tier available)
- **AWS S3** + CloudFront
- **Bunny CDN**
- **YouTube** (for public videos)

---

## Recommendation

**For immediate deployment:** Use Option 1 (remove from LFS)
**For production:** Use Option 2 (Vercel Blob) or Option 3 (External CDN)

## Current Videos in Project

1. `3 Наказания Для Жены В Средневековье!.mp4`
2. `Древняя Греция за 18 минут (1).mp4`
3. `🌙 ЛЕКЦИЯ ДЛЯ СНА_ Боги и мифы Древней Греции (1).mp4`

Total size: ~140MB (all three videos)

## Files to Update After Migration

If switching to external hosting, update video paths in:
- `app/mvp-concept/page.tsx` (lines 578, 626, 672)

