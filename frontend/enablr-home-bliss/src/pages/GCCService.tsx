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
import SEO from "@/components/seo/SEO";

const heroSlide = {
  title: "GCC-as-a-Service",
  description: "End-to-end solution to establish your fully equipped global capability center.",
  image: "",
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
    description: "We ensure that your GCC is not tagged as a separate unit, but evolves into one of the integral elements in your overall business ecosystem."
  }
];

const whyChooseUsReasons = [
  {
    image: "/Solutions/GCC-as-a-Service/GCC_2.webp",
    title: "Local-Global Market Intelligence",
    description: "We tap into our deep local expertise and global business insights, enabling you to make decisions with clarity and confidence.      "
  },
  {
    image: "/Solutions/GCC-as-a-Service/GCC_3.webp",
    title: "End-to-End Infrastructure Support",
    description: "We build end-to-end infrastructure solutions from setup to scale, and even extend support for any ongoing maintenance and optimization."
  },
  {
    image: "/Solutions/GCC-as-a-Service/GCC_4.webp",
    title: "Speed to Launch and Scale",
    description: "We speed up your go-to-market strategy and scale at ease without any compromise, powered by our industry experience and prove solutions."
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
      <SEO
        title="GCC-as-a-Service | End-to-End Capability Center Solutions | Enablr"
        description="Launch and scale your Global Capability Center with Enablr's comprehensive GCC-as-a-Service solution. From setup to operations, we provide everything you need for a successful GCC."
        keywords="GCC-as-a-Service, end-to-end GCC solutions, capability center setup, GCC management, complete GCC services, GCC operations, capability center solutions"
        canonicalUrl="https://gccenablr.com/solutions/gcc-service/"
        ogImage="https://gccenablr.com/solutions/gcc-service-opengraph-image.png"
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <HeroSection
            title="GCC-as-a-Service"
            description="End-to-end solution to establish your fully equipped global capability center."
            image="/Solutions/GCC-as-a-Service/GCC-hero.webp"
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
            title="Build your GCC from scratch with ease and clarity"
            content={`Enablr provides everything you need to establish and scale your Global Capability Center in India. Our GCC-as-a-Service model covers market entry, compliance, operations, talent, and technology under one integrated offering.

Designed for speed, certainty, and local depth, we help you launch, operate, and grow your GCC without the complexity.

Whether you're entering India for the first time or expanding your global footprint, we take care of the execution so you can stay focused on outcomes.`}
            imagePath="/Solutions/GCC-as-a-Service/GCC_1.webp"
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
            title="Want to speed up your GCC launch plan?"
            buttonText="Let's Talk"
            buttonLink="/contact"
          />
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default GCCService;
