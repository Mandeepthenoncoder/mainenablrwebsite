import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadershipGrid from "@/components/leadership/LeadershipGrid";
import LeaderDetailModal from "@/components/leadership/LeaderDetailModal";
import { leadershipData } from "@/data/leadershipData";
import type { Leader } from "@/data/leadershipData";
import { typography } from "@/styles/typography";
import HeroSection from "@/components/ui/HeroSection";

const LeadershipPage = () => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  const handleKnowMore = (leader: Leader) => {
    setSelectedLeader(leader);
  };

  const handleCloseModal = () => {
    setSelectedLeader(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Leadership - Enablr</title>
        <meta 
          name="description" 
          content="Meet the leadership team at Enablr, driving innovation and transformation in the industry." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection
          title="Our Leadership"
          description="Meet the visionary leaders driving innovation and transformation at Enablr."
          image="/About_us/Leadership/Leadership_hero.webp"
          ctaText="Know more"
          ctaLink="/contact"
          enableKenBurns={true}
        />

        {/* Leadership Grid */}
        <section className="py-12">
          <LeadershipGrid 
            leaders={leadershipData} 
            onKnowMore={handleKnowMore} 
          />
        </section>

        {/* Leader Detail Modal */}
        {selectedLeader && (
          <LeaderDetailModal 
            leader={selectedLeader} 
            onClose={handleCloseModal} 
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default LeadershipPage;