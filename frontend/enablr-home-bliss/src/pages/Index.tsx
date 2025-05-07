import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HomeLayout from "@/components/layouts/HomeLayout";
import HeroSection from "@/components/HeroSection";
import EnablrEdge from "@/components/EnablrEdge";
import Solutions from "@/components/Solutions";
import EngageWithUs from "@/components/EngageWithUs";
import Pillars from "@/components/Pillars";
import GlobalTeam from "@/components/GlobalTeam";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  // Add smooth scrolling behavior to the entire page
  useEffect(() => {
    // Add smooth scroll behavior to html element
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Clean up on component unmount
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
  
  return (
    <HomeLayout showInsights={true}>
      <Helmet>
        <title>Enablr - Build your global team with confidence</title>
        <meta name="description" content="Enablr helps businesses build and operate their Global Capability Centers (GCC) with enterprise-grade quality and proven experience." />
        <meta property="og:title" content="Enablr - build your global team with confidence" />
        <meta property="og:description" content="Enablr helps businesses build and operate their Global Capability Centers (GCC) with enterprise-grade quality and proven experience." />
      </Helmet>
      
      <HeroSection />
      
      <div className="bg-white">
        <div className="container mx-auto px-6">
          <Separator className="bg-gray-200 h-px" />
        </div>
      </div>
      
      <EnablrEdge />
      
      <div className="bg-white">
        <div className="container mx-auto px-6">
          <Separator className="bg-gray-200 h-px" />
        </div>
      </div>
      
      <Solutions />
      
      <div className="bg-white">
        <div className="container mx-auto px-6">
          <Separator className="bg-gray-200 h-px" />
        </div>
      </div>
      
      <EngageWithUs />
      
      <div className="bg-white">
        <div className="container mx-auto px-6">
          <Separator className="bg-gray-200 h-px" />
        </div>
      </div>
      
      <Pillars />
      
      <div className="bg-white">
        <div className="container mx-auto px-6">
          <Separator className="bg-gray-200 h-px" />
        </div>
      </div>
      
      <GlobalTeam />
      
      {/* The BlogHighlights and Newsletter components will be automatically 
          added by HomeLayout since showInsights is now set to true */}
    </HomeLayout>
  );
};

export default Index;
