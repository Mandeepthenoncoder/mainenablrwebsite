
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { typography } from "@/styles/typography";

const HeroSolutions = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#4A154B] to-[#2D0A2E] min-h-[60vh] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className={`${typography.hero} text-white mb-4 md:mb-6`}>
            Explore our end-to-end GCC solutions
          </h1>
          <p className={`text-base md:text-lg text-white/90 mb-6 md:mb-8`}>
            Enablr offers a wide range of flexible solutions to help businesses set up their global capability centers in India. Our domain-agnostic modular solutions accelerate the setting up of your fully-functional capability center, enabling you to work with the same tools and platforms that you currently use.
          </p>
          <Button 
            variant="secondary"
            size="lg"
            className="bg-white text-[#4A154B] hover:bg-gray-100"
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSolutions;
