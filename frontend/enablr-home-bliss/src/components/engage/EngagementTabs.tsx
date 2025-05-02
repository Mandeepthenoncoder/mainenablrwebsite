import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";
import { typography, colors } from "@/styles/typography";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface EngagementModel {
  id: string;
  title: string;
  description: string;
  image: string;
}

const engagementModels: EngagementModel[] = [{
  id: "bot",
  title: "Build-Operate-Transfer\n(B-O-T)",
  description: "We Set Up and Operate Your GCC, From Day One. When You're Ready, We Ensure a Smooth Handover So You Take Full Control With Zero Disruption.",
  image: "/BOTengage with us section.png"
}, {
  id: "modular",
  title: "Modular Services",
  description: "Our Modular Model Lets You Tap Into Specific Services, Such as Hiring, Payroll, or Workspace Management, Exactly When and Where You Need Them.",
  image: "/modular services.png"
}, {
  id: "comprehensive",
  title: "Comprehensive\nManagement",
  description: "From Launch to Daily Operations, We Handle Everything; Compliance, Infrastructure, Staffing, and Beyond, So You Can Stay Focused on Growing Your Business Priorities.",
  image: "/comprehensive managemenrt.png"
}, {
  id: "dedicated",
  title: "Dedicated Team\nModels",
  description: "Build a Dedicated Team That Operates as an Extension of You, Fully Aligned With Your Culture, Mirroring Your Processes and Priorities.",
  image: "/Dedicated Team Models, Engage With Us, home.jpg"
}];

const EngagementModels = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("bot");
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const checkScrollPosition = () => {
    if (!scrollRef.current) return;
    const {
      scrollLeft,
      scrollWidth,
      clientWidth
    } = scrollRef.current;
    setShowLeftGradient(scrollLeft > 10);
    setShowRightGradient(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition(); // Initial check

      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, []);

  useEffect(() => {
    if (!scrollRef.current) return;
    const activeTabElement = scrollRef.current.querySelector(`[data-value="${activeTab}"]`);
    if (activeTabElement) {
      const scrollContainer = scrollRef.current;
      const tabRect = activeTabElement.getBoundingClientRect();
      const containerRect = scrollContainer.getBoundingClientRect();

      const scrollLeft = tabRect.left - containerRect.left - containerRect.width / 2 + tabRect.width / 2 + scrollContainer.scrollLeft;
      scrollContainer.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [activeTab]);

  return <Tabs defaultValue="bot" className="w-full" value={activeTab} onValueChange={handleTabChange}>
      <div className="sticky top-0 z-10 bg-white pt-2 pb-0">
        <div className="relative w-full mb-0 overflow-visible">
          {showLeftGradient && <div className="absolute left-0 top-0 bottom-0 h-full flex items-center pointer-events-none bg-gradient-to-r from-white via-white to-transparent w-12 z-10">
              <ChevronLeft className="ml-1 h-5 w-5 text-gray-400 animate-pulse" />
            </div>}
          
          <div ref={scrollRef} className={`w-full ${typography.tab.scrollArea}`} onScroll={checkScrollPosition} style={{
          touchAction: "pan-x"
        }}>
            <TabsList className="flex flex-nowrap justify-start bg-transparent mb-0 border-b w-full min-w-max">
              {engagementModels.map(model => <TabsTrigger key={model.id} value={model.id} data-value={model.id} className={`
                    ${typography.tab.base}
                    data-[state=active]:${typography.tab.active} 
                    data-[state=inactive]:${typography.tab.inactive} 
                    flex-shrink-0 py-4 mx-1 first:ml-0 last:mr-0
                    ${colors.transitions.default}
                    after:content-[''] after:absolute after:w-full after:scale-x-0 
                    after:h-0.5 after:bottom-0 after:left-0 after:bg-[#EE6C4D] 
                    after:origin-bottom-right after:transition-transform after:duration-300
                    hover:after:scale-x-100 hover:after:origin-bottom-left
                    touch-manipulation
                  `} role="tab" aria-selected={model.id === activeTab ? "true" : "false"}>
                  {model.title}
                </TabsTrigger>)}
            </TabsList>
          </div>
          
          {showRightGradient && <div className="absolute right-0 top-0 bottom-0 h-full flex items-center pointer-events-none bg-gradient-to-l from-white via-white to-transparent w-12 z-10">
              <ChevronRight className="ml-auto mr-1 h-5 w-5 text-gray-400 animate-pulse" />
            </div>}
        </div>
        
        <div className="relative h-1 w-full bg-transparent mb-6">
          <motion.div className="absolute h-1 bg-[#EE6C4D] rounded-full" initial={false} animate={{
          width: '24px',
          left: (() => {
            const tabElement = document.querySelector(`[data-value="${activeTab}"]`) as HTMLElement;
            if (!tabElement) return 0;
            const tabRect = tabElement.getBoundingClientRect();
            const containerRect = document.querySelector('.sticky')?.getBoundingClientRect() || {
              left: 0
            };
            return tabRect.left - containerRect.left + tabRect.width / 2 - 12;
          })()
        }} transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }} />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {engagementModels.map(model => <TabsContent key={model.id} value={model.id} className="focus-visible:outline-none focus-visible:ring-0 pt-2" role="tabpanel" aria-labelledby={`tab-${model.id}`}>
            {activeTab === model.id && <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.5
        }} className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
                
                <motion.div className="rounded-lg overflow-hidden shadow-lg order-first" initial={{
            opacity: 0,
            scale: 0.95
          }} animate={{
            opacity: 1,
            scale: 1
          }} exit={{
            opacity: 0
          }} transition={{
            duration: 0.5
          }}>
                  <img src={model.image} alt={model.title} className="w-full h-[250px] md:h-[400px] object-cover" loading="lazy" />
                </motion.div>

                <div className="space-y-4 md:space-y-6 text-center sm:text-left">
                  <motion.h3 initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.3,
              delay: 0.1
            }} className={typography.h3}>
                    {model.title}
                  </motion.h3>
                  <motion.p initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.3,
              delay: 0.2
            }} className="">
                    {model.description}
                  </motion.p>
                  <motion.div initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.3,
              delay: 0.3
            }} className="pt-2">
                    <Button className="bg-enablr-navy text-white hover:bg-white hover:text-enablr-navy border border-transparent hover:border-enablr-navy transition-all duration-300 
                                w-full sm:w-auto h-12 text-base">
                      Talk to Our Experts
                    </Button>
                  </motion.div>
                </div>
              </motion.div>}
          </TabsContent>)}
      </AnimatePresence>
    </Tabs>;
};

export default EngagementModels;
