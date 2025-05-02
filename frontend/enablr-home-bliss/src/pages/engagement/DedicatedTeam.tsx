import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import DTHero from "@/components/dedicated-team/DTHero";
import DTIntro from "@/components/dedicated-team/DTIntro";
import DTDifferentiators from "@/components/dedicated-team/DTDifferentiators";
import DTBenefits from "@/components/dedicated-team/DTBenefits";
import DTConclusion from "@/components/dedicated-team/DTConclusion";

const DedicatedTeam = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Dedicated Team Model - Enablr</title>
        <meta 
          name="description" 
          content="Explore Enablr's Dedicated Team model - build global teams without the extra load through our flexible engagement approach." 
        />
      </Helmet>

      <DTHero />
      <DTIntro />
      <DTDifferentiators />
      <DTBenefits />
      <DTConclusion />
    </MainLayout>
  );
};

export default DedicatedTeam;
