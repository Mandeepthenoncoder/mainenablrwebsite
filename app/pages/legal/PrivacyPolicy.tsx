import React from 'react';
import MainLayout from '../../../frontend/enablr-home-bliss/src/components/layouts/MainLayout';

const PrivacyPolicy = () => {
  const effectiveDate = new Date().toLocaleDateString('en-US', { 
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <MainLayout showNewsletter={false} showBlogHighlights={false}>
      <main className="bg-background py-12">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: {effectiveDate}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              Enablr ("we," "us," or "our") values your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-800 mt-8">Personal Data</h3>
            <p className="text-gray-600">
              When you interact with us, you may provide information such as:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-4">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company details</li>
              <li>Payment information (when applicable)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-8">Non-Personal Data</h3>
            <p className="text-gray-600">
              Information like browser type, IP address, and pages visited may be collected automatically.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12">How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-600 mt-4">
              <li>To provide services and support</li>
              <li>To communicate updates or promotional content (with your consent)</li>
              <li>To enhance website performance and user experience</li>
              <li>To analyze and improve our services</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12">Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate security measures to protect your data, including encryption and secure servers. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12">Your Rights</h2>
            <p className="text-gray-600">
              You have the right to access, correct, or delete your data. To exercise these rights, please contact us at{' '}
              <a href="mailto:privacy@enablr.com" className="text-enablr-navy hover:text-enablr-navy/80">
                privacy@enablr.com
              </a>
            </p>

            <div className="mt-12 pt-8 border-t border-border text-center">
              <button className="btn btn-outline mx-2">Download PDF</button>
              <button className="btn btn-outline mx-2">Email Us</button>
              <button className="btn btn-outline mx-2">Manage Preferences</button>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default PrivacyPolicy; 