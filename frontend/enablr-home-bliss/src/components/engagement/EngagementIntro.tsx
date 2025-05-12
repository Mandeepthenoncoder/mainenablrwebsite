
import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";

const EngagementIntro = () => {
  return (
    <section className="py-30 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
       <div className="max-w-xl mx-auto tracking-wider text-center">
  <h2 className={`${typography.h3} text-enablr-navy mb-6`}>
    Empowering Every Step of Your GCC Journey
  </h2>
  <div className={`${typography.body.sm} text-gray-600 space-y-4`}>
    <p>
      At Enablr, we understand that building and managing a GCC is not just about scale, it's about strategy, speed, and staying ahead in a constantly evolving digital landscape.
    <br />
      We believe every enterprise is different—and so is its GCC journey. That's why we offer a range of flexible engagement models designed to fit your specific needs. Whether you're establishing a new GCC or enhancing an existing one, our approach is designed to support your transformation journey and align with your business priorities.
    </p>
    <p>
      We offer a suite of flexible models, ranging from Comprehensive Management, Modular Services to Build-Operate-Transfer (B-O-T) and Dedicated Teams.
    </p>
  </div>
</div>
        
      </motion.div>
    </section>
  );
};

export default EngagementIntro;
