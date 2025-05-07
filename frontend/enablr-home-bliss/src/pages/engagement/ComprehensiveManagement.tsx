import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/ui/HeroSection";
import CMIntro from "@/components/comprehensive-management/CMIntro";
import CMDifferentiators from "@/components/comprehensive-management/CMDifferentiators";
import CMBenefits from "@/components/comprehensive-management/CMBenefits";
import CMConclusion from "@/components/comprehensive-management/CMConclusion";

const ComprehensiveManagement = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Comprehensive Management Model - Enablr</title>
        <meta 
          name="description" 
          content="Discover Enablr's Comprehensive Management model - a fully orchestrated GCC experience from set up to scale for maximum strategic value." 
        />
      </Helmet>

      <HeroSection
        title="Comprehensive Management Model"
        description="A fully orchestrated GCC experience from set up to scale for maximum strategic value."
        image="/Engagement_Models/Comprehensive-Management/Comprehensive_hero.jpg"
        ctaText="Explore Now"
        ctaLink="/contact"
        enableKenBurns={true}
      />
      <CMIntro />
      <CMDifferentiators />
      <CMBenefits />
      <CMConclusion />
    </MainLayout>
  );
};

export default ComprehensiveManagement;
