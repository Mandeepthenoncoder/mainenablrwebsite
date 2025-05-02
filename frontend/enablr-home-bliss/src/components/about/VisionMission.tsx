import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { Eye, Target } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(45deg,rgba(0,0,0,0.05)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.05)_50%,rgba(0,0,0,0.05)_75%,transparent_75%,transparent)] bg-[length:64px_64px]"></div>
      </div>
      
      {/* Top decorative element */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

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
              <h2 className={`${typography.h2} text-enablr-navy tracking-tight`}>
          Our Vision and Mission
        </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative mb-8"
            >
              <p className={`${typography.body.base} text-gray-800 font-medium tracking-tight`}>
                At Enablr, we are guided by our commitment to excellence, innovation, and delivering transformative solutions that create lasting impact.
              </p>
              {/* Accent underline */}
              <div className="h-px w-16 bg-enablr-navy mt-6 mb-8"></div>
            </motion.div>
          </div>
          
          {/* Right column with content */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group"
          >
                <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-enablr-navy/10 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-100 group-hover:to-red-100 transition-all duration-300">
                      <Eye className="text-enablr-navy w-5 h-5" />
                    </div>
                    <h3 className={`${typography.h4} text-enablr-navy`}>
                      Vision
                    </h3>
                  </div>
                  <p className={`${typography.body.base} text-gray-600 leading-relaxed font-light`}>
                    We build GCCs that give enterprises an edge with faster setup, smarter execution, and the right talent.
                  </p>
                </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group"
          >
                <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-enablr-navy/10 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-100 group-hover:to-red-100 transition-all duration-300">
                      <Target className="text-enablr-navy w-5 h-5" />
                    </div>
                    <h3 className={`${typography.h4} text-enablr-navy`}>
                      Mission
                    </h3>
                  </div>
                  <p className={`${typography.body.base} text-gray-600 leading-relaxed font-light`}>
                    Empower enterprises with high-performing GCCs that deliver strategic value and drive impactful solutions.
                  </p>
                </div>
          </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  );
};

export default VisionMission;
