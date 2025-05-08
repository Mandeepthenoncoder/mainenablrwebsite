import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import HeroSection from "@/components/ui/HeroSection";

const AboutHero = () => {
  return (
    <>
      {/* Use the improved HeroSection component */}
      <HeroSection
        title="Your trusted partner for building and scaling GCCs"
        description="Solutions aligned to your processes, platforms, and pace"
        image="/About_us/Overview/Overview_hero.jpg"
        primaryColor="#0D214F"
        customMobilePosition="center 60%"
        customDesktopPosition="center 40%"
        enableKenBurns={true}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-16 gap-y-12">
            <div className="md:col-span-12">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <p className={`${typography.body.lg} text-gray-600 leading-relaxed font-medium tracking-normal text-3xl md:text-3xl max-w-6xl mx-auto`}>
                  At Enablr, we bring together talent, technology expertise, and strategic insight to help you build, scale, and optimize your GCC journey.
                  <br />
                  <br />
                  As a Covasant company, we operate with a foundation of competency, collaboration, and integrity, earning trust through every stage of the journey.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
