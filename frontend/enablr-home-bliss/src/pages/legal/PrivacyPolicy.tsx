
import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Privacy Policy - Enablr</title>
        <meta 
          name="description" 
          content="Read Enablr's privacy policy and learn how we protect your data." 
        />
      </Helmet>
      
      <Navbar />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
