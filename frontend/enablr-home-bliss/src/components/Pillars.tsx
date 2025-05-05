import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { typography } from "@/styles/typography";
import { cn } from "@/lib/utils";

const Pillars = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  
  const pillars = [
    {
      image: "/images/lot 2/optimized/Guided by Leaders Our Pillar-Home.webp",
      srcSet: "/images/lot 2/optimized/Guided by Leaders Our Pillar-Home-small.webp 640w, /images/lot 2/optimized/Guided by Leaders Our Pillar-Home-medium.webp 1280w, /images/lot 2/optimized/Guided by Leaders Our Pillar-Home-large.webp 1920w",
      title: "Guided By Leaders With Extensive Industry Experience"
    },
    {
      image: "/two.jpg",
      title: "Fueling Your Vision With the Right Talent and Tools"
    },
    {
      image: "/three.jpg",
      srcSet: "/images/lot 2/optimized/FlexibleEngagemmentModel Our Pillars-Home-small.webp 640w, /images/lot 2/optimized/FlexibleEngagemmentModel Our Pillars-Home-medium.webp 1280w, /images/lot 2/optimized/FlexibleEngagemmentModel Our Pillars-Home-large.webp 1920w",
      title: "Flexible Engagement Models for Seamless Growth"
    },
    {
      image: "/four.jpg",
      srcSet: "/images/lot 2/optimized/Transparent ProcessOurPillars-Home-small.webp 640w, /images/lot 2/optimized/Transparent ProcessOurPillars-Home-medium.webp 1280w, /images/lot 2/optimized/Transparent ProcessOurPillars-Home-large.webp 1920w",
      title: "Transparent Processes, Powered by On-Ground Expertise"
    }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      className="py-[20px] md:py-[40px] overflow-hidden relative bg-gray-50"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className={typography.h2}>
        <span className="font-bold bg-gradient-to-r from-[#EC4630] to-[#19214F] bg-clip-text text-transparent">Our</span> Pillars
      </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="transform-gpu"
            >
              <div className="h-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative">
                  {pillar.srcSet ? (
                    <picture>
                      <source 
                        srcSet={pillar.srcSet}
                        type="image/webp"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <img 
                        src={pillar.image} 
                        alt={pillar.title} 
                        className="w-full aspect-[4/3] object-cover"
                        loading="lazy"
                      />
                    </picture>
                  ) : (
                    <img 
                      src={pillar.image} 
                      alt={pillar.title} 
                      className="w-full aspect-[4/3] object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-sm md:text-base font-medium text-gray-800">
                    {pillar.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Pillars;
