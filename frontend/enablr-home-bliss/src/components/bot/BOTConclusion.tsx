import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BOTConclusion = () => {
  return (
    <section className="py-24 px-4 bg-enablr-navy relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -left-16 -bottom-16 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center relative z-10 max-w-4xl"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${typography.h2} text-white mb-16 leading-[1.4] space-y-2`}
        >
          With Enablr as your partner,<br />
          we bring experience, flexibility, speed to launch<br />
          with no compromise on quality and scale.
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-block"
        >
          <Button 
            asChild
            size="lg"
            className="bg-white text-enablr-navy hover:bg-enablr-navy hover:text-white hover:border hover:border-white shadow-sm hover:shadow-md group transition-all duration-300 rounded-md"
          >
            <Link to="/contact" className="flex items-center gap-2">
              Let's Connect
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BOTConclusion;
