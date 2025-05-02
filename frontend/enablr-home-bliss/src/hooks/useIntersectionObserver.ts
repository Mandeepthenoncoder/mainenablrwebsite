import { useEffect, useRef, useState } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

/**
 * Custom hook to detect when an element becomes visible in the viewport
 * Useful for implementing lazy loading of images and other content
 *
 * @param options Intersection Observer API options
 * @returns A ref to attach to the target element and a boolean indicating if it's visible
 */
const useIntersectionObserver = (
  options: IntersectionObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  }
) => {
  const elementRef = useRef<Element | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update state when intersection status changes
      setIsVisible(entry.isIntersecting);
      
      // Once the element is visible, stop observing
      if (entry.isIntersecting && elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    }, options);

    // Start observing when element ref is assigned
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Clean up observer on unmount
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options.root, options.rootMargin, options.threshold]);

  return { elementRef, isVisible };
};

export default useIntersectionObserver; 