import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "@/components/Image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { typography, colors } from "@/styles/typography";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Solution {
  id: string;
  title: string;
  description: string;
  image: string;
}

const solutions: Solution[] = [{
  id: "talent",
  title: "Talent and HR", // "HR" kept capitalized as an acronym
  description: "Streamline hiring, onboarding, and workforce management with scalable HR frameworks tailored to your growth needs.", // "HR" kept capitalized
  image: "/Landing page/solution_one.webp"
}, {
  id: "workspace",
  title: "Workspace",
  description: "Access flexible, fully serviced workspaces in prime locations, including Tier 2 and Tier 3 cities in India.", // "Tier 2", "Tier 3", "India" kept capitalized
  image: "/Landing page/solution_two.webp"
}, {
  id: "operations",
  title: "Business operations",
  description: "Ensure seamless operations with end-to-end support for compliance, payroll, finance, and administrative management.",
  image: "/Landing page/solution_three.webp"
}, {
  id: "technology",
  title: "Technology enablement",
  description: "Empower your GCC with cutting-edge technology, across technology and domains to drive innovation and efficiency.", // "GCC" kept capitalized assuming it's an acronym
  image: "/Landing page/solution_four.webp"
}];
const handleContactClick = () => {
  window.location.href = "/contact";
};

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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-start">
      <div className="space-y-3 sm:space-y-4 mx-0">
        <Accordion type="single" defaultValue="talent" collapsible={false} onValueChange={value => setActiveTab(value)} className="w-full">
          {solutions.map(solution => <AccordionItem key={solution.id} value={solution.id} className="border-b border-gray-200 overflow-hidden">
              <AccordionTrigger className={`${typography.body.base} font-semibold py-3 sm:py-4 text-${colors.text.primary} hover:text-${colors.primary.purple} focus:outline-none group transition-all duration-300 pl-0`}>
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
            }} className={`${typography.body.sm} text-${colors.text.secondary} pb-4 sm:pb-6 pt-1 sm:pt-2 px-0`}>
                  {solution.description}
                </motion.div>
              </AccordionContent>
            </AccordionItem>)}
        </Accordion>
        <Button 
                      onClick={handleContactClick}
                      className="bg-enablr-navy text-white hover:bg-white hover:text-enablr-navy border border-transparent hover:border-enablr-navy transition-all duration-300 
                                w-full sm:w-auto h-10 sm:h-12 text-base">
                        Talk to Our Experts
                    </Button>
      </div>
    
      <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[480px] rounded-lg overflow-hidden shadow-lg mt-3 lg:-mt-16 -mx-1 sm:mx-0">
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