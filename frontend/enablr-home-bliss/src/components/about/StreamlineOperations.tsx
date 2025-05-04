import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { typography } from "@/styles/typography";
import { Server, Network, Briefcase, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const StreamlineOperations = () => {
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
      icon: Network,
      title: "Robust IT infrastructure for your GCC",
      description: "From rack-stack networks to end-user computing, we design and manage modern infrastructure that ensures seamless collaboration and high availability across your global operations."
    },
    {
      icon: Briefcase,
      title: "Integrated enterprise support functions",
      description: "Whether it's HR operations, finance, or procurement, we enable smooth, centralized back-office processes to support your GCC's scale and efficiency."
    },
    {
      icon: Cpu,
      title: "Automation built-in",
      description: "We integrate relevant and cutting-edge tools to automate reporting, workflows, and data capture; reducing manual effort and boosting operational speed."
    }
  ];

  // Card animation variants for the reversed layout
  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
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
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden bg-enablr-navy">
      {/* Grid pattern background */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIG9wYWNpdHk9IjAuMyIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQxMl8xMTApIj48cGF0aCBkPSJNMTYwMCAwSDBWMTIwMEgxNjAwVjBaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTIwMCAwSDBWMTIwMEgxMjAwVjBaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNODAwIDEyMDBMODAwIDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik00MDAgMTIwMEw0MDAgMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTAgODAwTDEyMDAgODAwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMCA0MDBMMTI2MCA0MDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwXzQxMl8xMTAiPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+')] bg-no-repeat bg-cover opacity-10"></div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-800/40 to-indigo-800/40 rounded-full -mr-48 -mt-48 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-indigo-800/40 to-blue-800/40 rounded-full -ml-48 -mb-48 opacity-30 blur-3xl"></div>
      
      {/* Content container with relative positioning */}
      <div className="container mx-auto px-6 md:px-4 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row-reverse items-start justify-between gap-8 md:gap-12">
          <div className="w-full md:w-2/5 md:sticky md:top-24 md:text-right" ref={titleRef}>
            <motion.div
              style={{ 
                opacity: titleOpacity,
                y: titleY
              }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6"
            >
              <h2 className={`${typography.h2} text-white tracking-tight mb-4 text-3xl md:text-4xl`}>
                Streamline IT and business operations
              </h2>
              
              <div className="h-px w-16 bg-white my-5 md:my-6 md:ml-auto"></div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-3/5">
            <div className="grid grid-cols-1 gap-6 md:gap-8">
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
                    className="group relative"
                  >
                    <div className="p-6 md:p-8 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/10 hover:shadow-xl transition-all duration-500 overflow-hidden">
                      {/* Top accent only - removed corner decorative elements */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-white opacity-70 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-red-400 transition-colors duration-300"></div>
                      
                      <div className="flex items-start gap-4 relative z-10">
                        <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                          <div className="absolute inset-0 bg-white/20 rounded-lg"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-red-400/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        
                        <div>
                          <h3 className={`${typography.h4} text-white group-hover:text-white transition-colors duration-300 mb-2 text-lg md:text-xl`}>
                            {item.title}
                          </h3>
                          <p className={`${typography.body.base} text-white/80 leading-relaxed font-light text-sm md:text-base`}>
                            {item.description}
                          </p>
                        </div>
                      </div>
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
          className="mt-16 md:mt-24 text-center"
        >
          <Button 
            asChild
            size="lg"
            className="bg-white text-enablr-navy hover:bg-blue-100 hover:text-enablr-navy shadow-sm hover:shadow-md group transition-all duration-300 rounded-md w-full sm:w-auto"
          >
            <Link to="/contact" className="flex items-center justify-center gap-2">
              Talk to our experts today!
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default StreamlineOperations; 