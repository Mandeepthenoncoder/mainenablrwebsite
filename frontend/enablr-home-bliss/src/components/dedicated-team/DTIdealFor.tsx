
import React from "react";
import { motion } from "framer-motion";
import { Building, Briefcase, Users } from "lucide-react";
import { typography } from "@/styles/typography";

const targets = [
  {
    icon: Building,
    text: "Businesses building offshore teams for long-term or project-based work"
  },
  {
    icon: Briefcase,
    text: "Organizations expanding global capacity while keeping operations streamlined"
  },
  {
    icon: Users,
    text: "Enterprises that are looking to scale smart, but with ease"
  }
];

const DTIdealFor = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={`${typography.h2} text-enablr-navy text-center mb-12`}>
          Ideal For
        </h2>
        <div className="max-w-3xl mx-auto">
          {targets.map((target, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 mb-6 last:mb-0"
            >
              <target.icon className="w-6 h-6 text-enablr-purple flex-shrink-0" />
              <p className={`${typography.body.lg} text-gray-700`}>{target.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DTIdealFor;
