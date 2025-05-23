import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { typography } from "@/styles/typography";
import Autoplay from "embla-carousel-autoplay";
import type { CarouselApi } from "@/components/ui/carousel";
import { TextStyled } from "@/components/ui/TextStyled";
import { ResponsiveBreak } from "@/components/ui/ResponsiveBreak";
import { CTAButton } from "@/components/ui/CTAButton";

interface Slide {
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

interface SolutionHeroCarouselProps {
  slides: Slide[];
}

const SolutionHeroCarousel = ({ slides }: SolutionHeroCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  
  const plugin = Autoplay({ delay: 5000, stopOnInteraction: true });
  
  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);
  
  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    onSelect();
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section className="relative min-h-[80vh] rounded-b-[48px] overflow-hidden">
      <Carousel className="w-full h-full" setApi={setApi} plugins={[plugin]} opts={{ loop: true }}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative min-h-[80vh]">
              <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center bottom",
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-r from-enablr-navy/90 via-enablr-navy/75 to-black/60 z-[1]"></div>
              
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="max-w-2xl"
                  >
                    <TextStyled 
                      variant="hero" 
                      className="mb-6"
                      color="text-white"
                      casing="titleCase"
                      as="h1"
                    >
                      {slide.title.split(' ').slice(0, -1).join(' ')} <ResponsiveBreak breakOn="md" />
                      {slide.title.split(' ').slice(-1)}
                    </TextStyled>
                    
                    {slide.description && (
                      <TextStyled 
                        variant="heroSubtitle" 
                        className="mb-8"
                        color="text-white/90"
                        casing="sentenceCase"
                      >
                        {slide.description}
                      </TextStyled>
                    )}
                    
                    
                  </motion.div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        
      </Carousel>
    </section>
  );
};

export default SolutionHeroCarousel;
