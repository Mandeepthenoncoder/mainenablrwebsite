import React from 'react';
import { Helmet } from 'react-helmet-async';

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