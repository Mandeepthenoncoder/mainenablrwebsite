import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { typography } from "@/styles/typography";
import { cn } from "@/lib/utils";
import { Home, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/seo/SEO";

const NotFound = () => {
  return (
    <MainLayout showNewsletter={false} showBlogHighlights={false}>
      <SEO
        title="Page Not Found | Enablr"
        description="The page you're looking for doesn't exist or has been moved."
        keywords="404, page not found, Enablr, error, missing page"
        canonicalUrl="https://gccenablr.com/404/"
        ogImage="https://gccenablr.com/opengraph-image.png"
      />
      
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-blue-50/70 to-white"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full -ml-32 -mt-32 opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-l from-red-200 to-blue-200 rounded-full -mr-32 -mb-32 opacity-30 blur-3xl"></div>
        
        <div className="relative z-10 max-w-md w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className={cn(typography.h1, "mb-4 text-7xl md:text-9xl bg-gradient-to-r from-[#EC4630] to-[#19214F] bg-clip-text text-transparent")}>
              404
            </h1>
            <h2 className={cn(typography.h2, "mb-6")}>
              Page Not Found
            </h2>
            <p className={cn(typography.body.lg, "text-gray-600 mb-8")}>
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                className="bg-enablr-navy text-white hover:bg-white hover:text-enablr-navy border border-transparent hover:border-enablr-navy transition-all duration-300 w-full sm:w-auto"
                asChild
              >
                <Link to="/" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Back to Home
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                className="border-enablr-navy text-enablr-navy hover:bg-enablr-navy hover:text-white transition-all duration-300 w-full sm:w-auto"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
