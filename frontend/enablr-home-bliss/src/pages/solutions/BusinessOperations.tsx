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

const heroImage = "/business ops hero images new.jpg";

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
  },
  {
    icon: Globe,
    title: "Processes for global consistency",
    description: "We establish standardized yet agile business processes that ensure consistent service delivery across your global business footprint. From finance and HR to procurement and compliance, these scalable operations enable your GCC to adapt seamlessly to the on-ground requirements and yet stay aligned with global standards."
  }
];

const whyChooseUsReasons = [
  {
    image: "/images/Governance.jpg",
    title: "Simplified governance and reporting",
    description: "We simplify governance and reporting for your business operations, providing you useful, real-time insights and vision to make informed decisions with confidence.."
  },
  {
    image: "/images/Bot.jpg",
    title: "Infrastructure set up with operational excellence",
    description: "Right from the start, we set up scalable infrastructure that is supported by proven and tested processes to ensure smooth operations, ensuring sustainability in your operations."
  },
  {
    image: "/images/New%20images/Innovation-Business%20Operations.jpeg",
    title: "Continuous innovation for accelerated growth",
    description: "We understand your need for continuous improvement and innovation through your GCC, hence, we build scalable tech frameworks and processes that power you in this dynamic marketplace.."
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

// Custom Business Hero Section Component
const BusinessHeroSection = () => {
  return (
    <section className="relative h-[40vh] md:h-[80vh] rounded-b-[48px] overflow-hidden">
      {/* Ken Burns animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes kenBurns {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          .ken-burns-bg {
            animation: kenBurns 10s ease-in-out infinite;
          }
          
          /* Custom styles for title line breaks */
          .title-line {
            display: block !important;
            width: 100% !important;
            white-space: nowrap !important;
            overflow: visible !important;
          }
          
          .title-container {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
          }
        `
      }} />
      
      {/* Background image container */}
      <div className="absolute inset-0 z-0">
        {/* Mobile image */}
        <div className="block md:hidden w-full h-full ken-burns-bg">
          <img
            src={heroImage}
            alt="Business Operations background"
            className="w-full h-full object-cover"
            style={{
              transform: "scaleX(-1)",
              objectPosition: "center 50%",
              objectFit: "cover",
              width: "180%",
              height: "auto",
              maxWidth: "none",
            }}
          />
        </div>
        
        {/* Desktop image */}
        <div className="hidden md:block w-full h-full ken-burns-bg">
          <img
            src={heroImage}
            alt="Business Operations background"
            className="w-full h-full object-cover"
            style={{
              transform: "scaleX(-1)",
              objectPosition: "center 35%",
              objectFit: "cover",
            }}
          />
        </div>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-gradient-to-r to-transparent sm:w-[60%] md:w-[50%] lg:w-[40%]"
          style={{
            backgroundImage: "linear-gradient(to right, #0D214FE6, #0D214F99, transparent)"
          }}
        ></div>
      </div>
      
      {/* Content container */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Title with line breaks handling */}
              <div className="title-container">
                <span 
                  className="title-line text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white" 
                >
                  Business Operations
                </span>
                <span 
                  className="title-line text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 md:mb-4" 
                >
                  Solutions
                </span>
              </div>
              
              <p className="text-base md:text-lg text-white/90 mb-4 md:mb-8 max-w-lg">
                Power your business growth with seamless operational support
              </p>
              
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
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
          <BusinessHeroSection />
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