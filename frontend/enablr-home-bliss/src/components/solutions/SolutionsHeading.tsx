import { motion } from "framer-motion";
import { typography } from "@/styles/typography";

const SolutionsHeading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-5 md:mb-10 mx-0"
    >
      <div className="mb-2 md:mb-4">
      <h2 className={typography.h2}>
        <span className="font-bold bg-gradient-to-r from-[#EC4630] to-[#19214F] bg-clip-text text-transparent">Solutions</span> for your GCC journey
      </h2>
      </div>
      <p className={`${typography.body.base} text-gray-600 max-w-full pr-0`}>
      Power your global capability center with technology-first thinking,
        <span className="hidden sm:inline"><br/></span><span className="sm:hidden">&nbsp;</span>stronger teams, and smarter operations.
      </p>
    </motion.div>
  );
  
};

export default SolutionsHeading;
