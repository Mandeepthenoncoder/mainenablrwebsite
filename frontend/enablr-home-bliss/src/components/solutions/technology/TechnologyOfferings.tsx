
import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { Code2, Cloud, Cpu, Users } from "lucide-react";

const offerings = [
  {
    title: "End-to-end technology delivery",
    description: "From product development to ongoing support, we help you build and manage the technology you need to move forward in your GCC journey. Our goal is to create a well-orchestrated system that runs seamlessly and supports your growth.",
    icon: <Code2 className="w-6 h-6" />
  },
  {
    title: "IT infrastructure setup and management",
    description: "While technology is the backbone of every business, we know the roadblocks that can slow down your journey. We handle the IT infrastructure, including Cloud and network connectivity to provide a secure and scalable setup for you.",
    icon: <Cloud className="w-6 h-6" />
  },
  {
    title: "Access to emerging technologies",
    description: "Our objective is to get your GCC future-ready. With any trending or emerging technology that you need, we help you test, adopt, and integrate without a doubt.",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "Technology consulting and CTO services",
    description: "We are your trusted tech partner, enabling you to plan, scale, and grow with confidence. From building technology architecture to mapping a long-term strategy, we help you take smart decisions.",
    icon: <Users className="w-6 h-6" />
  }
];

const TechnologyOfferings = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <h2 className={`${typography.h2} text-enablr-navy mb-6`}>Key Offerings</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-enablr-purple mb-4">{offering.icon}</div>
              <h3 className={`${typography.h4} text-enablr-navy mb-4`}>{offering.title}</h3>
              <p className={`${typography.body.base} text-gray-600`}>{offering.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyOfferings;
