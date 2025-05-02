import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { typography } from "@/styles/typography";
import { 
  Rocket,
  GitMerge,
  Users,
  UserPlus,
  Building,
  Briefcase,
  Scale,
  ChevronRight
} from "lucide-react";

const benefits = [
  {
    id: 1,
    title: "Quick setup with end-to-end\nteam management",
    description: "Get your team operational fast with our comprehensive management support.",
    icon: Rocket
  },
  {
    id: 2,
    title: "Seamless alignment with\nyour internal processes",
    description: "Teams that integrate smoothly with your existing workflows and systems.",
    icon: GitMerge
  },
  {
    id: 3,
    title: "Flexible team sizes based\non your project needs",
    description: "Scale up or down easily as your requirements evolve over time.",
    icon: Users
  },
  {
    id: 4,
    title: "Access to top talent\nwithout additional overhead",
    description: "Tap into specialized skills without the complexity of direct recruitment.",
    icon: UserPlus
  }
];

const targets = [
  {
    icon: Building,
    title: "Businesses building offshore teams for long-term work",
    description: "Perfect for organizations establishing or expanding offshore capabilities for ongoing operations or specific projects."
  },
  {
    icon: Briefcase,
    title: "Organizations expanding global capacity while keeping operations streamlined",
    description: "Ideal for businesses seeking to grow their global footprint without adding management complexity."
  },
  {
    icon: Scale,
    title: "Enterprises that are looking to scale smart, but with ease",
    description: "Designed for companies that need to scale rapidly while maintaining quality and efficiency in their operations."
  }
];

const DTBenefits = () => {
  const [activeTab, setActiveTab] = useState<'benefits' | 'ideal'>('benefits');
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className={`${typography.h2} text-enablr-navy mb-6`}>
            Why Our Dedicated Team Model Excels
          </h2>
          <p className="max-w-2xl text-gray-600">
            Our managed team approach provides you with tailored talent<br/>
            and expertise without the operational complexity
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
                      
                      <div className="flex-shrink-0 self-center hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="w-10 h-10 rounded-full border border-enablr-navy/20 flex items-center justify-center">
                          <ChevronRight className="w-5 h-5 text-enablr-navy" />
                        </div>
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

export default DTBenefits;
