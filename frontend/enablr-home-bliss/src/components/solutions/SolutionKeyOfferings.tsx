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
  return (
    <section className="py-20 bg-enablr-navy rounded-[48px] px-6 mx-6 md:mx-[72px]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <TextStyled 
            variant="h3" 
            className="mb-6"
            color="text-white"
            casing="titleCase"
          >
            {title}
          </TextStyled>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            const needsLineBreak = offering.title.length > 30;
            
            // Calculate line break position if needed
            const words = offering.title.split(' ');
            const midpoint = Math.ceil(words.length / 2);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full relative overflow-hidden bg-transparent border border-white/10 group">
                  <div className="absolute inset-0 bg-white transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"></div>
                  <CardHeader className="relative z-10">
                    <div className="w-8 h-8 mb-3 text-white group-hover:text-black transition-colors duration-300">
                      <Icon className="w-full h-full" />
                    </div>
                    <TextStyled 
                      variant="h4" 
                      className="group-hover:text-black transition-colors duration-300"
                      color="text-white"
                      casing="titleCase"
                    >
                      {needsLineBreak ? (
                        <>
                          {words.slice(0, midpoint).join(' ')}
                          <ResponsiveBreak breakOn="lg" />
                          {words.slice(midpoint).join(' ')}
                        </>
                      ) : offering.title}
                    </TextStyled>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <TextStyled 
                      variant="body" 
                      className="group-hover:text-gray-600 transition-colors duration-300"
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
