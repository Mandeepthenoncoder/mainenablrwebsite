import React from "react";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

interface Slide {
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

interface GCCHeroSectionProps {
  slide: Slide;
}

const GCCHeroSection = ({ slide }: GCCHeroSectionProps) => {
  return (
    <section className="relative h-[80vh] rounded-b-[48px] overflow-hidden">
      {/* Background image - horizontally flipped */}
      <div 
        className="absolute inset-0 bg-cover bg-top"
        style={{
          backgroundImage: `url(${slide.image})`,
          transform: "scaleX(-1)"
        }}
      />
      
      {/* Dark overlay for entire image */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Gradient overlay - only on the left side */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D214F]/80 via-[#0D214F]/40 to-transparent" style={{ width: '40%' }}></div>
      
      {/* Content container */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                GCC as a Service
              </h1>
              
              <p className="text-lg text-white/90 mb-8 max-w-lg">
                End-to-end solution to establish your<br />fully equipped global capability center.
              </p>
              
              <CTAButton 
                text="Get Started" 
                link="/contact" 
                variant="secondary"
                size="lg"
                className="bg-white text-enablr-navy hover:bg-enablr-navy hover:text-white hover:border hover:border-white shadow-sm hover:shadow-md transition-all duration-300 rounded-md"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GCCHeroSection; 