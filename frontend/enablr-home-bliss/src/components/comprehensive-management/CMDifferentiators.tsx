import React from "react";
import { motion } from "framer-motion";
import { Target, Gauge, Brain, RefreshCcw } from "lucide-react";
import { typography } from "@/styles/typography";

const differentiators = [
  {
    icon: Target,
    title: "Focused on strategic outcomes",
    description: "We architect your GCC to directly support your core business objectives and KPIs. The focus is on delivering measurable results, not just activity, ensuring long-term value creation and alignment with enterprise priorities."
  },
  {
    icon: Gauge,
    title: "Structured setup at speed",
    description: "Our proven frameworks, plug-and-play systems, and strong partner ecosystem helps reduce setup complexity and timelines. This enables faster deployment, streamlined governance, and a clear path to operational readiness."
  },
  {
    icon: Brain,
    title: "Industry intellect",
    description: "Our experienced GCC leaders and functional experts bring in a strong track record in global operations. Their expertise ensures stability, strategic oversight, and consistent outcomes right from the set-up phase. We can sure support for you at any stage."
  },
  {
    icon: RefreshCcw,
    title: "Flexibility with adaptability",
    description: "We build agility and scalability into the operating model through modular processes, automation, and performance analytics. With our technology driven approach, your GCC stays future-ready and responsive as it evolves."
  }
];

const CMDifferentiators = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={`${typography.h2} text-center my-8 mx-6 -mt-2`}>
          <span className="font-bold bg-gradient-to-r from-[#EC4630] to-[#19214F] bg-clip-text text-transparent">What</span> Enablr brings
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

export default CMDifferentiators;
