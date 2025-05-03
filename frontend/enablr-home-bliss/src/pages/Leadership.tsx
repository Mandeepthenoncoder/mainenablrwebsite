import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadershipGrid from "@/components/leadership/LeadershipGrid";
import LeaderDetailModal from "@/components/leadership/LeaderDetailModal";
import { leadershipData } from "@/data/leadershipData";
import type { Leader } from "@/data/leadershipData";
import { typography } from "@/styles/typography";

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
        <section className="bg-gradient-to-r from-enablr-navy to-enablr-navy/80 text-white py-16 relative overflow-hidden">
          {/* Grid Pattern Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-enablr-navy opacity-70"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIG9wYWNpdHk9IjAuMyIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQxMl8xMTApIj48cGF0aCBkPSJNMTYwMCAwSDBWMTIwMEgxNjAwVjBaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTIwMCAwSDBWMTIwMEgxMjAwVjBaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNODAwIDEyMDBMODAwIDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik00MDAgMTIwMEw0MDAgMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTAgODAwTDEyMDAgODAwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMCA0MDBMMTI2MCA0MDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwXzQxMl8xMTAiPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+')] bg-no-repeat bg-cover opacity-10"></div>
            <div className="absolute -left-16 -bottom-16 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h1 className={`${typography.h1} text-center mb-6`}>Our Leadership</h1>
            <p className={`${typography.body.lg} text-center text-white/90 max-w-2xl mx-auto`}>
              Meet the visionary leaders driving innovation and transformation at Enablr.
            </p>
          </div>
        </section>

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