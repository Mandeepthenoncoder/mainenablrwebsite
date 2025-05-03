import React from "react";
import { motion } from "framer-motion";
import { Blocks, Target, Workflow, Globe } from "lucide-react";
import { typography } from "@/styles/typography";
import SectionTitle from "@/components/ui/SectionTitle";

const differentiators = [
  {
    icon: Blocks,
    title: "Modular by design, strategic by nature",
    description: "Our modular services model gives you the flexibility to choose what fits, without losing sight of the bigger picture. We stay aligned to your goals and make sure every step supports your business direction."
  },
  {
    icon: Target,
    title: "Measurable impact",
    description: "Every module is built with outcomes in mind, ensuring real, tangible results that you can track. We focus on what matters so you can see the value, not just feel it."
  },
  {
    icon: Workflow,
    title: "Decluttering the process",
    description: "From talent and tech to workspace and operations, we cover a wide range of needs without adding unnecessary complexity. You get what you need to scale smart, with none of the extra layers that slow you down."
  },
  {
    icon: Globe,
    title: "Ecosystem intelligence",
    description: "We bring deep knowledge of global GCC trends and local realities to the table. That means you are not just keeping up, you are stay updated and prepared."
  }
];

const MSDifferentiators = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle gradientWord="What">What Enablr Brings</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((diff, index) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group border-[1.5px] border-enablr-navy rounded-xl p-6 transition-all duration-400 ease-in-out hover:bg-enablr-navy h-full flex flex-col"
            >
              <div className="flex flex-col h-full">
                <diff.icon 
                  className="w-8 h-8 text-enablr-navy group-hover:text-white transition-all duration-400 ease-in-out mb-4" 
                  strokeWidth={2}
                />
                <h3 className={`${typography.h3} text-enablr-navy group-hover:text-white mb-3 transition-all duration-400 ease-in-out`}>
                  {diff.title}
                </h3>
                <p className="text-gray-700 group-hover:text-white text-base leading-relaxed transition-all duration-400 ease-in-out flex-grow">
                  {diff.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MSDifferentiators;
