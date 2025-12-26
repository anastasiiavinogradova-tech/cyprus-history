# Making Git LFS Work on Vercel

## The Problem
- Vercel build containers don't have `git-lfs` binary installed
- You can't use `apt-get` to install it (no root access)
- Your current `git lfs pull` command fails silently

## Solution: Use a Build Script

### Step 1: Install Git LFS CLI via npm

```bash
npm install --save-dev git-lfs-cli
```

### Step 2: Create a build script

Create `scripts/build-with-lfs.sh`:

```bash
#!/bin/bash
set -e

# Install git-lfs
npx git-lfs-cli install

# Pull LFS files
npx git-lfs-cli pull

# Build the project
npm run build
```

### Step 3: Update vercel.json

```json
{
  "buildCommand": "chmod +x scripts/build-with-lfs.sh && ./scripts/build-with-lfs.sh",
  "framework": "nextjs",
  "installCommand": "npm install"
}
```

## ⚠️ Authentication Issue

Even with this, you'll need to provide Git LFS credentials to Vercel via environment variables:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add:
   - `GIT_LFS_SKIP_SMUDGE=0`
   - Potentially your Git credentials if LFS server requires them

## Why This Is Still Complicated

- **Authentication**: Private LFS servers need credentials
- **Build time**: Downloading large files slows builds
- **Cost**: Some LFS hosts charge for bandwidth

## My Recommendation

**Just commit the videos directly** - your videos are only ~140MB total, which is reasonable for a Git repo. Modern Git handles this fine, and it's much simpler than dealing with LFS on Vercel.

OR

**Use Vercel Blob Storage** - designed exactly for this use case, with free tier up to 500MB.

