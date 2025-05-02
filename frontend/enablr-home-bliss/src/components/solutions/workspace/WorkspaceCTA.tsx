
import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { Button } from "@/components/ui/button";

const WorkspaceCTA = () => {
  return (
    <section className="py-20 bg-enablr-navy text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className={`${typography.h2} mb-8`}>Partner to create spaces that fit your needs</h2>
          <Button 
            size="lg"
            variant="secondary"
            className="bg-white text-enablr-navy hover:bg-gray-100"
          >
            Let's connect
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkspaceCTA;
