// LEGAL REVIEW REQUIRED: Ensure this policy text is approved by legal counsel before publishing.
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>Privacy Policy | Enablr</title>
        <meta 
          name="description" 
          content="Enablr's privacy policy explains how we collect, use, and protect your personal information." 
        />
      </Helmet>

      <Navbar />

      {/* Hero Section - Fixed for mobile view */}
      <section className="relative h-[40vh] md:h-[80vh] overflow-hidden">
        {/* Container with rounded corners */}
        <div className="absolute inset-0 rounded-b-[48px] overflow-hidden">
          {/* Mobile Background Image */}
          <div className="block md:hidden absolute inset-0 w-full h-full">
            <img
              src="/privacy policy and cookie policy hero image.jpg"
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
              src="/privacy policy and cookie policy hero image.jpg"
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
                Privacy Policy
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
            Enablr ("we," "us," or "our") values your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website <a href="https://www.enablr.com" className="text-blue-600 hover:underline">www.enablr.com</a>.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Information We Collect</h2>
          <p className="mb-4">Personal Data: When you interact with us, you may provide information such as your name, email address, phone number, or payment details.</p>
          <p className="mb-4">Non-Personal Data: Information like browser type, IP address, and pages visited may be collected automatically.</p>
          
          <h3 className="text-xl font-medium text-gray-800 mt-8 mb-3">How We Use Your Information</h3>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li>To provide services and support.</li>
            <li>To communicate updates or promotional content (with your consent).</li>
            <li>To enhance website performance and user experience.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Data Sharing</h2>
          <p className="mb-6">
            The information collected by us may be shared with third-party entities. They will be using the data only to the extent required to assist us to understand how visitors to our website interact with it. Further, all processing done by these third parties shall be under the terms of an agreement with us limiting their rights over the information provided to them. Data may be shared with trusted partners or service providers for operational purposes, under strict confidentiality.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Data Security</h2>
          <p className="mb-6">
            We implement appropriate security measures to protect your data. Enablr puts in place appropriate physical, electronic and organizational measures to safeguard and secure your data. These measures follow generally accepted industry standards both during transmission and once it is received. Unfortunately, the transmission of information over the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmission to our website.
          </p>
          
          <h3 className="text-xl font-medium text-gray-800 mt-8 mb-3">User Rights</h3>
          <p className="mb-3">You have the right to access, correct, or delete your data.</p>
          <p className="mb-6">To exercise these rights, please contact us at <a href="mailto:info@gccenablr.com" className="text-blue-600 hover:underline">info@gccenablr.com</a>.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Policy Updates</h2>
          <p className="mb-3">We may update our Privacy Policy from time to time. Changes will be reflected with a revised "Effective Date."</p>
          <p className="mb-6">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Contact Us</h2>
          <p className="mb-6">If you have any questions about this Privacy Policy, please contact us: <a href="mailto:info@gccenablr.com" className="text-blue-600 hover:underline">info@gccenablr.com</a></p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 