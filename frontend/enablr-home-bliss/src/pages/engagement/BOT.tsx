
import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import BOTHero from "@/components/bot/BOTHero";
import BOTIntro from "@/components/bot/BOTIntro";
import BOTDifferentiators from "@/components/bot/BOTDifferentiators";
import BOTBenefits from "@/components/bot/BOTBenefits";
import BOTConclusion from "@/components/bot/BOTConclusion";

const BOT = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Build-Operate-Transfer Model - Enablr</title>
        <meta 
          name="description" 
          content="Learn about Enablr's Build-Operate-Transfer (BOT) model - a low-risk approach to setting up and managing your GCC with expert guidance." 
        />
      </Helmet>

      <BOTHero />
      <BOTIntro />
      <BOTDifferentiators />
      <BOTBenefits />
      <BOTConclusion />
    </MainLayout>
  );
};

export default BOT;
