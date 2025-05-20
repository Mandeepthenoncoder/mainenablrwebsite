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
import SEO from "@/components/seo/SEO";

const heroImage = "/Solutions/Staff_Augmentation/Staff_aug_hero.webp";

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
    description: "Your staffing needs can change at any point. Hence, we are here to sort them for you with speed and agility. Whether you are scaling up for a new project or working with minimal resources, we make transitions smooth and hassle-free."
  },
  {
    icon: Users,
    title: "Seamless team integration",
    description: "We understand that your core business values are imperative for you to achieve your goals. We help your extended teams to identify with your brand, culture, objective, and workflow right from inception."
  }
];

const whyChooseUsReasons = [
  {
    image: "/Solutions/Staff_Augmentation/Staff_aug_2.webp",
    title: "On-demand scaling of team",
    description: "We help you flexibly adjust your team size based on project needs, making it easy to meet your workforce requirements."
  },
  {
    image: "/Solutions/Staff_Augmentation/Staff_aug_3.webp",
    title: "Availability of niche technical expertise",
    description: "We fulfill your specialized skill requirements, connecting you with top experts quickly and efficiently."
  },
  {
    image: "/Solutions/Staff_Augmentation/Staff_aug_4.webp",
    title: "Enabling speed with agility",
    description: "We optimize your market responsiveness without compromising quality standards or operational efficiency."
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
      <SEO
        title="Staff Augmentation | Flexible Team Extension Services | Enablr"
        description="Scale your Global Capability Center quickly with Enablr's staff augmentation services. Access skilled talent on demand for your operations without hiring delays."
        keywords="GCC staff augmentation, team extension, on-demand talent, capability center staffing, flexible workforce, temporary tech staffing"
        canonicalUrl="https://gccenablr.com/solutions/staff-augmentation/"
        ogImage="https://gccenablr.com/solutions/staff-augmentation-opengraph-image.png"
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <HeroSection
            title="Staff Augmentation Services"
            description=" Enhance your team's capabilities with our flexible solutions, tailored to meet your specific business goals."
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
            content={`At Enablr, we understand the importance of setting up high-performance teams for your capability center.  Ramping up business operations requires skilled staff without much hassle.

              We help you find ready-to-deploy professionals who are well versed in domains such as software development, engineering, and logistics. These experts are prepared to cater to the unique business needs of your global capability center.

              With Enablr as your GCC staff augmentation partner, you can scale quickly with pre-vetted, locally compliant talent.`}
            imagePath="/Solutions/Staff_Augmentation/Staff_aug_1.webp"
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
