#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script converts large JPG/PNG images to WebP format for better performance.
 * It also creates multiple sizes of each image for responsive loading.
 * 
 * Usage:
 * 1. Install dependencies: npm install sharp glob
 * 2. Run: node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const sharp = require('sharp');

// Configuration
const config = {
  // Source directories to scan for images
  sourceDirs: [
    'public', 
    'public/Insights', 
    'public/Blog Images', 
    'public/Engagement_Models', 
    'public/About_us', 
    'public/solutions', 
    'public/assets', // Common assets folder
    'src/assets' // In case some are in src
  ],
  
  // Image extensions to process
  extensions: ['.jpg', '.jpeg', '.png'],
  
  // Size thresholds for optimization (in bytes)
  sizeThreshold: 100 * 1024, // 100KB
  
  // Output quality for WebP (0-100)
  webpQuality: 80,
  
  // Responsive sizes to generate
  responsiveSizes: [
    { name: 'small', width: 640 },
    { name: 'medium', width: 1280 },
    { name: 'large', width: 1920 }
  ],
  
  // Skip files with these substrings in their paths
  skipPaths: ['node_modules', '.git', 'dist']
};

// Create output directories if they don't exist
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Process a single image
async function processImage(imagePath) {
  try {
    const stats = fs.statSync(imagePath);
    
    // Skip small files
    if (stats.size < config.sizeThreshold) {
      console.log(`Skipping small image: ${imagePath}`);
      return;
    }
    
    const parsedPath = path.parse(imagePath);
    const outputDir = path.join(parsedPath.dir, 'optimized');
    ensureDirectoryExists(outputDir);
    
    // Create WebP version
    const webpPath = path.join(outputDir, `${parsedPath.name}.webp`);
    await sharp(imagePath)
      .webp({ quality: config.webpQuality })
      .toFile(webpPath);
    
    console.log(`Created WebP: ${webpPath}`);
    
    // Create responsive sizes
    for (const size of config.responsiveSizes) {
      const responsivePath = path.join(
        outputDir, 
        `${parsedPath.name}-${size.name}.webp`
      );
      
      await sharp(imagePath)
        .resize({ width: size.width, withoutEnlargement: true })
        .webp({ quality: config.webpQuality })
        .toFile(responsivePath);
      
      console.log(`Created ${size.name}: ${responsivePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${imagePath}:`, error);
  }
}

// Find and process all images
async function main() {
  try {
    console.log('Starting image optimization...');
    
    for (const sourceDir of config.sourceDirs) {
      // Skip if directory doesn't exist
      if (!fs.existsSync(sourceDir)) {
        console.log(`Directory not found: ${sourceDir}`);
        continue;
      }
      
      // Find all images with specified extensions
      for (const ext of config.extensions) {
        const pattern = path.join(sourceDir, `**/*${ext}`);
        const files = glob.sync(pattern);
        
        console.log(`Found ${files.length} ${ext} files in ${sourceDir}`);
        
        // Process each file
        for (const file of files) {
          // Skip files in excluded paths
          if (config.skipPaths.some(skipPath => file.includes(skipPath))) {
            console.log(`Skipping excluded path: ${file}`);
            continue;
          }
          
          await processImage(file);
        }
      }
    }
    
    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error during optimization:', error);
    process.exit(1);
  }
}

main(); 