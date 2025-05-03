import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Globe, Package, Power, Clock, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import BlogHighlights from "@/components/BlogHighlights";
import Newsletter from "@/components/Newsletter";
import { cn } from "@/lib/utils";

const Solutions = () => {
  // Solution cards data
  const solutionCards = [
    {
      id: 1,
      title: "GCC as a service",
      description: "End-to-end solution to establish your fully equipped global capability center.",
      image: "/images/blog/gcc1.jpg?v=1",
      link: "/services/gcc-as-service"
    },
    {
      id: 2,
      title: "Technology enablement",
      description: "Leveraging technology to power your capability center.",
      image: "/images/blog/technology.jpg?v=1",
      link: "/services/technology-enablement"
    },
    {
      id: 3,
      title: "Workspace solutions",
      description: "Future-ready workspaces for your capability center.",
      image: "/images/blog/workspace.jpg?v=1",
      link: "/services/workspace-solutions"
    },
    {
      id: 4,
      title: "Talent and HR solutions",
      description: "Comprehensive talent management for your capability center.",
      image: "/images/blog/talent.jpg?v=1",
      link: "/services/talent-hr-solutions"
    },
    {
      id: 5,
      title: "Business operations",
      description: "Seamless and streamlined operations for smooth functioning.",
      image: "/images/blog/insights.jpg?v=1",
      link: "/services/business-operations"
    },
    {
      id: 6,
      title: "Staff augmentation",
      description: "Easily available skilled talent pool for your capability center.",
      image: "/images/blog/trends.jpg?v=1",
      link: "/services/staff-augmentation"
    }
  ];

  // Benefits data
  const benefits = [
    {
      id: 1,
      title: "Speed to market",
      description: "Accelerate the process of setting up your capability center.",
      icon: <Zap className="w-5 h-5 text-enablr-navy" />
    },
    {
      id: 2,
      title: "Local expertise",
      description: "Leverage our knowledge of the regional business landscape.",
      icon: <Globe className="w-5 h-5 text-enablr-navy" />
    },
    {
      id: 3,
      title: "One stop shop",
      description: "Patner with us for end-to-end assistance in setting up your capability center.",
      icon: <Package className="w-5 h-5 text-enablr-navy" />
    },
    {
      id: 4,
      title: "Plug and play",
      description: "Pay as your business grows with no hassle of huge CapEx.",
      icon: <Power className="w-5 h-5 text-enablr-navy" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>End-to-End GCC Solutions | Enablr</title>
        <meta 
          name="description" 
          content="Explore Enablr's comprehensive GCC solutions including GCC as a Service, Technology Enablement, Workspace Solutions, and more." 
        />
      </Helmet>
      
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <style dangerouslySetInnerHTML={{
            __html: `
              @keyframes kenBurns {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
              }
              .ken-burns-bg {
                animation: kenBurns 10s ease-in-out infinite;
              }
            `
          }} />

          <div className="absolute inset-0 z-0">
            <div className="ken-burns-bg w-full h-full">
              <img
                src="/solutions landing page hero image.png"
                alt="Enablr solutions hero"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4 py-12 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white mb-6 tracking-tight leading-tight text-5xl md:text-6xl lg:text-7xl font-bold"
              >
                Explore our end-to-end GCC solutions
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative mb-8"
              >
                <p className="text-white/90 font-medium tracking-tight text-2xl md:text-3xl">
                  Accelerate your journey to a fully-functional GCC
                </p>
                {/* Accent underline */}
                <div className="h-px w-16 bg-white mt-6"></div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Intro Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-16 gap-y-12">
              <div className="md:col-span-12">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-6"
                >
                  <p className={`${typography.body.lg} text-gray-600 leading-relaxed font-medium tracking-tight text-xl md:text-2xl max-w-4xl mx-auto`}>
                    Enablr offers a wide range of flexible solutions to help businesses set up their global capability centers in India. Our domain-agnostic modular solutions accelerate the setting up of your fully-functional capability center, enabling you to work with the same tools and platforms that you currently use.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Solutions Grid Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50/70 to-gray-50 relative overflow-hidden">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIG9wYWNpdHk9IjAuMyIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQxMl8xMTApIj48cGF0aCBkPSJNMTYwMCAwSDBWMTIwMEgxNjAwVjBaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTIwMCAwSDBWMTIwMEgxMjAwVjBaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNODAwIDEyMDBMODAwIDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik00MDAgMTIwMEw0MDAgMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTAgODAwTDEyMDAgODAwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMCA0MDBMMTI2MCA0MDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwXzQxMl8xMTAiPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+')] bg-no-repeat bg-cover opacity-[0.03] z-0"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
            <h2 className={typography.h2}>
        <span className="font-bold bg-gradient-to-r from-[#EC4630] to-[#19214F] bg-clip-text text-transparent">Solutions</span> for your GCC journey
              </h2>
              <div className="w-20 h-1 bg-enablr-lime mx-auto mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutionCards.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full border border-gray-100 hover:shadow-xl transition-all duration-500 flex flex-col group-hover:border-enablr-navy/30">
                    {/* Top accent line with gradient hover */}
                    
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={solution.image} 
                        alt={solution.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient overlay that changes on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-enablr-navy/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-purple-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className={`${typography.h3} text-enablr-navy mb-3 group-hover:text-enablr-navy transition-colors duration-300`}>
                        {solution.title}
                      </h3>
                      <p className={`${typography.body.base} text-gray-600 mb-6 flex-grow`}>
                        {solution.description}
                      </p>
                      <Button 
                        asChild
                        variant="outline"
                        className="w-full justify-center border-enablr-navy text-enablr-navy hover:bg-enablr-navy hover:text-white mt-auto group"
                      >
                        <Link to={solution.link} className="flex items-center gap-2">
                          Know More
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
              <h2 className={typography.h2}>
        <span className="font-bold bg-gradient-to-r from-[#EC4630] to-[#19214F] bg-clip-text text-transparent">Why</span> businesses choose Enablr?
              </h2>
                
                <div className="w-20 h-1 bg-enablr-lime mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-enablr-navy/30"
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative w-12 h-12 flex-shrink-0">
                        <div className="absolute inset-0 bg-enablr-navy/10 rounded-lg transition-colors duration-300 group-hover:bg-enablr-navy/20"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          {benefit.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className={`${typography.h4} text-enablr-navy mb-2 group-hover:text-enablr-navy transition-colors duration-300`}>
                          {benefit.title}
                        </h3>
                        <p className={`${typography.body.base} text-gray-600`}>
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-enablr-navy relative overflow-hidden">
          {/* Background Grid Pattern */}
          <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIG9wYWNpdHk9IjAuMyIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQxMl8xMTApIj48cGF0aCBkPSJNMTYwMCAwSDBWMTIwMEgxNjAwVjBaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTIwMCAwSDBWMTIwMEgxMjAwVjBaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNODAwIDEyMDBMODAwIDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik00MDAgMTIwMEw0MDAgMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTAgODAwTDEyMDAgODAwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMCA0MDBMMTI2MCA0MDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwXzQxMl8xMTAiPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+')] bg-no-repeat bg-cover opacity-10"></div>
          
          {/* Gradient blobs for corners */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-200 to-blue-100 rounded-full -ml-32 -mt-32 opacity-30 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-l from-blue-100 to-blue-200 rounded-full -mr-32 -mb-32 opacity-30 blur-3xl"></div>
          
          <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className={`${typography.h2} text-white mb-6`}>
                Ready to Transform Your GCC Strategy?
              </h2>
              <Button 
                asChild
                size="lg"
                className="bg-white text-enablr-navy hover:bg-enablr-lime hover:text-enablr-navy hover:border hover:border-enablr-navy shadow-sm hover:shadow-md group transition-all duration-300 rounded-md"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* Blog Highlights Section */}
        <BlogHighlights />
        
        {/* Newsletter Section */}
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
