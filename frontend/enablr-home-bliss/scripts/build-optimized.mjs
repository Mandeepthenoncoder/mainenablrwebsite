/**
 * Build Optimized Script
 * 
 * This script runs all optimization tasks before the production build:
 * 1. Optimizes large images
 * 2. Optimizes all images in public folder
 * 3. Runs the production build with Vite
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Utility function to run a command and log output
function runCommand(command, description) {
  console.log(`\n🚀 ${description}...\n`);
  try {
    execSync(command, { stdio: 'inherit' });
    console.log(`\n✅ ${description} completed successfully\n`);
    return true;
  } catch (error) {
    console.error(`\n❌ Error during ${description}:`);
    console.error(error.message);
    return false;
  }
}

// Create WebP version of image if it doesn't exist
async function ensureWebpVersion(filePath) {
  // Import sharp dynamically
  const sharp = (await import('sharp')).default;
  const parsedPath = path.parse(filePath);
  const webpPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);
  
  // Skip if WebP already exists
  if (fs.existsSync(webpPath)) {
    return;
  }
  
  try {
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(webpPath);
    console.log(`✓ Created: ${webpPath}`);
  } catch (error) {
    console.error(`Error creating WebP for ${filePath}:`, error);
  }
}

// Find all large images and create WebP versions
async function createWebpVersions() {
  console.log('\n🔍 Finding large images and creating WebP versions...\n');
  
  const publicDir = path.join(__dirname, '..', 'public');
  const imageExtensions = ['.jpg', '.jpeg', '.png'];
  const fileSizeThreshold = 500 * 1024; // 500KB
  
  // Get all files in public directory recursively
  function getAllFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        getAllFiles(filePath, fileList);
      } else if (
        imageExtensions.includes(path.extname(file).toLowerCase()) && 
        stat.size > fileSizeThreshold
      ) {
        fileList.push(filePath);
      }
    });
    
    return fileList;
  }
  
  const largeImages = getAllFiles(publicDir);
  console.log(`Found ${largeImages.length} large images`);
  
  // Process each large image
  for (const imagePath of largeImages) {
    await ensureWebpVersion(imagePath);
  }
}

async function main() {
  console.log('🔥 Starting optimized build process');
  
  // Make sure sharp is installed
  try {
    await import('sharp');
  } catch (e) {
    console.log('Installing sharp package...');
    runCommand('npm install --save-dev sharp', 'Installing dependencies');
  }
  
  // Step 1: Create WebP versions of all large images
  await createWebpVersions();
  
  // Step 4: Run the production build
  runCommand('npm run build', 'Running production build');
  
  console.log('\n✨ Optimized build completed successfully!\n');
}

main().catch(error => {
  console.error('Error during optimized build:', error);
  process.exit(1);
}); 