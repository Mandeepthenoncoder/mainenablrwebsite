import React, { useState, useCallback, useEffect } from "react";
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
import CarouselThumbnailStrip from "@/components/ui/CarouselThumbnailStrip";

// Define the hero slide content with optimized WebP images
const heroSlides = [
  {
    imageSrc: "/images/supabase-images/optimized/hero-slide-1.webp",
    srcset: "/images/supabase-images/optimized/hero-slide-1-small.webp 640w, /images/supabase-images/optimized/hero-slide-1-medium.webp 1280w, /images/supabase-images/optimized/hero-slide-1-large.webp 1920w",
    title: "Build on Proven Experience\nand Enterprise-Grade Quality",
    buttonText: "Get Started Today",
    buttonLink: "/contact",
    overlayClass: "bg-black bg-opacity-40"
  },
  {
    imageSrc: "/images/supabase-images/optimized/hero-slide-2.webp",
    srcset: "/images/supabase-images/optimized/hero-slide-2-small.webp 640w, /images/supabase-images/optimized/hero-slide-2-medium.webp 1280w, /images/supabase-images/optimized/hero-slide-2-large.webp 1920w",
    title: "Realize your GCC Success\nwith Speed and Scale",
    buttonText: "Speak To Our Experts",
    buttonLink: "/contact",
    overlayClass: "bg-black bg-opacity-40"
  },
  {
    imageSrc: "/images/lot 2/optimized/CarouselImage3-Home.webp",
    srcset: "/images/lot 2/optimized/CarouselImage3-Home-small.webp 640w, /images/lot 2/optimized/CarouselImage3-Home-medium.webp 1280w, /images/lot 2/optimized/CarouselImage3-Home-large.webp 1920w",
    title: "Accelerate your Setup\nwith Expert Talent and Seamless Execution",
    buttonText: "Connect Now",
    buttonLink: "/contact",
    overlayClass: "bg-gradient-to-b from-black/80 via-black/50 to-black/40"
  }
];

export default function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  
  // Select handler to track the current slide
  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);
  
  // Initialize the API and set up event listeners
  useEffect(() => {
    if (!api) return;
    
    // Set up the select event handler
    api.on("select", onSelect);
    onSelect();
    
    // Force a reinitialization after component mount to ensure proper layout
    const timer = setTimeout(() => {
      api.reInit();
      console.log("Carousel reinitialized");
    }, 500);
    
    return () => {
      api.off("select", onSelect);
      clearTimeout(timer);
    };
  }, [api, onSelect]);
  
  // Autoplay plugin with 5-second interval
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
              {/* Background: Use video for each slide */}
              <div className="absolute inset-0 bg-gray-900">
                <>
                  <video
                    // Use specific video based on index
                    src={
                      index === 0 ? "/Carousel_Video.mp4" :
                      index === 1 ? "/Carousel_Video2.mp4" :
                      index === 2 ? "/Carousel_Video3.mp4" : // Assuming path for slide 3
                      "" // Fallback if no video is found
                    }
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className={`absolute inset-0 ${slide.overlayClass}`}></div>
                </>
              </div>
              
              {/* Slide Content */}
              <div className="relative z-10 flex items-center h-full">
                <div className="container mx-auto px-6">
                  <div className="max-w-4xl px-0 md:pl-12 lg:pl-24 flex flex-col items-start">
                    <div className="mb-10 sm:mb-8 w-full">
                      {/* Title with lines animated separately */}
                      <motion.div
                        key={`title-${index}`}
                        initial="hidden"
                        animate={current === index ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="text-left w-full"
                      >
                        {slide.title.split('\n').map((line, lineIndex) => (
                          <motion.div 
                            key={`line-${lineIndex}`}
                            variants={itemVariants}
                            className="
                              text-white font-semibold 
                              leading-normal tracking-normal 
                              text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                              mb-2 text-left break-words max-w-full px-1 sm:px-0 whitespace-pre-line
                            "
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
                        className={`
                          bg-white text-enablr-navy hover:bg-enablr-navy hover:text-white hover:border hover:border-white shadow-sm hover:shadow-md group transition-all duration-300 rounded-md
                          inline-flex items-center justify-center
                          min-h-[44px]
                          px-6 sm:px-8
                          py-2 sm:py-2.5
                          text-base
                          font-medium
                          mx-0
                        `}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselThumbnailStrip
          api={api}
          slides={heroSlides}
          currentSlide={current}
        />

      </Carousel>
    </section>
  );
}
