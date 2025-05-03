import React from "react";
import { motion } from "framer-motion";
import Image from "@/components/Image";
import { typography } from "@/styles/typography";
import { TextStyled } from "@/components/ui/TextStyled";
import { ResponsiveBreak } from "@/components/ui/ResponsiveBreak";

interface WhyChooseUsCardProps {
  image: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const WhyChooseUsCard = ({ image, title, description, icon, index }: WhyChooseUsCardProps) => {
  // Split title if it contains spaces for potential line breaks
  const needsLineBreak = title.length > 25;
  const words = title.split(' ');
  const midpoint = Math.ceil(words.length / 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>
      
      <div className="p-6 relative">
        <div className="text-enablr-purple mb-4">
          {icon}
        </div>
        <div className="relative">
          <TextStyled 
            variant="h4" 
            className="mb-3 group-hover:text-gradient-start transition-colors duration-300 break-words hyphens-auto"
            color="text-enablr-navy"
            casing="titleCase"
          >
            {needsLineBreak ? (
              <>
                {words.slice(0, midpoint).join(' ')}
                <ResponsiveBreak breakOn="lg" />
                {words.slice(midpoint).join(' ')}
              </>
            ) : title}
          </TextStyled>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-enablr-purple to-gradient-start origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </div>
        <TextStyled 
          variant="body" 
          color="text-gray-600"
          casing="sentenceCase"
        >
          {description}
        </TextStyled>
      </div>
    </motion.div>
  );
};

export default WhyChooseUsCard;

