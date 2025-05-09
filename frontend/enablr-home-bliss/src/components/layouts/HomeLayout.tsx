import React, { lazy, Suspense } from "react";
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
  // Define a simple loader, or import a shared one
  const SectionLoader = () => (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="animate-spin w-8 h-8 border-4 border-enablr-navy border-t-transparent rounded-full"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        {children}
        
        {showBlogHighlights && showInsights && (
          <Suspense fallback={<SectionLoader />}>
            <div className="bg-white">
              <div className="container mx-auto px-6">
                <Separator className="bg-gray-200 h-px" />
              </div>
            </div>
            <BlogHighlights />
          </Suspense>
        )}
        
        {showNewsletter && showInsights && (
          <Suspense fallback={<SectionLoader />}>
            <div className="bg-white">
              <div className="container mx-auto px-6">
                <Separator className="bg-gray-200 h-px" />
              </div>
            </div>
            <Newsletter variant={newsletterVariant} />
          </Suspense>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout; 