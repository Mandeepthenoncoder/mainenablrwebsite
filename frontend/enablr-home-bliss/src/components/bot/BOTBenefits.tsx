import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { typography } from "@/styles/typography";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  ShieldCheck,
  UserCog,
  FileCheck,
  GraduationCap,
  Building,
  FileSpreadsheet,
  Settings
  // ChevronRight // Removed import as it's no longer used
} from "lucide-react";

const benefits = [
  {
    id: 1,
    title: "Low-risk approach\nto starting your GCC",
    description: "Minimize risks with our proven methodology and expertise in setting up and managing Global Capability Centers.",
    icon: ShieldCheck
  },
  {
    id: 2,
    title: "Expert management during\nsetup & growth",
    description: "Leverage our experience to build strong operational foundations and scale your GCC effectively.",
    icon: UserCog
  },
  {
    id: 3,
    title: "Clear process for\nknowledge transfer",
    description: "Structured approach ensures smooth transition of operations and ownership to your team.",
    icon: FileCheck
  },
  {
    id: 4,
    title: "Build internal capabilities\ngradually",
    description: "Develop your team's skills and readiness while we manage day-to-day operations.",
    icon: GraduationCap
  }
];

const targets = [
  {
    icon: Building,
    title: "Businesses launching a GCC for the first time",
    description: "Perfect for organizations seeking guidance and local expertise to navigate the complexities of setting up a new global capability center."
  },
  {
    icon: FileSpreadsheet,
    title: "Companies wanting a smooth transition to self-managed operations",
    description: "Ideal for businesses that plan to eventually manage their own operations but require expert guidance during the critical setup and growth phases."
  },
  {
    icon: Settings,
    title: "Organizations looking to build internal capabilities",
    description: "Designed for companies focused on developing their team's skills while maintaining operational excellence throughout the transition process."
  }
];

const BOTBenefits = () => {
  const [activeTab, setActiveTab] = useState<'benefits' | 'ideal'>('benefits');

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
        <SectionTitle gradientWord="Why">Why Our Build-Operate-Transfer Model Excels</SectionTitle>
          <p className="max-w-2xl text-gray-600">
            Our systematic approach ensures a controlled transition<br/>
            from partner-managed to self-managed GCC operations
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

                      {/* This entire div block rendering the ChevronRight icon has been removed */}
                      {/*
                      <div className="flex-shrink-0 self-center hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="w-10 h-10 rounded-full border border-enablr-navy/20 flex items-center justify-center">
                          <ChevronRight className="w-5 h-5 text-enablr-navy" />
                        </div>
                      </div>
                      */}
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

export default BOTBenefits;