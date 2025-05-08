import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";

const DTIntro = () => {
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
        <div className="max-w-[720px] mx-auto md:mx-0 md:ml-[10%]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${typography.h2} text-enablr-navy mb-8 text-center md:text-left leading-10`}
          >
            Build high-impact teams,<br />
            without the overhead
          </motion.h2>
          
          <div className={`${typography.body.base} text-gray-600 space-y-6 text-center md:text-left`}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Enablr's Dedicated Teams model gives you fast access to skilled talent without the complexities of hiring and managing on your own. We take care of recruitment, onboarding, and day-to-day operations so that your teams function like a natural extension of your business.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              It's a smart way to scale efficiently while keeping your focus on core priorities.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DTIntro;
