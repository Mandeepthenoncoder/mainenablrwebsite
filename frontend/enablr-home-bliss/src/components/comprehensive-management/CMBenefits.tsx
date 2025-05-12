import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { typography } from "@/styles/typography";
import { 
  Building,
  Target,
  Users,
  Workflow,
  Cog,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  Briefcase,
  Globe,
  ChevronRight
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const benefits = [
  {
    id: 1,
    title: "Unified execution across\nevery phase of the GCC lifecycle",
    description: "End-to-End support for your GCC journey.",
    icon: Workflow
  },
  {
    id: 2,
    title: "Streamlined operations powered by\nintegrated systems and expertise",
    description: "Seamless coordination of all functions.",
    icon: Cog
  },
  {
    id: 3,
    title: "Maximum strategic value\ndelivered",
    description: "Focus on high-impact results.",
    icon: TrendingUp
  },
  {
    id: 4,
    title: "Trusted vigilance across all\ncritical functions and processes",
    description: "Comprehensive oversight and management.",
    icon: ShieldCheck
  }
];

const targets = [
  {
    icon: Globe,
    title: "Enterprises launching your first GCC",
    description: "Perfect for organizations taking their first steps into global capability centers, providing the guidance and structure needed for success."
  },
  {
    icon: Briefcase,
    title: "Enterprises looking for all-in-one solutions",
    description: "Ideal for businesses seeking a complete package that covers all aspects of GCC setup and management without fragmentation."
  },
  {
    icon: BarChart3,
    title: "Enterprises that need long-term impact",
    description: "Designed for organizations focused on creating sustainable, strategic value through their global operations over time."
  }
];

const CMBenefits = () => {
  const [activeTab, setActiveTab] = useState<'benefits' | 'ideal'>('benefits');
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <SectionTitle gradientWord="Why">Why our Comprehensive Management model excels</SectionTitle>
          <p className="max-w-2xl text-gray-600">
            Our proven approach delivers unmatched consistency<br/>
            and strategic value across your entire GCC journey
          </p>
        </div>
        
        {/* Tab Navigation - More Rectangular */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-200 p-1 rounded-sm">
            <button
              onClick={() => setActiveTab('benefits')}
              className={`px-8 py-2.5 rounded-sm text-sm font-medium transition-all duration-300 ${
                activeTab === 'benefits' 
                  ? 'bg-enablr-navy text-white shadow-sm' 
                  : 'text-gray-700 hover:text-enablr-navy'
              }`}
            >
              Why this works
            </button>
            <button
              onClick={() => setActiveTab('ideal')}
              className={`px-8 py-2.5 rounded-sm text-sm font-medium transition-all duration-300 ${
                activeTab === 'ideal' 
                  ? 'bg-enablr-navy text-white shadow-sm' 
                  : 'text-gray-700 hover:text-enablr-navy'
              }`}
            >
              Ideal for
            </button>
          </div>
        </div>
        
        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeTab === 'benefits' && (
            <motion.div
              key="benefits"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-enablr-navy/10 flex items-center justify-center flex-shrink-0 mr-3">
                        <benefit.icon className="w-5 h-5 text-enablr-navy" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-enablr-navy mb-2 whitespace-pre-line">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {activeTab === 'ideal' && (
            <motion.div
              key="ideal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="space-y-6">
                {targets.map((target, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300"
                  >
                    <div className="absolute right-0 top-0 h-full w-1 bg-enablr-navy/20 group-hover:bg-enablr-navy transition-all duration-300"></div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-enablr-navy/10 rounded-xl flex items-center justify-center">
                          <target.icon className="w-8 h-8 text-enablr-navy" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-enablr-navy mb-2 group-hover:text-enablr-navy/80 transition-all duration-300">
                          {target.title}
                        </h3>
                        <p className="text-gray-600">
                          {target.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CMBenefits;
