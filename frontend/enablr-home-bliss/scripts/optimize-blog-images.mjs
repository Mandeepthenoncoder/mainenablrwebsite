#!/usr/bin/env node

/**
 * Blog Image Optimization Script
 * 
 * This script is specifically designed to optimize large blog images that are impacting site performance.
 * It creates highly compressed WebP versions with responsive variants.
 * 
 * Usage:
 * 1. Make sure you have Sharp installed: npm install sharp
 * 2. Run: node scripts/optimize-blog-images.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// Configuration
const config = {
  // Source directory for blog images
  sourceDir: path.join(ROOT_DIR, 'public', 'images', 'blog'),
  
  // Image extensions to process
  extensions: ['.jpg', '.jpeg', '.png'],
  
  // No size threshold - process all blog images
  
  // Output quality for WebP (0-100)
  // Using lower quality for blog images to reduce size significantly
  webpQuality: 65,
  
  // Responsive sizes to generate
  responsiveSizes: [
    { name: 'small', width: 640 },
    { name: 'medium', width: 1280 },
    { name: 'large', width: 1920 }
  ],
  
  // Skip files with these substrings in their paths
  skipPaths: ['node_modules', '.git', 'dist', 'optimized']
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
    
    const parsedPath = path.parse(imagePath);
    const outputDir = path.join(parsedPath.dir, 'optimized');
    ensureDirectoryExists(outputDir);
    
    // Get original image dimensions
    const metadata = await sharp(imagePath).metadata();
    
    // Create WebP version with appropriate compression based on file size
    const webpPath = path.join(outputDir, `${parsedPath.name}.webp`);
    
    // Apply more aggressive compression for extremely large files
    let quality = config.webpQuality;
    if (stats.size > 5 * 1024 * 1024) { // 5MB+
      quality = 60; // More aggressive compression
    } else if (stats.size > 2 * 1024 * 1024) { // 2MB+
      quality = 65;
    }
    
    console.log(`Processing ${imagePath} (${(stats.size / 1024 / 1024).toFixed(2)}MB)...`);
    
    await sharp(imagePath)
      .resize({ 
        width: Math.min(metadata.width, 1920), // Cap width at 1920px
        withoutEnlargement: true 
      })
      .webp({ quality, effort: 6 }) // Higher effort = better compression
      .toFile(webpPath);
    
    const newStats = fs.statSync(webpPath);
    const savings = ((stats.size - newStats.size) / stats.size * 100).toFixed(2);
    console.log(`Created WebP: ${webpPath} (Saved ${savings}%, ${((stats.size - newStats.size) / 1024 / 1024).toFixed(2)}MB)`);
    
    // Create responsive sizes
    for (const size of config.responsiveSizes) {
      // Skip creating this size if original is smaller
      if (metadata.width <= size.width) continue;
      
      const responsivePath = path.join(
        outputDir, 
        `${parsedPath.name}-${size.name}.webp`
      );
      
      await sharp(imagePath)
        .resize({ width: size.width, withoutEnlargement: true })
        .webp({ quality, effort: 6 })
        .toFile(responsivePath);
      
      console.log(`Created ${size.name}: ${responsivePath}`);
    }
    
    return {
      original: stats.size,
      optimized: newStats.size,
      savings: stats.size - newStats.size,
      savingsPercent: savings
    };
  } catch (error) {
    console.error(`Error processing ${imagePath}:`, error);
    return null;
  }
}

// Find and process all blog images
async function main() {
  try {
    console.log('Starting blog image optimization...');
    console.log(`Source directory: ${config.sourceDir}`);
    
    if (!fs.existsSync(config.sourceDir)) {
      console.error(`Error: Blog images directory not found at ${config.sourceDir}`);
      process.exit(1);
    }
    
    const results = {
      processed: 0,
      totalOriginalSize: 0,
      totalOptimizedSize: 0,
      errors: 0
    };
    
    // Read all files in the blog directory
    const files = fs.readdirSync(config.sourceDir);
    console.log(`Found ${files.length} files in blog directory`);
    
    // Filter for image files and process them
    for (const file of files) {
      const filePath = path.join(config.sourceDir, file);
      
      // Skip non-files and files in excluded paths
      if (!fs.statSync(filePath).isFile() || 
          config.skipPaths.some(skipPath => filePath.includes(skipPath))) {
        continue;
      }
      
      // Check if it's an image with supported extension
      const extension = path.extname(file).toLowerCase();
      if (!config.extensions.includes(extension)) {
        continue;
      }
      
      const result = await processImage(filePath);
      if (result) {
        results.processed++;
        results.totalOriginalSize += result.original;
        results.totalOptimizedSize += result.optimized;
      } else {
        results.errors++;
      }
    }
    
    // Print summary
    console.log('\n=== Optimization Summary ===');
    console.log(`Images processed: ${results.processed}`);
    console.log(`Original size: ${(results.totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`Optimized size: ${(results.totalOptimizedSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`Total savings: ${((results.totalOriginalSize - results.totalOptimizedSize) / 1024 / 1024).toFixed(2)}MB (${((results.totalOriginalSize - results.totalOptimizedSize) / results.totalOriginalSize * 100).toFixed(2)}%)`);
    console.log(`Errors: ${results.errors}`);
    console.log('=========================');
    
    console.log('\nTo use these optimized images:');
    console.log('1. Update your image references to use the /images/blog/optimized/ path');
    console.log('2. Use the srcset attribute with the responsive variants');
    console.log('Example:');
    console.log(`
<picture>
  <source
    srcset="/images/blog/optimized/image-name-small.webp 640w, 
            /images/blog/optimized/image-name-medium.webp 1280w, 
            /images/blog/optimized/image-name-large.webp 1920w,
            /images/blog/optimized/image-name.webp"
    type="image/webp"
    sizes="(max-width: 640px) 640px, (max-width: 1280px) 1280px, 1920px"
  />
  <img src="/images/blog/image-name.jpg" alt="Description" loading="lazy" />
</picture>`);
    
    console.log('\nBlog image optimization complete!');
  } catch (error) {
    console.error('Error during optimization:', error);
    process.exit(1);
  }
}

main(); 