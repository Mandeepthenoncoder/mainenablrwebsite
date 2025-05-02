
import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { Target, ArrowUpRight, Focus } from "lucide-react";

const benefits = [
  {
    title: "Purpose-led Centers of Excellence (CoEs)",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Flexible and scalable",
    icon: <ArrowUpRight className="w-6 h-6" />
  },
  {
    title: "Designed for improved focus and productivity",
    icon: <Focus className="w-6 h-6" />
  }
];

const WorkspaceBenefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`${typography.h2} text-enablr-navy mb-4`}>Why choose us?</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-enablr-purple/10 text-enablr-purple mb-4">
                {benefit.icon}
              </div>
              <h3 className={`${typography.h4} text-enablr-navy`}>{benefit.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkspaceBenefits;
