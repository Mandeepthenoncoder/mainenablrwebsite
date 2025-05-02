
import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { Button } from "@/components/ui/button";

const TechnologyHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#4A154B] to-[#2D0A2E] min-h-[60vh] flex items-center">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className={`${typography.h1} text-white mb-6`}>
            Technology Enablement Solutions
          </h1>
          <p className={`${typography.body.lg} text-white/90 mb-8`}>
            At Enablr, we can help you leverage technology to set up your global capability center successfully. Whether you are streamlining business operations, enhancing customer experience, or driving innovation, we offer tailored technology solutions that align with your business goals and help you scale your capability center.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-enablr-navy hover:bg-white/90"
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyHero;
