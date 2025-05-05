import React from "react";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import BlogHighlights from "@/components/BlogHighlights";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

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
        
        {showBlogHighlights && showInsights && (
          <>
            <div className="bg-white">
              <div className="container mx-auto px-6">
                <Separator className="bg-gray-200 h-px" />
              </div>
            </div>
            <BlogHighlights />
          </>
        )}
        
        {showNewsletter && showInsights && (
          <>
            <div className="bg-white">
              <div className="container mx-auto px-6">
                <Separator className="bg-gray-200 h-px" />
              </div>
            </div>
            <Newsletter variant={newsletterVariant} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout; 