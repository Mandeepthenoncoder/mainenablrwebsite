import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/seo/SEO";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Thank You | Enablr"
        description="Thank you for getting in touch with Enablr. We have received your message and will get back to you soon."
        keywords="thank you, Enablr, contact, message received, confirmation"
        canonicalUrl="https://gccenablr.com/thank-you/"
        ogImage="https://gccenablr.com/opengraph-image.png"
      />
      
      <Navbar />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-6">Thank You</h1>
          <p className="text-lg mb-8">We have received your message and will get back to you soon.</p>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
