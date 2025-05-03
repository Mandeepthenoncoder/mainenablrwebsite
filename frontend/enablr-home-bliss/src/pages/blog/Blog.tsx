import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Newspaper, Clock, Calendar, ArrowRight } from "lucide-react";
import PageCTA from "@/components/PageCTA";
import { motion } from "framer-motion";
import BlogPostCard from "@/components/blog/BlogPostCard";
import type { BlogPost } from "@/types/blog";
import { typography } from "@/styles/typography";
import Newsletter from "@/components/Newsletter";
import { Link } from "react-router-dom";

// Static blog data
const staticPosts: BlogPost[] = [
  // GCC As a Service
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
  // Talent and HR
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
  // Technology Enablement
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
  // Workspace Solutions
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

const staticCategories = ["all", "GCCs as-a-service", "Technology Enablement Solutions", "Workspace Solutions","Talent & HR Solutions"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [showFeaturedSection, setShowFeaturedSection] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  
  // Filter posts by search term and category
  const filteredPosts = staticPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Featured posts (top 3)
  const featuredPosts = staticPosts.slice(0, 3);
  
  // Handle category change
  const handleCategoryChange = (category: string) => {
    setIsLoading(true);
    setActiveCategory(category);
    setShowFeaturedSection(category === "all" && searchTerm === "");
    
    // Simulate small delay for smooth transition
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };
  
  // Reset showFeaturedSection when search term changes
  React.useEffect(() => {
    setShowFeaturedSection(activeCategory === "all" && searchTerm === "");
  }, [searchTerm, activeCategory]);
  
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Insights & Perspectives | GCC Knowledge Hub - Enablr</title>
        <meta 
          name="description" 
          content="Discover expert insights on GCC trends, innovation, technology enablement, and talent strategies from Enablr's knowledge center." 
        />
      </Helmet>
      
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="text-white py-24 md:py-32 relative overflow-hidden">
          {/* Background Image and Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/blog/blog-hero.jpg" 
              alt="Blog Hero" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0  opacity-85"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIG9wYWNpdHk9IjAuMyIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQxMl8xMTApIj48cGF0aCBkPSJNMTYwMCAwSDBWMTIwMEgxNjAwVjBaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTIwMCAwSDBWMTIwMEgxMjAwVjBaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNODAwIDEyMDBMODAwIDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik00MDAgMTIwMEw0MDAgMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTAgODAwTDEyMDAgODAwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMCA0MDBMMTI2MCA0MDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwXzQxMl8xMTAiPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+')] bg-no-repeat bg-cover opacity-10"></div>
            <div className="absolute -left-16 -bottom-16 w-80 h-80 rounded-full border-t-indigo-500 blur-3xl"></div>
            <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-left"
              >
                <h1 className={`${typography.h1} text-white mb-6 leading-tight`}>
                  GCC Insights & <span className="text-enablr-lime">Perspectives</span>
                </h1>
                <p className={`${typography.body.lg} text-gray-200 mb-8 max-w-xl`}>
                  Unpacking the trends, technology, and talent strategies redefining how Global Capability Centers drive innovation and impact.
                </p>
                <div className="flex">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white bg-enablr-navy hover:bg-white hover:text-enablr-navy rounded-md transition-all duration-300"
                  >
                    Subscribe for Updates
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Search & Categories */}
        <section className="bg-gray-50 py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <Newspaper className="h-5 w-5 text-enablr-navy" />
                <h2 className={`${typography.h4} text-enablr-navy`}>Browse Topics</h2>
              </div>
            
              {/* Search Bar */}
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search articles..."
                  className="pl-9 py-6 border-gray-300"
                  value={searchTerm}
                  onChange={(e) => {
                    setIsLoading(true);
                    setSearchTerm(e.target.value);
                    // Update featured section visibility
                    setShowFeaturedSection(activeCategory === "all" && e.target.value === "");
                    // Small delay for smooth transition
                    setTimeout(() => setIsLoading(false), 300);
                  }}
                />
              </div>
            </div>
          
            {/* Categories */}
            <div className="mt-6 flex flex-wrap gap-2">
              {staticCategories.map(category => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "secondary" : "outline"}
                  size="sm"
                  className={`rounded-md capitalize ${
                    activeCategory === category 
                      ? "bg-enablr-navy text-white hover:bg-white hover:text-enablr-navy" 
                      : "text-gray-700 hover:bg-white hover:text-enablr-navy"
                  } transition-colors duration-300`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category === "all" ? "All Topics" : category}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Articles - Only show when viewing 'all' and no search */}
        {(featuredPosts.length > 0 && showFeaturedSection) && (
          <section className="py-10 container mx-auto px-4">
            <div className="mb-8">
              <h2 className={typography.h2}>
                <span className="font-bold bg-gradient-to-r from-[#EC4630] to-[#19214F] bg-clip-text text-transparent">Featured</span> Insights
              </h2>
              <div className="w-20 h-1 bg-enablr-lime mt-2"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* HERO FEATURED: Full-width image with text overlay */}
              {featuredPosts[0] && (
                <motion.div 
                  className="col-span-1 lg:col-span-2 relative min-h-[400px] h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link to={`/blog/${featuredPosts[0].slug}`} className="block h-full group">
                    <div className="relative w-full h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src={featuredPosts[0].cover_image} 
                        alt={featuredPosts[0].title} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Category at top-left */}
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-enablr-navy bg-opacity-90 text-white rounded-full absolute top-4 left-4 z-20">
                        {featuredPosts[0].category}
                      </span>
                      {/* Solid black overlay for text readability */}
                      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-black/60 z-10"></div>
                      {/* Text overlay in bottom 40% */}
                      <div className="absolute bottom-0 left-0 w-full p-8 z-20 text-white flex flex-col justify-end" style={{height: '40%', textShadow: '0 2px 8px rgba(0,0,0,0.8)'}}>
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 line-clamp-2">{featuredPosts[0].title}</h3>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-200">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {new Date(featuredPosts[0].published_at).toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' })}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {featuredPosts[0].read_time} min read
                          </span>
                        </div>
                        <span className="inline-block mt-4 text-enablr-lime font-semibold">Read Article</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}
              {/* Two 50% width posts stacked vertically on the right */}
              <div className="col-span-1 flex flex-col gap-8">
                {featuredPosts.slice(1, 3).map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
                  >
                    <Link to={`/blog/${post.slug}`} className="block h-full group">
                      <div className="relative w-full h-[336px] rounded-xl overflow-hidden shadow-md">
                        <img 
                          src={post.cover_image} 
                          alt={post.title} 
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Category at top-left */}
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-enablr-navy bg-opacity-90 text-white rounded-full absolute top-4 left-4 z-20">
                          {post.category}
                        </span>
                        {/* Solid black overlay for text readability */}
                        <div className="absolute bottom-0 left-0 w-full h-[40%] bg-black/60 z-10"></div>
                        {/* Text overlay in bottom 40% */}
                        <div className="absolute bottom-0 left-0 w-full p-6 z-20 text-white flex flex-col justify-end" style={{height: '40%', textShadow: '0 2px 8px rgba(0,0,0,0.8)'}}>
                          <h4 className="text-lg font-bold mb-2 line-clamp-2">{post.title}</h4>
                          
                          <div className="flex items-center gap-3 text-xs text-gray-200">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" />
                              {new Date(post.published_at).toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' })}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5" />
                              {post.read_time} min read
                            </span>
                          </div>
                          <span className="inline-block mt-2 text-enablr-lime font-semibold">Read Article</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Latest Articles */}
        <section className={`py-12 ${!showFeaturedSection ? 'pt-10' : 'pt-4'} bg-gray-50`}>
          <div className="container mx-auto px-4">
            <div className="mb-8">
            <h2 className={typography.h2}> {/* Note: text-enablr-navy is removed from here */}
        {activeCategory === "all" ? (
          // If category is 'all', show "Latest" in gradient
          <>
            <span className="font-bold bg-gradient-to-r from-[#EC4630] to-[#19214F] bg-clip-text text-transparent">
              Latest
            </span>
            {' '} {/* Space */}
            Articles {/* Default text color */}
          </>
        ) : (
          // Otherwise, show the category name in gradient
          <>
            <span className="font-bold bg-gradient-to-r from-[#EC4630] to-[#19214F] bg-clip-text text-transparent">
              {activeCategory}
            </span>
            {' '} {/* Space */}
            Articles {/* Default text color */}
          </>
        )}
      </h2>
              <div className="w-20 h-1 bg-enablr-lime mt-2"></div>
            </div>
            
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-xl shadow-md h-[400px] animate-pulse">
                    <div className="h-48 bg-gray-200 rounded-t-xl"></div>
                    <div className="p-6">
                      <div className="h-6 bg-gray-200 rounded mb-4 w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2 w-5/6"></div>
                      <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredPosts && filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => {
                  // Skip duplicate posts
                  const isDuplicate = filteredPosts.findIndex(p => p.id === post.id) !== index;
                  if (isDuplicate) return null;
                  
                  return (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.05 * index }}
                    >
                      <Link to={`/blog/${post.slug}`} className="block h-full">
                        <BlogPostCard post={post} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                <h3 className={`${typography.h3} text-gray-800 mb-2`}>No articles found</h3>
                <p className={`${typography.body.base} text-gray-600`}>Try adjusting your search or browse a different category</p>
                <Button 
                  onClick={() => { 
                    setSearchTerm("");
                    handleCategoryChange("all");
                  }}
                  className="mt-4 bg-enablr-navy hover:bg-enablr-navy/90 rounded-md shadow-sm hover:shadow-md transition-all duration-300"
                >
                  View all articles
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Newsletter Section */}
        <Newsletter />

        {/* CTA Section */}
        <PageCTA
          title="Ready to transform your GCC strategy?"
          buttonText="Contact Us"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
