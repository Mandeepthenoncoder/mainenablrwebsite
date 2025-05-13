import React, { useState } from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronRight, Briefcase, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface JobCardProps {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  index: number;
}

const JobCard = ({ id, title, department, location, type, index }: JobCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300 group"
    >
      <h3 className={cn(typography.h4, "text-enablr-navy mb-3 group-hover:text-enablr-navy/90")}>
        {title}
      </h3>
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 text-gray-600">
          <Briefcase className="w-4 h-4" />
          <span className="text-sm">{department}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{type}</span>
        </div>
      </div>
      <div className="flex gap-3">
        <Button 
          className="flex-1 justify-between bg-white text-enablr-navy border border-enablr-navy hover:bg-enablr-navy hover:text-white transition-colors duration-300"
          asChild
        >
          <Link to={`/careers/job/${id}`}>
            <span>View Details</span>
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
        <Button 
          className="flex-1 bg-enablr-navy text-white hover:bg-white hover:text-enablr-navy border border-transparent hover:border-enablr-navy transition-colors duration-300"
          asChild
        >
          <Link to={`/careers/apply/${id}`}>
            <span>Apply Now</span>
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

const jobOpenings = [
  {
    id: "senior-software-engineer",
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time"
  },
  {
    id: "ux-ui-designer",
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote, India",
    type: "Full-time"
  },
  {
    id: "gcc-program-manager",
    title: "GCC Program Manager",
    department: "Operations",
    location: "Hyderabad, India",
    type: "Full-time"
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time"
  },
  {
    id: "business-analyst",
    title: "Business Analyst",
    department: "Consulting",
    location: "Remote, India",
    type: "Full-time"
  },
  {
    id: "talent-acquisition-specialist",
    title: "Talent Acquisition Specialist",
    department: "HR",
    location: "Mumbai, India",
    type: "Full-time"
  }
];

const departments = ["All", "Engineering", "Design", "Operations", "Consulting", "HR"];
const locations = ["All Locations", "Bangalore", "Hyderabad", "Mumbai", "Remote"];

const CurrentOpenings = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  
  const filteredJobs = jobOpenings.filter(job => {
    const departmentMatch = selectedDepartment === "All" || job.department === selectedDepartment;
    const locationMatch = selectedLocation === "All Locations" || job.location.includes(selectedLocation);
    return departmentMatch && locationMatch;
  });
  
  // Email functionality for the "Submit your resume" button
  const handleSubmitResume = (e) => {
    e.preventDefault();
    window.location.href = 'mailto:careers@gccenablr.com?subject=Resume%20Submission';
  };
  
  return (
    <section className="py-24 relative overflow-hidden bg-blue-50/50">
      {/* Dark background with light grid */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIG9wYWNpdHk9IjAuMyIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQxMl8xMTApIj48cGF0aCBkPSJNMTYwMCAwSDBWMTIwMEgxNjAwVjBaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTIwMCAwSDBWMTIwMEgxMjAwVjBaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNODAwIDEyMDBMODAwIDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik00MDAgMTIwMEw0MDAgMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTAgODAwTDEyMDAgODAwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMCA0MDBMMTI2MCA0MDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwXzQxMl8xMTAiPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+')] bg-no-repeat bg-cover opacity-[0.03]"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          
          <h2 className={cn(typography.h2, "text-enablr-navy mb-4")}>
Current opportunities with Enablr
          </h2>
          <p className={cn(typography.body.base, "text-gray-600 text-nowrap")}>
          Ask questions, think differently, stay curious, and make a real impact. Work with us to build excellence in what you do each day.
          </p>
        </motion.div>
        
        <div className="mb-10 flex flex-col sm:flex-row gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
            <select 
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full sm:w-48 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-enablr-navy/30 focus:border-enablr-navy/70 outline-none"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <select 
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full sm:w-48 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-enablr-navy/30 focus:border-enablr-navy/70 outline-none"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </div>
        
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job, index) => (
              <JobCard
                key={index}
                id={job.id}
                title={job.title}
                department={job.department}
                location={job.location}
                type={job.type}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="py-10 text-center">
            <p className={cn(typography.body.lg, "text-gray-600")}>
              No openings found matching your criteria. Please try different filters or check back later.
            </p>
          </div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className={cn(typography.body.base, "text-gray-600 mb-4")}>Don't see a role that matches your skills?</p>
          <Button 
            className="bg-enablr-navy text-white hover:bg-white hover:text-enablr-navy border border-transparent hover:border-enablr-navy transition-all duration-300"
            onClick={handleSubmitResume}
          >
            Submit your resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentOpenings;