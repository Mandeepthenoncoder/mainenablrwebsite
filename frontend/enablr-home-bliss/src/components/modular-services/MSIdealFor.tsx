
import React from "react";
import { motion } from "framer-motion";
import { Building, Target, Network } from "lucide-react";
import { typography } from "@/styles/typography";

const targets = [
  {
    icon: Building,
    text: "Companies with established GCCs seeking specialized enhancements"
  },
  {
    icon: Target,
    text: "Organizations looking for focused expertise without full-scale engagement"
  },
  {
    icon: Network,
    text: "Enterprises that need more flexibility in engagement"
  }
];

const MSIdealFor = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`${typography.h2} text-enablr-navy text-center mb-12`}>
            Ideal For
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {targets.map((target, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md hover:translate-y-[-2px] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex gap-4 items-start">
                  <target.icon className="w-6 h-6 text-enablr-navy flex-shrink-0" />
                  <p className={`${typography.body.base} text-gray-700`}>{target.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MSIdealFor;
