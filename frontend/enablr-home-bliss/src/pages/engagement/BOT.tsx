import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/ui/HeroSection";
import BOTIntro from "@/components/bot/BOTIntro";
import BOTDifferentiators from "@/components/bot/BOTDifferentiators";
import BOTBenefits from "@/components/bot/BOTBenefits";
import BOTConclusion from "@/components/bot/BOTConclusion";
import SEO from "@/components/seo/SEO";

const BOT = () => {
  return (
    <MainLayout>
      <SEO
        title="Build-Operate-Transfer (BOT) Model | Low-Risk GCC Setup | Enablr"
        description="Learn about Enablr's Build-Operate-Transfer (BOT) model for Global Capability Centers. A low-risk approach to setting up and managing your GCC with expert guidance and proven methodology."
        keywords="build operate transfer, BOT model, GCC setup, GCC establishment, low-risk GCC, global capability center, capability center setup, GCC management, strategic partnership, GCC transition"
        canonicalUrl="https://gccenablr.com/engagement/bot/"
        ogImage="https://gccenablr.com/engagement/bot-opengraph-image.png"
      />

      <HeroSection
        title="Build-Operate-Transfer Model"
        description="Start strong and take over with confidence with our expert guidance."
        image="/bot-hero.webp"
        ctaText="Get Started"
        ctaLink="/contact"
        enableKenBurns={true}
      />
      <BOTIntro />
      <BOTDifferentiators />
      <BOTBenefits />
      <BOTConclusion />
    </MainLayout>
  );
};

export default BOT;
