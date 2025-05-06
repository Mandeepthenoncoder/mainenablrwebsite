import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";

const kenBurnsStyle = {
  animation: "kenBurns 10s ease-in-out infinite"
};

const AboutHero = () => {
  return (
    <>
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
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
      
      <div className="absolute inset-0 z-0">
          <div className="ken-burns-bg w-full h-full">
        <img
              src="/images/About us hero bg.jpg"
              alt="Enablr about us hero"
          className="w-full h-full object-cover"
        />
          </div>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-12 md:py-20">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white mb-6 tracking-tight leading-tight text-5xl md:text-6xl lg:text-7xl font-bold"
        >
            Your trusted partner for building and scaling GCCs
            </motion.h1>
            
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative mb-8"
          >
              <p className="text-white/90 font-medium tracking-tight text-2xl md:text-3xl">
                Solutions aligned to your processes, platforms, and pace
            </p>
              {/* Accent underline */}
             
            </motion.div>
          </motion.div>
        </div>
      </section>
      
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
                <p className={`${typography.body.lg} text-gray-600 leading-relaxed font-medium tracking-tight text-xl md:text-2xl max-w-4xl mx-auto`}>
                  At Enablr, we bring together talent, technology expertise, and strategic insight to help you build, scale, and optimize your GCC journey. As a Covasant company, we operate with a foundation of competency, collaboration, and integrity, earning trust through every stage of the journey.
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
