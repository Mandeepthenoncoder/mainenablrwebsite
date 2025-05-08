import React from 'react';
import { motion } from 'framer-motion';
import type { CarouselApi } from "@/components/ui/carousel";

interface CarouselProgressBarProps {
  api: CarouselApi | undefined;
  totalSlides: number;
  currentSlide: number;
}

const CarouselProgressBar: React.FC<CarouselProgressBarProps> = ({ 
  api, 
  totalSlides, 
  currentSlide 
}) => {
  // Handler for clicking on a progress indicator
  const handleIndicatorClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
      <div className="flex items-center justify-center gap-2 px-4 py-2">
        {Array.from({ length: totalSlides }).map((_, index) => {
          const isActive = index === currentSlide;
          
          return (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className="group focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className="relative h-1 rounded-full overflow-hidden transition-all duration-300 ease-out cursor-pointer"
                   style={{ width: isActive ? '32px' : '20px' }}>
                {/* Background */}
                <div className={`absolute inset-0 ${isActive ? 'bg-white' : 'bg-white/40 group-hover:bg-white/60'}`}></div>
                
                {/* Progress Animation (only for active slide) */}
                {isActive && (
                  <motion.div
                    className="absolute top-0 bottom-0 left-0 bg-white"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ 
                      duration: 5, // Match autoplay duration
                      ease: 'linear',
                      repeat: 0
                    }}
                    key={`progress-${currentSlide}`} // Restart animation when slide changes
                  />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CarouselProgressBar; 