import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import CareerIntro from "@/components/careers/CareerIntro";
import LifeAtEnablrComponent from "@/components/careers/LifeAtEnablr";
import CurrentOpeningsCompact from "@/components/careers/CurrentOpeningsCompact";
import CareerCTA from "@/components/careers/CareerCTA";
import HeroSection from "@/components/ui/HeroSection";
import CareerBenefits from "@/components/careers/CareerBenefits";
import CareerPillars from "@/components/careers/CareerPillars";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/seo/SEO";

const LifeAtEnablr = () => {
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
    <MainLayout>
      <SEO
        title="Life at Enablr | Culture, Growth & Innovation | Careers"
        description="Discover what makes Enablr a great place to work. From our collaborative culture to growth opportunities, learn why you should join our team building Global Capability Centers."
        keywords="Enablr culture, work life balance, career growth, employee benefits, GCC workplace, company culture, professional development"
        canonicalUrl="https://gccenablr.com/careers/life-at-enablr/"
        ogImage="https://gccenablr.com/careers/life-at-enablr-opengraph-image.png"
      />
      
      <HeroSection
        title={<>Life at Enablr</>}
        description=""
        descriptionClassName="text-white text-right mt-4 mb-8"
        image="/Career/hero.webp"
        customMobilePosition="top"
        customDesktopPosition="center 30%"
        enableKenBurns={true}
        centerContent={true}
        buttonClassName="bg-white hover:bg-white/90 text-enablr-navy font-medium text-base min-w-[200px] px-8 py-4 rounded-md ml-auto border-0 hover:scale-105 transition-all duration-300 shadow-lg"
      />
      
      <CareerIntro />
      <LifeAtEnablrComponent />
      <CareerPillars />
      <CareerBenefits />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-enablr-navy mb-6">Ready to Join Our Team?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our current job opportunities and find the role that matches your skills and career aspirations.
          </p>
          <Button 
            className="bg-enablr-navy text-white hover:bg-white hover:text-enablr-navy border border-transparent hover:border-enablr-navy transition-all duration-300 px-8 py-6 rounded-md"
            asChild
          >
            <Link to="/careers/current-openings" className="flex items-center gap-2">
              View Current Openings <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
      
      <CareerCTA />
    </MainLayout>
  );
};

export default LifeAtEnablr; 