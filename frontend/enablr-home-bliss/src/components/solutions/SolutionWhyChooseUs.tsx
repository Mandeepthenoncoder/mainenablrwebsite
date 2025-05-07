import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import WhyChooseUsCard from "./WhyChooseUsCard";
import { TextStyled } from "@/components/ui/TextStyled";
import { ResponsiveBreak } from "@/components/ui/ResponsiveBreak";

interface Reason {
  image: string;
  title: string;
  description: string;
}

interface SolutionWhyChooseUsProps {
  reasons: Reason[];
}

const SolutionWhyChooseUs = ({ reasons }: SolutionWhyChooseUsProps) => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className={typography.h2}>
            <span className="font-bold bg-gradient-to-r from-[#EC4630] to-[#19214F] bg-clip-text text-transparent">Why</span> choose us?
          </h2>
          <br />
        
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <WhyChooseUsCard
              key={index}
              image={reason.image}
              title={reason.title}
              description={reason.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionWhyChooseUs;
