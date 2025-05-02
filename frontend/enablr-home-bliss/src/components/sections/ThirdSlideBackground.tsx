import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface ThirdSlideBackgroundProps {
  image: string;
}

const ThirdSlideBackground: React.FC<ThirdSlideBackgroundProps> = ({ image }) => {
  // Force a new image URL with a timestamp to avoid caching
  // Handle both local and Supabase URLs
  const imageUrl = image.includes('supabase') 
    ? image  // For Supabase URLs, don't add timestamp
    : `${image}?t=${Date.now()}`; // For local files, add timestamp
  
  // Determine which object position to use based on the image URL
  const objectPosition = image.includes('hero-slide-3.png') 
    ? 'center 35%' 
    : 'center 35%'; // Default position
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.img
        src={imageUrl}
        alt="Carousel slide 3"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: objectPosition
        }}
      />
    </div>
  );
};

export default ThirdSlideBackground; 