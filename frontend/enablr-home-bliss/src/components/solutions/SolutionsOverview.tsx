
import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";

const SolutionsOverview = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className={`${typography.h2} text-[#4A154B] mb-4`}>
            Our End-to-End Solutions<br />
            <span className="text-gray-700">at One place</span>
          </h2>
          <p className={`${typography.body.lg} text-gray-600 mb-6`}>
            Enablr offers a wide range of flexible solutions to help businesses set up their global capability centers in India.
          </p>
          <p className={`${typography.body.base} text-gray-600`}>
            Our domain-agnostic modular solutions accelerate the setting up of your fully-functional capability center, enabling you to work with the same tools and platforms that you currently use.
          </p>
        </motion.div>
        
        {/* Decorative wave pattern - we'll need the actual SVG/image */}
        <div className="absolute right-0 bottom-0 w-1/2 opacity-20">
          <img
            src="/path-to-wave-pattern.svg"
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
