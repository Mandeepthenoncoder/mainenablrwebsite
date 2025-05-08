import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import CareerIntro from "@/components/careers/CareerIntro";
import LifeAtEnablr from "@/components/careers/LifeAtEnablr";
import CurrentOpeningsCompact from "@/components/careers/CurrentOpeningsCompact";
import CareerCTA from "@/components/careers/CareerCTA";
import HeroSection from "@/components/ui/HeroSection";

// Spacer component to add gap
const Spacer = ({ height }: { height: string }) => (
  <div style={{ height }} className="bg-white"></div>
);

const Careers = () => {
  // Function to handle smooth scrolling to job openings section
  const handleViewOpportunities = () => {
    const jobOpeningsSection = document.getElementById('job-openings');
    if (jobOpeningsSection) {
      jobOpeningsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <MainLayout showNewsletter={true} showBlogHighlights={false}>
      <Helmet>
        <title>Careers at Enablr - Join Our Global Team</title>
        <meta 
          name="description" 
          content="Join Enablr and be part of our mission to build high-performing teams that power global capability centers worldwide. Explore career opportunities in technology, consulting, and operations." 
        />
      </Helmet>
      
      <HeroSection
        title={<>Innovate. Grow. Lead.</>}
        description="Explore opportunities and grow with us."
        image="/Career/hero.webp"
        ctaText="View Opportunities"
        ctaLink="#job-openings"
        customMobilePosition="top"
        customDesktopPosition="center 30%"
        enableKenBurns={true}
        centerContent={true}
      />
      
      <CareerIntro />
      <LifeAtEnablr />
      <div id="job-openings">
        <CurrentOpeningsCompact />
      </div>
      <CareerCTA />
    </MainLayout>
  );
};

export default Careers;
