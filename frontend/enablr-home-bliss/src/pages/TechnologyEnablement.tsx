import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import SolutionExplanation from "@/components/solutions/SolutionExplanation";
import SolutionKeyOfferings from "@/components/solutions/SolutionKeyOfferings";
import SolutionWhyChooseUs from "@/components/solutions/SolutionWhyChooseUs";
import PageCTA from "@/components/PageCTA";
import { Code2, Cloud, Cpu, Users } from "lucide-react";
import { motion } from "framer-motion";
import { TextStyled } from "@/components/ui/TextStyled";
import { ResponsiveBreak } from "@/components/ui/ResponsiveBreak";
import HeroSection from "@/components/ui/HeroSection";
import SEO from "@/components/seo/SEO";

const heroSlides = [
  {
    title: "Technology Enablement Solutions",
    description: "",
    image: "/tech-hero.webp",
    ctaText: "Get Started",
    ctaLink: "/contact"
  }
];

const keyOfferings = [
  {
    icon: Code2,
    title: "End to End Technology Delivery",
    description: "From product development to ongoing support, we help you build and manage the technology you need to move forward in your GCC journey. Our goal is to create a well-orchestrated system that runs seamlessly and supports your growth."
  },
  {
    icon: Cloud,
    title: "IT Infrastructure Setup and Management",
    description: "While technology is the backbone of every business, we know the roadblocks that can slow down your journey. We handle the IT infrastructure, including Cloud and network connectivity to provide a secure and scalable setup for you."
  },
  {
    icon: Cpu,
    title: "Access to Emerging Technologies",
    description: "Our objective is to help you set up a future-ready global capability center (GCC). With any trending or emerging technology that you need, we help you test, adopt, and integrate without a doubt."
  },
  {
    icon: Users,
    title: "Technology Consulting and CTO Services",
    description: "We are your trusted tech partner, enabling you to plan, scale, and grow with confidence. From building technology architecture to mapping a long-term strategy, we help you make smart decisions."
  }
];

// Define technology-specific Why Choose Us reasons
const technologyReasons = [
  {
    image: "/Solutions/Technology-Enablement/Seamless_Tech.webp",
    title: "Seamless Technology Integration",
    description: "We build flawless and future-proof technology frameworks that power up your GCC transformation journey."
  },
  {
    image: "/Solutions/Technology-Enablement/experienced_leadership.webp",
    title: "Experienced Leadership With Long-Term Vision",
    description: "We bring deep expertise from our tech teams and guided by leaders for efficient decisions, enabling sustainable growth in perspective."
  },
  {
    image: "/Solutions/Technology-Enablement/Not_Just_a_Tech.webp",
    title: "Not Just a Technology Checklist, Strategic Partnership",
    description: " We work beyond just implementing technology, becoming your strategic partner to achieve technology enablement objectives."
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

const TechnologyEnablement = () => {
  return (
    <MainLayout>
      <SEO
        title="Technology Enablement | Digital GCC Transformation | Enablr"
        description="Transform your Global Capability Center with Enablr's technology enablement solutions. From digital transformation to cloud infrastructure, we help you build a future-ready GCC."
        keywords="GCC technology enablement, digital transformation, cloud infrastructure, GCC innovation, technology solutions, digital capability center, GCC modernization"
        canonicalUrl="https://gccenablr.com/solutions/technology-enablement/"
        ogImage="https://gccenablr.com/solutions/technology-enablement-opengraph-image.png"
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <HeroSection
            title="Technology Enablement Solutions"
            description="Leverage technology to power your capability center with Enablr's comprehensive technology solutions and services."
            image="/Solutions/Technology-Enablement/Technology_hero.webp"
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
            title="Power your GCC with future-ready technology"
            content={`We offer the technical expertise and innovative solutions your GCC needs to excel. Our Technology Enablement Solutions provide comprehensive support for all your technology requirements – from infrastructure and specialized tools to talent with cutting-edge skills.

Whether you're setting up new technology capabilities, integrating systems, or implementing advanced solutions, our team delivers the technical foundation for your success.

We handle the complexity of technology deployment so you can focus on leveraging it for strategic advantage.`}
            imagePath="/Solutions/Technology-Enablement/Power_your_GCC.webp"
          />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <SolutionKeyOfferings
            title="Key Offerings"
            offerings={keyOfferings.map(offering => ({
              ...offering,
              title: offering.title
            }))}
          />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <SolutionWhyChooseUs 
            reasons={technologyReasons.map(reason => ({
              ...reason,
              title: reason.title.replace('\n', ' ')
            }))} 
          />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <PageCTA
            title="Future-proof your GCC journey with us"
            buttonText="Let's Connect"
            buttonLink="/contact"
          />
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default TechnologyEnablement;
