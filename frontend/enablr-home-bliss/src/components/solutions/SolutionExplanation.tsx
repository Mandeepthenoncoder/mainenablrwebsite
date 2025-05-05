import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { TextStyled } from "@/components/ui/TextStyled";
import { ResponsiveBreak } from "@/components/ui/ResponsiveBreak";

interface SolutionExplanationProps {
  title: string;
  content: string;
  imagePath?: string; // Optional image path prop
}

const SolutionExplanation = ({ title, content, imagePath }: SolutionExplanationProps) => {
  // Split the title at a good breaking point for responsive design
  const titleParts = title.split(' With ');
  const hasTitleBreak = titleParts.length > 1;

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-enablr-coral/10 to-enablr-purple/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-enablr-purple/10 to-enablr-coral/10 rounded-full blur-3xl -z-10" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <div className="relative">
              <span className="absolute -left-6 top-0 w-1 h-12 bg-brand-gradient" />
              {hasTitleBreak ? (
                <h2 className="max-w-xl mb-8 text-enablr-navy leading-tight text-2xl md:text-3xl lg:text-4xl font-semibold">
                  {titleParts[0]} <ResponsiveBreak breakOn="md" />
                  With {titleParts[1]}
                </h2>
              ) : (
                <h2 className="max-w-xl mb-8 text-enablr-navy leading-tight text-2xl md:text-3xl lg:text-4xl font-semibold">
                  {title}
                </h2>
              )}
            </div>
            
            <div>
              {content.split('\n\n').map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base md:text-lg leading-relaxed text-gray-700 mb-6"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-full"
          >
            <div className="sticky top-24 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              {imagePath ? (
                <div className="w-full h-0 pt-[56.25%] relative">
                  <img 
                    src={imagePath} 
                    alt={title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-w-4 aspect-h-3 relative bg-brand-gradient">
                  <div className="w-full h-full p-8 flex items-center justify-center bg-white/10">
                    <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                      {[1, 2, 3, 4].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="aspect-square rounded-xl bg-white/20 shadow-sm flex items-center justify-center backdrop-blur-sm"
                        >
                          <div className="w-12 h-12 rounded-lg bg-white/30" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionExplanation;
