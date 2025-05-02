
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import EngagementCard from "./EngagementCard";
import { typography } from "@/styles/typography";
import { Separator } from "@/components/ui/separator";
import { Building2, ArrowRightLeft, Puzzle, Users } from "lucide-react";

const models = [
  {
    title: "Comprehensive Management",
    description: "A fully orchestrated GCC experience: from set-up to scale.",
    path: "/engagement/comprehensive-management",
    icon: Building2
  },
  {
    title: "Build-Operate-Transfer",
    description: "Start strong, take over with confidence.",
    path: "/engagement/bot",
    icon: ArrowRightLeft
  },
  {
    title: "Modular Services",
    description: "Select specific capabilities to enhance your GCC.",
    path: "/engagement/modular-services",
    icon: Puzzle
  },
  {
    title: "Dedicated Teams",
    description: "Augment your capabilities with specialized talent.",
    path: "/engagement/dedicated-team",
    icon: Users
  }
];

const EngagementModelsGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`${typography.h2} text-enablr-navy text-center mb-4`}>
            Our Engagement Models
          </h2>
          <p className={`${typography.body.lg} text-gray-600 text-center max-w-3xl mx-auto mb-16`}>
            Choose the partnership approach that best fits your strategic objectives and operational requirements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {models.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={model.path}>
                  <EngagementCard
                    title={model.title}
                    description={model.description}
                    icon={model.icon}
                    link={model.path}
                    delay={index * 0.1}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <Separator className="my-20" />
        </motion.div>
      </div>
    </section>
  );
};

export default EngagementModelsGrid;
