
import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { Link2, Users2, Target } from "lucide-react";

const benefits = [
  {
    title: "Seamless technology integration",
    icon: <Link2 className="w-6 h-6" />
  },
  {
    title: "Experienced leadership with long-term vision",
    icon: <Users2 className="w-6 h-6" />
  },
  {
    title: "Not just a technology check list, strategic partnership",
    icon: <Target className="w-6 h-6" />
  }
];

const TechnologyBenefits = () => {
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

export default TechnologyBenefits;
