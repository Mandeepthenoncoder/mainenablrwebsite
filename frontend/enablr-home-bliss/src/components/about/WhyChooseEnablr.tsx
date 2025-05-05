import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhyChooseEnablr = () => {
  return (
    <section className="py-16 md:py-28 relative overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(45deg,rgba(0,0,0,0.05)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.05)_50%,rgba(0,0,0,0.05)_75%,transparent_75%,transparent)] bg-[length:64px_64px]"></div>
      </div>
      
      {/* Top decorative element */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      
      {/* Content container with relative positioning */}
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-16 gap-y-12">
          {/* Left column with headline text */}
          <div className="md:col-span-5 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-3"
            >
              <h2 className={typography.h2}>
        <span className="font-bold bg-gradient-to-r from-[#EC4630] to-[#19214F] bg-clip-text text-transparent">Why</span> Choose Enablr
      </h2>

            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <p className={`${typography.body.base} text-gray-800 font-medium tracking-tight`}>
                Designed for leaders who need speed, trust-worthy partnership, and results
              </p>
              {/* Accent underline */}
              <div className="h-px w-16 bg-enablr-navy mt-6 mb-8"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                asChild
                size="lg"
                className="bg-enablr-navy text-white hover:bg-white hover:text-enablr-navy hover:border hover:border-enablr-navy shadow-sm hover:shadow-md group transition-all duration-300 rounded-md mt-5"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Get started
                </Link>
              </Button>
            </motion.div>
          </div>
          
          {/* Right column with content */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <h3 className={`${typography.h4} text-enablr-navy tracking-tight font-light text-lg md:text-xl`}>
                Your growth partner in building smarter, faster, future-ready GCCs
              </h3>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              <p className={`${typography.body.base} text-gray-600 leading-relaxed font-light`}>
                At Enablr, we partner with enterprises to build GCCs that deliver measurable business outcomes. Our approach goes beyond cost and efficiency. We enable capability centers that evolve with your strategy and integrate seamlessly with your enterprise.
              </p>
              
              <p className={`${typography.body.base} text-gray-600 leading-relaxed font-light`}>
                With a foundation of execution expertise and leadership experience, we help you move fast; whether you're scaling into new markets, building specialized teams, or transforming operations through technology.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  );
};

export default WhyChooseEnablr; 