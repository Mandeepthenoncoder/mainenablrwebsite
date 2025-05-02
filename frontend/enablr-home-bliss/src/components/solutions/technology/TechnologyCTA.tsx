
import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { Button } from "@/components/ui/button";

const TechnologyCTA = () => {
  return (
    <section className="py-20 bg-enablr-navy text-white rounded-[48px] mx-6 md:mx-[72px]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className={`${typography.h2} mb-8`}>Future-proof your GCC journey with us</h2>
          <Button 
            size="lg"
            className="bg-white text-enablr-navy hover:bg-white/90"
            asChild
          >
            <a href="/contact">Let's connect</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyCTA;
