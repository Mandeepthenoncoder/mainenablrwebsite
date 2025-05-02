#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script converts large JPG/PNG images to WebP format for better performance.
 * It also creates multiple sizes of each image for responsive loading.
 * 
 * Usage:
 * 1. Install dependencies: npm install sharp glob
 * 2. Run: node scripts/optimize-images.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { globSync } from 'glob';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const config = {
  // Source directories to scan for images
  sourceDirs: [
    'public/images',
    'public/images/supabase-images',
    'public/images/lot 2',
    'public/images/New images'
  ],
  
  // Image extensions to process
  extensions: ['.jpg', '.jpeg', '.png'],
  
  // Size thresholds for optimization (in bytes)
  sizeThreshold: 100 * 1024, // 100KB
  
  // Output quality for WebP (0-100)
  webpQuality: 75,
  
  // Responsive sizes to generate
  responsiveSizes: [
    { name: 'small', width: 640 },
    { name: 'medium', width: 1280 },
    { name: 'large', width: 1920 }
  ],
  
  // Skip files with these substrings in their paths
  skipPaths: ['node_modules', '.git', 'dist', 'optimized', 'blog']
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
    
    // Process individual directories directly
    const processedFiles = [];
    
    // Explicitly process supabase-images directory
    const supabaseImagesDir = 'public/images/supabase-images';
    if (fs.existsSync(supabaseImagesDir)) {
      const files = fs.readdirSync(supabaseImagesDir);
      console.log(`Found ${files.length} files in ${supabaseImagesDir}`);
      
      for (const file of files) {
        const filePath = path.join(supabaseImagesDir, file);
        
        // Skip non-image files and already processed files
        if (fs.statSync(filePath).isDirectory() || file === 'image-mapping.json') {
          continue;
        }
        
        const extension = path.extname(file).toLowerCase();
        
        // Check if it's an image file
        if (config.extensions.includes(extension) && 
            !config.skipPaths.some(skipPath => filePath.includes(skipPath))) {
          processedFiles.push(filePath);
          console.log(`Processing Supabase image: ${filePath}`);
          await processImage(filePath);
        }
      }
    }
    
    // Process "lot 2" directory directly
    const lot2Dir = 'public/images/lot 2';
    if (fs.existsSync(lot2Dir)) {
      const files = fs.readdirSync(lot2Dir);
      console.log(`Found ${files.length} files in ${lot2Dir}`);
      
      for (const file of files) {
        const filePath = path.join(lot2Dir, file);
        const extension = path.extname(file).toLowerCase();
        
        // Check if it's an image file
        if (config.extensions.includes(extension) && 
            !config.skipPaths.some(skipPath => filePath.includes(skipPath))) {
          processedFiles.push(filePath);
          await processImage(filePath);
        }
      }
    }
    
    // Process "New images" directory directly
    const newImagesDir = 'public/images/New images';
    if (fs.existsSync(newImagesDir)) {
      const files = fs.readdirSync(newImagesDir);
      console.log(`Found ${files.length} files in ${newImagesDir}`);
      
      for (const file of files) {
        const filePath = path.join(newImagesDir, file);
        const extension = path.extname(file).toLowerCase();
        
        // Check if it's an image file
        if (config.extensions.includes(extension) && 
            !config.skipPaths.some(skipPath => filePath.includes(skipPath))) {
          processedFiles.push(filePath);
          await processImage(filePath);
        }
      }
    }
    
    // Process other directories without spaces
    for (const sourceDir of config.sourceDirs) {
      // Skip directories with spaces as we handled them separately
      if (sourceDir.includes(' ')) {
        continue;
      }
      
      if (!fs.existsSync(sourceDir)) {
        console.log(`Directory not found: ${sourceDir}`);
        continue;
      }
      
      for (const ext of config.extensions) {
        const pattern = path.join(sourceDir, `**/*${ext}`);
        const files = globSync(pattern);
        
        console.log(`Found ${files.length} ${ext} files in ${sourceDir}`);
        
        for (const file of files) {
          // Skip already processed files
          if (processedFiles.includes(file)) {
            continue;
          }
          
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