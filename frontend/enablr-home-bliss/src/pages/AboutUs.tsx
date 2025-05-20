import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import AboutHero from "@/components/about/AboutHero";
import VisionMission from "@/components/about/VisionMission";
import OurStory from "@/components/about/OurStory";
import WhyChooseEnablr from "@/components/about/WhyChooseEnablr";
import ProductivityPrecision from "@/components/about/ProductivityPrecision";
import StreamlineOperations from "@/components/about/StreamlineOperations";
import TalentImpact from "@/components/about/TalentImpact";
import PageCTA from "@/components/PageCTA";
import SEO from "@/components/seo/SEO";

const AboutUs = () => {
  return (
    <MainLayout>
      <SEO
        title="About Enablr | GCC Experts Building Global Teams | Enablr"
        description="Discover how Enablr helps businesses establish and scale successful Global Capability Centers with our proven expertise, leadership, and comprehensive GCC services."
        keywords="Enablr company, GCC consultants, global teams, GCC experts, capability center specialists, talent solutions"
        canonicalUrl="https://gccenablr.com/about/"
        ogImage="https://gccenablr.com/about-opengraph-image.png"
      />
      
      <AboutHero />
      <VisionMission />
      <OurStory />
      <WhyChooseEnablr />
      <div id="our-capabilities">
        <ProductivityPrecision />
        <StreamlineOperations />
        <TalentImpact />
      </div>
      <PageCTA 
        title="Ready to transform your GCC strategy?"
        buttonText="Schedule a call "
        buttonLink="/contact"
      />
    </MainLayout>
  );
};

export default AboutUs;
