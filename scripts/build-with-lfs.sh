#!/bin/bash
set -e

echo "Installing Git LFS in Vercel build environment..."

# Download and install git-lfs binary for Linux
curl -L https://github.com/git-lfs/git-lfs/releases/download/v3.4.1/git-lfs-linux-amd64-v3.4.1.tar.gz | tar xz
chmod +x git-lfs
export PATH="$PWD:$PATH"

# Install git-lfs
./git-lfs install

# Pull LFS files
./git-lfs pull

echo "Git LFS files downloaded successfully!"

# Run the build
npm run build

