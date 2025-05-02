import React, { useRef } from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface JourneyStepProps {
  number: string;
  title: string;
  description: string;
  index: number;
  isLast: boolean;
}

const JourneyStep = ({ number, title, description, index, isLast }: JourneyStepProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex-1 group"
    >
      {/* Top step indicator and number */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-enablr-navy text-white font-semibold text-xl group-hover:bg-gradient-to-r group-hover:from-blue-800 group-hover:to-red-600 transition-colors duration-300 shadow-md">
          {number}
        </div>
        
        {/* Connecting line */}
        {!isLast && (
          <div className="absolute top-7 left-[calc(50%+35px)] h-0.5 w-full bg-gray-200 -z-10 group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-red-300 transition-colors duration-300"></div>
        )}
      </div>

      {/* Content */}
      <div className="text-center px-3">
        <h3 className={cn(typography.h4, "text-enablr-navy mb-2")}>
          {title}
        </h3>
        <p className={cn(typography.body.sm, "text-gray-600 leading-relaxed")}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const journeySteps = [
  {
    number: "01",
    title: "Application",
    description: "Browse our open positions and apply with your resume. Our team reviews every application and gets back within 1-2 weeks."
  },
  {
    number: "02",
    title: "Initial Conversation",
    description: "Connect with our talent acquisition team to discuss your experience, aspirations, and how you might fit with Enablr."
  },
  {
    number: "03",
    title: "Technical Assessment",
    description: "Showcase your expertise through tailored assessments designed to evaluate your skills and problem-solving abilities."
  },
  {
    number: "04",
    title: "Team Interview",
    description: "Meet with potential teammates and leaders to explore cultural fit, discuss technical challenges, and share ideas."
  },
  {
    number: "05",
    title: "Welcome to Enablr",
    description: "From offer acceptance to onboarding, we'll guide you through the journey of becoming an Enablr team member."
  }
];

const CareerJourney = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with subtle grid pattern */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-blue-50/70 to-gray-50"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIG9wYWNpdHk9IjAuMyIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQxMl8xMTApIj48cGF0aCBkPSJNMTYwMCAwSDBWMTIwMEgxNjAwVjBaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTIwMCAwSDBWMTIwMEgxMjAwVjBaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNODAwIDEyMDBMODAwIDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik00MDAgMTIwMEw0MDAgMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTAgODAwTDEyMDAgODAwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMCA0MDBMMTI2MCA0MDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwXzQxMl8xMTAiPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc>')] bg-no-repeat bg-cover opacity-[0.03]"></div>
      
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full -ml-32 -mt-32 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-l from-purple-200 to-blue-200 rounded-full -mr-32 -mb-32 opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(typography.h2, "mb-6 text-enablr-navy tracking-tight")}
          >
            Your Journey with Us
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={cn(typography.body.lg, "text-gray-600 max-w-2xl mx-auto")}
          >
            Our hiring process is designed to be transparent, efficient, and focused on finding the right match. Here's what you can expect when you apply.
          </motion.p>
        </motion.div>
        
        {/* Journey Timeline - Desktop Version (hidden on mobile) */}
        <div className="hidden lg:block mb-12">
          <div className="flex items-stretch gap-6">
            {journeySteps.map((step, index) => (
              <JourneyStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                index={index}
                isLast={index === journeySteps.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Journey Timeline - Mobile Version (scrollable) */}
        <div className="lg:hidden relative mb-10">
          {/* Scroll Controls */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 opacity-80 hover:opacity-100 transition-opacity"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-enablr-navy" />
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 opacity-80 hover:opacity-100 transition-opacity"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-enablr-navy" />
          </button>
          
          {/* Scrollable Container */}
          <div 
            ref={scrollRef} 
            className="flex overflow-x-auto gap-4 pb-6 hide-scrollbar px-10"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {journeySteps.map((step, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-64 scroll-snap-align-start"
                style={{ scrollSnapAlign: 'start' }}
              >
                <JourneyStep
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  index={index}
                  isLast={index === journeySteps.length - 1}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Accent line at bottom */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="w-full h-0.5 mt-8 bg-gradient-to-r from-blue-300 to-red-300 origin-left"
        />
      </div>
    </section>
  );
};

export default CareerJourney; 