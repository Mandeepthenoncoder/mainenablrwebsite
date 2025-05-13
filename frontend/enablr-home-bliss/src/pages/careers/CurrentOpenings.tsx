import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import CurrentOpeningsComponent from "@/components/careers/CurrentOpenings";
import CareerCTA from "@/components/careers/CareerCTA";
import HeroSection from "@/components/ui/HeroSection";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { cn } from "@/lib/utils";

const CurrentOpenings = () => {
  return (
    <MainLayout showNewsletter={true} showBlogHighlights={false}>
      <Helmet>
        <title>Current Openings at Enablr - Career Opportunities</title>
        <meta 
          name="description" 
          content="Explore current job openings at Enablr. Find your ideal role and join our team of dedicated professionals building global capability centers worldwide." 
        />
      </Helmet>
      
      <HeroSection
        title={<>Explore your next move with us</>}
        description="Build expertise with experience"
        descriptionClassName="text-white text-center mt-4 mb-8 max-w-3xl mx-auto"
        image="/Career/openings.webp"
        customMobilePosition="top"
        customDesktopPosition="center 30%"
        enableKenBurns={true}
        centerContent={true}
      />
      
     
      <CurrentOpeningsComponent />
      
      <CareerCTA />
    </MainLayout>
  );
};

export default CurrentOpenings; 