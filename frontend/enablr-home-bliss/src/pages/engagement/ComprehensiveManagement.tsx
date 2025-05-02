
import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import CMHero from "@/components/comprehensive-management/CMHero";
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
          content="Discover Enablr's Comprehensive Management model - a fully orchestrated GCC experience from set-up to scale for maximum strategic value." 
        />
      </Helmet>

      <CMHero />
      <CMIntro />
      <CMDifferentiators />
      <CMBenefits />
      <CMConclusion />
    </MainLayout>
  );
};

export default ComprehensiveManagement;
