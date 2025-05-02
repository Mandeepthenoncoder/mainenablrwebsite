/**
 * Utility functions for handling image paths, particularly for migrating from
 * Supabase URLs to local file paths
 */

// Map of Supabase image URLs to their local paths
const supabaseToLocalMap: Record<string, string> = {
  'https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//hero-slide-1.png': '/images/supabase-images/hero-slide-1.png',
  'https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//hero-slide-2.png': '/images/supabase-images/hero-slide-2.png',
  'https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//hero-slide-3.png': '/images/supabase-images/hero-slide-3.png',
  'https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//Updated%20Logo.svg': '/images/supabase-images/Updated-Logo.svg',
  'https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//TE%20hero%20img.jpg': '/images/supabase-images/TE-hero-img.jpg',
  'https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//Acc.svg': '/images/supabase-images/Acc.svg',
  'https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//partner%20of%20choice.svg': '/images/supabase-images/partner-of-choice.svg',
  'https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//momentum.svg': '/images/supabase-images/momentum.svg',
  'https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//Waves.svg': '/images/supabase-images/Waves.svg'
};

// Map of original image paths to their optimized WebP versions
export const imageToWebpMap: Record<string, string> = {
  '/images/supabase-images/hero-slide-1.png': '/images/supabase-images/optimized/hero-slide-1.webp',
  '/images/supabase-images/hero-slide-2.png': '/images/supabase-images/optimized/hero-slide-2.webp',
  '/images/supabase-images/hero-slide-3.png': '/images/supabase-images/optimized/hero-slide-3.webp',
  '/images/supabase-images/TE-hero-img.jpg': '/images/supabase-images/optimized/TE-hero-img.webp',
  
  // Blog image mappings
  '/images/blog/default.jpg': '/images/blog/optimized/default.webp',
  '/images/blog/gcc-service.jpg': '/images/blog/optimized/gcc-service.webp',
  '/images/blog/gcc1.jpg': '/images/blog/optimized/gcc1.webp',
  '/images/blog/gcc2.jpg': '/images/blog/optimized/gcc2.webp',
  '/images/blog/gcc3.jpg': '/images/blog/optimized/gcc3.webp',
  '/images/blog/insights.jpg': '/images/blog/optimized/insights.webp',
  '/images/blog/newsletter.jpg': '/images/blog/optimized/newsletter.webp',
  '/images/blog/sustainability.jpg': '/images/blog/optimized/sustainability.webp',
  '/images/blog/talent.jpg': '/images/blog/optimized/talent.webp',
  '/images/blog/technology.jpg': '/images/blog/optimized/technology.webp',
  '/images/blog/trends.jpg': '/images/blog/optimized/trends.webp',
  '/images/blog/workspace.jpg': '/images/blog/optimized/workspace.webp',
  
  // New blog image mappings
  '/Blog Images/From support functions to strategic hubs The evolution of GCCs.jpg': '/Blog Images/optimized/From support functions to strategic hubs The evolution of GCCs.webp',
  '/Blog Images/How GCCs can become a \'powerhouse\' of innovation with smarter workspace solutions.jpg': '/Blog Images/optimized/How GCCs can become a \'powerhouse\' of innovation with smarter workspace solutions.webp',
  '/Blog Images/How to build a high-performance GCC Best practices for talent, technology, and strategy.jpg': '/Blog Images/optimized/How to build a high-performance GCC Best practices for talent, technology, and strategy.webp',
  '/Blog Images/AI-powered transformation How GCCs are driving business innovation.jpg': '/Blog Images/optimized/AI-powered transformation How GCCs are driving business innovation.webp',
  
  // Large images that cause slow loading
  '/At Enablr, We Build More Than GCCs, We Build High-Performing Teams That Power Them.- Careers.jpg': '/At Enablr, We Build More Than GCCs, We Build High-Performing Teams That Power Them.- Careers.webp',
  '/Careers page imaeg.png': '/Careers page imaeg.webp', 
  '/Dedicated Team Models, Engage With Us, home.jpg': '/Dedicated Team Models, Engage With Us, home.webp',
  '/Engagement model landing page.jpg': '/Engagement model landing page.webp',
  '/Fueling Your Vision With the Right Talent and Tools -Our Pillars Home.jpg': '/Fueling Your Vision With the Right Talent and Tools -Our Pillars Home.webp',
  '/solutions landing page hero image.png': '/solutions landing page hero image.webp'
};

// Map of original image paths to their responsive srcset values
export const imageToSrcSetMap: Record<string, string> = {
  '/images/supabase-images/hero-slide-1.png': '/images/supabase-images/optimized/hero-slide-1-small.webp 640w, /images/supabase-images/optimized/hero-slide-1-medium.webp 1280w, /images/supabase-images/optimized/hero-slide-1-large.webp 1920w',
  '/images/supabase-images/hero-slide-2.png': '/images/supabase-images/optimized/hero-slide-2-small.webp 640w, /images/supabase-images/optimized/hero-slide-2-medium.webp 1280w, /images/supabase-images/optimized/hero-slide-2-large.webp 1920w',
  '/images/supabase-images/hero-slide-3.png': '/images/supabase-images/optimized/hero-slide-3-small.webp 640w, /images/supabase-images/optimized/hero-slide-3-medium.webp 1280w, /images/supabase-images/optimized/hero-slide-3-large.webp 1920w',
  '/images/supabase-images/TE-hero-img.jpg': '/images/supabase-images/optimized/TE-hero-img-small.webp 640w, /images/supabase-images/optimized/TE-hero-img-medium.webp 1280w, /images/supabase-images/optimized/TE-hero-img-large.webp 1920w',
  
  // Blog image srcsets
  '/images/blog/default.jpg': '/images/blog/optimized/default-small.webp 640w, /images/blog/optimized/default-medium.webp 1280w, /images/blog/optimized/default-large.webp 1920w',
  '/images/blog/gcc-service.jpg': '/images/blog/optimized/gcc-service-small.webp 640w, /images/blog/optimized/gcc-service-medium.webp 1280w, /images/blog/optimized/gcc-service-large.webp 1920w',
  '/images/blog/gcc1.jpg': '/images/blog/optimized/gcc1-small.webp 640w, /images/blog/optimized/gcc1-medium.webp 1280w, /images/blog/optimized/gcc1-large.webp 1920w',
  '/images/blog/gcc2.jpg': '/images/blog/optimized/gcc2-small.webp 640w, /images/blog/optimized/gcc2-medium.webp 1280w, /images/blog/optimized/gcc2-large.webp 1920w',
  '/images/blog/gcc3.jpg': '/images/blog/optimized/gcc3-small.webp 640w, /images/blog/optimized/gcc3-medium.webp 1280w, /images/blog/optimized/gcc3-large.webp 1920w',
  '/images/blog/insights.jpg': '/images/blog/optimized/insights-small.webp 640w, /images/blog/optimized/insights-medium.webp 1280w, /images/blog/optimized/insights-large.webp 1920w',
  '/images/blog/newsletter.jpg': '/images/blog/optimized/newsletter-small.webp 640w, /images/blog/optimized/newsletter-medium.webp 1280w, /images/blog/optimized/newsletter-large.webp 1920w',
  '/images/blog/sustainability.jpg': '/images/blog/optimized/sustainability-small.webp 640w, /images/blog/optimized/sustainability-medium.webp 1280w, /images/blog/optimized/sustainability-large.webp 1920w',
  '/images/blog/talent.jpg': '/images/blog/optimized/talent-small.webp 640w, /images/blog/optimized/talent-medium.webp 1280w, /images/blog/optimized/talent-large.webp 1920w',
  '/images/blog/technology.jpg': '/images/blog/optimized/technology-small.webp 640w, /images/blog/optimized/technology-medium.webp 1280w, /images/blog/optimized/technology-large.webp 1920w',
  '/images/blog/trends.jpg': '/images/blog/optimized/trends-small.webp 640w, /images/blog/optimized/trends-medium.webp 1280w, /images/blog/optimized/trends-large.webp 1920w',
  '/images/blog/workspace.jpg': '/images/blog/optimized/workspace-small.webp 640w, /images/blog/optimized/workspace-medium.webp 1280w, /images/blog/optimized/workspace-large.webp 1920w',
  
  // New blog image srcsets 
  '/Blog Images/From support functions to strategic hubs The evolution of GCCs.jpg': '/Blog Images/optimized/From support functions to strategic hubs The evolution of GCCs-small.webp 640w, /Blog Images/optimized/From support functions to strategic hubs The evolution of GCCs-medium.webp 1280w, /Blog Images/optimized/From support functions to strategic hubs The evolution of GCCs-large.webp 1920w',
  '/Blog Images/How GCCs can become a \'powerhouse\' of innovation with smarter workspace solutions.jpg': '/Blog Images/optimized/How GCCs can become a \'powerhouse\' of innovation with smarter workspace solutions-small.webp 640w, /Blog Images/optimized/How GCCs can become a \'powerhouse\' of innovation with smarter workspace solutions-medium.webp 1280w, /Blog Images/optimized/How GCCs can become a \'powerhouse\' of innovation with smarter workspace solutions-large.webp 1920w',
  '/Blog Images/How to build a high-performance GCC Best practices for talent, technology, and strategy.jpg': '/Blog Images/optimized/How to build a high-performance GCC Best practices for talent, technology, and strategy-small.webp 640w, /Blog Images/optimized/How to build a high-performance GCC Best practices for talent, technology, and strategy-medium.webp 1280w, /Blog Images/optimized/How to build a high-performance GCC Best practices for talent, technology, and strategy-large.webp 1920w',
  '/Blog Images/AI-powered transformation How GCCs are driving business innovation.jpg': '/Blog Images/optimized/AI-powered transformation How GCCs are driving business innovation-small.webp 640w, /Blog Images/optimized/AI-powered transformation How GCCs are driving business innovation-medium.webp 1280w, /Blog Images/optimized/AI-powered transformation How GCCs are driving business innovation-large.webp 1920w',
};

/**
 * Converts a Supabase URL to a local image path
 * 
 * @param url - The original Supabase URL
 * @param useLocal - Whether to use local images (default: true)
 * @param useOptimized - Whether to use optimized WebP images (default: true)
 * @returns The local image path if available, otherwise the original URL
 */
export const getImagePath = (
  url: string, 
  useLocal: boolean = true,
  useOptimized: boolean = true
): string => {
  // If not using local images or the URL is not from Supabase, return as is
  if (!useLocal || !url.includes('kivxafsjmoplihqpotqj.supabase.co')) {
    return url;
  }

  // Strip any query parameters from the URL for matching
  const baseUrl = url.split('?')[0];
  
  // Get local path from map
  const localPath = supabaseToLocalMap[baseUrl] || url;
  
  // If optimized versions are requested and SVG is not used
  if (useOptimized && !localPath.endsWith('.svg')) {
    return imageToWebpMap[localPath] || localPath;
  }
  
  return localPath;
};

/**
 * Gets responsive srcSet for an image
 * 
 * @param url - Original image URL or path
 * @returns srcSet string for responsive images, or empty string if not available
 */
export const getResponsiveSrcSet = (url: string): string => {
  // First convert to local path if it's a Supabase URL
  const localPath = getImagePath(url, true, false);
  
  // Return responsive srcSet if available
  return imageToSrcSetMap[localPath] || '';
};

export default getImagePath; 