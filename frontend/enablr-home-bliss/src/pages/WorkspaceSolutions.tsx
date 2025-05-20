import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import SolutionExplanation from "@/components/solutions/SolutionExplanation";
import SolutionKeyOfferings from "@/components/solutions/SolutionKeyOfferings";
import SolutionWhyChooseUs from "@/components/solutions/SolutionWhyChooseUs";
import PageCTA from "@/components/PageCTA";
import { Building, Layout, Laptop, Users } from "lucide-react";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import HeroSection from "@/components/ui/HeroSection";
import SEO from "@/components/seo/SEO";

const heroImage = "/Solutions/Workspace-Solutions/Workspace_hero.webp";

const keyOfferings = [
  {
    icon: Building,
    title: "Managed Offices",
    description: "Your GCC just doesn't need a physical space, it needs a setup, full length services, and smooth day-to-day operations, so that you can build on your larger business goals. We work with you to create a work environment where you can just walk in, plug in, and get started."
  },
  {
    icon: Layout,
    title: "Flexible Workspaces",
    description: "Your needs could be temporary, short-term, or long-term, we get it. We can set up a space for a project, a growing team, for any time period that you need. In this way, we enable you to stay flexible and adaptable, aligning with your overarching business goals."
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
    description: "We work with you to design workspaces that induce creativity, innovation, and help you stay upbeat for your next move."
  },
  {
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
    title: "Flexible and\nScalable",
    description: "We partner to build what works for you, keeping future growth plans in perspective, enabling the right tone for your business."
  },
  {
    image: "/Solutions/Workspace-Solutions/workspace.webp",
    title: "Designed for Improved Focus\nand Productivity",
    description: "We propose workspace solutions that boost teams to think beyond mundane tasks and deliver cutting-edge solutions for consistent growth."
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

// Custom styles to reduce gaps between sections
const customStyles = `
  /* Remove extra spacing on mobile */
  @media (max-width: 767px) {
    .workspace-solutions-page .solution-section {
      margin-top: 0 !important;
      padding-top: 0 !important;
    }
    
    .workspace-solutions-page .hero-section {
      margin-bottom: -16px !important;
    }
    
    .workspace-solutions-page .explanation-section {
      padding-top: 1rem !important;
    }
  }
`;

const WorkspaceSolutions = () => {
  return (
    <MainLayout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="workspace-solutions-page space-y-0"
      >
        <SEO
          title="Workspace Solutions | Future-Ready Workspaces for GCCs | Enablr"
          description="Create future-ready workspaces for your capability center with Enablr's comprehensive workplace solutions."
          keywords="workspace solutions, managed offices, flexible workspaces, GCC workspace, office solutions, Enablr"
          canonicalUrl="https://gccenablr.com/solutions/workspace-solutions/"
          ogImage="https://gccenablr.com/solutions/workspace-solutions-opengraph-image.png"
        />
        
        <motion.div variants={itemVariants}>
          <HeroSection
            title="Workspace Solutions"
            description="Create future-ready workspaces for your capability center with Enablr's comprehensive workplace solutions."
            image={heroImage}
            ctaText=""
            ctaLink=""
            enableKenBurns={true}
            customMobilePosition="center bottom"
            customDesktopPosition="center 95%"
          />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true }}
          className="mt-0 explanation-section solution-section"
        >
          <SolutionExplanation
            title="Build smarter, sustainable workspaces"
            content={`We create workspace environments that balance productivity, collaboration, and employee well-being. Our comprehensive Workspace Solutions deliver thoughtfully designed spaces that reflect your company culture and operational needs.

From initial concept to final implementation, we handle everything – office selection, design, furnishing, technology integration, and ongoing management.

Our approach emphasizes flexibility, sustainability, and future readiness, ensuring your workspace evolves with your business needs.`}
            imagePath="/Solutions/Workspace-Solutions/Build_smarter.webp"
          />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true }}
          className="solution-section"
        >
          <SolutionKeyOfferings
            title="Workspace Offerings"
            offerings={keyOfferings}
          />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true }}
          className="solution-section"
        >
          <SolutionWhyChooseUs reasons={workspaceReasons} />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <PageCTA
            title="Partner to create spaces
that fit your needs"
            buttonText="Let's Connect"
            buttonLink="/contact"
          />
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default WorkspaceSolutions;
