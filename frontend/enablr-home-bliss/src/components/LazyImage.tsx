import React, { useState } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import Image from './Image';

interface LazyImageProps extends React.ComponentProps<typeof Image> {
  placeholder?: string;
  blurHash?: string;
}

/**
 * LazyImage component that defers loading images until they're about to enter the viewport
 * Uses IntersectionObserver for better performance than standard lazy loading
 */
const LazyImage: React.FC<LazyImageProps> = ({ 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZjBmMGYwIj48L3JlY3Q+PC9zdmc+',
  blurHash,
  src,
  alt,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { elementRef, isVisible } = useIntersectionObserver({
    rootMargin: '200px', // Start loading images when they're within 200px of viewport
  });
  
  // Only show the actual image once it's near the viewport
  const imageSrc = isVisible ? src : placeholder;
  
  const handleLoad = () => {
    setIsLoaded(true);
    if (props.onLoad) {
      props.onLoad(new Event('load') as any);
    }
  };
  
  return (
    <div 
      ref={elementRef as React.RefObject<HTMLDivElement>} 
      className={`relative ${props.className || ''}`}
      style={{ overflow: 'hidden' }}
    >
      {/* Placeholder/low-quality image */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-100 animate-pulse"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: props.objectPosition || 'center',
            filter: 'blur(10px)',
            transform: 'scale(1.1)',
          }}
        />
      )}
      
      {/* Actual image - only loads when near viewport */}
      {isVisible && (
        <Image
          {...props}
          src={src}
          alt={alt}
          className={`transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${props.className || ''}`}
          onLoad={handleLoad}
          loading="lazy"
          style={{
            ...props.style,
          }}
        />
      )}
    </div>
  );
};

export default LazyImage; 