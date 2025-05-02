/**
 * Utility for preloading critical images
 * This helps improve performance by loading critical images in advance
 */

/**
 * Critical images that should be preloaded on initial page load
 * These are the most important images that are visible above the fold
 */
const criticalImages = [
  // First carousel slide - highest priority
  '/images/supabase-images/optimized/hero-slide-1.webp',
  '/images/supabase-images/optimized/hero-slide-1-small.webp',
  '/images/supabase-images/optimized/hero-slide-1-medium.webp',
  '/images/supabase-images/optimized/hero-slide-2.webp',
  '/images/lot 2/optimized/CarouselImage3-Home.webp',
  '/images/lot 2/optimized/CarouselImage3-Home-small.webp',
  '/images/lot 2/optimized/CarouselImage3-Home-medium.webp',
];

/**
 * Injects preload link tags for critical images
 * Should be called in the app root component
 */
export const preloadCriticalImages = (): void => {
  if (typeof document === 'undefined') return; // Skip on server-side

  criticalImages.forEach(imgPath => {
    const linkElement = document.createElement('link');
    linkElement.rel = 'preload';
    linkElement.href = imgPath;
    linkElement.as = 'image';
    
    // Add appropriate type based on file extension
    if (imgPath.endsWith('.webp')) {
      linkElement.type = 'image/webp';
    } else if (imgPath.endsWith('.jpg') || imgPath.endsWith('.jpeg')) {
      linkElement.type = 'image/jpeg';
    } else if (imgPath.endsWith('.png')) {
      linkElement.type = 'image/png';
    }
    
    document.head.appendChild(linkElement);
  });
};

/**
 * Preloads a specific image or set of images
 * Can be used for just-in-time preloading before navigation 
 */
export const preloadImages = (imagePaths: string[]): void => {
  if (typeof document === 'undefined') return;

  imagePaths.forEach(imgPath => {
    const image = new Image();
    image.src = imgPath;
  });
};

export default preloadCriticalImages; 