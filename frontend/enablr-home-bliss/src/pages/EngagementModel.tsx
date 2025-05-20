import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Zap,
  HandshakeIcon,
  Package,
  Power,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  Users,
  BarChart3,
  Building,
  Blocks,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import BlogHighlights from "@/components/BlogHighlights";
import Newsletter from "@/components/Newsletter";
import HeroSection from "@/components/ui/HeroSection";
import SEO from "@/components/seo/SEO";

const EngagementModel = () => {
  // Engagement model cards data
  const engagementCards = [
    {
      id: 1,
      title: "Comprehensive Management",
      description:
        "We handle your GCC end-to-end; from infrastructure and compliance to talent, operations, and innovation, so you can stay focused on growth.",
      image: "/Landing page/engage_one.webp",
      icon: <Building className="w-6 h-6 text-enablr-navy" />,
      link: "/engagement/comprehensive-management",
    },
    {
      id: 2,
      title: "Modular Services",
      description:
        "Pick only what you need. From talent acquisition and infrastructure to operations and workspace optimization, our pay-as-you-grow model lets you plug in services that align perfectly with your GCC's evolving needs.",
      image: "/Landing page/engage_two.webp",
      icon: <Blocks className="w-6 h-6 text-enablr-navy" />,
      link: "/engagement/modular-services",
    },
    {
      id: 3,
      title: "Build-Operate-Transfer (B-O-T)",
      description:
        "We set up, scale, and manage your GCC, and then transition ownership when you are ready. You get a fully operational, high-performing center without the complexity.",
      image: "/Landing page/engage_three.webp",
      icon: <BarChart3 className="w-6 h-6 text-enablr-navy" />,
      link: "/engagement/bot",
    },
    {
      id: 4,
      title: "Dedicated Teams",
      description:
        "Bringing best-in-the-industry talent for you is our lookout. We take full ownership of recruitment, onboarding, and daily operations to build high-performing teams that operate as a seamless extension of your business and scale as per your goals.",
      image: "/Landing page/engage_four.webp",
      icon: <Users className="w-6 h-6 text-enablr-navy" />,
      link: "/engagement/dedicated-team",
    },
  ];

  // Benefits data
  const benefits = [
    {
      id: 1,
      title: "Flexibility",
      description:
        "Choose the engagement model that best aligns with your business goals and requirements.",
      icon: <Zap className="w-5 h-5 text-enablr-navy" />,
    },
    {
      id: 2,
      title: "Scalability",
      description:
        "Easily scale up or down based on your changing business needs and market conditions.",
      icon: <ArrowUpRight className="w-5 h-5 text-enablr-navy" />,
    },
    {
      id: 3,
      title: "Cost efficiency",
      description:
        "Optimize your investment with tailored engagement models that match your budget.",
      icon: <Package className="w-5 h-5 text-enablr-navy" />,
    },
    {
      id: 4,
      title: "Risk mitigation",
      description:
        "Reduce operational risks with proven engagement frameworks and expert guidance.",
      icon: <Power className="w-5 h-5 text-enablr-navy" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="GCC Engagement Models | Flexible Partnership Options | Enablr"
        description="Choose the right engagement model for your Global Capability Center. From comprehensive management to modular services, find the perfect partnership model for your GCC journey."
        keywords="GCC engagement models, capability center partnership, BOT model, modular services, GCC management, flexible engagement, GCC solutions"
        canonicalUrl="https://gccenablr.com/engagement-models/"
        ogImage="https://gccenablr.com/engagement-models-opengraph-image.png"
      />

      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* Hero Section - Updated to use the standardized component */}
        <HeroSection 
          title="Build your GCC, your way"
          description="Own your GCC journey. We'll power the way."
          image="/Engagement_Models/Landing/Engagement_hero.webp"
          primaryColor="#0D214F" 
          
          customDesktopPosition="center 40%"
          enableKenBurns={true}
        />


        {/* Intro Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-16 gap-y-12 ">
              <div className="md:col-span-12">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-6"
                >
     
     <p className={`${typography.body.base} text-gray-600 leading-relaxed font-medium -tracking-normal text-xl md:text-2xl max-w-5xl mx-auto`}>
    At Enablr, we understand GCC success depends on strategy, speed, and innovation-not just scale. Each enterprise has a unique GCC journey, which is why we offer flexible engagement models tailored to your specific needs.
 </p>
                 
<p className={`${typography.body.base} text-gray-600 leading-relaxed font-medium tracking-tight text-xl md:text-2xl max-w-5xl mx-auto`}>
    Whether starting new or enhancing your existing GCC, our approach aligns with your business priorities to drive transformation and accelerate growth.
 </p>
 <p className={`${typography.body.base} text-gray-600 leading-relaxed font-medium tracking-tight text-xl md:text-2xl max-w-5xl mx-auto`}>
    Our flexible models include Comprehensive Management, Modular Services, Build-Operate-Transfer (B-O-T), and Dedicated Teams-all designed to deliver maximum value for your GCC investment.
 </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Models Grid Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-blue-50/70 to-gray-50 relative overflow-hidden">

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              
<h2 className={typography.h2}>
        <span className="font-bold bg-gradient-to-r from-[#EC4630] to-[#19214F] bg-clip-text text-transparent">Our</span> Engagement Models
      </h2>
              <div className="w-20 h-1 bg-enablr-lime mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {engagementCards.map((model, index) => (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full border border-gray-100 hover:shadow-xl transition-all duration-500 flex flex-col group-hover:border-enablr-navy/30">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={model.image}
                        alt={model.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient overlay that changes on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-enablr-navy/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-purple-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-blue-50 rounded-md">
                          {model.icon}
                        </div>
                        <h3
                          className={`${typography.h3} text-enablr-navy group-hover:text-enablr-navy transition-colors duration-300 whitespace-pre-line`}
                        >
                          {model.title}
                        </h3>
                      </div>
                      <p
                        className={`${typography.body.base} text-gray-600 mb-6 flex-grow`}
                      >
                        {model.description}
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full justify-center border-enablr-navy text-enablr-navy hover:bg-enablr-navy hover:text-white mt-auto group"
                      >
                        <Link
                          to={model.link}
                          className="flex items-center gap-2"
                        >
                          Learn More
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
        <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                
<h2 className={typography.h2}>
        <span className="font-bold bg-gradient-to-r from-[#EC4630] to-[#19214F] bg-clip-text text-transparent">Benefits </span> of our engagement models
              </h2>
                <h2 className={`${typography.h2} text-enablr-navy mb-4`}>
                  
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
                        <h3
                          className={`${typography.h4} text-enablr-navy mb-2 group-hover:text-enablr-navy transition-colors duration-300 whitespace-pre-line`}
                        >
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
              <h2 className={`${typography.h2} text-white mb-6 whitespace-nowrap`}>
                Ready to take the next step towards your GCC goals?
              </h2>
              <Button
                asChild
                size="lg"
                className="bg-white text-enablr-navy hover:bg-enablr-navy hover:text-white hover:border-white font-medium transform hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Let's Connect
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

export default EngagementModel;

