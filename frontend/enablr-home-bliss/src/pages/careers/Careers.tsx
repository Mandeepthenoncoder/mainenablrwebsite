import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import CareerHero from "@/components/careers/CareerHero";
import CareerIntro from "@/components/careers/CareerIntro";
import LifeAtEnablr from "@/components/careers/LifeAtEnablr";
import CurrentOpeningsCompact from "@/components/careers/CurrentOpeningsCompact";
import CareerCTA from "@/components/careers/CareerCTA";

// Spacer component to add gap
const Spacer = ({ height }: { height: string }) => (
  <div style={{ height }} className="bg-white"></div>
);

const Careers = () => {
  return (
    <MainLayout showNewsletter={true} showBlogHighlights={false}>
      <Helmet>
        <title>Careers at Enablr - Join Our Global Team</title>
        <meta 
          name="description" 
          content="Join Enablr and be part of our mission to build high-performing teams that power global capability centers worldwide. Explore career opportunities in technology, consulting, and operations." 
        />
      </Helmet>
      
      <CareerHero />
      <CareerIntro />
      <LifeAtEnablr />
      <div id="job-openings">
        <CurrentOpeningsCompact />
      </div>
      <CareerCTA />
      <Spacer height="80px" />
    </MainLayout>
  );
};

export default Careers;
