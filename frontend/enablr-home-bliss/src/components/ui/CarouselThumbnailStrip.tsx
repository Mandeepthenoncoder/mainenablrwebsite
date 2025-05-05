import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { CarouselApi } from "@/components/ui/carousel"; // Assuming type path
import { cn } from "@/lib/utils"; // Assuming utility path

interface ThumbnailStripProps {
  api: CarouselApi | undefined;
  slides: { imageSrc: string; title: string }[]; // Need imageSrc and title for alt text
  currentSlide: number;
}

const CarouselThumbnailStrip: React.FC<ThumbnailStripProps> = ({ api, slides = [], currentSlide }) => {
  const stripRef = useRef<HTMLDivElement>(null);

  const handleThumbnailClick = (index: number) => {
    api?.scrollTo(index);
  };

  // Center the active thumbnail in the scroll view
  useEffect(() => {
    if (!stripRef.current || !api) return;

    const activeThumbnail = stripRef.current.children[currentSlide] as HTMLElement;
    if (activeThumbnail) {
      const container = stripRef.current;
      const scrollLeft =
        activeThumbnail.offsetLeft -
        container.offsetWidth / 2 +
        activeThumbnail.offsetWidth / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      });
    }
  }, [currentSlide, api]);


  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30"> {/* Position overlapping bottom edge */}
      <div
        ref={stripRef}
        className="flex items-center justify-start sm:justify-center gap-1 px-3 py-1.5 h-[30px] bg-black/40 backdrop-blur-md rounded-full overflow-x-auto no-scrollbar max-w-[80vw]" // Glass morphism container, allow scroll on mobile
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties} // Hide scrollbar cross-browser
      >
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          const distance = Math.abs(index - currentSlide);
          // Ensure scale doesn't go below a minimum, e.g., 0.8
          const scale = isActive ? 1.15 : Math.max(0.8, 1 - (distance * 0.05));
          // Ensure opacity doesn't go below a minimum, e.g., 0.4
          const opacity = isActive ? 1 : Math.max(0.4, 0.4 + (0.3 / (distance + 1)));

          return (
            <motion.div
              key={slide.imageSrc || index} // Use imageSrc if available for key
              className={cn(
                "relative flex-shrink-0 cursor-pointer group",
                isActive ? 'z-20' : 'z-10'
              )}
              onClick={() => handleThumbnailClick(index)}
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale, opacity }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {/* Thumbnail Image Container */}
              <div
                className={cn(
                  "relative w-[32px] h-[20px] rounded-sm overflow-hidden transition-all duration-300 ease-out",
                  isActive ? 'bg-white ring-1 ring-white/50 shadow-lg' : 'bg-white/20 group-hover:bg-white/30'
                )}
              >
                <img
                  src={slide.imageSrc} // Use slide image as thumbnail bg
                  alt={`Slide ${index + 1} thumbnail - ${slide.title}`} // Alt text
                  className="w-full h-full object-cover"
                />
                 {/* Progress Bar for Active Slide */}
                 {isActive && (
                    <div className="absolute bottom-0 left-0 h-[2px] bg-white/50 w-full overflow-hidden"> {/* Added overflow-hidden */}
                        <motion.div
                            className="h-full bg-white" // Simplified class
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 5, ease: 'linear' }} // Match carousel delay
                            // Re-trigger animation when slide changes by changing key
                            key={`progress-${currentSlide}`}
                        />
                    </div>
                 )}
              </div>

              {/* Active Indicator Dot */}
              {isActive && (
                <motion.div
                  className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] bg-white rounded-full animate-pulse" // Slightly larger dot for visibility
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{duration: 0.3}} // Added transition for smoother appearance
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CarouselThumbnailStrip; 