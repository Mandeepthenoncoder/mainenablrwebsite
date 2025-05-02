import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import SolutionHeroCarousel from "@/components/solutions/SolutionHeroCarousel";
import SolutionExplanation from "@/components/solutions/SolutionExplanation";
import SolutionKeyOfferings from "@/components/solutions/SolutionKeyOfferings";
import SolutionWhyChooseUs from "@/components/solutions/SolutionWhyChooseUs";
import SolutionCTA from "@/components/solutions/SolutionCTA";
import { Users2, Code2, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

const heroSlides = [
  {
    title: "Staff Augmentation Services",
    description: "",
    image: "/images/New%20images/Main%20Pic-Staff%20Augmentation.jpeg",
    ctaText: "Get Started",
    ctaLink: "/contact"
  }
];

const keyOfferings = [
  {
    icon: Users2,
    title: "Managed resource services",
    description: "Your ongoing projects might fall short of the right talent and skills. Hence, we help you address these issues with ease and handle them on your behalf, enabling oversight, reporting, and day-to-day operations."
  },
  {
    icon: Code2,
    title: "Augmentation based on skills and niche",
    description: "Right from niche tech roles to domain expertise, we fill in the gaps without disturbing your overall structure. With years of experience and market intelligence, we are equipped with the right talent pool for your business needs."
  },
  {
    icon: Zap,
    title: "Swift ramp-up and scale-down",
    description: "Your staffing needs can change at any point; hence we are here to sort them for you with speed and agility. Whether you are scaling up for a new project or working with minimal resources, we make transitions smooth and hassle-free."
  },
  {
    icon: Users,
    title: "Seamless team integration",
    description: "We understand that your core business values are imperative for you to achieve your goals. We help your extended teams to identify with your brand, culture, objective, and workflow right from inception."
  }
];

const whyChooseUsReasons = [
  {
    image: "/images/New%20images/Scaling-Staff%20Augmentation.jpeg",
    title: "On-demand scaling of teams",
    description: "Scale your teams up or down based on project demands and business needs."
  },
  {
    image: "/images/New%20images/Availability%20of%20niche%20technical%20expertise-Staff%20Augmentation.jpeg",
    title: "Availability of niche technical expertise",
    description: "Access specialized talent with domain expertise when you need it."
  },
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    title: "Enabling speed with agility",
    description: "Quick turnaround times for team formation and deployment."
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

const StaffAugmentation = () => {
  return (
    <MainLayout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Helmet>
          <title>Staff Augmentation Services - Enablr</title>
          <meta 
            name="description" 
            content="Access skilled talent and scale your team efficiently with Enablr's Staff Augmentation Services." 
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
            title="Build Agile, High-Performance Teams with Enablr"
            content="At Enablr, we understand the importance of setting up high-performance teams for your capability center.

Ramping up business operations requires skilled staff without much hassle.

We help you find ready-to-deploy professionals who are well versed in domains, such as software development, engineering, logistics, etc.

They can cater to the unique business needs of your global capability center.

With Enablr as your GCC staff augmentation partner, you can scale quickly with pre-vetted, locally compliant talent."
            imagePath="/solutions/Build Agile, High-performance Teams With Enablr - Staff Augmentation.jpg"
          />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <SolutionKeyOfferings
            title="Key Offerings"
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
            title="Transform your GCC into a high impact entity with the right skills"
            buttonText="Let's Connect"
            buttonLink="/contact"
          />
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default StaffAugmentation;
