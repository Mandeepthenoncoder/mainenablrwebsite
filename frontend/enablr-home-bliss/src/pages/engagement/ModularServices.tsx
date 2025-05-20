import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/ui/HeroSection";
import MSIntro from "@/components/modular-services/MSIntro";
import MSDifferentiators from "@/components/modular-services/MSDifferentiators";
import MSBenefits from "@/components/modular-services/MSBenefits";
import MSConclusion from "@/components/modular-services/MSConclusion";
import SEO from "@/components/seo/SEO";

const ModularServices = () => {
  return (
    <MainLayout>
      <SEO
        title="Modular Services | Flexible GCC Solutions | Enablr"
        description="Explore Enablr's flexible modular services for Global Capability Centers. Tailored GCC solutions to match your business priorities."
        keywords="modular services, flexible GCC solutions, global capability center, tailored GCC services, GCC management, scalable solutions, custom GCC services, modular engagement, GCC flexibility, capability center solutions"
        canonicalUrl="https://gccenablr.com/engagement/modular-services/"
        ogImage="https://gccenablr.com/engagement/modular-services-opengraph-image.png"
      />

      <HeroSection
        title="Modular Services"
        description="Explore Enablr's flexible modular services tailored to your GCC priorities."
        image="/Engagement_Models/Modular-Services/Modular_hero.webp"
        ctaText="Discover More"
        ctaLink="/contact"
        enableKenBurns={true}
      />
      <MSIntro />
      <MSDifferentiators />
      <MSBenefits />
      <MSConclusion />
    </MainLayout>
  );
};

export default ModularServices;
