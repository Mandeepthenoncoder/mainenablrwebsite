import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { CardStack } from "@/components/ui/card-stack";
import { 
  Target, 
  Building,
  Users,
  ChevronRight,
  ChevronLeft
} from "lucide-react";

const benefits = [
  {
    id: 1,
    title: "Unified execution across every phase of the GCC lifecycle",
    description: "End-to-end support for your GCC journey."
  },
  {
    id: 2,
    title: "Streamlined operations powered by integrated systems and expertise",
    description: "Seamless coordination of all functions."
  },
  {
    id: 3,
    title: "Maximum strategic value delivered",
    description: "Focus on high-impact results."
  },
  {
    id: 4,
    title: "Trusted vigilance across all critical functions and processes",
    description: "Comprehensive oversight and management."
  }
];

const targets = [
  {
    icon: Building,
    text: "Enterprise launching your first GCC"
  },
  {
    icon: Target,
    text: "Enterprises looking for all-in-one solutions"
  },
  {
    icon: Users,
    text: "Enterprises that need long-term impact"
  }
];

const CMBenefits = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title with shared divider */}
        <div className="relative mb-14 text-center">
          <div className="flex justify-center items-baseline gap-x-12 mb-4">
            <h2 className={`${typography.h2} text-enablr-navy`}>
              Why This Model Works
            </h2>
            <div className="h-12 w-px bg-gray-300 hidden md:block"></div>
            <h2 className={`${typography.h2} text-enablr-navy`}>
              Ideal For
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Why This Model Works Section */}
          <motion.div 
            className="lg:w-3/5 bg-white p-8 rounded-xl shadow-sm relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <CardStack items={benefits} offset={14} scaleFactor={0.05} />
              <div className="absolute top-2 right-2 bg-enablr-navy text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-2">
                <span>{benefits.length}</span>
                <span className="w-0.5 h-3 bg-white/50"></span>
                <span>Benefits</span>
              </div>
            </div>
          </motion.div>
          
          {/* Ideal For Section */}
          <motion.div 
            className="lg:w-2/5 bg-white p-8 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-5">
              {targets.map((target, index) => (
                <motion.div
                  key={index}
                  className="relative p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Decorative element - numbered dot */}
                  <div className="absolute -left-2 -top-2 w-6 h-6 rounded-full bg-enablr-navy text-white flex items-center justify-center text-xs font-semibold">
                    {index + 1}
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <target.icon className="w-6 h-6 text-enablr-navy flex-shrink-0" />
                    </div>
                    <p className={`${typography.body.base} text-gray-700 pt-2`}>{target.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CMBenefits;
