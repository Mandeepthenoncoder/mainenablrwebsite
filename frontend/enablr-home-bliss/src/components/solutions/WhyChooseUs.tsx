import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import WhyChooseUsCard from "./WhyChooseUsCard";

const reasons = [
  {
    image: "/workspace-solutions/purpose-led-centers.jpg",
    title: "Purpose-Led Centers of Excellence (CoEs)",
    description: "Custom-designed spaces that align with your Centers of Excellence goals. Our facilities optimize collaboration, innovation, and operational efficiency while maintaining your unique organizational culture."
  },
  {
    image: "/workspace-solutions/flexible-scalable.jpg",
    title: "Flexible & Scalable Workspaces",
    description: "Adaptable workspace solutions that grow with your business. From hot-desking to dedicated team spaces, our flexible arrangements ensure your workspace evolves as your needs change."
  },
  {
    image: "/workspace-solutions/modern-workspace.jpg",
    title: "Modern Work Environment",
    description: "State-of-the-art facilities equipped with the latest technology and amenities. Create an inspiring workplace that attracts top talent and promotes productivity, creativity, and well-being."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className={`${typography.h2} text-enablr-navy mb-6`}>
            Workspace Solutions
          </h2>
          <p className={`${typography.body.lg} text-gray-600 max-w-2xl mx-auto`}>
            Create the perfect environment where your teams can collaborate, innovate, and achieve exceptional results
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <WhyChooseUsCard
              key={index}
              image={reason.image}
              title={reason.title}
              description={reason.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
