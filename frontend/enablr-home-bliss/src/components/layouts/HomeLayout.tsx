import React from "react";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import BlogHighlights from "@/components/BlogHighlights";
import Footer from "@/components/Footer";

interface HomeLayoutProps {
  children: React.ReactNode;
  showNewsletter?: boolean;
  showBlogHighlights?: boolean;
  newsletterVariant?: 'compact' | 'expanded';
  showInsights?: boolean;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ 
  children, 
  showNewsletter = true,
  showBlogHighlights = true,
  newsletterVariant = 'expanded',
  showInsights = true
}) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        {children}
        {showBlogHighlights && <BlogHighlights />}
        {showNewsletter && <Newsletter variant={newsletterVariant} />}
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout; 