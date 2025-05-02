import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import SolutionHeroCarousel from "@/components/solutions/SolutionHeroCarousel";
import SolutionExplanation from "@/components/solutions/SolutionExplanation";
import SolutionKeyOfferings from "@/components/solutions/SolutionKeyOfferings";
import SolutionWhyChooseUs from "@/components/solutions/SolutionWhyChooseUs";
import SolutionCTA from "@/components/solutions/SolutionCTA";
import { ClipboardList, GraduationCap, Search, Users } from "lucide-react";
import { motion } from "framer-motion";

const heroSlides = [
  {
    title: "Talent and HR Solutions",
    description: "",
    image: "/images/New%20images/Right%20Team%20-%20TalentHR.jpeg",
    ctaText: "Get Started",
    ctaLink: "/contact"
  }
];

const keyOfferings = [
  {
    icon: ClipboardList,
    title: "HR operations and workforce management",
    description: "Your business needs smooth, structured support right from onboarding to day-to-day HR needs. We don't want you get flustered with these tasks and shift your focus; hence we collectively handle the admin and systems."
  },
  {
    icon: GraduationCap,
    title: "Upskilling and training programs",
    description: "Constant learning and growth go hand-in-hand and these requirements are consistent. We work with you to design training programs that fit your business goals and enable your teams to get future-ready."
  },
  {
    icon: Search,
    title: "Streamlined recruitment",
    description: "Your recruitment teams must look beyond some repetitive operational tasks. With our experience over the years, we bring in efficiency in the hiring process to ease scheduling, tracking, and communication."
  },
  {
    icon: Users,
    title: "Strategic talent sourcing",
    description: "Don't just wait for resumes, let's look beyond. Your business needs right people at the right team to do the on-ground magic. We help you access curated talent pools with our smart sourcing strategies to find the best fit for your GCC whenever you need."
  }
];

const whyChooseUsReasons = [
  {
    image: "/images/lot%202/Tier2and3-TalentHR.jpg",
    title: "Tier-2 & Tier-3 talent awareness",
    description: "Deep understanding and access to talent in emerging tech hubs."
  },
  {
    image: "/images/lot%202/Untapped-TalentHR.jpg",
    title: "Access to untapped, high-quality talent pool",
    description: "Connect with pre-screened, qualified candidates ready for your GCC."
  },
  {
    image: "/images/New%20images/Optimized-TalentHR.jpeg",
    title: "Optimized recruitment cost",
    description: "Efficient processes and strategic sourcing to reduce hiring costs."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const TalentAndHR = () => {
  return (
    <MainLayout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Helmet>
          <title>Talent & HR Solutions - Enablr</title>
          <meta 
            name="description" 
            content="Build high-performing teams with Enablr's comprehensive talent and HR solutions for your capability center." 
          />
        </Helmet>
        
        <motion.div variants={itemVariants}>
          <SolutionHeroCarousel slides={heroSlides} />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <SolutionExplanation
            title="Build the Right Teams with Strategic Talent & HR Solutions"
            content="Enablr provides end-to-end talent & HR solutions tailored to the unique requirements of your business. Whether you have to source high-quality talent, manage complex visa processes, onboard employees or manage compliance workflows—we help simplify people operations so that you can focus on business growth.

As you set up your global capability center, we help you hire faster, stay compliant, and retain talent that drives impact.

Build the dream team for your capability center with the help of experts who know the GCC domain."
            imagePath="/solutions/Build The Right Teams With Strategic Talent & Hr Solutions -TalentHR.jpg"
          />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <SolutionKeyOfferings
            title="Comprehensive Talent Solutions"
            offerings={keyOfferings}
          />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <SolutionWhyChooseUs reasons={whyChooseUsReasons} />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <SolutionCTA
            title="Look beyond just recruitment, enable strategic workforce management"
            buttonText="Let's Connect"
            buttonLink="/contact"
          />
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default TalentAndHR;
