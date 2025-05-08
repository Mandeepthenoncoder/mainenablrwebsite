import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
const EngageHeading = () => {
  return <div className="text-center mb-8 md:mb-12">
      <h2 className={typography.h2}>
        <span className="font-bold bg-gradient-to-r from-[#EC4630] to-[#19214F] bg-clip-text text-transparent">Eng</span>age with us
      </h2>
      <p className="my-[23px]">Our flexible Engagement Models adapt to your vision</p>
    </div>;
};
export default EngageHeading;