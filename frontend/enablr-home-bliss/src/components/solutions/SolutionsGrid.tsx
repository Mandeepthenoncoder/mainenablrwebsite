
import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { Button } from "@/components/ui/button";
import { Building2, Cpu, Building, Users, Briefcase, Users2 } from "lucide-react";

const solutions = [
  {
    title: "GCC-as-a-Service",
    description: "End-to-end solution to establish your fully equipped global capability center.",
    icon: <Building2 className="w-6 h-6" />
  },
  {
    title: "Technology Enablement",
    description: "Leveraging technology to power your capability center",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "Workspace Solutions",
    description: "Future-ready workspaces for your capability center",
    icon: <Building className="w-6 h-6" />
  },
  {
    title: "Talent and HR Solutions",
    description: "Comprehensive talent management for your capability center",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Business Operations",
    description: "Seamless and streamlined operations for smooth functioning",
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    title: "Staff Augmentation",
    description: "Easily available skilled talent pool for your capability center",
    icon: <Users2 className="w-6 h-6" />
  }
];

const SolutionCard = ({ title, description, icon, index }: { title: string; description: string; icon: React.ReactNode; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
  >
    <div className="mb-4 text-enablr-purple">{icon}</div>
    <h3 className={`${typography.h4} mb-3 text-enablr-navy`}>{title}</h3>
    <p className={`${typography.body.base} text-gray-600 mb-4`}>{description}</p>
    <Button variant="link" className="p-0 text-enablr-purple hover:text-enablr-navy">
      Know More
    </Button>
  </motion.div>
);

const SolutionsGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className={`${typography.h2} text-enablr-navy mb-4`}>Our GCC Solutions</h2>
          <p className={`${typography.body.lg} text-gray-600 max-w-3xl mx-auto`}>
            Comprehensive services to establish and scale your Global Capability Center in India
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;
