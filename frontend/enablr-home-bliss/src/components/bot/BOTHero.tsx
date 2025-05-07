import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BOTHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="/public/Engagement_Models/Build-Operate-Transfer/Bot_hero.jpg"
          alt="Modern office building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-enablr-navy/90 to-enablr-navy/80" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className={`${typography.hero} text-white mb-4`}>
            Build-Operate-Transfer (B-O-T)
          </h1>
          <p className={`${typography.heroSubtitle} text-white/90 mb-8`}>
            Start strong, take over with confidence
          </p>
          <Button 
            asChild
            size="lg" 
            className="bg-white text-enablr-navy hover:bg-enablr-navy hover:text-white hover:border hover:border-white shadow-sm hover:shadow-md group transition-all duration-300 rounded-md"
          >
            <Link to="/contact">Let's Connect</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BOTHero;
