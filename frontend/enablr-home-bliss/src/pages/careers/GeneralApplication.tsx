import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import HeroSection from "@/components/ui/HeroSection";

const GeneralApplication = () => {
  const navigate = useNavigate();
  const [formSubmitting, setFormSubmitting] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    linkedIn: "",
    website: "",
    coverLetter: "",
    resume: null as File | null,
    position: "",
    experience: "",
  });
  
  // Form validation state
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: "",
    position: "",
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
    
    // Clear error when user selects a file
    if (errors.resume) {
      setErrors(prev => ({
        ...prev,
        resume: ""
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {
      firstName: formData.firstName ? "" : "First name is required",
      lastName: formData.lastName ? "" : "Last name is required",
      email: formData.email ? (
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : "Please enter a valid email"
      ) : "Email is required",
      phone: formData.phone ? (
        /^\+?[0-9\s\-()]{8,}$/.test(formData.phone) ? "" : "Please enter a valid phone number"
      ) : "Phone number is required",
      resume: formData.resume ? "" : "Resume is required",
      position: formData.position ? "" : "Please indicate your area of interest"
    };
    
    setErrors(newErrors);
    
    return !Object.values(newErrors).some(error => error);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // In a real app, you would send the form data to your backend
      console.log("Form submitted:", formData);
      
      // Navigate to success page
      navigate("/thank-you");
    }, 1500);
  };
  
  return (
    <MainLayout showNewsletter={false} showBlogHighlights={false}>
      <Helmet>
        <title>General Application - Enablr Careers</title>
        <meta 
          name="description" 
          content="Submit a general application to join Enablr's team. We're always looking for talented individuals to help us build world-class global capability centers." 
        />
      </Helmet>
      
      <HeroSection
        title={<>Join Our Team</>}
        description="Submit your general application and tell us why you'd be a great fit for Enablr."
        descriptionClassName="text-white text-center mt-4 mb-8 max-w-2xl mx-auto"
        image="/Career/general-application.webp"
        customMobilePosition="top"
        customDesktopPosition="center 30%"
        enableKenBurns={true}
        centerContent={true}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link 
            to="/careers/current-openings" 
            className="inline-flex items-center text-enablr-navy hover:underline mb-6"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            View open positions
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className={cn(typography.h2, "text-enablr-navy mb-4")}>
              General Application
            </h1>
            <p className={cn(typography.body.lg, "text-gray-600")}>
              Don't see a specific role that matches your skills? Submit a general application and we'll keep your resume on file for future opportunities that match your profile.
            </p>
          </motion.div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className={cn(typography.h3, "text-enablr-navy mb-6")}>Personal Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="firstName" className="mb-2 block">
                    First Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={cn(errors.firstName && "border-red-500")}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="lastName" className="mb-2 block">
                    Last Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={cn(errors.lastName && "border-red-500")}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="email" className="mb-2 block">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={cn(errors.email && "border-red-500")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="phone" className="mb-2 block">
                    Phone <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={cn(errors.phone && "border-red-500")}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <Label htmlFor="location" className="mb-2 block">
                  Location
                </Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="City, Country"
                />
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className={cn(typography.h3, "text-enablr-navy mb-6")}>Professional Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="position" className="mb-2 block">
                    Area of Interest <span className="text-red-500">*</span>
                  </Label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className={cn(
                      "w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-enablr-navy/30 focus:border-enablr-navy/70 outline-none",
                      errors.position && "border-red-500"
                    )}
                  >
                    <option value="">Select an area of interest</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Design">Design</option>
                    <option value="Operations">Operations</option>
                    <option value="Consulting">Consulting</option>
                    <option value="HR">HR</option>
                    <option value="Sales">Sales & Marketing</option>
                    <option value="Finance">Finance</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.position && (
                    <p className="text-red-500 text-sm mt-1">{errors.position}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="experience" className="mb-2 block">
                    Years of Experience
                  </Label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-enablr-navy/30 focus:border-enablr-navy/70 outline-none"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-2">0-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <Label htmlFor="resume" className="mb-2 block">
                  Resume/CV <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className={cn(errors.resume && "border-red-500")}
                />
                <p className="text-sm text-gray-500 mt-1">
                  Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                </p>
                {errors.resume && (
                  <p className="text-red-500 text-sm mt-1">{errors.resume}</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="linkedIn" className="mb-2 block">
                    LinkedIn Profile
                  </Label>
                  <Input
                    id="linkedIn"
                    name="linkedIn"
                    value={formData.linkedIn}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
                
                <div>
                  <Label htmlFor="website" className="mb-2 block">
                    Portfolio/Website
                  </Label>
                  <Input
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="coverLetter" className="mb-2 block">
                  Tell Us About Yourself
                </Label>
                <Textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Tell us about your skills, experience, and why you'd like to join Enablr..."
                  className="resize-none"
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button 
                type="submit"
                disabled={formSubmitting}
                className="bg-enablr-navy text-white hover:bg-white hover:text-enablr-navy border border-transparent hover:border-enablr-navy transition-all duration-300 px-8 py-6 rounded-md"
              >
                {formSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting Application...
                  </span>
                ) : (
                  "Submit Application"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default GeneralApplication; 