
import React from "react";
import { motion } from "framer-motion";

interface BlogHeroProps {
  title: string;
  subtitle: string;
}

const BlogHero = ({ title, subtitle }: BlogHeroProps) => {
  return (
    <section className="bg-enablr-navy text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-lg md:text-xl text-gray-200">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;
