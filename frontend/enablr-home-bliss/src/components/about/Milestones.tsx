import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";

const milestones = [
  {
    year: "2023",
    achievement: "Expanded to 5 countries with 30+ enterprise clients"
  },
  {
    year: "2022",
    achievement: "Achieved 400+ successful GCC transformations globally"
  },
  {
    year: "2021",
    achievement: "Launched AI-powered talent management platform"
  }, 
  {
    year: "2020",
    achievement: "Established Enablr Labs to drive GCC innovation"
  },
  {
    year: "2019",
    achievement: "First international office opened in Singapore"
  },
  {
    year: "2018",
    achievement: "Founded with a vision to transform GCCs globally"
  }
];

const Milestones = () => {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-3 px-4 py-1.5 bg-enablr-navy/10 rounded-full text-sm font-medium tracking-wider text-enablr-navy"
          >
            OUR JOURNEY
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${typography.h2} text-enablr-navy mb-6`}
          >
            Key Milestones
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg font-light"
          >
            Our growth journey reflects our commitment to innovation and excellence in 
            building and scaling Global Capability Centers.
          </motion.p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          <div className="relative space-y-0">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''} mb-20 last:mb-0`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8 text-right' : 'pr-8'}`}>
                  <div 
                    className={`inline-block ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-1 max-w-md`}
                  >
                    <div className="mb-4">
                      <span className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-500 to-purple-600' : 'from-purple-600 to-blue-500'}`}>
                        {milestone.year}
                      </span>
                    </div>
                    <p className="text-gray-600 text-lg font-light leading-relaxed">
                      {milestone.achievement}
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center">
                  <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-500 to-purple-600' : 'from-purple-600 to-blue-500'} shadow-lg z-10`}></div>
                </div>
                
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones; 