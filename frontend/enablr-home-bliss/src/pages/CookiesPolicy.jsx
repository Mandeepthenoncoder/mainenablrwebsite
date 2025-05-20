// LEGAL REVIEW REQUIRED: Ensure this policy text is approved by legal counsel before publishing.
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from "@/components/seo/SEO";

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO
        title="Cookies Policy | Enablr"
        description="Enablr's cookies policy explains how we use cookies and similar technologies when you visit our website."
        keywords="cookies policy, Enablr, cookies, website cookies, user privacy, cookie usage"
        canonicalUrl="https://gccenablr.com/cookies-policy/"
        ogImage="https://gccenablr.com/policy-opengraph-image.png"
      />

      <Navbar />

      {/* Hero Section - Fixed for mobile view */}
      <section className="relative h-[40vh] md:h-[80vh] overflow-hidden">
        {/* Container with rounded corners */}
        <div className="absolute inset-0 rounded-b-[48px] overflow-hidden">
          {/* Mobile Background Image */}
          <div className="block md:hidden absolute inset-0 w-full h-full">
            <img
              src="/policy.webp"
              alt="Hero background"
              className="w-full h-full object-cover"
              style={{
                transform: 'rotate(180deg)',
                objectPosition: "center",
              }}
            />
          </div>
          
          {/* Desktop Background Image */}
          <div className="hidden md:block absolute inset-0 w-full h-full">
            <img
              src="/policy.webp"
              alt="Hero background"
              className="w-full h-full object-cover"
              style={{
                transform: 'rotate(180deg)',
                objectPosition: "center 40%",
              }}
            />
          </div>
          
          {/* Base overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Gradient overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-[#0D214FE6] via-[#0D214F99] to-transparent sm:w-[60%] md:w-[50%] lg:w-[40%]"
          ></div>
        </div>
        
        {/* Content container */}
        <div className="absolute inset-0 flex items-center rounded-b-[48px]">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Cookies Policy
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* White rounded top corners to ensure clean transition */}
      <div className="relative z-10 mt-[-48px] h-[48px] bg-white rounded-t-[48px]"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 flex-grow">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-500 mb-8">Effective Date: 6th April 2025</p>
          
          <p className="text-lg mb-8">
            This Cookie Policy explains how Enablr ("we," "us," or "our") uses cookies and similar technologies when you visit our website.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">What Are Cookies?</h2>
          <p className="mb-6">Cookies are small text files placed on your device to store information that helps improve your browsing experience. They enable us to enhance site functionality, analyze usage, and deliver relevant content and advertisements.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Types of Cookies We Use</h2>
          <p className="mb-4">We use the following types of cookies:</p>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li>Strictly Necessary Cookies – Required for the website to function properly.</li>
            <li>Performance Cookies – Help us understand how users interact with our site.</li>
            <li>Functional Cookies – Allow personalization based on your preferences.</li>
            <li>Targeting/Advertising Cookies – Used for marketing purposes and relevant ads.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Third-Party Cookies</h2>
          <p className="mb-6">We may use third-party services (such as analytics and advertising providers) that also set cookies on your device. Their policies govern how they manage data.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Managing Cookies</h2>
          <p className="mb-6">You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Updates to This Policy</h2>
          <p className="mb-6">We may update this policy from time to time. Changes will be posted here with an updated effective date.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Contact Us</h2>
          <p className="mb-6">If you have any questions about our Cookie Policy, please contact us at: <a href="mailto:info@gccenablr.com" className="text-blue-600 hover:underline">info@gccenablr.com</a></p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CookiesPolicy; 