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

const EngagementModel = () => {
  // Engagement model cards data
  const engagementCards = [
    {
      id: 1,
      title: "Comprehensive management",
      description:
        "We handle your GCC end-to-end—from infrastructure and compliance to talent, operations, and innovation.",
      image: "/comprehensive managemenrt.png",
      icon: <Building className="w-6 h-6 text-enablr-navy" />,
      link: "/engagement/comprehensive-management",
    },
    {
      id: 2,
      title: "Modular services",
      description:
        "Pick only what you need from our catalog of services that align perfectly with your GCC's evolving needs.",
      image: "/modular services.png",
      icon: <Blocks className="w-6 h-6 text-enablr-navy" />,
      link: "/engagement/modular-services",
    },
    {
      id: 3,
      title: "Build-operate-transfer (B-O-T)",
      description:
        "We set up, scale, and manage your GCC, and then transition ownership when you're ready.",
      image: "/BOT model image 1.png",
      icon: <BarChart3 className="w-6 h-6 text-enablr-navy" />,
      link: "/engagement/bot",
    },
    {
      id: 4,
      title: "Dedicated teams",
      description:
        "We take full ownership of recruitment, onboarding, and daily operations to build high-performing teams.",
      image: "/dedicated team.png",
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
      <Helmet>
        <title>Engagement Models | Build Your GCC, Your Way - Enablr</title>
        <meta
          name="description"
          content="Own your GCC journey with Enablr's flexible engagement models designed to fit your specific needs, from comprehensive management to dedicated teams."
        />
      </Helmet>

      <Navbar />
      <main>
        {/* Hero Section - Updated to use the standardized component */}
        <HeroSection 
          title="Build your GCC,<br /><span class='text-enablr-lime'>your way</span>"
          description="Own your GCC journey. We'll power the way."
          image="/Engagement model landing page.jpg"
          ctaText="Get Started"
          ctaLink="/contact"
          primaryColor="#0D214F" 
          customMobilePosition="center 60%"
          customDesktopPosition="center 40%"
          enableKenBurns={true}
          mobileZoom="180% auto"
        />

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
    At Enablr, we understand that building and managing a GCC is not just about scale; it's about strategy, speed, and staying ahead in a constantly evolving digital landscape. We believe every enterprise is different, and so is its GCC journey. That's why we offer a range of flexible engagement models designed to fit your specific needs.
 </p>
                 
<p className={`${typography.body.lg} text-gray-600 leading-relaxed font-medium tracking-tight text-xl md:text-2xl max-w-4xl mx-auto`}>
    Whether you're establishing a new GCC or enhancing an existing one, our approach is designed to support your transformation journey and align with your business priorities.
 </p>
 <p className={`${typography.body.lg} text-gray-600 leading-relaxed font-medium tracking-tight text-xl md:text-2xl max-w-4xl mx-auto`}>
    We offer a suite of flexible models, ranging from Comprehensive management, Modular services to Build-Operate-Transfer (B-O-T) and Dedicated teams.
 </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Models Grid Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50/70 to-gray-50 relative overflow-hidden">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIG9wYWNpdHk9IjAuMyIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQxMl8xMTApIj48cGF0aCBkPSJNMTYwMCAwSDBWMTIwMEgxNjAwVjBaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTIwMCAwSDBWMTIwMEgxMjAwVjBaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNODAwIDEyMDBMODAwIDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik00MDAgMTIwMEw0MDAgMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTAgODAwTDEyMDAgODAwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMCA0MDBMMTI2MCA0MDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwXzQxMl8xMTAiPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+')] bg-no-repeat bg-cover opacity-[0.03] z-0"></div>

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
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
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
                Ready To Take The Next Step Towards your GCC Goals?
              </h2>
              <Button
                asChild
                size="lg"
                className="bg-white text-enablr-navy hover:bg-white/90"
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

