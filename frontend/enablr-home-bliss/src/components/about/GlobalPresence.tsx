import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { MapPin } from "lucide-react";

const locations = [
  {
    country: "United States",
    cities: ["San Francisco", "New York", "Chicago"],
    coordinates: { x: "25%", y: "35%" }
  },
  {
    country: "United Kingdom",
    cities: ["London"],
    coordinates: { x: "45%", y: "25%" }
  },
  {
    country: "India",
    cities: ["Bangalore", "Mumbai", "Hyderabad"],
    coordinates: { x: "67%", y: "45%" }
  },
  {
    country: "Singapore",
    cities: ["Singapore"],
    coordinates: { x: "72%", y: "55%" }
  },
  {
    country: "Australia",
    cities: ["Sydney"],
    coordinates: { x: "85%", y: "70%" }
  }
];

const stats = [
  { value: "5+", label: "Countries" },
  { value: "10+", label: "Offices" },
  { value: "500+", label: "GCC Clients" },
  { value: "1000+", label: "GCC Professionals" }
];

const GlobalPresence = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-[#F8F9FC] to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 rounded-full bg-blue-50 opacity-60 blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-purple-50 opacity-50 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-3 px-4 py-1.5 bg-enablr-purple/10 rounded-full text-sm font-medium tracking-wider text-enablr-purple"
          >
            GLOBAL REACH
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${typography.h2} text-enablr-navy mb-6`}
          >
            Our Global Presence
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg font-light"
          >
            Working across borders to deliver exceptional GCC solutions globally, 
            with local expertise and global best practices.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center mb-20">
          <div className="lg:col-span-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-8 h-[500px]">
              <div className="absolute inset-0 bg-gray-50">
                <img 
                  src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?q=80&w=3270&auto=format&fit=crop" 
                  alt="World Map" 
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              
              <div className="relative h-full w-full">
                {locations.map((location, index) => (
                  <motion.div
                    key={location.country}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    className="absolute group cursor-pointer"
                    style={{ 
                      left: location.coordinates.x, 
                      top: location.coordinates.y 
                    }}
                  >
                    <div className="relative">
                      <div className="w-4 h-4 bg-enablr-purple rounded-full relative z-10 group-hover:bg-enablr-navy transition-colors duration-300">
                        <div className="absolute inset-0 bg-enablr-purple/40 rounded-full animate-ping"></div>
                      </div>
                      
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 min-w-max">
                        <div className="bg-white p-3 rounded-lg shadow-md text-center">
                          <p className="font-bold text-enablr-navy">{location.country}</p>
                          <p className="text-xs text-gray-600">{location.cities.join(", ")}</p>
                        </div>
                        <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white mx-auto"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
            >
              <h3 className={`${typography.h3} text-enablr-navy mb-6`}>
                Global Impact
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-enablr-navy to-enablr-purple">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 mt-1 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className={`${typography.h4} text-enablr-navy mb-4`}>
                  Office Locations
                </h4>
                <ul className="space-y-3">
                  {locations.map((location, index) => (
                    <motion.li 
                      key={location.country}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                      className="flex items-start gap-3"
                    >
                      <MapPin className="text-enablr-purple w-5 h-5 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-medium text-gray-900">{location.country}:</span>
                        <span className="text-gray-600 ml-1">{location.cities.join(", ")}</span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence; 