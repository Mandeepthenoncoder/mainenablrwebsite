import React from "react";
import { typography } from "@/styles/typography";

interface SectionTitleProps {
  gradientWord: string;
  children: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ gradientWord, children, className = "" }) => {
  // Remove the gradientWord from the children for the rest of the sentence
  const rest = children.startsWith(gradientWord)
    ? children.slice(gradientWord.length)
    : children;

  return (
    <h2 className={`${typography.h2} text-center my-8 mx-6 ${className}`}>
      <span className="font-bold bg-gradient-to-r from-[#EC4630] to-[#19214F] bg-clip-text text-transparent">
        {gradientWord}
      </span>
      {rest}
    </h2>
  );
};

export default SectionTitle; 