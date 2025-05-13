import React, { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getImagePath, getResponsiveSrcSet } from "@/utils/imageUtils";

interface HeroSectionProps {
  title: string | ReactNode;
  description?: string;
  descriptionClassName?: string;
  image: string;
  imageOffsetY?: string;
  ctaText?: string;
  ctaLink?: string;
  flipImage?: boolean;
  primaryColor?: string;
  customMobilePosition?: string;
  customDesktopPosition?: string;
  mobileZoom?: string;
  enableKenBurns?: boolean;
  centerContent?: boolean;
  buttonClassName?: string;
  mobileTextContainerClass?: string;
}

/**
 * Reusable hero section component based on Enablr's hero styling guide
 * @see /src/styles/guides/HeroStylingGuide.md for detailed specifications
 */
const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description = "",
  descriptionClassName,
  image,
  ctaText = "",
  ctaLink = "",
  flipImage = false,
  
  primaryColor = "#0D214F",
  customMobilePosition = "center 60%",
  customDesktopPosition = "center 40%",
  mobileZoom = "180% auto",
  enableKenBurns = false,
  centerContent = false,
  buttonClassName = "px-6 py-3 bg-white text-enablr-navy hover:bg-enablr-navy hover:text-white border border-transparent hover:border-white transition-all duration-300 rounded-md font-medium",
  mobileTextContainerClass = "",
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState("");
  const [currentSrcSet, setCurrentSrcSet] = useState("");
  const [imageError, setImageError] = useState(false);
  
  // Process image path
  useEffect(() => {
    if (!image) return;
    
    let processedPath = image;
    if (!image.startsWith("http") && !image.startsWith("/")) {
      processedPath = `/${image}`;
    }

    try {
      const defaultSrc = getImagePath ? getImagePath(processedPath, true, true) : processedPath;
      setCurrentSrc(defaultSrc);

      // Use getResponsiveSrcSet to populate currentSrcSet
      const responsiveSrcSet = getResponsiveSrcSet ? getResponsiveSrcSet(processedPath) : "";
      setCurrentSrcSet(responsiveSrcSet);
      
      // Preload image (the fallback src)
      const preloadImage = new Image();
      preloadImage.src = defaultSrc;
      preloadImage.onload = () => setImageLoaded(true);
      preloadImage.onerror = (err) => {
        console.error(`Failed to load image: ${defaultSrc}`, err);
        setImageError(true);
      };
    } catch (error) {
      console.error("Error processing image path:", error);
      const fallbackPath = !image.startsWith("http") && !image.startsWith("/") ? `/${image}` : image;
      setCurrentSrc(fallbackPath);
      setCurrentSrcSet(""); // Clear srcset on error
      setImageError(true); // Ensure fallback UI is triggered
    }
  }, [image]);

  const handleInternalScroll = () => {
    if (!ctaLink) return;
    
    const targetId = ctaLink.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn(`Target element with ID "${targetId}" not found.`);
    }
  };

  const isInternalLink = ctaLink?.startsWith("#") || false;

  return (
    <div className="mb-0">
      <section className="relative h-[50vh] md:h-[64vh] overflow-hidden">
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
              /* Fix for mobile image containment */
              @media (max-width: 768px) {
                .hero-image-container img {
                  height: 100% !important;
                  width: 100% !important;
                  object-fit: cover !important;
                }
              }
            `
          }} />
        )}
        
        {/* Background container with rounded corners */}
        <div className="absolute inset-0 rounded-b-[30px] md:rounded-b-[48px] overflow-hidden">
          {/* Background image container with proper overflow handling */}
          <div className={`absolute inset-0 z-0 ${enableKenBurns ? 'ken-burns-bg' : ''}`}>
            {/* Mobile image */}
            <div className="block md:hidden w-full h-full overflow-hidden hero-image-container">
              {currentSrc && (
                <img
                  src={currentSrc}
                  srcSet={currentSrcSet}
                  sizes="100vw"
                  alt="Hero background"
                  className="w-full h-full object-cover brightness-60"
                  style={{
                    transform: flipImage ? "scaleX(-1)" : "none",
                    objectPosition: customMobilePosition,
                  }}
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    console.error("Error loading mobile hero image:", e);
                    setImageError(true);
                  }}
                />
              )}
              
              {/* Fallback if image fails to load */}
              {imageError && (
                <div 
                  className="w-full h-full bg-gradient-to-b from-gray-700 to-gray-900"
                  style={{ objectPosition: customMobilePosition }}
                />
              )}
            </div>
            
            {/* Desktop image */}
            <div className="hidden md:block w-full h-full">
              {currentSrc && (
                <img
                  src={currentSrc}
                  srcSet={currentSrcSet}
                  sizes="100vw"
                  alt="Hero background"
                  className="w-full h-full object-cover brightness-70"
                  style={{
                    transform: flipImage ? "scaleX(-1)" : "none",
                    objectPosition: customDesktopPosition,
                  }}
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    console.error("Error loading desktop hero image:", e);
                    setImageError(true);
                  }}
                />
              )}
              
              {/* Fallback if image fails to load */}
              {imageError && (
                <div 
                  className="w-full h-full bg-gradient-to-b from-gray-700 to-gray-900"
                  style={{ objectPosition: customDesktopPosition }}
                />
              )}
            </div>
            
            {/* Base overlay with strong darkening */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Gradient overlay for text contrast */}
            <div 
              className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"
            ></div>
          </div>
        </div>
        
        {/* Content container - centered */}
        <div className="absolute inset-0 flex flex-col justify-center z-10 rounded-b-[30px] md:rounded-b-[48px]">
          <div className="container mx-auto px-5 sm:px-6 md:px-8">
            {/* Apply new class conditionally for mobile, reset on md and up */}
            <div className={`${centerContent ? 'mx-auto text-center' : ''} max-w-2xl ${mobileTextContainerClass ? `${mobileTextContainerClass} md:pt-0` : ''}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={centerContent ? 'text-center' : 'text-left'}
              >
                {typeof title === 'string' ? (
                  <h1 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-normal text-nowrap  textmb-3 md:mb-4"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                ) : (
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-nowrap  mb-3 md:mb-4">
                    {title}
                  </h1>
                )}
                
                {description && (
                  <p 
                    className={`text-lg md:text-lg text-white mt-3 max-w-lg font-light ${descriptionClassName || ''}`}
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection; 