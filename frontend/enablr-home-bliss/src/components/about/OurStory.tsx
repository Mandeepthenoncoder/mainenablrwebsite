import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Image from "@/components/Image";

const OurStory = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden relative">
      {/* Dark blue background */}
      <div className="absolute inset-0 z-0 bg-enablr-navy">
        {/* Subtle dot pattern for texture */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Main content with relative positioning */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 items-center">
          {/* Left column: Story content */}
          <div className="flex flex-col">
          <motion.div
              initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-3"
          >
              <h2 className={`${typography.h2} text-white tracking-tight`}>
              Our story
            </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative mb-8"
            >
              <p className={`${typography.body.base} text-white/90 font-medium tracking-tight`}>
                At Enablr, we simplify and accelerate GCC setup for modern businesses.
              </p>
              {/* Accent underline */}
              <div className="h-px w-16 bg-white mt-6 mb-8"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <h3 className={`${typography.body.base} text-white/80 leading-relaxed font-light`}>
                Building on decades of expertise in technology and global capability centers
              </h3>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6 mb-10"
            >
              <p className={`${typography.body.base} text-white/80 leading-relaxed font-light`}>
                Our story is rooted in experience. Our leaders come with decades of expertise in technology and global capability center setups. Over the years, they've built high-performing GCCs that have delivered transformational value to some of the world's leading enterprises.
              </p>
              
              <p className={`${typography.body.base} text-white/80 leading-relaxed font-light`}>
                We've seen what works, what doesn't, and most importantly—what businesses truly need. That's why our growth is built on trust, agility, and a relentless focus on outcomes.
              </p>
            </motion.div>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-auto"
            >
              <Button 
                asChild
                size="lg"
                className="bg-transparent text-white border border-white hover:bg-white hover:text-enablr-navy shadow-sm hover:shadow-md group transition-all duration-300 rounded-md"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Talk to our experts 
                </Link>
              </Button>
            </motion.div>
            </div>
          
          {/* Right column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-full"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur-2xl opacity-30"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-enablr-navy/60 mix-blend-overlay pointer-events-none z-10"></div>
              
              <img
                src="/About_us/Overview/Our_story.webp" 
                alt="Our Story at Enablr" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
