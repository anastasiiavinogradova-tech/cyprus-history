# Why Git LFS Doesn't Work on Vercel (and How to Fix It)

## The Problem

When you visit: https://cyprus-history.vercel.app/videos/Древняя%20Греция%20за%2018%20минут%20(1).mp4

You get this content:
```
version https://git-lfs.github.com/spec/v1
oid sha256:c2fff4e1944c6586486415eb838dad8672742cefb501974779949e110174899f
size 46562831
```

This is a **Git LFS pointer file**, not the actual video!

## Why This Happens

1. **Vercel clones your Git repo** during deployment
2. **Git LFS is not installed** in Vercel's build environment
3. Without Git LFS, Git treats the pointer files as regular files
4. Your `git lfs pull` command in `vercel.json` **fails silently** (because `git-lfs` binary doesn't exist)
5. The pointer files get deployed to production

## The Solution

We need to **install Git LFS** during the Vercel build process:

### What We Did

1. **Created `scripts/build-with-lfs.sh`** - Downloads and installs Git LFS binary
2. **Updated `vercel.json`** - Changed build command to use our script

### How It Works

```bash
# Download Git LFS binary for Linux (Vercel uses Linux)
curl -L https://github.com/git-lfs/git-lfs/releases/download/v3.4.1/git-lfs-linux-amd64-v3.4.1.tar.gz | tar xz

# Make it executable and add to PATH
chmod +x git-lfs
export PATH="$PWD:$PATH"

# Initialize Git LFS
./git-lfs install

# Pull the actual video files
./git-lfs pull

# Build the app
npm run build
```

## Next Steps

1. **Commit these changes:**
```bash
git add scripts/build-with-lfs.sh vercel.json
git commit -m "fix: install Git LFS during Vercel build"
git push
```

2. **Vercel will auto-deploy** and now properly download your videos from GitHub LFS

3. **Verify it works** by checking the video URL again

## Alternative: If This Doesn't Work

If for any reason this doesn't work (e.g., GitHub LFS bandwidth limits, auth issues), you have two fallback options:

### Option A: Commit videos directly (easiest)
```bash
git lfs untrack "*.mp4"
git rm --cached public/videos/*.mp4
git add public/videos/*.mp4
git commit -m "chore: move videos from LFS to direct commits"
git push
```

### Option B: Use Vercel Blob Storage
- Upload videos to Vercel Blob
- Update video URLs in your code
- More scalable for production

## Why Doesn't Vercel Include Git LFS?

- **Size/cost**: Most projects don't need it
- **Build speed**: Faster without downloading large files
- **Philosophy**: Vercel recommends using blob storage instead

But now you know how to make it work! 🎉

