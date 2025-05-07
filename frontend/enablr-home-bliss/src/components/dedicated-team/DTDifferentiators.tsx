import React from "react";
import { motion } from "framer-motion";
import { Users, Zap, Check, Star } from "lucide-react";
import { typography } from "@/styles/typography";
import SectionTitle from "@/components/ui/SectionTitle";

const differentiators = [
  {
    title: "Teams that are truly yours",
    description: "We don't just fill in the positions. We build high-performing teams that work as an extension of your core business. They're aligned to your culture, processes, and goals from day one."
  },
  {
    title: "Built for long-term value",
    description: "Our focus is on stability and retention so your team grows with you over time. You get continuity, consistency, quality, and true sense of ownership."
  },
  {
    title: "Speed with scale",
    description: "We help you scale quickly with vetted talent across any technology and expertise, and structured onboarding. You ramp up fast without sacrificing quality or alignment."
  },
  {
    title: "Keeping the control with you",
    description: "You set the direction, pace, and priorities. We provide the structure and support to help your teams thrive under your leadership."
  }
];

const DTDifferentiators = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle gradientWord="What">What Enablr brings</SectionTitle>
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

export default DTDifferentiators;
