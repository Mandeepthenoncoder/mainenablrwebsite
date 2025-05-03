import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { typography } from "@/styles/typography";

const GlobalTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4 bg-enablr-navy text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-white blur-3xl"></div>
        <div className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full bg-white blur-3xl"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${typography.h2} text-white mb-8`}
        >
          Build Your Global Team With Confidence
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link to="/contact">
            <Button 
              size="lg"
              className="bg-white text-enablr-navy hover:bg-enablr-navy hover:text-white hover:border hover:border-white shadow-sm hover:shadow-md group transition-all duration-300 rounded-md"

            >
              Get Started
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GlobalTeam;
