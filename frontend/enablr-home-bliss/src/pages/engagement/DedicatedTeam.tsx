import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/ui/HeroSection";
import DTIntro from "@/components/dedicated-team/DTIntro";
import DTDifferentiators from "@/components/dedicated-team/DTDifferentiators";
import DTBenefits from "@/components/dedicated-team/DTBenefits";
import DTConclusion from "@/components/dedicated-team/DTConclusion";
import SEO from "@/components/seo/SEO";

const DedicatedTeam = () => {
  return (
    <MainLayout>
      <SEO
        title="Dedicated Team Model | Build Global Teams | Enablr"
        description="Explore Enablr's Dedicated Team model for Global Capability Centers. Build high-performing teams with our flexible engagement approach."
        keywords="dedicated team model, GCC teams, global capability center, team building, flexible engagement, GCC management, dedicated resources, team augmentation, GCC staffing, talent solutions"
        canonicalUrl="https://gccenablr.com/engagement/dedicated-team/"
        ogImage="https://gccenablr.com/engagement/dedicated-team-opengraph-image.png"
      />

      <HeroSection
        title="Dedicated Team Model"
        description="Build global teams without the extra load through our flexible engagement approach."
        image="/Engagement_Models/Dedicated-Teams/Dedicated_hero.webp"
        ctaText="Learn More"
        ctaLink="/contact"
        enableKenBurns={true}
      />
      <DTIntro />
      <DTDifferentiators />
      <DTBenefits />
      <DTConclusion />
    </MainLayout>
  );
};

export default DedicatedTeam;
