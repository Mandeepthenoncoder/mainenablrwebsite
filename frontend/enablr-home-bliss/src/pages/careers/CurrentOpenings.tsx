import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import CurrentOpeningsComponent from "@/components/careers/CurrentOpenings";
import CareerCTA from "@/components/careers/CareerCTA";
import HeroSection from "@/components/ui/HeroSection";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { cn } from "@/lib/utils";

const CurrentOpenings = () => {
  return (
    <MainLayout showNewsletter={true} showBlogHighlights={false}>
      <Helmet>
        <title>Current Openings at Enablr - Career Opportunities</title>
        <meta 
          name="description" 
          content="Explore current job openings at Enablr. Find your ideal role and join our team of dedicated professionals building global capability centers worldwide." 
        />
      </Helmet>
      
      <HeroSection
        title={<>Current Openings</>}
        description="Join our talented team and contribute to building world-class global capability centers."
        descriptionClassName="text-white text-center mt-4 mb-8 max-w-2xl mx-auto"
        image="/Career/openings.webp"
        customMobilePosition="top"
        customDesktopPosition="center 30%"
        enableKenBurns={true}
        centerContent={true}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={cn(typography.h2, "mb-4")}>
              Our Hiring Approach
            </h2>
            <p className={cn(typography.body.lg, "text-gray-600 mb-6")}>
              At Enablr, we're always on the lookout for exceptional talent to join our team. Our hiring process is designed to identify not just technical skills, but also the right mindset and cultural alignment.
            </p>
            <p className={cn(typography.body.base, "text-gray-600")}>
              We value diversity of thought, experience, and background, and we're committed to creating an inclusive workplace where everyone can thrive. Browse our current openings below and take the first step toward joining the Enablr team.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            <div className="bg-blue-50/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-enablr-navy mb-3">1. Apply</h3>
              <p className="text-gray-600">Submit your application for the role that matches your skills and interests.</p>
            </div>
            <div className="bg-blue-50/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-enablr-navy mb-3">2. Interview</h3>
              <p className="text-gray-600">Engage in conversations with our team to explore mutual fit.</p>
            </div>
            <div className="bg-blue-50/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-enablr-navy mb-3">3. Join</h3>
              <p className="text-gray-600">Begin your journey with Enablr and make an impact from day one.</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <CurrentOpeningsComponent />
      
      <CareerCTA />
    </MainLayout>
  );
};

export default CurrentOpenings; 