import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// List of large images that need optimization (with sizes over 1MB)
const largeImages = [
  '/public/At Enablr, We Build More Than GCCs, We Build High-Performing Teams That Power Them.- Careers.jpg',
  '/public/Blog Images/From support functions to strategic hubs The evolution of GCCs.jpg',
  '/public/Blog Images/How to build a high-performance GCC Best practices for talent, technology, and strategy.jpg',
  '/public/Blog Images/How GCCs can become a \'powerhouse\' of innovation with smarter workspace solutions.jpg',
  '/public/Dedicated Team Models, Engage With Us, home.jpg',
  '/public/Engagement model landing page.jpg',
  '/public/Fueling Your Vision With the Right Talent and Tools -Our Pillars Home.jpg'
];

// Target sizes for optimization (keep aspect ratio)
const targetWidth = 1200;
const webpQuality = 80;

async function optimizeImage(imagePath) {
  try {
    const sharp = (await import('sharp')).default;
    const fullPath = path.join(process.cwd(), imagePath);
    if (!fs.existsSync(fullPath)) {
      console.error(`File not found: ${fullPath}`);
      return;
    }

    const parsedPath = path.parse(fullPath);
    const outputWebP = path.join(parsedPath.dir, `${parsedPath.name}.webp`);
    const outputJPG = path.join(parsedPath.dir, `${parsedPath.name}-optimized.jpg`);
    
    // Get original size
    const originalSize = fs.statSync(fullPath).size;
    console.log(`Optimizing: ${imagePath} (${(originalSize / 1024 / 1024).toFixed(2)}MB)`);
    
    // Optimize to WebP (best compression)
    await sharp(fullPath)
      .resize(targetWidth)
      .webp({ quality: webpQuality })
      .toFile(outputWebP);
    
    // Also optimize JPG as fallback
    await sharp(fullPath)
      .resize(targetWidth)
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(outputJPG);
    
    // Get new sizes
    const webpSize = fs.statSync(outputWebP).size;
    const jpgSize = fs.statSync(outputJPG).size;
    
    console.log(`✓ WebP: ${(webpSize / 1024 / 1024).toFixed(2)}MB (${((1 - webpSize / originalSize) * 100).toFixed(1)}% smaller)`);
    console.log(`✓ JPG: ${(jpgSize / 1024 / 1024).toFixed(2)}MB (${((1 - jpgSize / originalSize) * 100).toFixed(1)}% smaller)`);
  } catch (error) {
    console.error(`Error optimizing ${imagePath}:`, error);
  }
}

async function main() {
  try {
    console.log('Starting optimization of large images...');
    
    for (const imagePath of largeImages) {
      await optimizeImage(imagePath);
    }
    
    console.log('Large image optimization complete!');
  } catch (error) {
    console.error('Optimization error:', error);
  }
}

main(); 