import React from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  HeartPulse, 
  GraduationCap, 
  Globe2, 
  Zap,
  Leaf
} from "lucide-react";
import { typography } from "@/styles/typography";
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const BenefitCard = ({ icon, title, description, index }: BenefitCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="p-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden group relative"
    >
      {/* Top accent line with gradient hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-enablr-navy opacity-70 group-hover:bg-gradient-to-r group-hover:from-blue-800 group-hover:to-red-600 transition-colors duration-300"></div>
      
      {/* Decorative corner gradient */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-red-50 rounded-tl-[80px] -mr-16 -mb-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Icon with card content */}
      <div className="flex items-start gap-4">
        <div className="relative w-12 h-12 flex-shrink-0">
          <div className="absolute inset-0 bg-enablr-navy/10 rounded-lg"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-red-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            {icon}
          </div>
        </div>
        
        <div>
          <h3 className={cn(typography.h4, "text-enablr-navy group-hover:text-enablr-navy transition-colors duration-300 mb-2")}>
            {title}
          </h3>
          <p className={cn(typography.body.base, "text-gray-600 leading-relaxed font-light")}>
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const benefits = [
  {
    icon: <Calendar className="w-5 h-5 text-enablr-navy" />,
    title: "Flexible Work Arrangement",
    description: "Enjoy work-life balance with our hybrid work model and flexible hours."
  },
  {
    icon: <HeartPulse className="w-5 h-5 text-enablr-navy" />,
    title: "Comprehensive Healthcare",
    description: "Top-tier health, dental, and vision coverage for you and your dependents."
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-enablr-navy" />,
    title: "Learning & Development",
    description: "Access to continuous learning platforms and dedicated upskilling budgets."
  },
  {
    icon: <Globe2 className="w-5 h-5 text-enablr-navy" />,
    title: "Global Exposure",
    description: "Opportunities to work with international teams and travel to client locations."
  },
  {
    icon: <Zap className="w-5 h-5 text-enablr-navy" />,
    title: "Performance Bonuses",
    description: "Reward excellence with our competitive bonus structure and recognition programs."
  },
  {
    icon: <Leaf className="w-5 h-5 text-enablr-navy" />,
    title: "Wellness Programs",
    description: "Mental health support, fitness stipends, and wellness initiatives."
  }
];

const CareerBenefits = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-blue-50/70 to-gray-50">
      {/* Background with subtle grid pattern */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIG9wYWNpdHk9IjAuMyIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQxMl8xMTApIj48cGF0aCBkPSJNMTYwMCAwSDBWMTIwMEgxNjAwVjBaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTIwMCAwSDBWMTIwMEgxMjAwVjBaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNODAwIDEyMDBMODAwIDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik00MDAgMTIwMEw0MDAgMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTAgODAwTDEyMDAgODAwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMCA0MDBMMTI2MCA0MDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwXzQxMl8xMTAiPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc>')] bg-no-repeat bg-cover opacity-[0.03]"></div>
      
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full -ml-32 -mt-32 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-l from-purple-200 to-blue-200 rounded-full -mr-32 -mb-32 opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(typography.h2, "mb-6 text-enablr-navy tracking-tight")}
          >
            Benefits That Empower Your Growth
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={cn(typography.body.lg, "text-gray-600 max-w-2xl mx-auto")}
          >
            At Enablr, we're committed to providing a comprehensive benefits package that supports your professional development, wellbeing, and work-life balance.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              index={index}
            />
          ))}
        </div>
        
        {/* Accent line at bottom */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="w-full h-0.5 mt-16 bg-gradient-to-r from-blue-300 to-red-300 origin-left"
        />
      </div>
    </section>
  );
};

export default CareerBenefits; 