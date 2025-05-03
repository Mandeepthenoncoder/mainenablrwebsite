import React, { useRef } from "react";
import InsightCard from "./blog/InsightCard";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { typography } from "@/styles/typography";
import type { BlogPost } from "@/types/blog";

// Static blog posts data matching the screenshot
const staticPosts: BlogPost[] = [
  {
    id: "1",
    title: "The 'Scalability' advantage: Why GCCs matter",
    slug: "scalability-advantage-gccs-matter",
    excerpt: "Global Capability Centers (GCCs) offer a strategic advantage through scalable operations that support global business growth.",
    content: "",
    cover_image: "/images/blog/gcc1.jpg?v=1",
    author: "Enablr Team",
    category: "GCCs as-a-service",
    published_at: "2024-05-15T00:00:00Z",
    read_time: 5
  },
  {
    id: "2",
    title: "Technology Integration: Key to Successful GCC Operations",
    slug: "technology-integration-successful-gcc-operations",
    excerpt: "How seamless technology integration drives efficiency and innovation in modern Global Capability Centers.",
    content: "",
    cover_image: "/images/blog/technology.jpg?v=1",
    author: "Enablr Team",
    category: "Technology Enablement Solutions",
    published_at: "2024-05-10T00:00:00Z",
    read_time: 6
  },
  {
    id: "3",
    title: "Building High-Performance Teams for Your GCC",
    slug: "building-high-performance-teams-gcc",
    excerpt: "Strategies for recruiting, developing, and retaining top talent to create high-performing teams in your Global Capability Center.",
    content: "",
    cover_image: "/images/blog/talent.jpg?v=1",
    author: "Enablr Team",
    category: "Talent & HR Solutions",
    published_at: "2024-05-05T00:00:00Z",
    read_time: 7
  }
];

const Insights = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-10 text-center"
        >
          <span className="text-enablr-navy text-sm font-medium mb-2 block">Latest Updates</span>
          <h2 className={`${typography.h2} mb-3`}>
            Insights on <span className="text-enablr-navy">GCC Trends</span>
          </h2>
          <p className={`${typography.body.base} text-gray-600 max-w-3xl mx-auto`}>
            Explore the latest updates and industry perspectives in Global Capability Centers.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {staticPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <InsightCard post={post} index={index} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mt-10 md:mt-12"
        >
          <Link to="/blog">
            <Button className="bg-enablr-navy text-white hover:bg-white hover:text-enablr-navy border border-transparent hover:border-enablr-navy transition-all duration-300">
              Explore More Insights
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Insights;
