import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import CurrentOpeningsComponent from "@/components/careers/CurrentOpenings";
import CareerCTA from "@/components/careers/CareerCTA";
import HeroSection from "@/components/ui/HeroSection";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { cn } from "@/lib/utils";
import SEO from "@/components/seo/SEO";

const CurrentOpenings = () => {
  return (
    <MainLayout>
      <SEO
        title="Current Openings at Enablr | Careers in Global Capability Centers"
        description="Browse current job openings at Enablr. Join our team and help build world-class Global Capability Centers. Apply for technology, HR, and operations roles."
        keywords="Enablr jobs, current openings, GCC careers, technology jobs, HR jobs, operations jobs, capability center employment"
        canonicalUrl="https://gccenablr.com/careers/current-openings/"
        ogImage="https://gccenablr.com/careers-opengraph-image.png"
      />
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