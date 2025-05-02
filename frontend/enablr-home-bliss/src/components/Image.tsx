import React from 'react';
import { getImagePath, getResponsiveSrcSet } from '@/utils/imageUtils';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  srcSet?: string;
  sizes?: string;
  webpSrc?: string;
  priority?: boolean;
  quality?: number;
  objectPosition?: string;
  useOptimized?: boolean;
}

/**
 * Enhanced Image component that supports:
 * - WebP format with fallback
 * - Responsive images with srcSet
 * - Lazy loading
 * - Priority loading for above-the-fold images
 * - Supabase image optimization
 */
const Image = ({ 
  src, 
  alt, 
  width, 
  height, 
  className, 
  srcSet,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  webpSrc,
  priority = false,
  quality = 75,
  objectPosition = "center",
  useOptimized = true,
  ...props 
}: ImageProps) => {
  // Get optimized image path and responsive srcSet
  const optimizedSrc = getImagePath(src, true, useOptimized);
  const isSupabaseImage = src.includes('kivxafsjmoplihqpotqj.supabase.co');
  
  // Generate srcSet for responsive images
  const generateSrcSet = (): string => {
    if (srcSet) return srcSet;
    
    // For Supabase images, use the predefined responsive srcSet
    if (isSupabaseImage) {
      return getResponsiveSrcSet(src) || '';
    }
    
    // For other images, use the standard optimized path generation
    const smallSrc = getOptimizedSrc(src, 'small');
    const mediumSrc = getOptimizedSrc(src, 'medium');
    const largeSrc = getOptimizedSrc(src, 'large');
    
    if (smallSrc && mediumSrc && largeSrc) {
      return `${smallSrc} 640w, ${mediumSrc} 1280w, ${largeSrc} 1920w`;
    }
    
    return '';
  };
  
  // Transform image path to use optimized versions if available
  const getOptimizedSrc = (imgPath: string, size?: string): string => {
    if (!imgPath) return '';
    
    // Skip external URLs, SVGs, or already optimized paths
    if (imgPath.startsWith('http') || 
        imgPath.endsWith('.svg') || 
        imgPath.includes('/optimized/')) {
      return imgPath;
    }
    
    // If it's a Supabase image, use the imageUtils
    if (imgPath.includes('kivxafsjmoplihqpotqj.supabase.co')) {
      return getImagePath(imgPath, true, true);
    }
    
    // Parse the path
    const pathParts = imgPath.split('.');
    const ext = pathParts.pop();
    const basePath = pathParts.join('.');
    
    // Generate optimized path
    const dirPath = basePath.substring(0, basePath.lastIndexOf('/'));
    const fileName = basePath.substring(basePath.lastIndexOf('/') + 1);
    
    if (size) {
      return `${dirPath}/optimized/${fileName}-${size}.webp`;
    }
    
    return `${dirPath}/optimized/${fileName}.webp`;
  };
  
  // Generate webp srcSet
  const webpSrcSet = webpSrc || generateSrcSet();
  const fallbackSrcSet = srcSet || '';
  
  // Determine which src to use
  const imageSrc = optimizedSrc || src;
  
  return (
    <>
      <picture>
        {webpSrcSet && (
          <source 
            srcSet={webpSrcSet} 
            type="image/webp" 
            sizes={sizes}
          />
        )}
        {fallbackSrcSet && (
          <source 
            srcSet={fallbackSrcSet} 
            sizes={sizes}
          />
        )}
        <img
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          className={className}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          style={{ objectPosition, ...props.style }}
          {...props}
          onError={(e) => {
            // Fallback to original source if optimized version fails
            const target = e.target as HTMLImageElement;
            if (target.src !== src && !target.src.includes('supabase') && useOptimized) {
              console.warn(`Failed to load optimized image: ${target.src}, falling back to original`);
              target.src = src;
            }
            if (props.onError) props.onError(e);
          }}
        />
      </picture>
    </>
  );
};

export default Image;
