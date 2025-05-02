import React from 'react';
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  bgVariant?: 'light' | 'navy' | 'gradient-light';
  withGrid?: boolean;
  withDecoration?: boolean;
  id?: string;
  padding?: 'none' | 'small' | 'medium' | 'large';
}

const BackgroundGrid = ({ variant }: { variant: 'light' | 'dark' }) => (
  <div className={`absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIG9wYWNpdHk9IjAuMyIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQxMl8xMTApIj48cGF0aCBkPSJNMTYwMCAwSDBWMTIwMEgxNjAwVjBaIiBzdHJva2U9IiR7dmFyaWFudCA9PT0gJ2xpZ2h0Jy ?ICdibGFjaycgOiAnd2hpdGUnfSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTEyMDAgMEgwVjEyMDBIMTIwMFYwWiIgc3Ryb2tlPSIke3ZhcmlhbnQgPT09ICdsaWdodCcgPyAnYmxhY2snIDogJ3doaXRlJ30iIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik04MDAgMTIwMEw4MDAgMCIgc3Ryb2tlPSIke3ZhcmlhbnQgPT09ICdsaWdodCcgPyAnYmxhY2snIDogJ3doaXRlJ30iIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik00MDAgMTIwMEw0MDAgMCIgc3Ryb2tlPSIke3ZhcmlhbnQgPT09ICdsaWdodCcgPyAnYmxhY2snIDogJ3doaXRlJ30iIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0wIDgwMEwxMjAwIDgwMCIgc3Ryb2tlPSIke3ZhcmlhbnQgPT09ICdsaWdodCcgPyAnYmxhY2snIDogJ3doaXRlJ30iIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0wIDQwMEwxMjYwIDQwMCIgc3Ryb2tlPSIke3ZhcmlhbnQgPT09ICdsaWdodCcgPyAnYmxhY2snIDogJ3doaXRlJ30iIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwXzQxMl8xMTAiPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+')] bg-no-repeat bg-cover opacity-[0.03]`} />
);

/**
 * A reusable section container with configurable background styles and patterns.
 * 
 * @param children - Section content
 * @param className - Additional CSS classes
 * @param bgVariant - Background style: 'light' (white), 'navy' (dark blue), or 'gradient-light' (light blue gradient)
 * @param withGrid - Whether to include the grid background pattern
 * @param withDecoration - Whether to include decorative gradient blobs
 * @param id - Optional ID for linking/anchors
 * @param padding - Section padding size: 'none', 'small', 'medium', or 'large'
 */
const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className = '',
  bgVariant = 'light',
  withGrid = true,
  withDecoration = true,
  id,
  padding = 'medium'
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

  // Padding sizes
  const paddingClasses = {
    'none': 'py-0',
    'small': 'py-8 sm:py-12',
    'medium': 'py-12 sm:py-16 md:py-24',
    'large': 'py-16 sm:py-20 md:py-32'
  }[padding];
  
  return (
    <section 
      id={id}
      className={cn(
        "relative overflow-hidden",
        bgColor,
        paddingClasses,
        className
      )}
    >
      {/* Grid background pattern if enabled */}
      {withGrid && <BackgroundGrid variant={gridVariant} />}
      
      {/* Decorative corner gradients if enabled */}
      {withDecoration && (
        <>
          <div 
            className={cn(
              "absolute top-0 left-0 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 rounded-full -ml-24 sm:-ml-32 md:-ml-32 -mt-24 sm:-mt-32 md:-mt-32 opacity-30 blur-3xl transition-all duration-500",
              isDarkBg 
                ? 'bg-gradient-to-r from-blue-800/40 to-indigo-800/40' 
                : 'bg-gradient-to-r from-blue-200 to-purple-200'
            )}
          />
          <div 
            className={cn(
              "absolute bottom-0 right-0 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 rounded-full -mr-24 sm:-mr-32 md:-mr-32 -mb-24 sm:-mb-32 md:-mb-32 opacity-30 blur-3xl transition-all duration-500",
              isDarkBg 
                ? 'bg-gradient-to-l from-indigo-800/40 to-blue-800/40' 
                : 'bg-gradient-to-l from-purple-200 to-blue-200'
            )}
          />
        </>
      )}
      
      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer; 