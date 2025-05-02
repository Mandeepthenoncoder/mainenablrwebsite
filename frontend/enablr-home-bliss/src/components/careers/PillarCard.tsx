import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { typography } from "@/styles/typography";

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PillarCard: React.FC<PillarCardProps> = ({ 
  icon,
  title,
  description
}) => {
  return (
    <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden group relative h-full flex flex-col">
      {/* Top accent line with gradient hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-enablr-navy opacity-70 group-hover:bg-gradient-to-r group-hover:from-blue-800 group-hover:to-red-600 transition-colors duration-300"></div>
      
      {/* Decorative corner gradient */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-red-50 rounded-tl-[80px] -mr-16 -mb-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Icon with card content */}
      <div className="flex items-start gap-4 h-full">
        <div className="relative w-14 h-14 flex-shrink-0">
          <div className="absolute inset-0 bg-enablr-navy/10 rounded-lg"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-red-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center text-enablr-navy group-hover:text-enablr-navy/80 transition-colors duration-300">
            {icon}
          </div>
        </div>
        
        <div className="flex-1 flex flex-col">
          <h3 className={cn(typography.h4, "text-enablr-navy group-hover:text-enablr-navy transition-colors duration-300 mb-3")}>
            {title}
          </h3>
          <p className={cn(typography.body.base, "text-gray-600 leading-relaxed font-light")}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PillarCard;
