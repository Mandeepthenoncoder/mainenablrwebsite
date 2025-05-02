import React, { ReactNode } from 'react';
import BackgroundGrid from './BackgroundGrid';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  bgVariant?: 'light' | 'navy' | 'gradient-light';
  withGrid?: boolean;
  withDecoration?: boolean;
  id?: string;
}

/**
 * A reusable section container with configurable background styles and patterns.
 * 
 * @param children - Section content
 * @param className - Additional CSS classes
 * @param bgVariant - Background style: 'light' (white), 'navy' (dark blue), or 'gradient-light' (light blue gradient)
 * @param withGrid - Whether to include the grid background pattern
 * @param withDecoration - Whether to include decorative gradient blobs
 * @param id - Optional ID for linking/anchors
 */
const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className = '',
  bgVariant = 'light',
  withGrid = true,
  withDecoration = true,
  id
}) => {
  // Define background color based on variant
  const bgColor = {
    'light': 'bg-white',
    'navy': 'bg-enablr-navy',
    'gradient-light': 'bg-gradient-to-br from-blue-50/70 to-gray-50'
  }[bgVariant];
  
  // Grid variant based on background
  const gridVariant = bgVariant === 'navy' ? 'dark' : 'light';
  
  // Text color based on background for decorative elements contrast
  const isDarkBg = bgVariant === 'navy';
  
  return (
    <section 
      id={id}
      className={`py-24 relative overflow-hidden ${bgColor} ${className}`}
    >
      {/* Grid background pattern if enabled */}
      {withGrid && <BackgroundGrid variant={gridVariant} />}
      
      {/* Decorative corner gradients if enabled */}
      {withDecoration && (
        <>
          <div 
            className={`absolute top-0 left-0 w-72 h-72 rounded-full -ml-32 -mt-32 opacity-30 blur-3xl ${
              isDarkBg 
                ? 'bg-gradient-to-r from-blue-800/40 to-indigo-800/40' 
                : 'bg-gradient-to-r from-blue-200 to-purple-200'
            }`}
          />
          <div 
            className={`absolute bottom-0 right-0 w-72 h-72 rounded-full -mr-32 -mb-32 opacity-30 blur-3xl ${
              isDarkBg 
                ? 'bg-gradient-to-l from-indigo-800/40 to-blue-800/40' 
                : 'bg-gradient-to-l from-purple-200 to-blue-200'
            }`}
          />
        </>
      )}
      
      {/* Content container */}
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer; 