import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/ui/HeroSection";
import EngagementIntro from "@/components/engagement/EngagementIntro";
import EngagementModelsGrid from "@/components/engagement/EngagementModelsGrid";
import PageCTA from "@/components/PageCTA";

const Engagement = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Engagement Models - Enablr</title>
        <meta
          name="description"
          content="Explore Enablr's flexible engagement models - from Build-Operate-Transfer to Dedicated Teams. Choose the perfect model for your GCC needs."
        />
      </Helmet>
      <HeroSection
        title="Engagement Models"
        description="Explore Enablr's flexible engagement models - from Build-Operate-Transfer to Dedicated Teams."
        image="/Engagement_Models/Landing/Engagement_hero.jpg"
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
