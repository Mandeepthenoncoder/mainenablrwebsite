import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import SolutionExplanation from "@/components/solutions/SolutionExplanation";
import SolutionKeyOfferings from "@/components/solutions/SolutionKeyOfferings";
import SolutionWhyChooseUs from "@/components/solutions/SolutionWhyChooseUs";
import SolutionCTA from "@/components/solutions/SolutionCTA";
import { Building, Layout, Laptop, Users } from "lucide-react";
import { motion } from "framer-motion";
import WorkspaceHeroSection from "@/components/workspace/WorkspaceHeroSection";

const heroSlides = [
  {
    title: "Workspace Solutions",
    description: "",
    image: "/images/lot%202/HeroImage-WorkspaceSolutions.jpg",
    ctaText: "Get Started",
    ctaLink: "/contact"
  }
];

const keyOfferings = [
  {
    icon: Building,
    title: "Managed Offices",
    description: "Your GCC just doesn't need a physical space, it needs a setup, full length services, and smooth day-to-day operations, so that you can build on your larger business goals. We work with you to create a work environment where you can just walk in, plug in, and get started."
  },
  {
    icon: Layout,
    title: "Flexible Workspaces",
    description: "Your needs could be temporary, short-term, or long-term, we get it. We can set-up a space for a project, a growing team, for any time period that you need. In this way, we enable you to stay flexible and adaptable, aligning with your overarching business goals."
  },
  {
    icon: Laptop,
    title: "Customized Office Spaces",
    description: "Your business deserves a space that aligns with your core value propositions and the global brand recall. We work with you to design and set up your office to match your vibe, workflow, and goals."
  },
  {
    icon: Users,
    title: "Co-working Space",
    description: "Whether your team is fully remote, working from the office, or just need a temporary space, we make it easy for them to stay connected. We have a range of shared spaces, individual desks, or a mix that works for you the way you need."
  }
];

const workspaceReasons = [
  {
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    title: "Purpose-Led Centers\nof Excellence (CoEs)",
    description: "We create spaces designed specifically for your Centers of Excellence, ensuring optimal functionality and collaboration."
  },
  {
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
    title: "Flexible and\nScalable",
    description: "Our workspace solutions adapt to your changing needs, allowing you to scale your operations seamlessly."
  },
  {
    image: "/images/lot%202/SmartSustainable-Workspace%20Solutions.jpg",
    title: "Designed for Improved Focus\nand Productivity",
    description: "Every space is thoughtfully crafted to enhance focus, boost productivity, and promote well-being."
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

const WorkspaceSolutions = () => {
  return (
    <MainLayout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Helmet>
          <title>Workspace Solutions - Enablr</title>
          <meta 
            name="description" 
            content="Create future-ready workspaces for your capability center with Enablr's comprehensive workplace solutions." 
          />
        </Helmet>
        
        <motion.div variants={itemVariants}>
          <WorkspaceHeroSection 
            image={heroSlides[0].image}
          />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <SolutionExplanation
            title="Build Smarter, Sustainable Workspaces"
            content={`We create workspace environments that balance productivity, collaboration, and employee well-being. Our comprehensive Workspace Solutions deliver thoughtfully designed spaces that reflect your company culture and operational needs.

From initial concept to final implementation, we handle everything – office selection, design, furnishing, technology integration, and ongoing management.

Our approach emphasizes flexibility, sustainability, and future readiness, ensuring your workspace evolves with your business needs.`}
            imagePath="/solutions/Build Smarter, Sustainable Workspaces - Workspace Solutions.jpg"
          />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <SolutionKeyOfferings
            title="Workspace Offerings"
            offerings={keyOfferings}
          />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <SolutionWhyChooseUs reasons={workspaceReasons} />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <SolutionCTA
            title="Partner to Create Spaces That Fit Your Needs"
            buttonText="Let's Connect"
            buttonLink="/contact"
          />
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default WorkspaceSolutions;
