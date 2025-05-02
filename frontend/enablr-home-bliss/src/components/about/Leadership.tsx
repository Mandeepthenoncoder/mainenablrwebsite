import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import Image from "@/components/Image";
import { Linkedin } from "lucide-react";

const leaders = [
  {
    name: "Rajiv Sharma",
    position: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
    bio: "With over 20 years of experience in digital transformation and GCC operations, Rajiv leads Enablr's vision to deliver exceptional value for enterprises globally.",
    linkedin: "#"
  },
  {
    name: "Ananya Patel",
    position: "Chief Operating Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
    bio: "Ananya brings 15+ years of expertise in operational excellence and has led successful GCC transformations for Fortune 500 companies across multiple geographies.",
    linkedin: "#"
  },
  {
    name: "Michael Chen",
    position: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop",
    bio: "Michael leads Enablr's technology strategy, bringing cutting-edge innovation and digital solutions to help enterprises build future-ready GCCs.",
    linkedin: "#"
  },
  {
    name: "Priya Desai",
    position: "Head of Talent Solutions",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2522&auto=format&fit=crop",
    bio: "Priya oversees Enablr's talent acquisition and development strategies, helping clients build high-performing GCC teams across global locations.",
    linkedin: "#"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Leadership = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-[#F0F4F9] to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 rounded-full bg-blue-50 opacity-60 blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-purple-50 opacity-50 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-3 px-4 py-1.5 bg-enablr-purple/10 rounded-full text-sm font-medium tracking-wider text-enablr-purple"
          >
            OUR LEADERSHIP
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${typography.h2} text-enablr-navy mb-6`}
          >
            Executive Leadership Team
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg font-light"
          >
            Our team brings decades of expertise in technology and global capability centers, 
            delivering transformational value to leading enterprises worldwide.
          </motion.p>
        </div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              variants={cardVariants}
              transition={{ delay: 0.1 * index }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full transform hover:-translate-y-2">
                <div className="relative overflow-hidden aspect-[4/5]">
                <Image
                  src={leader.image}
                  alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-enablr-navy/90 via-enablr-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="text-white">
                      <p className="font-light mb-2 opacity-90 text-sm leading-relaxed">
                        {leader.bio}
                      </p>
                    <a 
                        href={leader.linkedin} 
                        className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                        <Linkedin className="w-4 h-4" />
                        <span>Connect on LinkedIn</span>
                    </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-enablr-navy group-hover:text-enablr-purple transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-gray-600 font-medium mt-1">{leader.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
