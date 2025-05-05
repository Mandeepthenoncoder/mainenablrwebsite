import React from 'react';
import { cn } from "@/lib/utils";
import { typography } from "@/styles/typography";

type TextVariant = 
  | 'hero'
  | 'heroSubtitle'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'bodyLg'
  | 'body'
  | 'bodySm'
  | 'bodyXs'
  | 'cardTitle'
  | 'cardBody';

type TextCasing =
  | 'titleCase'  // Title Case For Important Headers
  | 'sentenceCase'  // Sentence case for regular text
  | 'uppercase'  // UPPERCASE FOR EMPHASIS
  | 'lowercase'  // lowercase for stylistic choices
  | 'preserve';  // Keep as-is

interface TextStyledProps {
  variant: TextVariant;
  as?: React.ElementType;
  casing?: TextCasing;
  children: React.ReactNode;
  className?: string;
  color?: string;
}

// Helper function to apply text casing
const applyTextCase = (text: React.ReactNode, casing: TextCasing): React.ReactNode => {
  if (typeof text !== 'string' || casing === 'preserve') return text;
  
  switch (casing) {
    case 'titleCase':
      return text.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      ).join(' ');
    case 'sentenceCase':
      // First, make the entire string lowercase 
      let processedText = text.toLowerCase();
      // Capitalize the very first character
      processedText = processedText.charAt(0).toUpperCase() + processedText.slice(1);
      // Capitalize letters after sentence terminators (. ! ?) and space
      processedText = processedText.replace(/([\.\?\!])\s+([a-z])/g, (match, p1, p2) => `${p1} ${p2.toUpperCase()}`);
      return processedText;
    case 'uppercase':
      return text.toUpperCase();
    case 'lowercase':
      return text.toLowerCase();
    default:
      return text;
  }
};

const getTypographyClass = (variant: TextVariant): string => {
  switch (variant) {
    case 'hero': return typography.hero;
    case 'heroSubtitle': return typography.heroSubtitle;
    case 'h1': return typography.h1;
    case 'h2': return typography.h2;
    case 'h3': return typography.h3;
    case 'h4': return typography.h4;
    case 'bodyLg': return typography.body.lg;
    case 'body': return typography.body.base;
    case 'bodySm': return typography.body.sm;
    case 'bodyXs': return typography.body.xs;
    case 'cardTitle': return typography.card.title;
    case 'cardBody': return typography.card.body;
    default: return '';
  }
};

export const TextStyled = ({
  variant,
  as: Component = getDefaultElement(variant),
  casing = getDefaultCasing(variant),
  children,
  className = '',
  color = getDefaultColor(variant),
}: TextStyledProps) => {
  // Add break-words and hyphens-auto for card titles and headings
  const extraWrapClasses =
    variant === 'h3' || variant === 'h4' || variant === 'cardTitle'
      ? 'break-words hyphens-auto'
      : '';
  return (
    <Component className={cn(getTypographyClass(variant), color, extraWrapClasses, className)}>
      {applyTextCase(children, casing)}
    </Component>
  );
};

// Helper functions to get defaults based on variant
function getDefaultElement(variant: TextVariant): React.ElementType {
  if (variant === 'hero' || variant === 'h1') return 'h1';
  if (variant === 'h2') return 'h2';
  if (variant === 'h3') return 'h3';
  if (variant === 'h4') return 'h4';
  if (variant === 'heroSubtitle') return 'p';
  if (variant.includes('body')) return 'p';
  if (variant.includes('card')) return 'div';
  return 'span';
}

function getDefaultCasing(variant: TextVariant): TextCasing {
  if (variant === 'hero' || variant === 'h1' || variant === 'h2' || variant === 'h3' || variant === 'h4' || variant === 'cardTitle') {
    return 'titleCase';
  }
  return 'sentenceCase';
}

function getDefaultColor(variant: TextVariant): string {
  if (variant === 'hero' || variant === 'heroSubtitle') {
    return 'text-white';
  }
  if (variant.includes('h')) {
    return 'text-enablr-navy';
  }
  return 'text-gray-600';
} 