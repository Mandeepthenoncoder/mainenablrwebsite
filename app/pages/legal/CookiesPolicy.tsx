import React from 'react';
import MainLayout from '../../../frontend/enablr-home-bliss/src/components/layouts/MainLayout';

const CookiesPolicy = () => {
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
            <h1 className="text-4xl font-bold text-foreground mb-4">Cookies Policy</h1>
            <p className="text-muted-foreground">Last updated: {effectiveDate}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              This Cookies Policy explains how Enablr uses cookies and similar technologies to recognize you when you visit our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12">What are cookies?</h2>
            <p className="text-gray-600">
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide useful information to website owners.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12">How we use cookies</h2>
            <p className="text-gray-600">We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 text-gray-600 mt-4">
              <li>Essential cookies: Required for the website to function properly</li>
              <li>Analytics cookies: Help us understand how visitors interact with our website</li>
              <li>Preference cookies: Remember your settings and preferences</li>
              <li>Marketing cookies: Track your activity across websites for marketing purposes</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12">Your choices regarding cookies</h2>
            <p className="text-gray-600">
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>

            <div className="mt-12 pt-8 border-t border-border text-center">
              <button className="btn btn-outline mx-2">Manage Cookie Preferences</button>
              <button className="btn btn-outline mx-2">Contact Us</button>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default CookiesPolicy; 