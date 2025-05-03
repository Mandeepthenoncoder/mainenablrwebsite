import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import MainLayout from "@/components/layouts/MainLayout";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { cn } from "@/lib/utils";
import { typography } from "@/styles/typography";
import { TextStyled } from "@/components/ui/TextStyled";
import { ResponsiveBreak } from "@/components/ui/ResponsiveBreak";

const ContactUs = () => {
  const officeLocations = [
    {
      country: "USA",
      address: "2601 Little Elm Pkwy, Suite# 701.\nLittle Elm, TX 75068, USA"
    },
    {
      country: "India",
      address: "Gowra Palladium, 3rd Floor, Unit : 303A,\nSilpa Gram Craft Village,\nHITEC City, Hyderabad, Telangana 500081"
    }
  ];
  
  return (
    <MainLayout showNewsletter={false} showBlogHighlights={false}>
      <Helmet>
        <title>Contact Us - Enablr</title>
        <meta 
          name="description" 
          content="Get in touch with Enablr for all your GCC needs and queries. We're here to answer your questions about Global Capability Centers and how we can help your business grow." 
        />
      </Helmet>
      
      {/* Hero Section - Simplified without pattern overlay */}
      <section className="relative min-h-[30vh] flex items-center rounded-b-3xl overflow-hidden z-10">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/lot 2/optimized/HeroImage-ContactUs.webp"
            alt="Contact Enablr"
            className="w-full h-full object-cover object-[85%_center] sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-enablr-navy/95 via-enablr-navy/90 to-enablr-navy/75" />
        </div>
        
        {/* Hero content */}
        <div className="container relative z-10 mx-auto px-4 py-6 sm:py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <TextStyled 
              variant="hero" 
              casing="titleCase" 
              className="mb-2 text-3xl md:text-4xl lg:text-5xl"
            >
              A One-Stop-Shop For All <ResponsiveBreak breakOn="md" />
              Your GCC Needs
            </TextStyled>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section id="contact-form" className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-blue-50/70 to-gray-50 -mt-2 sm:-mt-4">
        {/* Background with subtle grid pattern */}
        <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIG9wYWNpdHk9IjAuMyIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQxMl8xMTApIj48cGF0aCBkPSJNMTYwMCAwSDBWMTIwMEgxNjAwVjBaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTIwMCAwSDBWMTIwMEgxMjAwVjBaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNODAwIDEyMDBMODAwIDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik00MDAgMTIwMEw0MDAgMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTAgODAwTDEyMDAgODAwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMCA0MDBMMTI2MCA0MDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwXzQxMl8xMTAiPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+')] bg-no-repeat bg-cover opacity-[0.03]"></div>
        
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full -ml-32 -mt-32 opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-l from-purple-200 to-blue-200 rounded-full -mr-32 -mb-32 opacity-30 blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <TextStyled 
                variant="h2" 
                className="mb-5 text-relative-center tracking-normal font-sans"
                color="text-enablr-navy"
                casing="sentenceCase"
              >
                Got questions, ideas  or just  <ResponsiveBreak breakOn="lg" />
              curious about partnering together?
              </TextStyled>
            </motion.div>
          </motion.div>
          <br />
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left side - Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-3/5"
            >
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                {/* Top accent line with gradient */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-800 to-red-600"></div>
                
                <TextStyled 
                  variant="h3" 
                  className="mb-4"
                  color="text-enablr-navy"
                >
                  Let's Connect
                </TextStyled>
                <ContactForm />
              </div>
            </motion.div>
            
            {/* Right side - Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full lg:w-2/5"
            >
              <div className="space-y-8">
                <ContactInfo layout="vertical" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <TextStyled 
              variant="h3" 
              className="mb-6 text-center"
              color="text-enablr-navy"
            >
              Office Locations
            </TextStyled>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {officeLocations.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-lg"
                >
                  <div>
                    <TextStyled 
                      variant="h4" 
                      className="font-bold mb-3"
                      color="text-enablr-navy"
                      casing="preserve"
                    >
                      {office.country}
                    </TextStyled>
                    <TextStyled 
                      variant="body" 
                      className="whitespace-pre-line"
                      color="text-gray-700"
                      casing="preserve"
                    >
                      {office.address}
                    </TextStyled>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactUs;
