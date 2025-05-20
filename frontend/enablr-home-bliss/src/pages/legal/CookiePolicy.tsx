import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/seo/SEO";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Cookie Policy | Enablr"
        description="Learn about how Enablr uses cookies and similar technologies to enhance your browsing experience and improve our services."
        keywords="cookie policy, Enablr cookies, website cookies, privacy, data protection, cookie usage, user consent"
        canonicalUrl="https://gccenablr.com/legal/cookie-policy/"
        ogImage="https://gccenablr.com/legal-opengraph-image.png"
      />
      
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
