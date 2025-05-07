import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import SolutionExplanation from "@/components/solutions/SolutionExplanation";
import SolutionKeyOfferings from "@/components/solutions/SolutionKeyOfferings";
import SolutionWhyChooseUs from "@/components/solutions/SolutionWhyChooseUs";
import PageCTA from "@/components/PageCTA";
import { Users2, Code2, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";
import HeroSection from "@/components/ui/HeroSection";

const heroImage = "/images/New%20images/Main%20Pic-Staff%20Augmentation.jpeg";

const keyOfferings = [
  {
    icon: Users2,
    title: "Managed resource services",
    description: "Your ongoing projects might fall short of the right talent and skills. Hence, we help you address these issues with ease and handle them on your behalf, enabling oversight, reporting, and day-to-day operations."
  },
  {
    icon: Code2,
    title: "Augmentation based on skills and niche",
    description: "Right from niche tech roles to domain expertise, we fill in the gaps without disturbing your overall structure. With years of experience and market intelligence, we are equipped with the right talent pool for your business needs."
  },
  {
    icon: Zap,
    title: "Swift ramp-up and scale-down",
    description: "Your staffing needs can change at any point; hence we are here to sort them for you with speed and agility. Whether you are scaling up for a new project or working with minimal resources, we make transitions smooth and hassle-free."
  },
  {
    icon: Users,
    title: "Seamless team integration",
    description: "We understand that your core business values are imperative for you to achieve your goals. We help your extended teams to identify with your brand, culture, objective, and workflow right from inception."
  }
];

const whyChooseUsReasons = [
  {
    image: "/images/staff_aug1-min.jpg",
    title: "On-demand scaling of team",
    description: "We help you to swiftly grow or scale down your team as per your project requirements, helping you to meet your talent and workforce requirements at ease."
  },
  {
    image: "/images/staff_aug2-min.jpg",
    title: "Availability of niche technical expertise",
    description: "We come in to meet your specific or highly specialized skill requirements, enabling you to connect with the right experts at speed without compromising on quality."
  },
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    title: "Enabling speed with agility",
    description: "We help you to maintain speed with adaptability and flexibility, ensuring that quality is intact and you are able to adjust quickly and keep up with the market dynamics"
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

const StaffAugmentation = () => {
  return (
    <MainLayout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Helmet>
          <title>Staff Augmentation Services - Enablr</title>
          <meta 
            name="description" 
            content="Access skilled talent and scale your team efficiently with Enablr's Staff Augmentation Services." 
          />
        </Helmet>
        
        <motion.div variants={itemVariants}>
          <HeroSection
            title="Staff Augmentation Services"
            description="Enhance your team's capabilities with our flexible and scalable staff augmentation solutions, tailored to meet your specific project needs and business goals."
            image={heroImage}
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
            title="Build agile, high-performance teams with Enablr"
            content={`Enablr helps simplify and optimize business operations in your capability center, enabling you to move faster and scale smarter.

From administration and procurement to HR, payroll, and regulatory support, we work as your behind-the-scenes engine, so that you can focus on business growth, strategy, and execution.

If you are setting up a global capability center, then you can trust Enablr for the local expertise and operational muscle to make it seamless. Partner with Enablr to accelerate your GCC plans.`}
            imagePath="/solutions/Build Agile, High-performance Teams With Enablr - Staff Augmentation.jpg"
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
            title="Transform your GCC into a high impact entity with the right skills"
            buttonText="Find Talent Now"
            buttonLink="/contact"
          />
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default StaffAugmentation;
