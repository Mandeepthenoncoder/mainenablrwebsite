// LEGAL REVIEW REQUIRED: Ensure this policy text is approved by legal counsel before publishing.
import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const CookiesPolicy = () => (
  <MainLayout showNewsletter={false} showBlogHighlights={false}>
    <HeroSection title="Cookies Policy" className="hero-cookies-policy" />
    <main className="policy-content py-20 bg-white">
      <div className="container">
        <section className="policy-section max-w-2xl mx-auto">
          <p className="effective-date text-gray-500 text-base mb-8">Effective Date: 6th April 2025</p>
          <p className="policy-intro text-lg leading-8 mb-8 text-gray-800">
            This Cookie Policy explains how Enablr ("we," "us," or "our") uses cookies and similar technologies when you visit our website.
          </p>
          <h2 className="text-2xl text-gray-900 mt-10 mb-4 font-semibold">What Are Cookies?</h2>
          <p className="leading-7 mb-4 text-gray-700">Cookies are small text files placed on your device to store information that helps improve your browsing experience. They enable us to enhance site functionality, analyze usage, and deliver relevant content and advertisements.</p>
          <h2 className="text-2xl text-gray-900 mt-10 mb-4 font-semibold">Types of Cookies We Use</h2>
          <p className="leading-7 mb-4 text-gray-700">We use the following types of cookies:</p>
          <ul className="list-disc ml-8 my-4">
            <li className="mb-2 leading-6 text-gray-700">Strictly Necessary Cookies – Required for the website to function properly.</li>
            <li className="mb-2 leading-6 text-gray-700">Performance Cookies – Help us understand how users interact with our site.</li>
            <li className="mb-2 leading-6 text-gray-700">Functional Cookies – Allow personalization based on your preferences.</li>
            <li className="mb-2 leading-6 text-gray-700">Targeting/Advertising Cookies – Used for marketing purposes and relevant ads.</li>
          </ul>
          <h2 className="text-2xl text-gray-900 mt-10 mb-4 font-semibold">Third-Party Cookies</h2>
          <p className="leading-7 mb-4 text-gray-700">We may use third-party services (such as analytics and advertising providers) that also set cookies on your device. Their policies govern how they manage data.</p>
          <h2 className="text-2xl text-gray-900 mt-10 mb-4 font-semibold">Managing Cookies</h2>
          <p className="leading-7 mb-4 text-gray-700">You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.</p>
          <h2 className="text-2xl text-gray-900 mt-10 mb-4 font-semibold">Updates to This Policy</h2>
          <p className="leading-7 mb-4 text-gray-700">We may update this policy from time to time. Changes will be posted here with an updated effective date.</p>
          <h2 className="text-2xl text-gray-900 mt-10 mb-4 font-semibold">Contact Us</h2>
          <p className="leading-7 mb-4 text-gray-700">If you have any questions about our Cookie Policy, please contact us at: <a href="mailto:info@enablr.com" className="text-blue-600 hover:underline">info@enablr.com</a></p>
        </section>
      </div>
    </main>
   
  </MainLayout>
);

export default CookiesPolicy; 