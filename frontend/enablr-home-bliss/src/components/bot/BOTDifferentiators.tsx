import React from "react";
import { motion } from "framer-motion";
import { Rocket, CheckSquare, ArrowLeftRight, Building2 } from "lucide-react";
import { typography } from "@/styles/typography";

const differentiators = [
  {
    icon: Rocket,
    title: "Faster with no compromise",
    description: "We get your GCC up and running quickly, without compromising on quality. You start strong with a setup that's built for momentum, not just motion."
  },
  {
    icon: CheckSquare,
    title: "Handling execution hassles",
    description: "From infrastructure to daily ops, we take care of the setup and execution. You stay focused on strategy and the larger objective, while we keep everything running smoothly in the background."
  },
  {
    icon: ArrowLeftRight,
    title: "Smooth transfer",
    description: "We operate your centre like it's already yours. When it's time to take over, your team steps into a setup that already feels familiar and owned."
  },
  {
    icon: Building2,
    title: "Stability that lasts beyond setup",
    description: "This isn't just about speed to launch. We lay the foundation for long-term success with systems that are scalable, reliable, and built to last."
  }
];

const BOTDifferentiators = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={`${typography.h2} text-enablr-navy text-center mb-12`}>
          What Enablr Brings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

export default BOTDifferentiators;
