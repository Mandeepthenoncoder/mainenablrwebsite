// LEGAL REVIEW REQUIRED: Ensure this policy text is approved by legal counsel before publishing.
import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const PrivacyPolicy = () => (
  <MainLayout showNewsletter={false} showBlogHighlights={false}>
    <HeroSection title="Privacy Policy" className="hero-privacy-policy" />
    <main className="policy-content py-20 bg-white">
      <div className="container">
        <section className="policy-section max-w-2xl mx-auto">
          <p className="effective-date text-gray-500 text-base mb-8">Effective Date: 6th April 2025</p>
          <p className="policy-intro text-lg leading-8 mb-8 text-gray-800">
            Enablr ("we," "us," or "our") values your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website <a href="https://www.enablr.com" className="text-blue-600 hover:underline">www.enablr.com</a>.
          </p>
          <h2 className="text-2xl text-gray-900 mt-10 mb-4 font-semibold">Information We Collect</h2>
          <p className="leading-7 mb-4 text-gray-700">Personal Data: When you interact with us, you may provide information such as your name, email address, phone number, or payment details.</p>
          <p className="leading-7 mb-4 text-gray-700">Non-Personal Data: Information like browser type, IP address, and pages visited may be collected automatically.</p>
          <h3 className="text-lg text-gray-800 mt-8 mb-3 font-medium">How We Use Your Information</h3>
          <ul className="list-disc ml-8 my-4">
            <li className="mb-2 leading-6 text-gray-700">To provide services and support.</li>
            <li className="mb-2 leading-6 text-gray-700">To communicate updates or promotional content (with your consent).</li>
            <li className="mb-2 leading-6 text-gray-700">To enhance website performance and user experience.</li>
          </ul>
          <h2 className="text-2xl text-gray-900 mt-10 mb-4 font-semibold">Data Sharing</h2>
          <p className="leading-7 mb-4 text-gray-700">The information collected by us may be shared with third-party entities. They will be using the data only to the extent required to assist us to understand how visitors to our website interact with it. Further, all processing done by these third parties shall be under the terms of an agreement with us limiting their rights over the information provided to them. Data may be shared with trusted partners or service providers for operational purposes, under strict confidentiality.</p>
          <h2 className="text-2xl text-gray-900 mt-10 mb-4 font-semibold">Data Security</h2>
          <p className="leading-7 mb-4 text-gray-700">We implement appropriate security measures to protect your data. Enablr puts in place appropriate physical, electronic and organizational measures to safeguard and secure your data. These measures follow generally accepted industry standards both during transmission and once it is received. Unfortunately, the transmission of information over the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmission to our website.</p>
          <h3 className="text-lg text-gray-800 mt-8 mb-3 font-medium">User Rights</h3>
          <p className="leading-7 mb-4 text-gray-700">You have the right to access, correct, or delete your data.</p>
          <p className="leading-7 mb-4 text-gray-700">To exercise these rights, please contact us at <a href="mailto:info@enablr.com" className="text-blue-600 hover:underline">info@enablr.com</a>.</p>
          <h2 className="text-2xl text-gray-900 mt-10 mb-4 font-semibold">Policy Updates</h2>
          <p className="leading-7 mb-4 text-gray-700">We may update our Privacy Policy from time to time. Changes will be reflected with a revised "Effective Date."</p>
          <p className="leading-7 mb-4 text-gray-700">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
          <h2 className="text-2xl text-gray-900 mt-10 mb-4 font-semibold">Contact Us</h2>
          <p className="leading-7 mb-4 text-gray-700">If you have any questions about this Privacy Policy, please contact us: <a href="mailto:info@enablr.com" className="text-blue-600 hover:underline">info@enablr.com</a></p>
        </section>
      </div>
    </main>
    
  </MainLayout>
);

export default PrivacyPolicy; 