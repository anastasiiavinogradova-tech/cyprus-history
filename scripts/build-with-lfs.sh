#!/bin/bash
set -e

echo "Installing Git LFS in Vercel build environment..."

# Create a temporary directory
mkdir -p .git-lfs-temp
cd .git-lfs-temp

# Download git-lfs binary for Linux
echo "Downloading Git LFS..."
curl -L https://github.com/git-lfs/git-lfs/releases/download/v3.4.1/git-lfs-linux-amd64-v3.4.1.tar.gz -o git-lfs.tar.gz

# Extract
echo "Extracting..."
tar -xzf git-lfs.tar.gz

# Find and copy the binary
echo "Setting up Git LFS..."
chmod +x git-lfs-3.4.1/git-lfs
cp git-lfs-3.4.1/git-lfs ../git-lfs

# Go back to project root
cd ..

# Add to PATH
export PATH="$PWD:$PATH"

# Install git-lfs
echo "Initializing Git LFS..."
./git-lfs install

# Pull LFS files
echo "Downloading LFS files..."
./git-lfs pull

echo "✅ Git LFS files downloaded successfully!"

# Clean up
rm -rf .git-lfs-temp

# Run the build
echo "Building Next.js app..."
npm run build

