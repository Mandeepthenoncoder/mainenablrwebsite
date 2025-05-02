
import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { Globe, Server, Rocket } from "lucide-react";
import WhyChooseUsCard from "./WhyChooseUsCard";

const reasons = [
  {
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    title: "Local-global market intelligence",
    description: "Leverage our deep understanding of both local markets and global business landscapes to make informed decisions.",
    icon: <Globe className="w-6 h-6" />
  },
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    title: "End-to-end infrastructure support",
    description: "Get comprehensive infrastructure solutions from initial setup to ongoing maintenance and optimization.",
    icon: <Server className="w-6 h-6" />
  },
  {
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    title: "Speed to launch and scale",
    description: "Accelerate your market entry and scale operations efficiently with our proven methodologies.",
    icon: <Rocket className="w-6 h-6" />
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className={`${typography.h2} text-enablr-navy mb-4`}>Why choose Enablr?</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <WhyChooseUsCard
              key={index}
              image={reason.image}
              title={reason.title}
              description={reason.description}
              icon={reason.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
