import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { typography } from "@/styles/typography";
import { LucideIcon } from "lucide-react";
import { TextStyled } from "@/components/ui/TextStyled";
import { ResponsiveBreak } from "@/components/ui/ResponsiveBreak";
import React from "react";

interface Offering {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface SolutionKeyOfferingsProps {
  title: string;
  offerings: Offering[];
}

const SolutionKeyOfferings = ({ title, offerings }: SolutionKeyOfferingsProps) => {
  // Helper function to ensure proper spacing when splitting titles
  const splitWithSpacing = (title: string): [string, string] => {
    const words = title.split(' ');
    const midpoint = Math.ceil(words.length / 2);
    
    // Check if we're splitting right before a connector word
    const connectors = ['and', 'or', 'of', 'in', 'by', 'for', 'to', 'with'];
    
    // If the next word after midpoint is a connector, adjust the split point
    if (midpoint < words.length && connectors.includes(words[midpoint].toLowerCase())) {
      // Include the connector in the first part to preserve spacing
      return [
        words.slice(0, midpoint + 1).join(' '), // Include connector in first part
        words.slice(midpoint + 1).join(' ')     // Rest in second part
      ];
    }
    
    return [
      words.slice(0, midpoint).join(' '),
      words.slice(midpoint).join(' ')
    ];
  };

  return (
    <section className="py-10 md:py-20 bg-enablr-navy rounded-[32px] md:rounded-[48px] px-2 md:px-6 mx-2 md:mx-6 lg:mx-[72px]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <TextStyled 
            variant="h3" 
            className="mb-4 md:mb-6 text-lg md:text-2xl"
            color="text-white"
            casing="titleCase"
          >
            {title}
          </TextStyled>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            const needsLineBreak = offering.title.length > 30;
            
            // Get split parts with proper spacing
            const [firstPart, secondPart] = needsLineBreak 
              ? splitWithSpacing(offering.title)
              : [offering.title, ''];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full relative overflow-hidden bg-transparent border border-white/10 group p-4 md:p-6">
                  <div className="absolute inset-0 bg-white transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"></div>
                  <CardHeader className="relative z-10">
                    <div className="w-8 h-8 mb-2 md:mb-3 text-white group-hover:text-black transition-colors duration-300">
                      <Icon className="w-full h-full" />
                    </div>
                    {needsLineBreak ? (
                      <div className="flex flex-col">
                        <TextStyled 
                          variant="h4" 
                          className="group-hover:text-black transition-colors duration-300 text-base md:text-lg"
                          color="text-white"
                          casing="titleCase"
                        >
                          {firstPart}
                        </TextStyled>
                        <TextStyled 
                          variant="h4" 
                          className="group-hover:text-black transition-colors duration-300 text-base md:text-lg hidden lg:block"
                          color="text-white"
                          casing="preserve"
                        >
                          {secondPart}
                        </TextStyled>
                        <TextStyled 
                          variant="h4" 
                          className="group-hover:text-black transition-colors duration-300 text-base md:text-lg lg:hidden"
                          color="text-white"
                          casing="preserve"
                        >
                          {secondPart ? ' ' + secondPart : ''}
                        </TextStyled>
                      </div>
                    ) : (
                      <TextStyled 
                        variant="h4" 
                        className="group-hover:text-black transition-colors duration-300 text-base md:text-lg"
                        color="text-white"
                        casing="titleCase"
                      >
                        {offering.title}
                      </TextStyled>
                    )}
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <TextStyled 
                      variant="body" 
                      className="group-hover:text-gray-600 transition-colors duration-300 text-sm md:text-base"
                      color="text-gray-300"
                      casing="sentenceCase"
                    >
                      {offering.description}
                    </TextStyled>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionKeyOfferings;
