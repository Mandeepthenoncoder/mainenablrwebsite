import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import BlogHighlights from "@/components/BlogHighlights";
import Footer from "@/components/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
  showNewsletter?: boolean;
  showBlogHighlights?: boolean;
  newsletterVariant?: 'compact' | 'expanded';
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  showNewsletter = true,
  showBlogHighlights = true,
  newsletterVariant = 'expanded'
}) => {
  useEffect(() => {
    // Add HubSpot tracking script
    const script = document.createElement('script');
    script.src = '//js-na2.hs-scripts.com/242764191.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16 md:pt-20">
        {children}
        {showBlogHighlights && <BlogHighlights />}
        {showNewsletter && <Newsletter variant={newsletterVariant} />}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
