import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { typography } from "@/styles/typography";
import Image from "@/components/Image";

interface EnablrLifeCardProps {
  image: string;
  title: string;
  description: string;
}

const EnablrLifeCard: React.FC<EnablrLifeCardProps> = ({ 
  image,
  title,
  description
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden group relative h-full flex flex-col">
      {/* Top accent line with gradient hover */}
      <div className="absolute top-0 left-0 w-full h-1 z-10 bg-enablr-navy opacity-70 group-hover:bg-gradient-to-r group-hover:from-blue-800 group-hover:to-red-600 transition-colors duration-300"></div>
      
      {/* Decorative corner gradient */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-red-50 rounded-tl-[80px] -mr-16 -mb-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
      
      {/* Image section */}
      <div className="h-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-enablr-navy/30 to-transparent z-[2]"></div>
        <Image 
          src={image} 
          alt={title}
          width={400}
          height={200}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Content section */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className={cn(typography.h4, "text-enablr-navy group-hover:text-enablr-navy transition-colors duration-300 mb-3")}>
          {title}
        </h3>
        <p className={cn(typography.body.base, "text-gray-600 leading-relaxed font-light")}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default EnablrLifeCard; 