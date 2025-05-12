import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { typography } from "@/styles/typography";

interface PageCTAProps {
  title: string;
  buttonText?: string;
  buttonLink?: string;
}

const PageCTA = ({ 
  title, 
  buttonText = "Get started",
  buttonLink = "/contact" 
}: PageCTAProps) => {
  return (
    <section className="py-16 m-6 px-4 bg-enablr-navy relative overflow-hidden">
      
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center relative z-10 max-w-4xl"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${typography.h2} text-white mb-12 leading-normal`}
        >
          {title}
        </motion.h2>
        
        
        <Button 
          asChild
          size="lg"
            className="bg-white text-enablr-navy hover:bg-enablr-navy hover:text-white hover:border hover:border-white shadow-sm hover:shadow-md group transition-all duration-300 rounded-md"
        >
            <Link to={buttonLink} className="flex items-center gap-2">
              {buttonText}
            </Link>
        </Button>
        </motion.div>
     
    </section>
  );
};

export default PageCTA;
