import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { typography } from "@/styles/typography";
import { cn } from "@/lib/utils";

const CareerHero = () => {
  // Animation variants for single headline with individual words
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Function to handle smooth scrolling to job openings section
  const scrollToJobOpenings = (e: React.MouseEvent) => {
    e.preventDefault();
    const jobOpeningsSection = document.getElementById('job-openings');
    if (jobOpeningsSection) {
      jobOpeningsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/public/Careers/Careers_hero.jpg"
          alt="Careers at Enablr"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-enablr-navy/90 to-transparent"></div>
        
        
        
        {/* Decorative gradient blob */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-red-400/20 to-orange-400/20 blur-3xl opacity-60"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-center items-center">
        <div className="max-w-4xl text-center">
          {/* Single line animated headline */}
          <motion.h1 
            className={cn(typography.hero, "text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-8")}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={item} className="inline-block mr-2 md:mr-4">Innovate.</motion.span>
            <motion.span variants={item} className="inline-block mr-2 md:mr-4">Grow.</motion.span>
            <motion.span variants={item} className="inline-block">Lead.</motion.span>
          </motion.h1>
          
          {/* Subtitle with delayed animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="mb-8"
          >
            <p className={cn(typography.body.lg, "text-white text-xl md:text-2xl font-light")}>
              Explore opportunities and grow with us.
            </p>
          </motion.div>
          
          {/* CTA Button with delayed animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.3 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-enablr-navy hover:bg-white/90 hover:scale-105 transition-transform duration-300 shadow-lg"
              onClick={scrollToJobOpenings}
            >
              View Opportunities
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative accent line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 2.5, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-red-500 origin-left"
      />
    </section>
  );
};

export default CareerHero;
