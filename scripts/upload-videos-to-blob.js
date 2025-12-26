/**
 * Script to upload videos to Vercel Blob Storage
 * 
 * Prerequisites:
 * 1. Install Vercel CLI: npm i -g vercel
 * 2. Login to Vercel: vercel login
 * 3. Link your project: vercel link
 * 4. Install @vercel/blob: npm install @vercel/blob
 * 
 * Run: node scripts/upload-videos-to-blob.js
 */

const { put } = require('@vercel/blob');
const fs = require('fs');
const path = require('path');

const videosDir = path.join(__dirname, '../public/videos');

async function uploadVideos() {
  const files = fs.readdirSync(videosDir);
  const videoFiles = files.filter(f => f.endsWith('.mp4'));

  console.log(`Found ${videoFiles.length} videos to upload...`);

  for (const file of videoFiles) {
    const filePath = path.join(videosDir, file);
    const fileBuffer = fs.readFileSync(filePath);
    
    console.log(`Uploading ${file}...`);
    
    const blob = await put(file, fileBuffer, {
      access: 'public',
      addRandomSuffix: false,
    });

    console.log(`✓ Uploaded: ${blob.url}`);
    console.log(`  Old path: /videos/${file}`);
    console.log(`  New URL: ${blob.url}\n`);
  }
}

uploadVideos().catch(console.error);

