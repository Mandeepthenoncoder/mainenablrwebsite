
import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface EngagementCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const EngagementCard = ({ icon: Icon, title, description, link, delay = 0 }: EngagementCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="mb-4 text-enablr-purple">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className={`${typography.h3} mb-3 text-enablr-navy`}>{title}</h3>
      <p className={`${typography.body.base} text-gray-600 mb-4 flex-grow`}>
        {description}
      </p>
      <Link 
        to={link}
        className="text-enablr-purple hover:text-enablr-navy hover:underline transition-colors duration-200"
      >
        Learn More
      </Link>
    </motion.div>
  );
};

export default EngagementCard;
