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
    title: "From support functions to strategic hubs: The evolution of GCCs",
    slug: "support-functions-to-strategic-hubs",
    excerpt: "Witness the transformation journey of GCCs from basic support centers to crucial strategic business hubs.",
    content: "<p>Global Capability Centers have undergone a significant transformation over the past decade...</p>",
    cover_image: "/Blog Images/Blog-0.jpg?v=1",
    author: "Enablr Team",
    category: "GCCs as-a-service",
    published_at: "2024-06-15T00:00:00Z",
    read_time: 7
  },
  {
    id: "2",
    title: "The 'Scalability' advantage: Why GCCs matter",
    slug: "scalability-advantage-why-gccs-matter",
    excerpt: "Building your GCC is like drawing a blueprint for your house, ensuring every element from the ground up embeds strength and scalability to stay future proof.",
    content: "<p>In today's rapidly evolving business landscape, Global Capability Centers (GCCs) have emerged as strategic hubs that drive innovation, efficiency, and scalability...</p>",
    cover_image: "/Blog Images/Blog-1.jpg?v=1",
    author: "Mandeep Singh",
    category: "GCCs as-a-service",
    published_at: "2024-06-01T00:00:00Z",
    read_time: 5
  },
  {
    id: "3",
    title: "Building the workforce of tomorrow: The role of GCCs in tech talent development",
    slug: "workforce-tomorrow-gccs-tech-talent-development",
    excerpt: "How Global Capability Centers are becoming crucial talent incubators for developing future-ready technical skills.",
    content: "<p>Global Capability Centers are playing an increasingly important role in developing technical talent...</p>",
    cover_image: "/Blog Images/Blog-3.jpg?v=1",
    author: "Enablr Team",
    category: "Talent & HR Solutions",
    published_at: "2024-05-25T00:00:00Z",
    read_time: 6
  },
  {
    id: "4",
    title: "How to build a high-performance GCC: Best practices for talent, technology, and strategy",
    slug: "high-performance-gcc-best-practices",
    excerpt: "A comprehensive guide to establishing and optimizing Global Capability Centers for maximum business impact.",
    content: "<p>Building a high-performance Global Capability Center requires careful attention to three key elements...</p>",
    cover_image: "/Blog Images/Blog-2.jpg?v=1",
    author: "Rahul Sharma",
    category: "Talent & HR Solutions",
    published_at: "2024-05-20T00:00:00Z",
    read_time: 8
  },
  {
    id: "5",
    title: "AI-powered transformation: How GCCs are driving business innovation",
    slug: "ai-powered-transformation-gcc-innovation",
    excerpt: "Exploring how Global Capability Centers are leveraging artificial intelligence to reimagine business processes and create competitive advantages.",
    content: "<p>Artificial Intelligence is revolutionizing how Global Capability Centers operate and deliver value...</p>",
    cover_image: "/Blog Images/Blog-5.jpg?v=1",
    author: "Priya Patel",
    category: "Technology Enablement Solutions",
    published_at: "2024-05-10T00:00:00Z",
    read_time: 6
  },
  {
    id: "6",
    title: "GCCs are redefining digital transformation. Know more.",
    slug: "gccs-redefining-digital-transformation",
    excerpt: "Explore how GCCs are at the forefront of digital transformation initiatives for global enterprises.",
    content: "<p>Global Capability Centers are increasingly becoming the nerve centers for digital transformation initiatives...</p>",
    cover_image: "/Blog Images/Blog-6.jpg?v=1",
    author: "Enablr Team",
    category: "Technology Enablement Solutions",
    published_at: "2024-05-05T00:00:00Z",
    read_time: 5
  },
  {
    id: "7",
    title: "How GCCs can become a 'powerhouse' of innovation with smarter workspace solutions",
    slug: "gcc-powerhouse-innovation",
    excerpt: "Unleashing the innovation potential of Global Capability Centers through the right strategies and enablers.",
    content: "<p>Global Capability Centers have the potential to be powerful engines of innovation...</p>",
    cover_image: "/Blog Images/Blog-7.jpg?v=1",
    author: "Sneha Rao",
    category: "Workspace Solutions",
    published_at: "2024-04-01T00:00:00Z",
    read_time: 5
  },
  {
    id: "8",
    title: "Optimizing workspace design in GCCs: Balancing innovation, collaboration, and well-being",
    slug: "optimizing-workspace-design-gccs",
    excerpt: "How thoughtful workspace design can enhance productivity, foster creativity, and improve employee satisfaction in Global Capability Centers.",
    content: "<p>Workspace design plays a critical role in the success of Global Capability Centers...</p>",
    cover_image: "/Blog Images/Blog-4.jpg?v=1",
    author: "Anil Kumar",
    category: "Workspace Solutions",
    published_at: "2024-04-30T00:00:00Z",
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
