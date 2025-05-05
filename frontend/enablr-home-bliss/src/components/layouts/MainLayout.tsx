import React from "react";
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
