import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import WhyChooseUsCard from "./WhyChooseUsCard";
import { Globe, Server, Rocket } from "lucide-react";
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
  // Map of default icons based on title keywords
  const getIconForTitle = (title: string) => {
    const titleLower = title.toLowerCase();
    
    if (titleLower.includes("global") || titleLower.includes("market")) {
      return <Globe className="w-6 h-6" />;
    } else if (titleLower.includes("infrastructure") || titleLower.includes("support")) {
      return <Server className="w-6 h-6" />;
    } else {
      return <Rocket className="w-6 h-6" />;
    }
  };

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
        <span className="font-bold bg-gradient-to-r from-[#EC4630] to-[#19214F] bg-clip-text text-transparent">Why</span> Choose Us?
              </h2>
          <br />
          <TextStyled 
            variant="bodyLg" 
            color="text-gray-600"
            casing="sentenceCase"
          >
            Partner with us for end-to-end assistance in setting up and scaling 
            <ResponsiveBreak breakOn="md" /> 
            your capability center
          </TextStyled>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <WhyChooseUsCard
              key={index}
              image={reason.image}
              title={reason.title}
              description={reason.description}
              icon={getIconForTitle(reason.title)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionWhyChooseUs;
