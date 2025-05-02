import React from "react";
import { motion } from "framer-motion";
import { CardStack } from "@/components/ui/card-stack";
import { typography } from "@/styles/typography";
import { Building, Target, Network, ArrowLeftRight, ChevronRight, ChevronLeft } from "lucide-react";

const benefits = [
  {
    id: 1,
    title: "Flexible selection of services based on your current priorities",
    description: "Choose exactly what you need, when you need it."
  },
  {
    id: 2,
    title: "Efficient use of resources with a focus on high-impact support",
    description: "Maximum value from every service module."
  },
  {
    id: 3,
    title: "Seamless integration with existing GCC operations",
    description: "Smooth alignment with your current processes."
  },
  {
    id: 4,
    title: "Scalable service structure to grow with your business",
    description: "Adapt and expand as your needs evolve."
  }
];

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

const MSBenefits = () => {
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

export default MSBenefits;
