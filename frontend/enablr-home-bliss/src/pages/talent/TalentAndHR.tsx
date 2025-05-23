import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/ui/HeroSection";
import SolutionExplanation from "@/components/solutions/SolutionExplanation";
import SolutionKeyOfferings from "@/components/solutions/SolutionKeyOfferings";
import SolutionWhyChooseUs from "@/components/solutions/SolutionWhyChooseUs";
import PageCTA from "@/components/PageCTA";
import { ClipboardList, GraduationCap, Search, Users } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/seo/SEO";

const keyOfferings = [
  {
    icon: ClipboardList,
    title: "HR operations and workforce management",
    description: "Your business needs smooth, structured support right from onboarding to day-to-day HR needs. We don't want you get flustered with these tasks and shift your focus, hence we collectively handle the admin and systems."
  },
  {
    icon: GraduationCap,
    title: "Upskilling and training programs",
    description: "Constant learning and growth go hand-in-hand and these requirements are consistent. We work with you to design training programs that fit your business goals and enable your teams to get future-ready."
  },
  {
    icon: Search,
    title: "Streamlined recruitment",
    description: "Your recruitment teams must look beyond some repetitive operational tasks. With our experience over the years, we bring in efficiency in the hiring process to ease scheduling, tracking, and communication."
  },
  {
    icon: Users,
    title: "Strategic talent sourcing",
    description: "Don't just wait for resumes, let's look beyond. Your business needs right people at the right team to do the on-ground magic. We help you access curated talent pools with our smart sourcing strategies to find the best fit for your GCC whenever you need."
  }
];

const whyChooseUsReasons = [
  {
    image: "/Solutions/Talent-and-HR/Tier2-tier3.webp",
    title: "Tier-2 & Tier-3 talent awareness ",
    description: "We power your GCC with deep understanding of the talent pool not just from Tier 1, but even Tier 2 cities, enabling access to talent in emerging tech hubs."
  },
  
  {
    image: "/Solutions/Talent-and-HR/Access_untapped.webp",
    title: "Access to untapped, high-quality talent pool",
    description:"We help you connect with pre-screened, qualified candidates from diverse backgrounds that fit your long-term or immediate requirements."

  },
  {
    image: "/Solutions/Talent-and-HR/Optimized.webp",
    title: "Optimized recruitment cost",
    description: "We have streamlined efficient processes and created a strategic approach for optimizing your hiring process, keeping it cost-effective. " 
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

const TalentAndHR = () => {
  return (
    <MainLayout>
      <SEO
        title="Talent & HR Solutions | Strategic Workforce Management | Enablr"
        description="Build and manage high-performing teams for your Global Capability Center. From talent acquisition to HR operations, we provide comprehensive workforce solutions for GCCs."
        keywords="GCC talent solutions, HR operations, workforce management, talent acquisition, GCC recruitment, HR services, capability center talent"
        canonicalUrl="https://gccenablr.com/solutions/talent-hr/"
        ogImage="https://gccenablr.com/solutions/talent-hr-opengraph-image.png"
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Helmet>
          <title>Talent & HR Solutions - Enablr</title>
          <meta
            name="description"
            content="Build high-performing teams with Enablr's comprehensive talent and HR solutions for your capability center."
          />
        </Helmet>

        <motion.div variants={itemVariants}>
          <HeroSection
            title="Talent and HR Solutions"
            description="Build high-performing teams with Enablr's comprehensive talent and HR solutions for your capability center."
            image="/Solutions/Talent-and-HR/Talent-HR_hero.webp"
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
            title="Build the right teams with strategic Talent & HR Solutions"
            content={`Enablr offers comprehensive, end-to-end talent and HR solutions specifically designed to meet the unique needs of your business. Our goal is to help you build the right teams by providing strategic support across the entire HR spectrum.

We streamline people operations to allow you to concentrate on core business growth. This includes managing crucial tasks such as sourcing high-quality talent, handling complex visa processes, efficiently onboarding new employees, and overseeing compliance workflows. By simplifying these essential functions, we free up your valuable time and resources.

As you establish your global capability center (GCC), Enablr is your expert partner. We assist you in hiring talent more quickly, ensuring you remain compliant with regulations, and retaining employees who significantly contribute to your success. Leverage our deep understanding of the GCC domain to assemble your ideal team.`}
            imagePath="/Solutions/Talent-and-HR/Build The Right Teams.webp"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <SolutionKeyOfferings
            title="Comprehensive Talent Solutions"
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
            title="Look beyond just recruitment,
enable strategic workforce management"
            buttonText="Let's Talk"
            buttonLink="/contact"
          />
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default TalentAndHR;