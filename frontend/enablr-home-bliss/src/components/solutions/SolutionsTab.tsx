import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "@/components/Image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { typography, colors } from "@/styles/typography";
import { ChevronDown } from "lucide-react";

interface Solution {
  id: string;
  title: string;
  description: string;
  image: string;
}

const solutions: Solution[] = [{
  id: "talent",
  title: "Talent and HR",
  description: "Streamline Hiring, Onboarding, and Workforce Management With Scalable HR Frameworks Tailored to Your Growth Needs.",
  image: "/talent edited image (1).png"
}, {
  id: "workspace",
  title: "Workspace",
  description: "Access Flexible, Fully Serviced Workspaces in Prime Locations, Including Tier 2 and Tier 3 Cities in India.",
  image: "/worksapce (1).png"
}, {
  id: "operations",
  title: "Business Operations",
  description: "Ensure Seamless Operations With End-to-End Support for Compliance, Payroll, Finance, and Administrative Management.",
  image: "/Bsuiness ops edited (1).png"
}, {
  id: "technology",
  title: "Technology Enablement",
  description: "Empower Your GCC With Cutting-Edge Technology, Across Technology and Domains to Drive Innovation and Efficiency.",
  image: "/technology enablement (1).png"
}];

const SolutionsTab = () => {
  const [activeTab, setActiveTab] = useState<string>("talent");
  const [isClient, setIsClient] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Function to get the object position for an image based on solution id
  const getImagePosition = (solutionId: string) => {
    // Move Talent and HR image down by 15%
    if (solutionId === "talent") {
      return "center 15%";
    }
    return "center"; // Default position for other images
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
      <div className="space-y-4">
        <Accordion type="single" defaultValue="talent" collapsible={false} onValueChange={value => setActiveTab(value)} className="w-full">
          {solutions.map(solution => <AccordionItem key={solution.id} value={solution.id} className="border-b border-gray-200 overflow-hidden">
              <AccordionTrigger className={`${typography.body.base} font-semibold py-4 text-${colors.text.primary} hover:text-${colors.primary.purple} focus:outline-none group transition-all duration-300`}>
                <span>{solution.title}</span>
              </AccordionTrigger>
              <AccordionContent className={`${colors.transitions.default}`}>
                <motion.div initial={{
              opacity: 0,
              y: -10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.3
            }} className={`${typography.body.sm} text-${colors.text.secondary} pb-6 pt-2 px-1 md:px-2`}>
                  {solution.description}
                </motion.div>
              </AccordionContent>
            </AccordionItem>)}
        </Accordion>
      <div className="mt-6">
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-enablr-navy text-white hover:bg-white hover:text-enablr-navy border border-transparent hover:border-enablr-navy transition-all duration-300 py-[12px] px-[27px] rounded-md"
          >
            Talk to Our Experts
          </motion.button>
        </div>
      </div>
    
      <div className="relative h-[400px] md:h-[450px] lg:h-[480px] rounded-lg overflow-hidden shadow-lg lg:-mt-16">
        <AnimatePresence mode="wait">
        {isClient && solutions.map(solution => solution.id === activeTab && 
          <motion.div 
            key={solution.id} 
            className="absolute inset-0 bg-white" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image 
              src={solution.image} 
              alt={solution.title} 
              className="w-full h-full object-cover" 
              style={{ objectPosition: getImagePosition(solution.id) }}
              loading="lazy" 
              aria-labelledby={`solution-${solution.id}`}
            />
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SolutionsTab;