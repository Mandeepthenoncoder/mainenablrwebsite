import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react"; // Corrected Icon import (CalendarDays -> Calendar)
import { typography } from "@/styles/typography";
import { motion } from "framer-motion";

// All available blog posts
const allBlogPosts = [
  {
    id: "1",
    slug: "support-functions-to-strategic-hubs", 
    title: "From support functions to strategic hubs: The evolution of GCCs",
    excerpt: "Witness the transformation journey of GCCs from basic support centers to crucial strategic business hubs.",
    coverImage: "/Insights/Blog-1.webp",
    publishedAt: "2024-06-15T00:00:00Z",
    readTime: 7
  },
  {
    id: "2",
    slug: "scalability-advantage-why-gccs-matter", 
    title: "The 'Scalability' advantage: Why GCCs matter",
    excerpt: "Building your GCC is like drawing a blueprint for your house, ensuring every element from the ground up embeds strength and scalability to stay future proof.",
    coverImage: "/Insights/Blog-2.webp?v=1",
    publishedAt: "2024-06-01T00:00:00Z",
    readTime: 5
  },
  {
    id: "3",
    slug: "workforce-tomorrow-gccs-tech-talent-development", 
    title: "Building the workforce of tomorrow: The role of GCCs in tech talent development",
    excerpt: "How Global Capability Centers are becoming crucial talent incubators for developing future-ready technical skills.",
    coverImage: "/Insights/Blog-3.webp",
    publishedAt: "2024-05-25T00:00:00Z",
    readTime: 6
  },
  {
    id: "4",
    slug: "high-performance-gcc-best-practices", 
    title: "How to build a high-performance GCC: Best practices for talent, technology, and strategy",
    excerpt: "A comprehensive guide to establishing and optimizing Global Capability Centers for maximum business impact.",
    coverImage: "/Insights/Blog-4.webp?v=1",
    publishedAt: "2024-05-20T00:00:00Z",
    readTime: 8
  },
  {
    id: "5",
    slug: "ai-powered-transformation-gcc-innovation", 
    title: "AI-powered transformation: How GCCs are driving business innovation",
    excerpt: "Exploring how Global Capability Centers are leveraging artificial intelligence to reimagine business processes and create competitive advantages.",
    coverImage: "/Insights/Blog-5.webp?v=1",
    publishedAt: "2024-05-10T00:00:00Z",
    readTime: 6
  },
  {
    id: "6",
    slug: "gccs-redefining-digital-transformation", 
    title: "GCCs are redefining digital transformation. Know more.",
    excerpt: "Explore how GCCs are at the forefront of digital transformation initiatives for global enterprises.",
    coverImage: "/Insights/Blog-6.webp",
    publishedAt: "2024-05-05T00:00:00Z",
    readTime: 5
  },
  {
    id: "7",
    slug: "gcc-powerhouse-innovation", 
    title: "How GCCs can become a 'powerhouse' of innovation with smarter workspace solutions",
    excerpt: "Unleashing the innovation potential of Global Capability Centers through the right strategies and enablers.",
    coverImage: "/Insights/Blog-7.webp",
    publishedAt: "2024-04-01T00:00:00Z",
    readTime: 5
  },
  {
    id: "8",
    slug: "optimizing-workspace-design-gccs", 
    title: "Optimizing workspace design in GCCs: Balancing innovation, collaboration, and well-being",
    excerpt: "How thoughtful workspace design can enhance productivity, foster creativity, and improve employee satisfaction in Global Capability Centers.",
    coverImage: "/Insights/Blog-8.webp",
    publishedAt: "2024-04-30T00:00:00Z",
    readTime: 7
  }
];

// Function to get the rotation set based on current date or path
const getRotatingBlogPosts = () => {
  // Get the current date
  const today = new Date();
  
  // Get the current pathname (e.g., "/about", "/contact", etc.)
  const pathname = window.location.pathname;
  
  // Generate a seed value based on the day of month and pathname
  // This ensures different pages show different sets of blogs
  let seed = today.getDate(); // Day of month (1-31)
  
  // Add a value based on the pathname to ensure different pages show different rotations
  // Simple hash of the pathname
  const pathnameValue = pathname.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 7;
  seed = (seed + pathnameValue) % allBlogPosts.length;
  
  // Ensure seed is at least 0 and won't cause issues with array indexing
  if (seed < 0) seed = 0;
  
  // Get 3 consecutive posts starting from the calculated index
  // If we reach the end, wrap around to the beginning
  const selectedPosts = [];
  for (let i = 0; i < 3; i++) {
    const index = (seed + i) % allBlogPosts.length;
    selectedPosts.push(allBlogPosts[index]);
  }
  
  return selectedPosts;
};

const BlogHighlights = () => {
  const [blogPosts, setBlogPosts] = useState<typeof allBlogPosts>([]);
  
  useEffect(() => {
    // Get rotating blog posts when component mounts
    setBlogPosts(getRotatingBlogPosts());
  }, []);

  return (
    <section className="py-[20px] md:py-[40px] bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={typography.h2}>
            <span className="font-bold bg-gradient-to-r from-[#EC4630] to-[#19214F] bg-clip-text text-transparent">Insights on </span>GCC trends
          </h2>
          <div className="w-24 h-1 bg-enablr-lime mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id}
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
            More insights
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;