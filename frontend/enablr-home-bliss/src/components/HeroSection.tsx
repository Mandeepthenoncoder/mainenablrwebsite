import React, { useState, useCallback, useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import type { CarouselApi } from "@/components/ui/carousel";
import { typography } from "@/styles/typography";
import { TextStyled } from "@/components/ui/TextStyled";
import { ResponsiveBreak } from "@/components/ui/ResponsiveBreak";
import { CTAButton } from "@/components/ui/CTAButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CarouselProgressBar from "@/components/ui/CarouselProgressBar";

// Define interface for hero slides
interface HeroSlide {
  imageSrc: string;
  srcset: string;
  title: string;
  titleLines: string[];
  buttonText: string;
  buttonLink: string;
  overlayClass: string;
}

// Define the hero slide content with optimized WebP images
const heroSlides: HeroSlide[] = [
  {
    imageSrc: "/Landing page/Carousel_img.webp",
    srcset: "/images/supabase-images/optimized/hero-slide-1-small.webp 640w, /images/supabase-images/optimized/hero-slide-1-medium.webp 1280w, /images/supabase-images/optimized/hero-slide-1-large.webp 1920w",
    title: "Build on Proven Experience and Enterprise-Grade Quality",
    titleLines: ["Build on Proven Experience and Enterprise-Grade Quality"],
    buttonText: "Get Started Today",
    buttonLink: "/contact",
    overlayClass: "bg-black bg-opacity-40"
  },
  {
    imageSrc: "/Landing page/Carousel_img2.webp",
    srcset: "/images/supabase-images/optimized/hero-slide-2-small.webp 640w, /images/supabase-images/optimized/hero-slide-2-medium.webp 1280w, /images/supabase-images/optimized/hero-slide-2-large.webp 1920w",
    title: "Realize your GCC Success with Speed and Scale",
    titleLines: ["Realize your GCC Success", "with Speed and Scale"],
    buttonText: "Speak To Our Experts",
    buttonLink: "/contact",
    overlayClass: "bg-black bg-opacity-40"
  },
  {
    imageSrc: "/Landing page/Carousel_img3.webp",
    srcset: "/images/lot 2/optimized/CarouselImage3-Home-small.webp 640w, /images/lot 2/optimized/CarouselImage3-Home-medium.webp 1280w, /images/lot 2/optimized/CarouselImage3-Home-large.webp 1920w",
    title: "Accelerate your Setup with Expert Talent and Seamless Execution",
    titleLines: ["Accelerate your Setup", "with Expert Talent", "and Seamless Execution"],
    buttonText: "Connect Now",
    buttonLink: "/contact",
    overlayClass: "bg-gradient-to-b from-black/80 via-black/50 to-black/40"
  },
  {
    imageSrc: "/Landing page/Carousel_img4.jpg",
    srcset: "/images/lot 2/optimized/CarouselImage4-Home-small.webp 640w, /images/lot 2/optimized/CarouselImage4-Home-medium.webp 1280w, /images/lot 2/optimized/CarouselImage4-Home-large.webp 1920w",
    title: "Your Trusted GCC Catalyst for End-to-End Setup",
    titleLines: ["Your Trusted GCC Catalyst", "for End-to-End Setup"],
    buttonText: "Talk to Our Experts",
    buttonLink: "/contact",
    overlayClass: "bg-gradient-to-b from-black/80 via-black/50 to-black/40"
  }
];

// Define mobile styles as a constant instead of injecting them dynamically
// This avoids style recalculation at runtime
const mobileCarouselClassNames = {
  titleContainer: "text-left w-full",
  titleLine: `
    text-white font-semibold 
    leading-tight sm:leading-normal tracking-normal 
    text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
    mb-3 sm:mb-2 text-left break-words max-w-full px-1 sm:px-0
    block whitespace-normal
  `,
  lastSlideFix: "last-slide-fix",
};

export default function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const lcpVideoRef = useRef<HTMLVideoElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const hasReinitializedRef = useRef(false);
  
  // Select handler to track the current slide (memoized to avoid recreating on every render)
  const onSelect = useCallback(() => {
    if (!api) return;
    // Use requestAnimationFrame to batch the state update with browser's paint cycle
    // This prevents forced reflow by ensuring read and write operations happen in separate frames
    requestAnimationFrame(() => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  
  // Initialize the API and set up event listeners
  useEffect(() => {
    if (!api) return;
    
    // Set up the select event handler
    api.on("select", onSelect);
    
    // Call onSelect once to set initial state
    onSelect();
    
    // Only reinitialize once after initial mount
    // This is moved to a separate useEffect to avoid unnecessary calls
    if (!hasReinitializedRef.current) {
      const handleResize = () => {
        // Throttle reinitialization to once per second maximum
        if (!hasReinitializedRef.current) {
          hasReinitializedRef.current = true;
          // Delay initialization slightly to allow layout to settle
          // This avoids calling expensive methods during rapid layout changes
          setTimeout(() => {
            api.reInit();
            setIsInitialized(true);
            hasReinitializedRef.current = false;
          }, 300);
        }
      };
      
      // Only reinitialize on actual layout changes
      window.addEventListener('resize', handleResize);
      
      // Initial reinitialization after component is mounted
      setTimeout(() => {
        api.reInit();
        setIsInitialized(true);
      }, 300);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);
  
  // Set high priority for LCP video
  useEffect(() => {
    if (lcpVideoRef.current) {
      lcpVideoRef.current.setAttribute('fetchpriority', 'high');
    }
  }, []);
  
  // Effect for explicit play/pause
  useEffect(() => {
    // Handle LCP video (index 0)
    if (lcpVideoRef.current) {
      if (current !== 0) { // Only explicitly pause LCP video if not the current slide
        lcpVideoRef.current.pause();
      } else if (lcpVideoRef.current.paused && current === 0) {
        // If it's the current slide and somehow paused (e.g., by returning to it), try to play again.
        // This handles cases where autoplay might not have kicked in if returning to slide 0.
        lcpVideoRef.current.play().catch(error => console.error("LCP Video play (re-attempt) error:", error));
      }
    }

    // Handle other videos
    videoRefs.current.forEach((videoEl, index) => {
      if (videoEl) { // Check if ref is set
        if (index === 0) return; // Skip LCP video, already handled
        if (current === index) {
          videoEl.play().catch(error => console.error(`Video ${index} play error:`, error));
        } else {
          videoEl.pause();
          // Optional: videoEl.currentTime = 0; // Reset video to start
        }
      }
    });
  }, [current]);
  
  // Autoplay plugin with 5-second interval (memoized to avoid recreation)
  const autoplayPlugin = React.useMemo(() => 
    Autoplay({ delay: 5000, stopOnInteraction: true }), 
  []);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden rounded-b-[40px]">
      <Carousel
        opts={{
          loop: true,
          align: "start"
        }}
        plugins={[autoplayPlugin]}
        setApi={setApi}
        className="w-full h-full"
      >
        <CarouselContent className="h-full">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="w-full min-h-[80vh] overflow-hidden relative">
              {/* Background: Optimize video loading */}
              <div className="absolute inset-0 bg-gray-900">
                {index === 0 ? (
                  // First slide video always loaded
                  <video
                    ref={lcpVideoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 h-full w-full object-cover"
                  >
                    <source src="/videos/Carousel_Video-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
                    <source src="/videos/Carousel_Video-desktop.mp4" type="video/mp4" media="(min-width: 769px)" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  // Only load and autoplay videos when they're current or adjacent
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    key={`video-${index}`}
                    poster={`/videos/Carousel_Video${index + 1}_poster.webp`}
                    className="absolute inset-0 h-full w-full object-cover"
                    muted
                    playsInline
                    loop
                    // Reduced preloading strategy to only load video when needed
                    preload={Math.abs(current - index) <= 1 || 
                             (current === 0 && index === heroSlides.length - 1) || 
                             (current === heroSlides.length - 1 && index === 0) 
                              ? "auto" : "metadata"}
                    // Only autoplay when it's the current slide
                    autoPlay={current === index}
                  >
                    {index === 1 && (
                      <>
                        <source src="/videos/Carousel_Video2-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
                        <source src="/videos/Carousel_Video2-desktop.mp4" type="video/mp4" media="(min-width: 769px)" />
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <source src="/videos/Carousel_Video3-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
                        <source src="/videos/Carousel_Video3-desktop.mp4" type="video/mp4" media="(min-width: 769px)" />
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <source src="/videos/Carousel_Video4-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
                        <source src="/videos/Carousel_Video4-desktop.mp4" type="video/mp4" media="(min-width: 769px)" />
                      </>
                    )}
                    Your browser does not support the video tag.
                  </video>
                )}
                <div className={`absolute inset-0 ${slide.overlayClass}`}></div>
              </div>
              
              {/* Slide Content */}
              <div className="relative z-10 flex items-center h-full">
                <div className="container mx-auto px-6">
                  <div className="max-w-4xl px-0 md:pl-12 lg:pl-24 flex flex-col items-start pt-12 sm:pt-16 md:pt-20">
                    <div className="mb-10 sm:mb-8 w-full">
                      {/* Title with lines animated separately */}
                      <motion.div
                        key={`title-${index}`}
                        initial="hidden"
                        animate={current === index ? "visible" : "hidden"}
                        variants={containerVariants}
                        className={`${mobileCarouselClassNames.titleContainer} ${index === 2 ? mobileCarouselClassNames.lastSlideFix : ''}`}
                      >
                        {/* Use titleLines array for display */}
                        {slide.titleLines.map((line, lineIndex) => (
                          <motion.div 
                            key={`line-${lineIndex}`}
                            variants={itemVariants}
                            className={mobileCarouselClassNames.titleLine}
                            style={{
                              wordBreak: 'break-word',
                              hyphens: 'auto',
                            }}
                          >
                            {line}
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                    
                    {/* CTA Button using the standardized component */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{
                        opacity: current === index ? 1 : 0,
                        y: current === index ? 0 : 30
                      }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-left w-full"
                    >
                      <CTAButton
                        text={slide.buttonText}
                        link={slide.buttonLink}
                        variant="secondary"
                        size="lg"
                        className="
                          bg-white text-enablr-navy hover:bg-enablr-navy hover:text-white hover:border hover:border-white shadow-sm hover:shadow-md group transition-all duration-300 rounded-md
                          inline-flex items-center justify-center
                          min-h-[44px]
                          px-6 sm:px-8
                          py-2 sm:py-2.5
                          text-base
                          font-medium
                          mx-0
                        "
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselProgressBar
          api={api}
          totalSlides={heroSlides.length}
          currentSlide={current}
        />
      </Carousel>
      
      {/* Add CSS via style tag with proper TypeScript compatibility */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* Small mobile devices */
            @media (max-width: 374px) {
              .last-slide-fix .carousel-title-line {
                margin-bottom: 6px !important;
                line-height: 1 !important;
              }
            }
          `
        }}
      />
    </section>
  );
}