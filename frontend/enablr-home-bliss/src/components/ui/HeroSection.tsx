import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

interface HeroSectionProps {
  title: string | ReactNode;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  flipImage?: boolean;
  primaryColor?: string;
  customMobilePosition?: string;
  customDesktopPosition?: string;
  mobileZoom?: string;
  enableKenBurns?: boolean;
}

/**
 * Reusable hero section component based on Enablr's hero styling guide
 * @see /src/styles/guides/HeroStylingGuide.md for detailed specifications
 */
const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  image,
  ctaText,
  ctaLink,
  flipImage = false,
  primaryColor = "#0D214F",
  customMobilePosition = "center 60%",
  customDesktopPosition = "center 40%",
  mobileZoom = "180% auto",
  enableKenBurns = false,
}) => {
  const handleInternalScroll = () => {
    const targetId = ctaLink.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn(`Target element with ID "${targetId}" not found.`);
    }
  };

  const isInternalLink = ctaLink.startsWith("#");

  return (
    <section className="relative h-[40vh] md:h-[80vh] rounded-b-[48px] overflow-hidden">
      {enableKenBurns && (
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
          `
        }} />
      )}
      
      {/* Background image container - Apply Ken Burns, rounding, and overflow */}
      <div className={`absolute inset-0 z-0 ${enableKenBurns ? 'ken-burns-bg' : ''} rounded-b-[48px] overflow-hidden`}>
        {/* Mobile image */}
        <div className={`block md:hidden w-full h-full`}>
          <img
            src={image}
            alt="Hero background"
            className="w-full h-full object-cover"
            style={{
              transform: flipImage ? "scaleX(-1)" : "none",
              objectPosition: customMobilePosition,
              objectFit: "cover",
              width: mobileZoom.startsWith('180%') ? '180%' : '100%',
              height: 'auto',
              maxWidth: 'none',
            }}
          />
        </div>
        
        {/* Desktop image */}
        <div className={`hidden md:block w-full h-full`}>
          <img
            src={image}
            alt="Hero background"
            className="w-full h-full object-cover"
            style={{
              transform: flipImage ? "scaleX(-1)" : "none",
              objectPosition: customDesktopPosition,
              objectFit: "cover",
            }}
          />
        </div>
        
        {/* Base overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Gradient overlay - only on the left side */}
        <div 
          className="absolute inset-0 bg-gradient-to-r to-transparent sm:w-[60%] md:w-[50%] lg:w-[40%]"
          style={{
            backgroundImage: `linear-gradient(to right, ${primaryColor}E6, ${primaryColor}99, transparent)`
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
              {typeof title === 'string' ? (
                <h1 
                  className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-2 md:mb-4"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              ) : (
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-2 md:mb-4">
                  {title}
                </h1>
              )}
              
              <p 
                className="text-base md:text-lg text-white/90 mb-4 md:mb-8 max-w-lg"
                dangerouslySetInnerHTML={{ __html: description }}
              />
              
              <CTAButton 
                text={ctaText} 
                link={isInternalLink ? "#" : ctaLink}
                onClick={isInternalLink ? handleInternalScroll : undefined}
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

export default HeroSection; 