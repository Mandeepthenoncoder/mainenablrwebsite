import { ScrollArea } from "@/components/ui/scroll-area";
import InsightCard from "../blog/InsightCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { typography } from "@/styles/typography";

const Insights = () => {
  const { data: posts, isLoading, refetch } = useBlogPosts();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    // Force refetch when component mounts
    refetch();
  }, [refetch]);
  
  // Debug logs to help identify any issues
  console.log("Insights component rendering with posts:", posts);

  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-10 text-center"
        >
          <span className="text-enablr-navy text-sm font-medium mb-2 block">LATEST UPDATES</span>
          <h2 className={`${typography.h2} mb-3`}>
            Insights on <span className="text-enablr-navy">GCC Trends</span>
          </h2>
          <p className={`${typography.body.base} text-gray-600 max-w-3xl mx-auto`}>
            Explore the latest updates and industry perspectives in Global Capability Centers.
          </p>
        </motion.div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-[300px] w-full rounded-xl" />
              </div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {posts?.slice(0, 3).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <InsightCard post={post} index={index} />
              </motion.div>
            ))}
          </motion.div>
        )}
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mt-10 md:mt-12"
        >
          <Link to="/blog">
            <Button className="bg-enablr-navy text-white hover:bg-white hover:text-enablr-navy border border-transparent hover:border-enablr-navy transition-all duration-300">
              Explore More Insights
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Insights;
