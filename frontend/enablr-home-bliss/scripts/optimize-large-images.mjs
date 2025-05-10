import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// List of large images that need optimization
const largeImages = [
  '/public/Engagement_Models/Landing/Engagement_hero.webp',
  '/public/About_us/Overview/Overview_hero.webp'
];

// Config for this script
const config = {
  targetWidth: 1920, // Max width for the primary optimized WebP
  webpQuality: 75,   // Quality for all WebP outputs
  jpegQuality: 80,  // Quality for the fallback optimized JPG
  responsiveSizes: [
    { name: 'small', width: 640 },
    { name: 'medium', width: 1024 }, // Adjusted medium size for typical hero/large images
    { name: 'large', width: 1280 }  // Large can be smaller than targetWidth if targetWidth is for very high-res source
  ]
};

async function optimizeImage(imagePath) {
  try {
    const sharp = (await import('sharp')).default;
    const fullPath = path.join(process.cwd(), imagePath);
    if (!fs.existsSync(fullPath)) {
      console.error(`File not found: ${fullPath}`);
      return;
    }

    const parsedPath = path.parse(fullPath);
    // Output optimized images in an 'optimized' subdirectory of the original image's location
    const outputDir = path.join(parsedPath.dir, 'optimized');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputWebPBase = path.join(outputDir, `${parsedPath.name}.webp`);
    const outputJPGOptimized = path.join(outputDir, `${parsedPath.name}-optimized.jpg`);
    
    const originalSize = fs.statSync(fullPath).size;
    console.log(`Optimizing: ${imagePath} (${(originalSize / 1024 / 1024).toFixed(2)}MB)`);
    
    const metadata = await sharp(fullPath).metadata();

    // Optimize to base WebP (e.g., for desktop or largest srcset candidate)
    await sharp(fullPath)
      .resize({ width: config.targetWidth, withoutEnlargement: true })
      .webp({ quality: config.webpQuality, effort: 6 })
      .toFile(outputWebPBase);
    console.log(`✓ Base WebP: ${outputWebPBase} (${(fs.statSync(outputWebPBase).size / 1024 / 1024).toFixed(2)}MB)`);
    
    // Also create an optimized JPG as a general fallback if needed outside of srcset
    await sharp(fullPath)
      .resize({ width: config.targetWidth, withoutEnlargement: true })
      .jpeg({ quality: config.jpegQuality, mozjpeg: true })
      .toFile(outputJPGOptimized);
    console.log(`✓ Optimized JPG: ${outputJPGOptimized} (${(fs.statSync(outputJPGOptimized).size / 1024 / 1024).toFixed(2)}MB)`);

    // Create responsive WebP sizes
    for (const size of config.responsiveSizes) {
      if (metadata.width <= size.width && size.name !== 'small') { // Always create small, otherwise skip if source is smaller
        console.log(`- Skipping ${size.name} size for ${parsedPath.name} (source width ${metadata.width} <= target ${size.width})`);
        continue;
      }
      const responsiveWebPPath = path.join(outputDir, `${parsedPath.name}-${size.name}.webp`);
      await sharp(fullPath)
        .resize({ width: size.width, withoutEnlargement: true })
        .webp({ quality: config.webpQuality, effort: 6 })
        .toFile(responsiveWebPPath);
      console.log(`✓ Responsive ${size.name} WebP: ${responsiveWebPPath} (${(fs.statSync(responsiveWebPPath).size / 1024 / 1024).toFixed(2)}MB)`);
    }

  } catch (error) {
    console.error(`Error optimizing ${imagePath}:`, error);
  }
}

async function main() {
  try {
    console.log('Starting optimization of large images with responsive sets...');
    
    for (const imagePath of largeImages) {
      await optimizeImage(imagePath);
    }
    
    console.log('Large image optimization with responsive sets complete!');
  } catch (error) {
    console.error('Optimization error:', error);
  }
}

main(); 