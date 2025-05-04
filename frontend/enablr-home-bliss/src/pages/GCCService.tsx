import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import SolutionExplanation from "@/components/solutions/SolutionExplanation";
import SolutionKeyOfferings from "@/components/solutions/SolutionKeyOfferings";
import SolutionWhyChooseUs from "@/components/solutions/SolutionWhyChooseUs";
import HeroSection from "@/components/ui/HeroSection";
import PageCTA from "@/components/PageCTA";
import { Building2, Users, Cpu, Shield, Briefcase, Globe } from "lucide-react";
import { motion } from "framer-motion";

const heroSlide = {
  title: "GCC as a Service",
  description: "End-to-end solution to establish your fully equipped global capability center.",
  image: "/images/lot%202/MainPicture-GCC.jpg",
  ctaText: "Get Started",
  ctaLink: "/contact"
};

const keyOfferings = [
  {
    icon: Building2,
    title: "Infrastructure as a Service",
    description: "We offer a plug-and-play setup without the hassle of managing multiple vendors, enabling end-to-end infrastructure support, whether it's office space, network connectivity, IT infrastructure, or all of the above."
  },
  {
    icon: Users,
    title: "Talent Acquisition and Workforce Management",
    description: "We help you build high-performing teams with no compromise on quality. Right from sourcing and onboarding, to retention, we handle the full scale lifecycle."
  },
  {
    icon: Cpu,
    title: "Technology Delivery and Integration",
    description: "Whether it's engineering support, or technology enhancement support, we bring in the right capabilities when you need them."
  },
  {
    icon: Shield,
    title: "Business Operations and Regulatory Compliance",
    description: "We take care of day-to-day operations and ensure you stay compliant with local regulations. Whether it's tax and labor laws, or reporting and risk management, we go by the book."
  },
  {
    icon: Briefcase,
    title: "Strategic Advisory and Innovation",
    description: "With our experienced leadership team, we offer the much-needed guidance, insights, foresight for you to shape up your GCC and unlock new growth opportunities."
  },
  {
    icon: Globe,
    title: "Enterprise Integration",
    description: "We ensure that your GCC is not tagged as a separate unit, but evovles into one of the integral elements in your overall business ecosystem."
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
    image: "/images/New%20images/SpeedtoLaunch-GCC.jpeg",
    title: "Speed to Launch and Scale",
    description: "Accelerate your market entry and scale operations efficiently with our proven methodologies."
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

const GCCService = () => {
  return (
    <MainLayout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Helmet>
          <title>GCC as a Service - Enablr</title>
          <meta 
            name="description" 
            content="Set up your Global Capability Center with Enablr's comprehensive GCC as a Service solution." 
          />
        </Helmet>
        
        <motion.div variants={itemVariants}>
          <HeroSection
            title="GCC as a Service"
            description="End-to-end solution to establish your fully equipped global capability center."
            image="/images/lot%202/MainPicture-GCC.jpg"
            ctaText="Get Started"
            ctaLink="/contact"
            enableKenBurns={true}
          />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <SolutionExplanation
            title="Build Your GCC From Scratch With Ease and Clarity"
            content={`Enablr provides everything you need to establish and scale your Global Capability Center in India. Our GCC-as-a-Service model covers market entry, compliance, operations, talent, and technology under one integrated offering.

Designed for speed, certainty, and local depth, we help you launch, operate, and grow your GCC without the complexity.

Whether you're entering India for the first time or expanding your global footprint, we take care of the execution so you can stay focused on outcomes.`}
            imagePath="/solutions/Build your GCC with ease and clarity -GCC as a Service.jpg"
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
          <PageCTA
            title="Want to Speed Up Your GCC Launch Plan?"
            buttonText="Let's Talk"
            buttonLink="/contact"
          />
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default GCCService;
