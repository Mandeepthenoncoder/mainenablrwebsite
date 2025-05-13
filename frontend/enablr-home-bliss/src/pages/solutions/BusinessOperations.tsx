import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import SolutionExplanation from "@/components/solutions/SolutionExplanation";
import SolutionKeyOfferings from "@/components/solutions/SolutionKeyOfferings";
import SolutionWhyChooseUs from "@/components/solutions/SolutionWhyChooseUs";
import PageCTA from "@/components/PageCTA";
import { Box, FileSpreadsheet, Globe, Globe2, Landmark, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import GlobalTeam from "@/components/sections/GlobalTeam";
import HeroSection from "@/components/ui/HeroSection";

const heroImage = "/Solutions/Business-Operations/Business_op_hero.webp";

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
    description: "Your plan must not get blocked by any local regulations or procedures. Our expert teams foresee and plan for the future, aligning with local laws and requirements to keep your business compliant."
  },
  {
    icon: Globe,
    title: "Processes for global consistency",
    description: "We establish standardized yet agile business processes that ensure consistent service delivery across your global business footprint. From finance and HR to procurement and compliance, these scalable operations enable your GCC to adapt seamlessly to the on-ground requirements and yet stay aligned with global standards."
  }
];

const whyChooseUsReasons = [
  {
    image: "/Solutions/Business-Operations/policies.webp",
    title: "Simplified governance and reporting",
    description: "We simplify governance and reporting for your business operations, providing you useful, real-time insights and vision to make informed decisions with confidence."
  },
  {
    image: "/Solutions/Business-Operations/Bot.webp",
    title: "Infrastructure set up with operational excellence",
    description: "Right from the start, we set up scalable infrastructure that is supported by proven and tested processes to ensure smooth operations, ensuring sustainability in your operations."
  },
  {
    image: "/Solutions/Business-Operations/Innovation.webp",
    title: "Continuous innovation for accelerated growth",
    description: "We understand your need for continuous improvement and innovation through your GCC, hence, we build scalable tech frameworks and processes that power you in this dynamic marketplace."
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
  // Custom title component with nowrap styling
  const customTitle = (
    <span className="whitespace-nowrap ">Business Operations Solutions</span>
  );

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
          <HeroSection
            title={customTitle}
            description="Power your business growth with seamless operational support"
            image={heroImage}
            ctaText=""
            ctaLink=""
            enableKenBurns={true}
            flipImage={true}
          />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <SolutionExplanation
            title="Power business growth with seamless operational support"
            content={`Enablr helps simplify and optimize business operations in your capability center, enabling you to move faster and scale smarter.

From administration and procurement to HR, payroll, and regulatory support, we work as your behind-the-scenes engine, so that you can focus on business growth, strategy, and execution.

If you are setting up a global capability center, then you can trust Enablr for the local expertise and operational muscle to make it seamless. Partner with Enablr to accelerate your GCC plans.`}
            imagePath="/Solutions/Business-Operations/business-operations.webp"
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
          <PageCTA 
            title="Gain operational excellence and experienced guidance from the start"
            buttonText="Let's Talk"
            buttonLink="/contact"
          />
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default BusinessOperations; 