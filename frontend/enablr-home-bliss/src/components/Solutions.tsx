import React, { useRef } from "react";
import SolutionsContent from "./solutions/SolutionsContent";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";

const Solutions = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });
  
  return (
    <motion.section 
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="py-[20px] md:py-[40px] px-0 md:px-6 bg-gradient-to-b from-white to-gray-50"
    >
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mx-auto w-full md:container md:max-w-full"
      >
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-2 sm:p-4 md:p-8 border border-gray-100 mx-1 sm:mx-3 md:mx-auto"
          whileHover={{ boxShadow: "0 15px 40px rgba(0, 0, 0, 0.08)" }}
          transition={{ duration: 0.4 }}
        >
          <SolutionsContent />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Solutions;
