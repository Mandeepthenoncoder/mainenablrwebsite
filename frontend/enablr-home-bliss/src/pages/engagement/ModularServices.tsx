import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import MSHero from "@/components/modular-services/MSHero";
import MSIntro from "@/components/modular-services/MSIntro";
import MSDifferentiators from "@/components/modular-services/MSDifferentiators";
import MSBenefits from "@/components/modular-services/MSBenefits";
import MSConclusion from "@/components/modular-services/MSConclusion";

const ModularServices = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Modular Services - Enablr</title>
        <meta 
          name="description" 
          content="Explore Enablr's flexible modular services tailored to your GCC priorities." 
        />
      </Helmet>

      <MSHero />
      <MSIntro />
      <MSDifferentiators />
      <MSBenefits />
      <MSConclusion />
    </MainLayout>
  );
};

export default ModularServices;
