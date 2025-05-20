import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/ui/HeroSection";
import EngagementIntro from "@/components/engagement/EngagementIntro";
import EngagementModelsGrid from "@/components/engagement/EngagementModelsGrid";
import PageCTA from "@/components/PageCTA";
import SEO from "@/components/seo/SEO";

const Engagement = () => {
  return (
    <MainLayout>
      <SEO
        title="Engagement Models | Flexible GCC Partnership Options | Enablr"
        description="Choose the right engagement model for your Global Capability Center with Enablr. From Build-Operate-Transfer to dedicated teams, find the perfect fit for your needs."
        keywords="GCC engagement models, capability center partnership, dedicated teams, GCC management, flexible engagement, BOT model, comprehensive management, modular services, GCC solutions, partnership options"
        canonicalUrl="https://gccenablr.com/engagement/"
        ogImage="https://gccenablr.com/engagement-opengraph-image.png"
      />
      <HeroSection
        title="Engagement Models"
        description="Explore Enablr's flexible engagement models - from Build-Operate-Transfer to Dedicated Teams."
        image="/Engagement_Models/Landing/Engagement_hero.webp"
        ctaText="Learn More"
        ctaLink="/contact"
        enableKenBurns={true}
        customMobilePosition="center 40%"
      />
      <EngagementIntro />
      <EngagementModelsGrid />
      <div className="container mx-auto px-4 pb-20">
        <PageCTA
          title="Ready to take the next step towards your GCC goals?"
          buttonText="Let's Connect"
          buttonLink="/contact"
        />
      </div>
    </MainLayout>
  );
};

export default Engagement;
