import React, { useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import HomeLayout from "@/components/layouts/HomeLayout";
import HeroSection from "@/components/HeroSection";
// Lazy load other sections
const EnablrEdge = lazy(() => import("@/components/EnablrEdge"));
const Solutions = lazy(() => import("@/components/Solutions"));
const EngageWithUs = lazy(() => import("@/components/EngageWithUs"));
const Pillars = lazy(() => import("@/components/Pillars"));
const GlobalTeam = lazy(() => import("@/components/GlobalTeam"));
import { Separator } from "@/components/ui/separator";

// Define a simple loader for these internal sections, or rely on App.tsx's PageLoader if preferred
const SectionLoader = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    {/* You can use a smaller spinner or a skeleton placeholder here if desired */}
    <div className="animate-spin w-8 h-8 border-4 border-enablr-navy border-t-transparent rounded-full"></div>
  </div>
);

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
      
      <Suspense fallback={<SectionLoader />}>
        <EnablrEdge />
      </Suspense>
      
      <div className="bg-white">
        <div className="container mx-auto px-6">
          <Separator className="bg-gray-200 h-px" />
        </div>
      </div>
      
      <Suspense fallback={<SectionLoader />}>
        <Solutions />
      </Suspense>
      
      <div className="bg-white">
        <div className="container mx-auto px-6">
          <Separator className="bg-gray-200 h-px" />
        </div>
      </div>
      
      <Suspense fallback={<SectionLoader />}>
        <EngageWithUs />
      </Suspense>
      
      <div className="bg-white">
        <div className="container mx-auto px-6">
          <Separator className="bg-gray-200 h-px" />
        </div>
      </div>
      
      <Suspense fallback={<SectionLoader />}>
        <Pillars />
      </Suspense>
      
      <div className="bg-white">
        <div className="container mx-auto px-6">
          <Separator className="bg-gray-200 h-px" />
        </div>
      </div>
      
      <Suspense fallback={<SectionLoader />}>
        <GlobalTeam />
      </Suspense>
      
      {/* The BlogHighlights and Newsletter components will be automatically 
          added by HomeLayout since showInsights is now set to true */}
    </HomeLayout>
  );
};

export default Index;
