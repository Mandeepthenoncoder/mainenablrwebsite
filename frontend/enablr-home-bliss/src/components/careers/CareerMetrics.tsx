import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { cn } from "@/lib/utils";

interface MetricProps {
  value: string;
  label: string;
  index: number;
}

const Metric = ({ value, label, index }: MetricProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center"
    >
      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">
        {value}
      </h3>
      <p className={cn(typography.body.base, "text-gray-600 max-w-[250px] mx-auto")}>
        {label}
      </p>
    </motion.div>
  );
};

const metrics = [
  {
    value: "30+",
    label: "Global Capability Centers Built"
  },
  {
    value: "5K+",
    label: "Professionals Placed"
  },
  {
    value: "12+",
    label: "Countries With Active Operations"
  },
  {
    value: "95%",
    label: "Client Retention Rate"
  }
];

const CareerMetrics = () => {
  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Light background with subtle grid */}
      <div className="absolute inset-0 bg-gray-50 bg-opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {metrics.map((metric, index) => (
              <Metric
                key={index}
                value={metric.value}
                label={metric.label}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerMetrics; 