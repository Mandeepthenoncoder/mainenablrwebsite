import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { Target, BarChart3, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProductivityPrecision = () => {
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

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-50/70 to-gray-50">
      {/* Grid pattern background */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIG9wYWNpdHk9IjAuMyIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQxMl8xMTApIj48cGF0aCBkPSJNMTYwMCAwSDBWMTIwMEgxNjAwVjBaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTIwMCAwSDBWMTIwMEgxMjAwVjBaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNODAwIDEyMDBMODAwIDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik00MDAgMTIwMEw0MDAgMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTAgODAwTDEyMDAgODAwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMCA0MDBMMTI2MCA0MDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwXzQxMl8xMTAiPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+')] bg-no-repeat bg-cover opacity-[0.03]"></div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full -ml-32 -mt-32 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-l from-purple-200 to-blue-200 rounded-full -mr-32 -mb-32 opacity-30 blur-3xl"></div>
      <div className="absolute top-1/3 right-0 w-48 h-48 bg-gradient-to-l from-red-100 to-yellow-100 rounded-full -mr-24 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-gradient-to-r from-yellow-100 to-red-100 rounded-full -ml-24 opacity-20 blur-3xl"></div>
      
      {/* Content container with relative positioning */}
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="w-full md:w-2/5">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`${typography.h2} text-enablr-navy tracking-tight mb-5`}
            >
              Enhance productivity with precision
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="h-px w-16 bg-enablr-navy my-6"></div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-3/5">
            <div className="grid grid-cols-1 gap-8">
              {items.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                  className="group relative"
                >
                  <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-enablr-navy opacity-70 group-hover:bg-gradient-to-r group-hover:from-blue-800 group-hover:to-red-600 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-red-50 rounded-tl-[80px] -mr-16 -mb-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    {/* Add the circle decoration that appears on hover */}
                    <div className="absolute top-0 left-0 -ml-12 -mt-12 w-24 h-24 bg-gradient-to-br from-blue-100/30 to-red-100/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div className="flex items-start gap-4">
                      <div className="relative w-12 h-12 flex-shrink-0">
                        <div className="absolute inset-0 bg-enablr-navy/10 rounded-lg"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-red-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-enablr-navy" />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className={`${typography.h4} text-enablr-navy group-hover:text-enablr-navy transition-colors duration-300 mb-2`}>
                          {item.title}
                        </h3>
                        <p className={`${typography.body.base} text-gray-600 leading-relaxed font-light`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
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
            className="bg-enablr-navy text-white hover:bg-white hover:text-enablr-navy hover:border hover:border-enablr-navy shadow-sm hover:shadow-md group transition-all duration-300 rounded-md"
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