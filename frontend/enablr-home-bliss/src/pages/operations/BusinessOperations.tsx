import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import BusinessOperationsSolutionHeroCarousel from "@/components/solutions/BusinessOperationsSolutionHeroCarousel";
import SolutionExplanation from "@/components/solutions/SolutionExplanation";
import SolutionKeyOfferings from "@/components/solutions/SolutionKeyOfferings";
import SolutionWhyChooseUs from "@/components/solutions/SolutionWhyChooseUs";
import SolutionCTA from "@/components/solutions/SolutionCTA";
import { Box, FileSpreadsheet, Landmark, Shield } from "lucide-react";
import { motion } from "framer-motion";

const heroSlides = [
  {
    title: "Business Operations Solutions",
    description: "",
    image: "/images/lot%202/HeroImage-Business%20Operations.jpg",
    ctaText: "Get Started",
    ctaLink: "/contact"
  }
];

const keyOfferings = [
  {
    icon: Box,
    title: "Business process integration",
    description: "Your operations must flow with ease in a unified manner, no matter where your teams are located. We help you connect global and local processes to bring the essence of collaboration and process integration to your business."
  },
  {
    icon: FileSpreadsheet,
    title: "Finance and accounting",
    description: "When it comes to any business, your finance chart needs to be clean and regulation-oriented as per the geography where you operate. We ensure that your key requirements such as payroll, reporting, taxation, and other compliance aspects are in line, enabling you stay focused."
  },
  {
    icon: Shield,
    title: "Regulatory and compliance management",
    description: "Your plan must not get blocked by red tape or any local regulations. Our expert teams foresee and plan for the future, aligning with local laws and requirements to keep your business compliant."
  }
];

const whyChooseUsReasons = [
  {
    image: "/images/New%20images/Martket%20Intelligenc-GCC.jpeg",
    title: "Local-Global Market Intelligence",
    description: "Leverage our deep understanding of both local markets and global business landscapes to make informed decisions."
  },
  {
    image: "/images/New%20images/Infra%20Support-GCC.jpeg",
    title: "End-to-End Infrastructure Support",
    description: "Get comprehensive infrastructure solutions from initial setup to ongoing maintenance and optimization."
  },
  {
    image: "/images/New%20images/Innovation-Business%20Operations.jpeg",
    title: "Continuous innovation for accelerated growth",
    description: "Drive growth through continuous innovation and process improvement."
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

const BusinessOperations = () => {
  return (
    <MainLayout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Helmet>
          <title>Business Operations Solutions - Enablr</title>
          <meta 
            name="description" 
            content="Power your business growth with Enablr's comprehensive business operations solutions for your capability center." 
          />
        </Helmet>
        
        <motion.div variants={itemVariants}>
          <BusinessOperationsSolutionHeroCarousel slides={heroSlides} />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <SolutionExplanation
            title="Power Business Growth with Seamless Operational Support"
            content={`Enablr helps simplify and optimize business operations in your capability center, enabling you to move faster and scale smarter.

From administration and procurement to HR, payroll, and regulatory support, we work as your behind-the-scenes engine, so that you can focus on business growth, strategy, and execution.

If you are setting up a global capability center, then you can trust Enablr for the local expertise and operational muscle to make it seamless. Partner with Enablr to accelerate your GCC plans.`}
            imagePath="/business-operations.jpeg"
          />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <SolutionKeyOfferings
            title="Comprehensive Business Operations"
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
            title="Gain operational excellence and experienced guidance from the start"
            buttonText="Let's connect"
            buttonLink="/contact"
          />
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default BusinessOperations;

