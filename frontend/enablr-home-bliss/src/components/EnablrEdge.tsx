import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "@/components/Image";
import { motion, useInView } from "framer-motion";
import { typography } from "@/styles/typography";

const FeatureCard = ({
  icon,
  title,
  index
}: {
  icon: string;
  title: string;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="flex flex-col items-center sm:items-start text-center sm:text-left group p-4 sm:p-6"
    >
      <motion.div 
        className="h-[60px] sm:h-[80px] md:h-[100px] flex items-center justify-center sm:justify-start mb-3 transition-all duration-300 group-hover:scale-105"
        whileHover={{ 
          rotate: [0, -5, 5, -3, 0],
          transition: { duration: 0.5 }
        }}
      >
        <Image 
          src={icon} 
          alt={title} 
          width={100} 
          height={100} 
          className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px]" 
        />
      </motion.div>
      <h3 className="text-sm sm:text-base md:text-lg font-medium max-w-[280px] mx-auto sm:mx-0 leading-tight group-hover:text-enablr-navy transition-colors duration-300 whitespace-pre-line">
        {title}
      </h3>
    </motion.div>
  );
};

const EnablrEdge = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section 
      ref={sectionRef} 
      className="rounded-[16px] sm:rounded-[20px] md:rounded-[40px] relative overflow-hidden bg-[#ffdee2]/[0.37] px-0 mx-0 py-0"
    >
      <div className="container mx-auto py-[20px] sm:py-[30px] md:py-[50px] px-4 sm:px-6 md:px-[50px]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-6 sm:mb-8 md:mb-12 text-center sm:text-left"
        >
         <h2 className={typography.h2}>
        <span className="font-bold bg-gradient-to-r from-[#EC4630] to-[#19214F] bg-clip-text text-transparent">The Enablr</span> Edge
      </h2>
      <br />

          <p className="text-sm sm:text-base md:text-lg text-gray-700 space-y-0 leading-relaxed">
            At Enablr, we work with you to build your global capability center (GCC) the right way. 
            Designed for speed, scale, and quality at every step. 
            Here's how we help you stay ahead
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
          <FeatureCard 
            icon="/Enablr Edge Accelrate.svg" 
            title="Accelerate your GCC setup with a trusted partner" 
            index={0}
          />
          <FeatureCard 
            icon="https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//partner%20of%20choice.svg" 
            title="Build future-ready centers with Enablr, your 'partner of choice'" 
            index={1}
          />
          <FeatureCard 
            icon="https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//momentum.svg" 
            title="Maintain momentum with transparent, milestone-driven execution" 
            index={2}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-3 sm:gap-4 flex-wrap justify-center sm:justify-start"
        >
          <Button 
            className="bg-enablr-navy text-white hover:bg-white hover:text-enablr-navy border border-transparent hover:border-enablr-navy transition-all duration-300 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
            onClick={() => window.location.href = '/about'}
          >
            Know More
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 0.3, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="absolute right-0 bottom-0 w-1/2 sm:w-2/3 h-1/2 sm:h-2/3" 
          style={{
            backgroundImage: "url('https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//Waves.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right",
            backgroundSize: "contain"
          }}
        />
      </div>
    </section>
  );
};

export default EnablrEdge;
