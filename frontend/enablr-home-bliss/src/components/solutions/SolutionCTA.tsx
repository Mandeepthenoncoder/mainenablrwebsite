import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { TextStyled } from "@/components/ui/TextStyled";
import { ResponsiveBreak } from "@/components/ui/ResponsiveBreak";
import { CTAButton } from "@/components/ui/CTAButton";

interface SolutionCTAProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
}

const SolutionCTA = ({
  title,
  description,
  buttonText,
  buttonLink
}: SolutionCTAProps) => {
  // Split title at a good breaking point for responsive design
  const titleWords = title.split(' ');
  const midpoint = Math.ceil(titleWords.length / 2);
  const firstHalf = titleWords.slice(0, midpoint).join(' ');
  const secondHalf = titleWords.slice(midpoint).join(' ');

  return (
    <section className="py-20 bg-enablr-navy rounded-[48px] px-0 mx-6 md:mx-[72px]">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <TextStyled 
            variant="h2" 
            className="px-0 mx-0 my-0 py-[20px]"
            color="text-white"
            casing="titleCase"
          >
            {firstHalf} <ResponsiveBreak breakOn="md" />
            {secondHalf}
          </TextStyled>
          
          {description && (
            <TextStyled 
              variant="bodyLg" 
              className="mb-8"
              color="text-white/90"
              casing="sentenceCase"
            >
              {description}
            </TextStyled>
          )}
          
          <CTAButton 
            text={buttonText} 
            link={buttonLink} 
            variant="secondary"
            size="lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionCTA;