import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import EngageHeading from "../engage/EngageHeading";
import { colors } from "@/styles/typography";
import EngagementModels from "../engage/EngagementTabs";

const EngageWithUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  return (
    <motion.section 
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-12 md:py-16 bg-white"
    >
      <div className="container mx-auto px-6 overflow-hidden">
        <motion.div variants={itemVariants}>
          <EngageHeading />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-8"
        >
          <EngagementModels />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EngageWithUs;
