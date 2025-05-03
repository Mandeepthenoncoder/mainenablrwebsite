import React, { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  text: string;
  link: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * Reusable CTA button component with consistent styling and hover effects.
 * 
 * @param text - Button text/content
 * @param link - Link destination (path or URL)
 * @param variant - Button style: primary (navy), secondary (outlined), or outline (transparent border)
 * @param size - Button size: default, sm, or lg
 * @param icon - Optional icon to be displayed on the right side of the button
 * @param className - Additional CSS classes
 * @param onClick - Optional function to be executed when the button is clicked
 */
export const CTAButton = ({
  text,
  link,
  variant = 'primary',
  size = 'default',

  className = '',
  onClick,
}: CTAButtonProps) => {
  // Apply Title Case to button text
  const formattedText = text.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  const variantStyles = {
    primary: "bg-enablr-navy text-white hover:bg-white hover:text-enablr-navy hover:border hover:border-enablr-navy",
    secondary: "bg-white text-enablr-navy hover:bg-enablr-navy hover:text-white hover:border hover:border-white",
    outline: "bg-transparent border border-enablr-navy text-enablr-navy hover:bg-enablr-navy hover:text-white",
  };

  // If onClick is provided, render a button that executes the function
  if (onClick) {
    return (
      <Button 
        size={size}
        className={`shadow-sm hover:shadow-md group transition-all duration-300 rounded-md ${variantStyles[variant]} ${className}`}
        onClick={onClick}
      >
        <span className="flex items-center gap-2">
          {formattedText}
        
        </span>
      </Button>
    );
  }

  // Otherwise render a Link
  return (
    <Button 
      asChild
      size={size}
      className={`shadow-sm hover:shadow-md group transition-all duration-300 rounded-md ${variantStyles[variant]} ${className}`}
    >
      <Link to={link} className="flex items-center gap-2">
        {formattedText}
       
      </Link>
    </Button>
  );
};

export default CTAButton; 