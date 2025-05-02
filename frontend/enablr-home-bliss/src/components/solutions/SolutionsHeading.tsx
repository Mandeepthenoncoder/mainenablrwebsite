import { motion } from "framer-motion";
import { typography } from "@/styles/typography";

const SolutionsHeading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 md:mb-12"
    >
      <div className="mb-3 md:mb-4">
        
        <h2 className={typography.h2}>
          <span className="font-bold bg-gradient-to-r from-[#EC4630] to-[#19214F] bg-clip-text text-transparent">Solutions</span>
        </h2>
      </div>
      <p className={`${typography.body.base} text-gray-600 max-w-2xl`}>
        Power your operations with technology-first thinking,
        <br/>Build stronger teams and smarter operations.
      </p>
    </motion.div>
  );
};

export default SolutionsHeading;
