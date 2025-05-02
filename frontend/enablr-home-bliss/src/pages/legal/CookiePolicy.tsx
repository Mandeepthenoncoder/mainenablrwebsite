
import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Cookie Policy - Enablr</title>
        <meta 
          name="description" 
          content="Learn about how Enablr uses cookies to enhance your browsing experience." 
        />
      </Helmet>
      
      <Navbar />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
