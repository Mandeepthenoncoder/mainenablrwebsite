import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { typography } from "@/styles/typography";
import Autoplay from "embla-carousel-autoplay";
import type { CarouselApi } from "@/components/ui/carousel";

interface Slide {
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

interface WorkspaceSolutionHeroCarouselProps {
  slides: Slide[];
}

const WorkspaceSolutionHeroCarousel = ({ slides }: WorkspaceSolutionHeroCarouselProps) => {
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
                    <h1 className={`${typography.hero} text-white mb-6 text-shadow-lg`} 
                        style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
                      {slide.title}
                    </h1>
                    <p className={`${typography.heroSubtitle} text-white/90 mb-8`}
                        style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
                      {slide.description}
                    </p>
                    <Button 
                      size="lg"
                      className= "bg-white text-enablr-navy hover:bg-enablr-navy hover:text-white hover:border hover:border-white shadow-sm hover:shadow-md group transition-all duration-300 rounded-md"
                      asChild
                    >
                      <a href={slide.ctaLink}>{slide.ctaText}</a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="absolute bottom-8 w-full z-20">
          <div className="container mx-auto px-6 flex justify-end items-center">
            <div className="flex gap-4">
              <CarouselPrevious className="static translate-y-0 bg-white text-purple-900 hover:bg-white" />
              <CarouselNext className="static translate-y-0 bg-white text-purple-900 hover:bg-white" />
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default WorkspaceSolutionHeroCarousel; 