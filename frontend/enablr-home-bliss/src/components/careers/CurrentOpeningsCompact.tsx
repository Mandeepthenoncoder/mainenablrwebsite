import React, { useState } from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface JobListingProps {
  title: string;
  experience: string;
  location: string;
  type: string;
  index: number;
}

const JobListing = ({ title, experience, location, type, index }: JobListingProps) => {
  // Generate slug id from title
  const slugId = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 border-b border-gray-200 group hover:bg-blue-50/30 transition-colors duration-300"
    >
      <div className="flex-grow mb-4 md:mb-0">
        <h3 className={cn(typography.h4, "text-enablr-navy group-hover:text-enablr-navy/90")}>
          {title}
        </h3>
        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
          <span>{experience}</span>
          <span>{location}</span>
          <span>{type}</span>
        </div>
      </div>
      <Button 
        className="bg-white text-enablr-navy border border-enablr-navy hover:bg-enablr-navy hover:text-white transition-colors duration-300 px-4 py-2 rounded-md text-sm font-medium"
        asChild
      >
        <Link to={`/careers/job/${slugId}`}>
          Apply
        </Link>
      </Button>
    </motion.div>
  );
};

const jobOpenings = [
  {
    title: "Senior Software Engineer",
    experience: "3-8 years",
    location: "Bangalore, India",
    type: "Full-Time"
  },
  {
    title: "UX/UI Designer",
    experience: "2-5 years",
    location: "Remote, India",
    type: "Full-Time"
  },
  {
    title: "GCC Program Manager",
    experience: "5-10 years",
    location: "Hyderabad, India",
    type: "Full-Time"
  },
  {
    title: "DevOps Engineer",
    experience: "3-6 years",
    location: "Bangalore, India",
    type: "Full-Time"
  },
  {
    title: "Business Analyst",
    experience: "2-4 years",
    location: "Remote, India",
    type: "Full-Time"
  }
];

const CurrentOpeningsCompact = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredJobs = jobOpenings.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Function to handle "See All Jobs" email click
  const handleSeeAllJobsClick = () => {
    const emailAddress = "careers@gccenablr.com";
    const emailSubject = "General Job Inquiry";
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}`;
    window.open(mailtoLink, "_blank");
  };
  
  return (
    <section id="job-opportunities" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className={cn(typography.h2, "mb-4 bg-gradient-to-r from-[#EC4630] to-[#19214F] bg-clip-text text-transparent")}>
            Contribute to a Global Impact
          </h2>
          <p className={cn(typography.body.lg, "text-gray-600 mb-8")}>
            {filteredJobs.length}+ Job openings
          </p>
          
          <div className="relative max-w-md mx-auto mb-12">
            <input
              type="text"
              placeholder="Search by role or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-5 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-enablr-navy/30 focus:border-enablr-navy"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <JobListing
                key={index}
                title={job.title}
                experience={job.experience}
                location={job.location}
                type={job.type}
                index={index}
              />
            ))
          ) : (
            <div className="p-8 text-center">
              <p className="text-gray-600">No job openings match your search criteria.</p>
            </div>
          )}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mt-8 text-center"
        >
          <Button 
            className="bg-enablr-navy text-white hover:bg-white hover:text-enablr-navy border border-transparent hover:border-enablr-navy transition-all duration-300 px-6 py-2 rounded-md text-sm font-medium"
            asChild
          >
            <Link to="/careers/current-openings">See all jobs</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentOpeningsCompact; 