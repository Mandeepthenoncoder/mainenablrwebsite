import React from 'react';
import { Helmet } from 'react-helmet-async';

// Critical resources that should be preloaded
const criticalImages = [
  // Hero images
  { path: '/images/supabase-images/optimized/hero-slide-1.webp', type: 'image/webp' },
  
  // Logo
  { path: '/images/supabase-images/Updated-Logo.svg', type: 'image/svg+xml' },
  
  // Fonts
  { path: '/assets/fonts/inter-var.woff2', type: 'font/woff2' }
];

// List of large images that should be preconnected or prefetched
const largeImages = [
  // Use optimized WebP versions
  { path: '/At Enablr, We Build More Than GCCs, We Build High-Performing Teams That Power Them.- Careers.webp', type: 'image/webp' },
  { path: '/Dedicated Team Models, Engage With Us, home.webp', type: 'image/webp' },
  { path: '/Fueling Your Vision With the Right Talent and Tools -Our Pillars Home.webp', type: 'image/webp' }
];

/**
 * Component to preload critical resources
 * This helps with performance by telling the browser to download
 * important assets early in the page lifecycle
 */
const PreloadResources: React.FC = () => {
  return (
    <Helmet>
      {/* Preconnect to domains for network optimization */}
      <link rel="preconnect" href="https://kivxafsjmoplihqpotqj.supabase.co" />
      
      {/* Preload critical resources */}
      {criticalImages.map((resource, index) => (
        <link 
          key={index}
          rel="preload" 
          href={resource.path} 
          as={resource.type.split('/')[0]} 
          type={resource.type} 
          crossOrigin="anonymous"
        />
      ))}
      
      {/* Prefetch larger images that will be needed soon */}
      {largeImages.map((resource, index) => (
        <link 
          key={`prefetch-${index}`}
          rel="prefetch" 
          href={resource.path} 
          as="image" 
          type={resource.type} 
        />
      ))}
      
      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="https://kivxafsjmoplihqpotqj.supabase.co" />
    </Helmet>
  );
};

export default PreloadResources; 