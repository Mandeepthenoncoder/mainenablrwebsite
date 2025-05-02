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

const AboutUs = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>About Us - Enablr</title>
        <meta 
          name="description" 
          content="Learn about Enablr's mission, vision, and commitment to enabling global capability centers. Discover our journey, leadership, values, and global presence." 
        />
      </Helmet>
      
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
        buttonText="Schedule a consultation call today!"
        buttonLink="/contact"
      />
    </MainLayout>
  );
};

export default AboutUs;
