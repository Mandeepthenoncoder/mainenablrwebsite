import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import CareerHero from "@/components/careers/CareerHero";
import CareerIntro from "@/components/careers/CareerIntro";
import CurrentOpeningsCompact from "@/components/careers/CurrentOpeningsCompact";
import CareerCTA from "@/components/careers/CareerCTA";
import HeroSection from "@/components/ui/HeroSection";
import SEO from "@/components/seo/SEO";

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
      <SEO
        title="Careers at Enablr | Join Our Global Capability Center Team"
        description="Build your career at Enablr. Explore exciting job opportunities in GCC enablement, technology, HR, and operations. Join our mission to empower global businesses."
        keywords="Enablr careers, GCC jobs, technology careers, capability center employment, Enablr job openings, work at Enablr"
        canonicalUrl="https://gccenablr.com/careers/"
        ogImage="https://gccenablr.com/careers-opengraph-image.png"
      />
      <CareerHero />
      
     
      <CareerIntro />
      <div id="job-openings">
        <CurrentOpeningsCompact />
      </div>
      <CareerCTA />
    </MainLayout>
  );
};

export default Careers;
