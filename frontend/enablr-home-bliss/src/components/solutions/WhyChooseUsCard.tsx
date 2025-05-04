import React from "react";
import { motion } from "framer-motion";
import Image from "@/components/Image";
import { typography } from "@/styles/typography";

interface WhyChooseUsCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
}

const WhyChooseUsCard = ({
  image,
  title,
  description,
  index
}: WhyChooseUsCardProps) => {
  // Split title into two parts if it's too long (adjusted breakpoint)
  const words = title.split(' ');
  const titleLength = title.length;
  const shouldSplit = titleLength > 30;
  const midpoint = Math.ceil(words.length / 2);
  const firstHalf = shouldSplit ? words.slice(0, midpoint).join(' ') : title;
  const secondHalf = shouldSplit ? words.slice(midpoint).join(' ') : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col"
    >
      {/* Image container with 3:2 aspect ratio */}
      <div className="relative w-full pt-[66.67%]">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
        </div>
      </div>
      
      {/* Content container */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className={`${typography.h3} text-enablr-navy group-hover:text-enablr-navy/80 mb-4 transition-colors duration-300 min-h-[3.5rem] line-clamp-2`}>
          {shouldSplit ? (
            <>
              {firstHalf}<br />{secondHalf}
            </>
          ) : (
            title
          )}
        </h3>
        <p className={`${typography.body.base} text-gray-600 flex-grow line-clamp-3`}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default WhyChooseUsCard;

