import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { typography } from "@/styles/typography";


const CareerIntro = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with subtle grid pattern */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-blue-50/70 to-gray-50"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIG9wYWNpdHk9IjAuMyIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQxMl8xMTApIj48cGF0aCBkPSJNMTYwMCAwSDBWMTIwMEgxNjAwVjBaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTIwMCAwSDBWMTIwMEgxMjAwVjBaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNODAwIDEyMDBMODAwIDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik00MDAgMTIwMEw0MDAgMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTAgODAwTDEyMDAgODAwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMCA0MDBMMTI2MCA0MDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwXzQxMl8xMTAiPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc>')] bg-no-repeat bg-cover opacity-[0.03]"></div>
      
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full -ml-32 -mt-32 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-l from-purple-200 to-blue-200 rounded-full -mr-32 -mb-32 opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left side - Mission statement */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/5"
          >
            <div className="space-y-6">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={cn(typography.body.lg, "text-gray-700 font-medium")}
              >
                At Enablr, we build more than GCCs, we build high-performing teams that power them.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={cn(typography.body.base, "text-gray-600 leading-relaxed")}
              >
                As a trusted partner to global enterprises and startups, we deliver end-to-end GCC solutions across technology, talent, workspace, and operations.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className={cn(typography.body.base, "text-gray-600 leading-relaxed")}
              >
                Be part of a people-first culture, work on impactful global projects, and shape a career built for long-term growth.
              </motion.p>
            </div>
          </motion.div>
          
          {/* Right side - Image of smiling new employees */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-3/5 relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-xl shadow-lg">
              {/* Shadow overlay at the bottom for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-enablr-navy/30 to-transparent z-10"></div>
              
              {/* Updated career image */}
              <div className="lg:w-1/2 relative min-h-[300px] md:min-h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/Career/one.webp" 
                  alt="Enablr Team Collaboration"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              
              {/* Decorative accent line on top */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-red-500"></div>
            </div>
          </motion.div>
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

export default CareerIntro;
