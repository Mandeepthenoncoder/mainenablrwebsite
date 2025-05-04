import React from "react";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

interface TechHeroSectionProps {
  image: string;
}

/**
 * Technology Enablement Hero Section in a completely new directory
 */
const TechHeroSection: React.FC<TechHeroSectionProps> = ({ 
  image 
}) => {
  return (
    <section className="relative h-[40vh] md:h-[80vh] rounded-b-[48px] overflow-hidden">
      {/* Ken Burns animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes kenBurns {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          .ken-burns-bg {
            animation: kenBurns 10s ease-in-out infinite;
          }
          
          /* Custom styles for title line breaks */
          .title-line {
            display: block !important;
            width: 100% !important;
            white-space: nowrap !important;
            overflow: visible !important;
          }
          
          .title-container {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
          }
        `
      }} />
      
      {/* Background image container */}
      <div className="absolute inset-0 z-0">
        {/* Mobile image */}
        <div className="block md:hidden w-full h-full ken-burns-bg">
          <img
            src={image}
            alt="Technology Enablement background"
            className="w-full h-full object-cover"
            style={{
              transform: "scaleX(-1)",
              objectPosition: "center 50%",
              objectFit: "cover",
              width: "180%",
              height: "auto",
              maxWidth: "none",
            }}
          />
        </div>
        
        {/* Desktop image */}
        <div className="hidden md:block w-full h-full ken-burns-bg">
          <img
            src={image}
            alt="Technology Enablement background"
            className="w-full h-full object-cover"
            style={{
              transform: "scaleX(-1)",
              objectPosition: "center 35%",
              objectFit: "cover",
            }}
          />
        </div>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-gradient-to-r to-transparent sm:w-[60%] md:w-[50%] lg:w-[40%]"
          style={{
            backgroundImage: "linear-gradient(to right, #0D214FE6, #0D214F99, transparent)"
          }}
        ></div>
      </div>
      
      {/* Content container */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Title with extreme styling to force line breaks */}
              <div className="title-container">
                <span 
                  className="title-line text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white" 
                >
                  Technology Enablement
                </span>
                <span 
                  className="title-line text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 md:mb-4" 
                >
                  Solutions
                </span>
              </div>
              
              <p className="text-base md:text-lg text-white/90 mb-4 md:mb-8 max-w-lg">
                Leverage technology to power your capability center
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

export default TechHeroSection; 