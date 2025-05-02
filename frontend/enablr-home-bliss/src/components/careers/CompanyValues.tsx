import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { cn } from "@/lib/utils";
import { 
  ShieldCheck, 
  Rocket, 
  Users, 
  LightbulbIcon, 
  Gem,
  Heart 
} from "lucide-react";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ValueCard = ({ icon, title, description, index }: ValueCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-enablr-navy transform origin-left transition-all duration-300 group-hover:bg-gradient-to-b group-hover:from-blue-600 group-hover:to-red-500"></div>
      
      <div className="pl-8 pr-4 py-2">
        <div className="mb-4 text-enablr-navy">{icon}</div>
        <h3 className={cn(typography.h3, "text-enablr-navy mb-3")}>
          {title}
        </h3>
        <p className={cn(typography.body.base, "text-gray-600 leading-relaxed")}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const values = [
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical standards that build lasting trust with our clients and among our team."
  },
  {
    icon: <Rocket className="w-10 h-10" />,
    title: "Excellence",
    description: "We pursue exceptional quality in everything we do, from technical execution to client interactions, embracing continuous improvement."
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Collaboration",
    description: "We believe in the power of diverse perspectives working together, creating solutions greater than the sum of individual contributions."
  },
  {
    icon: <LightbulbIcon className="w-10 h-10" />,
    title: "Innovation",
    description: "We challenge conventional thinking, embrace emerging technologies, and pioneer new approaches to solving complex problems."
  },
  {
    icon: <Gem className="w-10 h-10" />,
    title: "Client Focus",
    description: "We earn trust by deeply understanding our clients' unique challenges and delivering solutions aligned with their strategic objectives."
  },
  {
    icon: <Heart className="w-10 h-10" />,
    title: "People First",
    description: "We nurture an inclusive environment where diverse talent can thrive professionally and personally, knowing our success depends on our people."
  }
];

const CompanyValues = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/30 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className={cn(typography.h2, "text-enablr-navy mb-4")}>
            What We Value
          </h2>
          <p className={cn(typography.body.lg, "text-gray-600")}>
            Our core values shape our culture and guide every decision we make
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues; 