import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react"; // Corrected Icon import (CalendarDays -> Calendar)
import { typography } from "@/styles/typography";
import { motion } from "framer-motion";

// Blog posts data - NOW INCLUDES SLUGS
const blogPosts = [
  {
    id: "1",
    // Add the correct slug based on your previous list
    slug: "scalability-advantage-why-gccs-matter", 
    title: "The 'Scalability' advantage: Why GCCs matter",
    excerpt: "Building your GCC is like drawing a blueprint for your house, ensuring every element from the ground up embeds strength and scalability to stay future proof.",
    coverImage: "/Blog Images/From support functions to strategic hubs The evolution of GCCs.jpg",
    publishedAt: "2024-06-01T00:00:00Z",
    readTime: 5
  },
  {
    id: "2",
    // Add the correct slug
    slug: "high-performance-gcc-best-practices", 
    title: "How to build a high-performance GCC: Best practices for talent, technology, and strategy",
    excerpt: "A comprehensive guide to establishing and optimizing Global Capability Centers for maximum business impact.",
    coverImage: "/Blog Images/How to build a high-performance GCC Best practices for talent, technology, and strategy.jpg",
    publishedAt: "2024-05-20T00:00:00Z",
    readTime: 8
  },
  {
    id: "3",
    // Add the correct slug
    slug: "ai-powered-transformation-gcc-innovation", 
    title: "AI-powered transformation: How GCCs are driving business innovation",
    excerpt: "Exploring how Global Capability Centers are leveraging artificial intelligence to reimagine business processes and create competitive advantages.",
    coverImage: "/Blog Images/AI-powered transformation How GCCs are driving business innovation.jpg",
    publishedAt: "2024-05-10T00:00:00Z",
    readTime: 6
  }
  // Add more posts here with their slugs if needed
];

const BlogHighlights = () => {
  return (
    <section className="py-[20px] md:py-[40px] bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <h2 className={typography.h2}>
        <span className="font-bold bg-gradient-to-r from-[#EC4630] to-[#19214F] bg-clip-text text-transparent">Insights on </span>GCC trends  </h2>
          <div className="w-24 h-1 bg-enablr-lime mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id} // Keep using id for React key, it's fine
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                  
                  {/* CHANGE HERE: Use post.slug instead of post.id */}
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="inline-flex items-center text-enablr-navy font-medium group"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 bg-enablr-navy text-white px-6 py-2.5 rounded-md hover:bg-white hover:text-enablr-navy hover:border-enablr-navy hover:border transition-colors font-medium"
          >
            View all articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;