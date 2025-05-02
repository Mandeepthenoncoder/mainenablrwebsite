
import React from "react";
import { motion } from "framer-motion";
import { Building, Users } from "lucide-react";
import { typography } from "@/styles/typography";

const targets = [
  {
    icon: Building,
    text: "Businesses launching a GCC for the first time and guidance and local expertise"
  },
  {
    icon: Building,
    text: "Companies that want a smooth transition from partner-led to self-managed operations"
  },
  {
    icon: Users,
    text: "Businesses who wish to strengthen their internal teams eventually, but need initial support"
  }
];

const BOTIdealFor = () => {
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

export default BOTIdealFor;
