import React from "react";
import { motion } from "framer-motion";
import { Globe, Lightbulb, Users, TrendingUp } from "lucide-react";
import { typography } from "@/styles/typography";
import { cn } from "@/lib/utils";
import PillarCard from "./PillarCard";

const pillarData = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global impact, local excellence",
    description: "At Enablr, you operate at the intersection of global ambition and India's innovation ecosystem. Collaborate with international teams and industry leaders while delivering impact."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation-driven mindset",
    description: "We embed innovation in every layer of our work—from AI-led technology to process transformation. Here, you'll be empowered to think boldly, challenge convention, and build solutions that drive real value for global enterprises."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "People-centric culture",
    description: "We believe exceptional outcomes start with empowered people. Our culture prioritizes transparency, collaboration, flexibility, and growth—enabling you to do your best work in a supportive and inclusive environment."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Purposeful career growth",
    description: "Growth at Enablr is intentional. With access to upskilling, mobility across functions, and leadership pathways, you'll build a career that aligns with your aspirations; supported every step of the way."
  }
];

const CareerPillars = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with subtle grid pattern */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-blue-50/70 to-gray-50"></div>
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
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(typography.h2, "mb-6 text-enablr-navy tracking-tight")}
          >
            What Sets Your Journey at Enablr Apart
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={cn(typography.body.lg, "text-gray-600 max-w-2xl mx-auto")}
          >
            The core values that define how we work and collaborate to build high-performing teams
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
          {pillarData.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.15) }}
              className="h-full"
            >
              <PillarCard 
                icon={pillar.icon} 
                title={pillar.title}
                description={pillar.description}
              />
            </motion.div>
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

export default CareerPillars;
