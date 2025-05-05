import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import SolutionExplanation from "@/components/solutions/SolutionExplanation";
import SolutionKeyOfferings from "@/components/solutions/SolutionKeyOfferings";
import SolutionWhyChooseUs from "@/components/solutions/SolutionWhyChooseUs";
import SolutionCTA from "@/components/solutions/SolutionCTA";
import { Building, Layout, Laptop, Users } from "lucide-react";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

const heroImage = "/images/lot%202/HeroImage-WorkspaceSolutions.jpg";

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

// Custom Workspace Hero Section Component
const WorkspaceHeroSection = () => {
  return (
    <section className="relative h-[40vh] md:h-[80vh] rounded-b-[32px] md:rounded-b-[48px] overflow-hidden bg-enablr-navy mb-0 hero-section">
      {/* Mobile specific styling with fixed positioning */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Mobile hero background positioning */
          .mobile-workspace-hero {
            background-image: url('${heroImage}');
            background-position: center bottom;
            background-size: cover;
            background-repeat: no-repeat;
          }
          
          @keyframes kenBurns {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          .ken-burns-bg {
            animation: kenBurns 10s ease-in-out infinite;
          }
          
          ${customStyles}
        `
      }} />
      
      {/* Mobile view container - using CSS background-image for better control */}
      <div className="block md:hidden absolute inset-0 z-0 mobile-workspace-hero">
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-enablr-navy opacity-80"></div>
      </div>
      
      {/* Desktop view container */}
      <div className="hidden md:block absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full ken-burns-bg">
          <img
            src={heroImage}
            alt="Workspace Solutions background"
            className="w-full h-full object-cover"
            style={{
              objectPosition: "center 95%",
              objectFit: "cover",
            }}
          />
        </div>
        
        {/* Desktop overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Gradient overlay for all screen sizes */}
      <div 
        className="absolute inset-0 bg-gradient-to-r to-transparent sm:w-[70%] md:w-[60%] lg:w-[50%] z-[1]"
        style={{
          backgroundImage: "linear-gradient(to right, #0D214FF2, #0D214FCC, #0D214F33, transparent)"
        }}
      ></div>
      
      {/* Content container */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-2 md:mb-4">
                Workspace Solutions
              </h1>
              
              <p className="text-base md:text-lg text-white/90 mb-4 md:mb-8 max-w-lg">
                Create future-ready workspaces for your capability center with Enablr's comprehensive workplace solutions.
              </p>
              
              <CTAButton 
                text="Get Started" 
                link="/contact" 
                variant="secondary"
                size="lg"
                className="bg-white text-enablr-navy hover:bg-enablr-navy hover:text-white hover:border hover:border-white shadow-sm hover:shadow-md transition-all duration-300 rounded-md"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkspaceSolutions = () => {
  return (
    <MainLayout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="workspace-solutions-page space-y-0"
      >
        <Helmet>
          <title>Workspace Solutions - Enablr</title>
          <meta 
            name="description" 
            content="Create future-ready workspaces for your capability center with Enablr's comprehensive workplace solutions." 
          />
        </Helmet>
        
        <motion.div variants={itemVariants}>
          <WorkspaceHeroSection />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true }}
          className="mt-0 explanation-section solution-section"
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
          className="solution-section"
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
