import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";

const MSIntro = () => {
  return (
    <section className="relative py-24 bg-[#FAFAFA] overflow-hidden">
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-[700px] mx-auto md:mx-0 md:ml-[10%]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${typography.h2} text-enablr-navy mb-8 text-center md:text-left`}
          >
            Enable Flexible Growth<br />
            with Modular GCC Solutions
          </motion.h2>
          
          <div className={`${typography.body.base} text-gray-600 space-y-6 text-center md:text-left`}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              At Enablr, we understand that every organization's GCC journey unfolds differently. Our Modular Services model is built to meet you where you are, offering targeted capabilities that complement your existing strengths without unnecessary complexity.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              From sourcing talent and enabling infrastructure to refining operations and enhancing workspace strategy, each service module is designed to deliver measurable impact while integrating smoothly with your internal teams.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MSIntro;
