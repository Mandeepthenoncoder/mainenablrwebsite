import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/ui/HeroSection";
import CMIntro from "@/components/comprehensive-management/CMIntro";
import CMDifferentiators from "@/components/comprehensive-management/CMDifferentiators";
import CMBenefits from "@/components/comprehensive-management/CMBenefits";
import CMConclusion from "@/components/comprehensive-management/CMConclusion";
import SEO from "@/components/seo/SEO";

const ComprehensiveManagement = () => {
  return (
    <MainLayout>
      <SEO
        title="Comprehensive Management Model | End-to-End GCC Solutions | Enablr"
        description="Discover Enablr's Comprehensive Management model for Global Capability Centers. Get a fully orchestrated GCC experience from setup to scale, delivering maximum strategic value and operational excellence."
        keywords="comprehensive management, full-service GCC, GCC solutions, end-to-end GCC, global capability center, capability center management, strategic value, GCC management, GCC operations, operational excellence"
        canonicalUrl="https://gccenablr.com/engagement/comprehensive-management/"
        ogImage="https://gccenablr.com/engagement/comprehensive-management-opengraph-image.png"
      />

      <HeroSection
        title="Comprehensive Management Model"
        description="A fully orchestrated GCC experience from set up to scale for maximum strategic value."
        image="/Engagement_Models/Comprehensive-Management/Comprehensive_hero.webp"
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
