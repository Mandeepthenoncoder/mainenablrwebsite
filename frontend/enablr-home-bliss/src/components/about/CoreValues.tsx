import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { HeartHandshake, Shield, Gem, Lightbulb } from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Client Centricity",
    description: "We are committed to understanding, anticipating, and exceeding the needs of our clients, putting their success at the heart of everything we do."
  },
  {
    icon: Shield,
    title: "Trust and Integrity",
    description: "We build long-term relationships based on trust, transparency, and ethical behavior, fostering an environment of mutual respect and collaboration."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously explore new ideas and technologies to deliver cutting-edge solutions that drive business transformation and competitive advantage."
  },
  {
    icon: Gem,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our work, maintaining the highest standards of quality and professionalism to deliver exceptional results."
  }
];

const CoreValues = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-[#F8F9FC] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMTY2LjY2NyAxNjYuNjY3SDIwMFYyMDBIMTY2LjY2N1YxNjYuNjY3Wk0xMzMuMzMzIDE2Ni42NjdIMTY2LjY2N1YyMDBIMTMzLjMzM1YxNjYuNjY3Wk0xMDAgMTY2LjY2N0gxMzMuMzMzVjIwMEgxMDBWMTY2LjY2N1pNNjYuNjY2NyAxNjYuNjY3SDEwMFYyMDBINjYuNjY2N1YxNjYuNjY3Wk0zMy4zMzMzIDE2Ni42NjdINjYuNjY2N1YyMDBIMzMuMzMzM1YxNjYuNjY3Wk0wIDE2Ni42NjdIMzMuMzMzM1YyMDBIMFYxNjYuNjY3WiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9nPjwvc3ZnPg==')] bg-no-repeat bg-bottom opacity-20"></div>
      
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
            className="inline-block mb-3 px-4 py-1.5 bg-enablr-navy/10 rounded-full text-sm font-medium tracking-wider text-enablr-navy"
          >
            OUR PRINCIPLES
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${typography.h2} text-enablr-navy mb-6`}
          >
            Our Core Values
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg font-light"
          >
            Our values shape our culture and guide how we work with clients, partners, and each other
            to deliver exceptional GCC solutions.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 h-full border border-gray-100/50 relative overflow-hidden transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-enablr-navy to-enablr-purple"></div>
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-50 rounded-full opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f8f9ff] to-[#f0f4ff] flex items-center justify-center shadow-md mb-6">
                    <value.icon className="text-enablr-purple w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-enablr-navy mb-4 group-hover:text-enablr-purple transition-colors duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 font-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-2xl text-enablr-navy font-light italic leading-relaxed">
              "Our passion for progress and commitment to excellence shape a future of endless possibilities for our clients' Global Capability Centers."
            </p>
            <footer className="mt-6 text-gray-600">
              <cite className="font-medium not-italic">— Leadership Team, Enablr</cite>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues; 