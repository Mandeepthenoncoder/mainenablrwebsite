import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { typography } from '@/styles/typography';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
  variant?: 'light' | 'dark';
}

/**
 * Reusable card component for displaying features with an icon, title, and description.
 * Includes hover effects and animations.
 * 
 * @param icon - Lucide icon component to display
 * @param title - Card title
 * @param description - Card description/content
 * @param index - Optional index for staggered animations
 * @param variant - 'light' (dark text on light bg) or 'dark' (light text on dark/transparent bg)
 */
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  index = 0,
  variant = 'light'
}) => {
  const isDark = variant === 'dark';
  
  // Configure styles based on variant
  const styles = {
    card: isDark 
      ? "p-8 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/10 hover:shadow-xl transition-all duration-500 overflow-hidden"
      : "p-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden",
    title: isDark
      ? `${typography.h4} text-white group-hover:text-white transition-colors duration-300 mb-2`
      : `${typography.h4} text-enablr-navy group-hover:text-enablr-navy transition-colors duration-300 mb-2`,
    description: isDark
      ? `${typography.body.base} text-white/80 leading-relaxed font-light`
      : `${typography.body.base} text-gray-600 leading-relaxed font-light`,
    accentLine: isDark
      ? "absolute top-0 left-0 w-full h-1 bg-white opacity-70 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-red-400 transition-colors duration-300"
      : "absolute top-0 left-0 w-full h-1 bg-enablr-navy opacity-70 group-hover:bg-gradient-to-r group-hover:from-blue-800 group-hover:to-red-600 transition-colors duration-300",
    cornerGradient: isDark
      ? "absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-400/10 to-red-400/10 rounded-tl-[80px] -mr-16 -mb-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      : "absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-red-50 rounded-tl-[80px] -mr-16 -mb-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700",
    circleGradient: isDark
      ? "absolute top-0 left-0 -ml-12 -mt-12 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-red-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      : "absolute top-0 left-0 -ml-12 -mt-12 w-24 h-24 bg-gradient-to-br from-blue-100/30 to-red-100/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700",
    iconBg: isDark
      ? "absolute inset-0 bg-white/20 rounded-lg"
      : "absolute inset-0 bg-enablr-navy/10 rounded-lg",
    iconHoverBg: isDark
      ? "absolute inset-0 bg-gradient-to-r from-blue-400/30 to-red-400/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      : "absolute inset-0 bg-gradient-to-r from-blue-100 to-red-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300",
    iconColor: isDark
      ? "w-5 h-5 text-white"
      : "w-5 h-5 text-enablr-navy"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
      className="group relative"
    >
      <div className={styles.card}>
        {/* Decorative elements */}
        <div className={styles.accentLine}></div>
        <div className={styles.cornerGradient}></div>
        <div className={styles.circleGradient}></div>
        
        <div className="flex items-start gap-4">
          <div className="relative w-12 h-12 flex-shrink-0">
            <div className={styles.iconBg}></div>
            <div className={styles.iconHoverBg}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon className={styles.iconColor} />
            </div>
          </div>
          
          <div>
            <h3 className={styles.title}>
              {title}
            </h3>
            <p className={styles.description}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard; 