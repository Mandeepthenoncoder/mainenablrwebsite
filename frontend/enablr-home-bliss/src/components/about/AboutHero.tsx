import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { CTAButton } from "@/components/ui/CTAButton";

const AboutHero = () => {
  return (
    <>
      {/* Hero Section - Following Enablr's Hero Styling Guide */}
      <section className="relative h-[32vh] md:h-[64vh] overflow-hidden">
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes kenBurns {
              0% { transform: scale(1); }
              50% { transform: scale(1.1); }
              100% { transform: scale(1); }
            }
            .ken-burns-bg {
              animation: kenBurns 10s ease-in-out infinite;
            }
          `
        }} />
      
        {/* Background container with rounded corners */}
        <div className="absolute inset-0 rounded-b-[48px] overflow-hidden">
          {/* Background image container with proper overflow handling */}
          <div className="absolute inset-0 z-0 ken-burns-bg">
            {/* Mobile image */}
            <div className="block md:hidden w-full h-full">
              <img
                src="/images/About us hero bg.jpg"
                alt="Enablr about us hero"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: "center 60%",
                  width: '180%',
                  height: 'auto',
                  maxWidth: 'none',
                }}
              />
            </div>
            
            {/* Desktop image */}
            <div className="hidden md:block w-full h-full">
              <img
                src="/images/About us hero bg.jpg"
                alt="Enablr about us hero"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: "center 40%",
                }}
              />
            </div>
            
            {/* Base overlay */}
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Gradient overlay - only on the left side */}
            <div 
              className="absolute inset-0 bg-gradient-to-r to-transparent sm:w-[60%] md:w-[50%] lg:w-[40%]"
              style={{
                backgroundImage: `linear-gradient(to right, #0D214FE6, #0D214F99, transparent)`
              }}
            ></div>
          </div>
        </div>
        
        {/* Content container */}
        <div className="absolute inset-0 flex items-center z-10 rounded-b-[48px]">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-2 md:mb-4">
                  Your trusted partner for building and scaling GCCs
                </h1>
                
                <p className="text-base md:text-lg text-white/90 mb-4 md:mb-8 max-w-lg">
                  Solutions aligned to your processes, platforms, and pace
                </p>
                
                
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Add some spacing after the hero */}
      <div className="mb-12"></div>
      
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
