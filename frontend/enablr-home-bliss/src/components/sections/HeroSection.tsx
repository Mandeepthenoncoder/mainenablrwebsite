import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import type { CarouselApi } from "@/components/ui/carousel";
import { typography, colors } from "@/styles/typography";
import ThirdSlideBackground from "./ThirdSlideBackground";

// Third slide gets special treatment
const thirdSlideImage = "/images/lot%202/CarouselImage3-Home.jpg";
const currentTime = new Date().getTime();

const heroSlides = [
  {
    image: "https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//hero-slide-1.png",
    title: "Build on proven experience\nand enterprise-grade quality",
    buttonText: "Get Started",
    align: "left"
  },
  {
    image: "https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//hero-slide-2.png",
    title: "Realize your GCC success\nwith speed and scale",
    buttonText: "Get Started",
    align: "left"
  },
  {
    image: "/images/lot%202/CarouselImage3-Home.jpg",
    title: "Accelerate your setup\nwith expert talent and seamless execution",
    buttonText: "Get Started",
    align: "left"
  }
];

const HeroSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  
  const plugin = useMemo(() => Autoplay({
    delay: 5000,
    stopOnInteraction: true
  }), []);
  
  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);
  
  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    // Call once to set initial value
    onSelect();
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);
  
  const textRevealVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
  };
  
  const wordVariants = {
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
  
  // Function to get background position based on slide index
  const getBackgroundPosition = (index: number) => {
    if (index === 2) return "center 35%";
    return "center";
  };
  
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[75vh] md:min-h-[80vh] rounded-b-[40px] overflow-hidden"
    >
      <Carousel className="w-full h-full" opts={{ loop: true }} plugins={[plugin]} setApi={setApi}>
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="relative min-h-[75vh] md:min-h-[80vh]">
              {index === 2 ? (
                // Special handling for the third slide
                <ThirdSlideBackground image={slide.image} />
              ) : (
                // Regular handling for other slides
                <motion.div 
                  initial={{ scale: 1.2, y: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0" 
                  style={{
                    backgroundImage: `url('${slide.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                  }} 
                />
              )}
              
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40"></div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: current === index ? 1 : 0, y: current === index ? 0 : 20 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 h-full flex items-center"
              >
                <div className={`container mx-auto px-6 ${slide.align === 'center' ? 'text-center' : ''}`}>
                  <motion.h1 
                    key={`title-${current}`}
                    variants={textRevealVariants}
                    initial="hidden"
                    animate={current === index ? "visible" : "hidden"}
                    className={`${typography.hero} text-white mb-6 whitespace-pre-line ${slide.align === 'center' ? 'font-normal' : 'font-bold'}`}
                  >
                    {slide.title.split(/\s+/).map((word, i) => (
                      <motion.span 
                        key={`${word}-${i}`}
                        variants={wordVariants}
                        className="inline-block mr-[0.25em] last:mr-0"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.h1>
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: current === index ? 1 : 0, y: current === index ? 0 : 30 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Button className="btn-cta bg-white text-enablr-dark-blue hover:bg-gray-100 rounded-md shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 min-h-[52px]">
                      {slide.buttonText}
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-6 w-full z-20"
        >
          <div className="container mx-auto px-6 flex justify-end items-center">
            <div className="flex items-center gap-3">
              <CarouselPrevious className="static translate-y-0 bg-white text-enablr-dark-blue border-white hover:bg-white hover:text-enablr-dark-blue
                                       hover:scale-110 transition-transform duration-200 shadow-md" />
              <CarouselNext className="static translate-y-0 bg-white text-enablr-dark-blue border-white hover:bg-white hover:text-enablr-dark-blue
                                     hover:scale-110 transition-transform duration-200 shadow-md" />
            </div>
          </div>
        </motion.div>
      </Carousel>
    </motion.section>
  );
};

export default HeroSection;
