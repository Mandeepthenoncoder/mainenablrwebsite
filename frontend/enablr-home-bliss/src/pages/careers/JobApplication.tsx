import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEO from "@/components/seo/SEO";

// Job data (copied from JobDetails)
const jobData = [
  {
    id: "senior-software-engineer",
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time",
    postedDate: "October 15, 2023",
    description: "We are seeking a talented Senior Software Engineer to join our engineering team."
  },
  {
    id: "ux-ui-designer",
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote, India",
    type: "Full-time",
    postedDate: "October 10, 2023",
    description: "We're looking for a talented UX/UI Designer to create amazing user experiences."
  },
  {
    id: "gcc-program-manager",
    title: "GCC Program Manager",
    department: "Operations",
    location: "Hyderabad, India",
    type: "Full-time",
    postedDate: "October 5, 2023",
    description: "We are looking for a GCC Program Manager to oversee the implementation and operations of Global Capability Centers."
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time",
    postedDate: "September 28, 2023",
    description: "We are seeking a skilled DevOps Engineer to help build and maintain our infrastructure and deployment systems."
  },
  {
    id: "business-analyst",
    title: "Business Analyst",
    department: "Consulting",
    location: "Remote, India",
    type: "Full-time",
    postedDate: "September 25, 2023",
    description: "We are looking for a Business Analyst to help bridge the gap between our business and technology teams."
  }
];

const JobApplication = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);
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
  });
  
  // Form validation state
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: "",
  });
  
  useEffect(() => {
    // Simulate API call
    const fetchJob = () => {
      setLoading(true);
      // Find the job by ID
      // @ts-ignore - Assuming jobData is imported from JobDetails.tsx
      const foundJob = jobData.find(j => j.id === id);
      
      // Simulate network delay
      setTimeout(() => {
        setJob(foundJob || null);
        setLoading(false);
      }, 500);
    };
    
    fetchJob();
  }, [id]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      resume: formData.resume ? "" : "Resume is required"
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
  
  if (loading) {
    return (
      <MainLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="animate-spin w-10 h-10 border-4 border-enablr-navy border-t-transparent rounded-full"></div>
        </div>
      </MainLayout>
    );
  }
  
  if (!job) {
    return (
      <MainLayout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <h2 className={cn(typography.h2, "text-enablr-navy mb-4")}>Job Not Found</h2>
          <p className={cn(typography.body.lg, "text-gray-600 mb-6")}>
            The job you're applying for doesn't exist or has been removed.
          </p>
          <Button 
            className="bg-enablr-navy text-white hover:bg-white hover:text-enablr-navy border border-transparent hover:border-enablr-navy transition-all duration-300"
            asChild
          >
            <Link to="/careers/current-openings">View All Jobs</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <>
      <SEO
        title={job ? `Apply for ${job.title} - Enablr Careers` : "Job Application | Apply for Careers at Enablr"}
        description={job ? `Submit your application for the ${job.title} position at Enablr. Join our team and contribute to building world-class global capability centers.` : "Apply for a job at Enablr. Submit your application for open positions in technology, HR, operations, and more. Join our mission to build world-class GCCs."}
        keywords="job application, apply for job, Enablr jobs, GCC careers, submit application, technology jobs, HR jobs, operations jobs"
        canonicalUrl="https://gccenablr.com/careers/job-application/"
        ogImage="https://gccenablr.com/careers/opengraph-image.png"
      />
      <MainLayout showNewsletter={false} showBlogHighlights={false}>
        <Helmet>
          <title>{`Apply for ${job.title} - Enablr Careers`}</title>
          <meta 
            name="description" 
            content={`Submit your application for the ${job.title} position at Enablr. Join our team and contribute to building world-class global capability centers.`} 
          />
        </Helmet>
        
        <div className="bg-blue-50/30 py-8">
          <div className="container mx-auto px-4">
            <Link 
              to={`/careers/job/${id}`} 
              className="inline-flex items-center text-enablr-navy hover:underline mb-6"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to job details
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className={cn(typography.h2, "text-enablr-navy mb-2")}>
                Apply for {job.title}
              </h1>
              <p className={cn(typography.body.lg, "text-gray-600 mb-6")}>
                Please fill out the form below to apply for this position.
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
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
                    Cover Letter or Additional Information
                  </Label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Tell us why you're interested in this role and why you'd be a great fit..."
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
    </>
  );
};

export default JobApplication; 