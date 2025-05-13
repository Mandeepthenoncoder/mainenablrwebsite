import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import CareerHero from "@/components/careers/CareerHero";
import CareerIntro from "@/components/careers/CareerIntro";
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
      <CareerHero>
        <div className="absolute inset-0 z-0">
          <img 
            src="/Career/hero.webp"
            alt="Careers at Enablr"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-enablr-navy/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Join Our Global Team
          </h1>
          <p className="text-white text-lg md:text-xl mb-8">
            Explore opportunities and grow with us
          </p>
          <button 
            onClick={handleViewOpportunities} 
            className="bg-white hover:bg-white/90 text-enablr-navy font-medium text-base min-w-[200px] px-8 py-4 rounded-md border-0 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            View Opportunities
          </button>
        </div>
      </CareerHero>
     
      <CareerIntro />
      <div id="job-openings">
        <CurrentOpeningsCompact />
      </div>
      <CareerCTA />
    </MainLayout>
  );
};

export default Careers;
