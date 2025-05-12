import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Briefcase, MapPin, Clock, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { cn } from "@/lib/utils";

// This would be fetched from your API in a real application
export const jobData = [
  {
    id: "senior-software-engineer",
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time",
    postedDate: "October 15, 2023",
    description: "We are seeking a talented Senior Software Engineer to join our engineering team. As a Senior Software Engineer, you will be responsible for designing, developing, and maintaining high-quality software solutions for our clients.",
    responsibilities: [
      "Design and develop high-quality software solutions",
      "Collaborate with cross-functional teams to define, design, and ship new features",
      "Identify and resolve performance and scalability issues",
      "Write clean, maintainable, and well-documented code",
      "Lead code reviews and mentor junior developers",
      "Contribute to technical architecture discussions"
    ],
    requirements: [
      "Bachelor's degree in Computer Science, Engineering, or a related field",
      "3-8 years of software development experience",
      "Strong proficiency in modern programming languages (JavaScript, TypeScript, Python, Java, etc.)",
      "Experience with web frameworks (React, Angular, Vue, etc.)",
      "Knowledge of database systems and cloud platforms",
      "Excellent problem-solving and communication skills"
    ],
    qualifications: [
      "Experience with microservices architecture",
      "Familiarity with DevOps practices and CI/CD pipelines",
      "Experience with cloud platforms (AWS, Azure, GCP)",
      "Open source contributions",
      "Knowledge of Agile methodologies"
    ]
  },
  {
    id: "ux-ui-designer",
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote, India",
    type: "Full-time",
    postedDate: "October 10, 2023",
    description: "We're looking for a talented UX/UI Designer to create amazing user experiences. As a UX/UI Designer, you will be responsible for the user interface design of our products and work closely with developers to implement your designs.",
    responsibilities: [
      "Create user-centered designs by understanding business requirements and user feedback",
      "Create user flows, wireframes, prototypes, and mockups",
      "Translate requirements into style guides, design systems, design patterns, and visually appealing user interfaces",
      "Collaborate with cross-functional teams throughout the design process",
      "Present and defend designs and key decisions to stakeholders",
      "Incorporate customer feedback and requirements into design"
    ],
    requirements: [
      "Bachelor's degree in Design, HCI, or a related field",
      "2-5 years of experience in UI/UX design",
      "Proficiency in design tools such as Figma, Sketch, Adobe XD",
      "Strong portfolio demonstrating your design process and problem-solving skills",
      "Experience designing for web and mobile platforms",
      "Excellent visual design skills with a strong understanding of typography, layout, and color theory"
    ],
    qualifications: [
      "Experience with design systems",
      "Knowledge of HTML, CSS, and JavaScript",
      "Experience conducting user research and usability testing",
      "Understanding of accessibility standards",
      "Experience working in an Agile environment"
    ]
  },
  {
    id: "gcc-program-manager",
    title: "GCC Program Manager",
    department: "Operations",
    location: "Hyderabad, India",
    type: "Full-time",
    postedDate: "October 5, 2023",
    description: "We are looking for a GCC Program Manager to oversee the implementation and operations of Global Capability Centers for our clients. You will be responsible for managing the entire lifecycle of GCC programs, from planning to execution.",
    responsibilities: [
      "Develop and implement GCC program strategies and roadmaps",
      "Manage program deliverables, timelines, and budgets",
      "Coordinate cross-functional teams to ensure program success",
      "Monitor program performance and provide regular status updates to stakeholders",
      "Identify and mitigate program risks and issues",
      "Build and maintain relationships with clients and key stakeholders"
    ],
    requirements: [
      "Bachelor's degree in Business, Engineering, or a related field",
      "5-10 years of experience in program/project management, preferably in GCC setup or operations",
      "Strong knowledge of program management methodologies and tools",
      "Experience managing cross-functional teams",
      "Excellent communication, leadership, and stakeholder management skills",
      "PMP, PRINCE2, or other program management certification is a plus"
    ],
    qualifications: [
      "Experience in IT or business process outsourcing",
      "Knowledge of GCC operations and best practices",
      "Experience working with global teams",
      "Understanding of change management principles",
      "Familiarity with business process improvement methodologies"
    ]
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time",
    postedDate: "September 28, 2023",
    description: "We are seeking a skilled DevOps Engineer to help build and maintain our infrastructure and deployment systems. You will work closely with our development teams to ensure smooth delivery of our software products.",
    responsibilities: [
      "Design, build, and maintain CI/CD pipelines for various applications",
      "Implement and manage cloud infrastructure using infrastructure as code",
      "Set up monitoring, logging, and alerting systems",
      "Troubleshoot and resolve infrastructure and deployment issues",
      "Collaborate with development teams to improve development processes",
      "Implement security best practices across the infrastructure"
    ],
    requirements: [
      "Bachelor's degree in Computer Science, Engineering, or a related field",
      "3-6 years of experience in DevOps, SRE, or a similar role",
      "Strong knowledge of cloud platforms (AWS, Azure, GCP)",
      "Experience with container technologies (Docker, Kubernetes)",
      "Proficiency in infrastructure as code tools (Terraform, CloudFormation)",
      "Scripting skills (Bash, Python, etc.)"
    ],
    qualifications: [
      "Experience with monitoring and observability tools",
      "Knowledge of database administration",
      "Experience with configuration management tools",
      "Familiarity with network security principles",
      "Cloud certifications (AWS, Azure, GCP)"
    ]
  },
  {
    id: "business-analyst",
    title: "Business Analyst",
    department: "Consulting",
    location: "Remote, India",
    type: "Full-time",
    postedDate: "September 25, 2023",
    description: "We are looking for a Business Analyst to help bridge the gap between our business and technology teams. You will be responsible for analyzing business needs, documenting requirements, and ensuring that solutions meet business objectives.",
    responsibilities: [
      "Gather and document business requirements through stakeholder interviews, workshops, and process analysis",
      "Create detailed functional specifications, user stories, and acceptance criteria",
      "Analyze current business processes and identify opportunities for improvement",
      "Facilitate communication between business stakeholders and technology teams",
      "Validate that delivered solutions meet business requirements",
      "Create and maintain project documentation"
    ],
    requirements: [
      "Bachelor's degree in Business, IT, or a related field",
      "2-4 years of experience as a Business Analyst",
      "Strong analytical and problem-solving skills",
      "Proficiency in requirements gathering and documentation techniques",
      "Experience with business process modeling tools",
      "Excellent communication and presentation skills"
    ],
    qualifications: [
      "IIBA certification (ECBA, CCBA, CBAP)",
      "Experience with Agile methodologies",
      "Knowledge of data visualization tools",
      "Understanding of database concepts",
      "Experience in the GCC or shared services domain"
    ]
  }
];

const JobDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call
    const fetchJob = () => {
      setLoading(true);
      // Find the job by ID
      const foundJob = jobData.find(j => j.id === id);
      
      // Simulate network delay
      setTimeout(() => {
        setJob(foundJob || null);
        setLoading(false);
      }, 500);
    };
    
    fetchJob();
  }, [id]);
  
  // Function to handle apply button click
  const handleApplyClick = () => {
    if (!job) return;
    
    // This would normally navigate to an application form
    // For now, it just opens an email
    const emailSubject = `Application for ${job.title} position`;
    const emailAddress = "careers@gccenablr.com";
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}`;
    window.open(mailtoLink, "_blank");
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
            The job you're looking for doesn't exist or has been removed.
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
    <MainLayout showNewsletter={false} showBlogHighlights={false}>
      <Helmet>
        <title>{`${job.title} - Career at Enablr`}</title>
        <meta 
          name="description" 
          content={`Apply for the ${job.title} position at Enablr. ${job.description.slice(0, 120)}...`} 
        />
      </Helmet>
      
      <div className="bg-blue-50/30 py-8">
        <div className="container mx-auto px-4">
          <Link 
            to="/careers/current-openings" 
            className="inline-flex items-center text-enablr-navy hover:underline mb-6"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to all openings
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={cn(typography.h1, "text-enablr-navy mb-6")}>
              {job.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center text-gray-700">
                <Briefcase className="w-5 h-5 mr-2 text-enablr-navy" />
                <span>{job.department}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="w-5 h-5 mr-2 text-enablr-navy" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Clock className="w-5 h-5 mr-2 text-enablr-navy" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Calendar className="w-5 h-5 mr-2 text-enablr-navy" />
                <span>Posted: {job.postedDate}</span>
              </div>
            </div>
            
            <Button 
              className="bg-enablr-navy text-white hover:bg-white hover:text-enablr-navy border border-transparent hover:border-enablr-navy transition-all duration-300 px-8 py-6 rounded-md mb-8"
              onClick={handleApplyClick}
            >
              Apply for this Position
            </Button>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10"
          >
            <h2 className={cn(typography.h3, "text-enablr-navy mb-4")}>Job Overview</h2>
            <p className={cn(typography.body.lg, "text-gray-700")}>
              {job.description}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10"
          >
            <h2 className={cn(typography.h3, "text-enablr-navy mb-4")}>Key Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              {job.responsibilities.map((item: string, index: number) => (
                <li key={index} className={cn(typography.body.base, "text-gray-700")}>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-10"
          >
            <h2 className={cn(typography.h3, "text-enablr-navy mb-4")}>Requirements</h2>
            <ul className="list-disc pl-6 space-y-2">
              {job.requirements.map((item: string, index: number) => (
                <li key={index} className={cn(typography.body.base, "text-gray-700")}>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-10"
          >
            <h2 className={cn(typography.h3, "text-enablr-navy mb-4")}>Nice to Have</h2>
            <ul className="list-disc pl-6 space-y-2">
              {job.qualifications.map((item: string, index: number) => (
                <li key={index} className={cn(typography.body.base, "text-gray-700")}>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
          >
            <Button 
              className="bg-enablr-navy text-white hover:bg-white hover:text-enablr-navy border border-transparent hover:border-enablr-navy transition-all duration-300 px-8 py-6 rounded-md"
              onClick={handleApplyClick}
            >
              Apply for this Position <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default JobDetails; 