
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { typography } from "@/styles/typography";

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
}

const PillarCard = ({ icon, title }: PillarCardProps) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="h-full p-6 rounded-xl border border-gray-200 bg-white hover:border-enablr-dark-blue hover:shadow-lg transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 rounded-full border-2 border-enablr-dark-blue/10 bg-white">
          {icon}
        </div>
        
        <h3 className={cn(
          typography.h4,
          "text-enablr-dark-blue font-semibold"
        )}>
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

export default PillarCard;
