import React from "react";
import HeroSection from "@/components/ui/HeroSection";

interface Slide {
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

interface GCCHeroSectionProps {
  slide: Slide;
}

const GCCHeroSection = ({ slide }: GCCHeroSectionProps) => {
  return (
    <HeroSection
      title="GCC as a Service"
      description="End-to-end solution to establish your<br />fully equipped global capability center."
      image={slide.image}
      ctaText="Get Started"
      ctaLink="/contact"
      flipImage={true}
      primaryColor="#0D214F"
    />
  );
};

export default GCCHeroSection; 