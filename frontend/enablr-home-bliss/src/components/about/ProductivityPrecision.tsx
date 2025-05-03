import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { typography } from "@/styles/typography";
import { Target, BarChart3, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProductivityPrecision = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: false, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const titleOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.8, 0.9], [0, 1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0.1, 0.2, 0.8, 0.9], [50, 0, 0, -50]);

  const items = [
    {
      icon: Target,
      title: "Define what success looks like",
      description: "We align with your business goals; whether it's accelerating speed, ensuring quality or driving improvement."
    },
    {
      icon: BarChart3,
      title: "Turn metrics into momentum",
      description: " Leverage robust frameworks to track performance and make informed decisions."
    },
    {
      icon: Clock,
      title: "See measurable outcomes",
      description: "Reduce development time with talent augmentation and automation."
    }
  ];

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-24 relative overflow-hidden transition-all duration-1000 hover:bg-gradient-to-br hover:from-red-50 hover:via-white hover:to-blue-50"
      style={{
        background: "linear-gradient(135deg, rgba(239,246,255,0.7) 0%, rgba(255,255,255,1) 50%, rgba(254,242,242,0.7) 100%)"
      }}
    >
      {/* Background gradient elements that animate on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-1000 ease-in-out"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-red-50/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-1000 ease-in-out delay-100"></div>
      
      {/* Content container with relative positioning */}
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="w-full md:w-2/5 md:sticky md:top-24" ref={titleRef}>
            <motion.div
              style={{ 
                opacity: titleOpacity,
                y: titleY
              }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6"
            >
              <h2 className={`${typography.h2} text-enablr-navy tracking-tight mb-5`}>
                
              </h2>
              <h2 className={typography.h2}>
        <span className="font-bold bg-gradient-to-r from-[#EC4630] to-[#19214F] bg-clip-text text-transparent">Enhance </span> productivity with precision journey
      </h2>

              
              <div className="h-px w-16 bg-gradient-to-r from-blue-600 to-red-500 my-6"></div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-3/5">
            <div className="grid grid-cols-1 gap-8">
              {items.map((item, index) => {
                const cardRef = useRef(null);
                const isCardInView = useInView(cardRef, { once: false, amount: 0.3 });
                
                return (
                  <motion.div
                    key={item.title}
                    ref={cardRef}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate={isCardInView ? "visible" : "hidden"}
                    className="group"
                  >
                    <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden relative backdrop-blur-sm">
                      {/* Subtle card accent */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    
                      {/* Dynamic gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-red-50/0 group-hover:from-blue-50/50 group-hover:to-red-50/50 transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100"></div>
                      
                      <div className="relative w-12 h-12 flex-shrink-0 mb-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-red-100 rounded-lg group-hover:from-blue-200 group-hover:to-red-200 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-enablr-navy" />
                        </div>
                      </div>
                      
                      <h3 className={`${typography.h4} text-enablr-navy mb-2 relative z-10`}>
                        {item.title}
                      </h3>
                      <p className={`${typography.body.base} text-gray-600 leading-relaxed font-light relative z-10`}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <Button 
            asChild
            size="lg"
            className="bg-enablr-navy text-white hover:bg-transparent hover:text-enablr-navy hover:border-enablr-navy border border-transparent hover:shadow-md shadow-sm group transition-all duration-300 rounded-md"
          >
            <Link to="/contact" className="flex items-center gap-2">
              Talk to our experts today!
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductivityPrecision; 