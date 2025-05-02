import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { Building, Users, Briefcase, ChevronRight, ChevronLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const benefits = [
  {
    id: 1,
    title: "Low-risk approach to starting your GCC",
    description: "Minimize risks with our proven methodology and expertise in setting up and managing Global Capability Centers."
  },
  {
    id: 2,
    title: "Expert management during setup & growth",
    description: "Leverage our experience to build strong operational foundations and scale your GCC effectively."
  },
  {
    id: 3,
    title: "Clear process for knowledge transfer",
    description: "Structured approach ensures smooth transition of operations and ownership to your team."
  },
  {
    id: 4,
    title: "Build internal capabilities gradually",
    description: "Develop your team's skills and readiness while we manage day-to-day operations."
  }
];

const targets = [
  {
    icon: Building,
    text: "Businesses launching a GCC for the first time seeking guidance and local expertise"
  },
  {
    icon: Briefcase,
    text: "Companies wanting a smooth transition from partner-led to self-managed operations"
  },
  {
    icon: Users,
    text: "Organizations looking to build internal capabilities while maintaining operational excellence"
  }
];

// Custom card stack with active card tracking
const CustomCardStack = ({ items }) => {
  const [cards, setCards] = useState(items);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          rotateCards('next');
          return 0;
        }
        return prev + 1;
      });
    }, 80);
    
    return () => clearInterval(timer);
  }, []);
  
  const rotateCards = (direction) => {
    setProgress(0);
    if (direction === 'next') {
      setActiveIndex((prev) => (prev + 1) % items.length);
    } else {
      setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    }
  };
  
  // Get the active card and the next two cards
  const activeCard = items[activeIndex];
  const nextCardIndex = (activeIndex + 1) % items.length;
  const nextNextCardIndex = (activeIndex + 2) % items.length;
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-[450px] h-[280px] mx-auto">
        {/* Active Card */}
        <motion.div
          key={`card-${activeCard.id}`}
          className="absolute w-full h-full rounded-2xl p-7 bg-white border border-gray-100 shadow-sm flex flex-col"
          style={{ transformOrigin: "top center", zIndex: 30 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-enablr-navy">{activeCard.title}</h3>
            <p className="text-gray-600 leading-relaxed">{activeCard.description}</p>
          </div>
        </motion.div>
        
        {/* Next Card */}
        <motion.div
          key={`card-${items[nextCardIndex].id}-next`}
          className="absolute w-full h-full rounded-2xl p-7 bg-white border border-gray-100 shadow-sm flex flex-col"
          style={{ transformOrigin: "top center", zIndex: 20 }}
          animate={{ y: 14, scale: 0.95, opacity: 0.75 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-enablr-navy">{items[nextCardIndex].title}</h3>
            <p className="text-gray-600 leading-relaxed">{items[nextCardIndex].description}</p>
          </div>
        </motion.div>
        
        {/* Next Next Card */}
        <motion.div
          key={`card-${items[nextNextCardIndex].id}-nextnext`}
          className="absolute w-full h-full rounded-2xl p-7 bg-white border border-gray-100 shadow-sm flex flex-col"
          style={{ transformOrigin: "top center", zIndex: 10 }}
          animate={{ y: 28, scale: 0.9, opacity: 0.65 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-enablr-navy">{items[nextNextCardIndex].title}</h3>
            <p className="text-gray-600 leading-relaxed">{items[nextNextCardIndex].description}</p>
          </div>
        </motion.div>
      </div>
      
      <div className="w-full max-w-[450px] mt-8 bg-gray-50 rounded-full p-4 mx-auto">
        <div className="flex justify-center gap-4 mb-4">
          <button 
            onClick={() => rotateCards('prev')}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-enablr-navy hover:bg-white/80 transition-all duration-300 hover:scale-105"
            aria-label="Show previous card"
          >
            <ChevronLeft className="h-5 w-5 text-enablr-navy" />
          </button>
          <button 
            onClick={() => rotateCards('next')}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-enablr-navy hover:bg-white/80 transition-all duration-300 hover:scale-105"
            aria-label="Show next card"
          >
            <ChevronRight className="h-5 w-5 text-enablr-navy" />
          </button>
        </div>
        
        <Progress value={progress} className="h-1.5 w-full bg-gray-200" />
      </div>
      
      {/* Current card indicator */}
      <div className="absolute top-2 right-2 bg-enablr-navy text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-2">
        <span>{activeIndex + 1}</span>
        <span className="w-0.5 h-3 bg-white/50"></span>
        <span>{items.length}</span>
      </div>
    </div>
  );
};

const BOTBenefits = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title with shared underline */}
        <div className="relative mb-14 text-center">
          <div className="flex justify-center items-baseline gap-x-12 mb-4">
            <h2 className={`${typography.h2} text-enablr-navy`}>
              Why This Model Works
            </h2>
            <div className="h-12 w-px bg-gray-300 hidden md:block"></div>
            <h2 className={`${typography.h2} text-enablr-navy`}>
              Ideal For
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Why This Model Works Section */}
          <motion.div 
            className="lg:w-3/5 bg-white p-8 rounded-xl shadow-sm relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <CustomCardStack items={benefits} />
            </div>
          </motion.div>
          
          {/* Ideal For Section */}
          <motion.div 
            className="lg:w-2/5 bg-white p-8 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-5">
              {targets.map((target, index) => (
                <motion.div
                  key={index}
                  className="relative p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Decorative element - numbered dot */}
                  <div className="absolute -left-2 -top-2 w-6 h-6 rounded-full bg-enablr-navy text-white flex items-center justify-center text-xs font-semibold">
                    {index + 1}
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <target.icon className="w-6 h-6 text-enablr-navy flex-shrink-0" />
                    </div>
                    <p className={`${typography.body.base} text-gray-700 pt-2`}>{target.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BOTBenefits;
