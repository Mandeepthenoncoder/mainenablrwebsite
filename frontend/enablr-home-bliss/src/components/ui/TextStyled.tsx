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

  // List of words to keep lowercase in title case (unless they are the first word)
  const lowercaseConnectors = ['a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'to', 'up', 'and', 'but', 'or', 'nor'];

  let processedText: string;

  switch (casing) {
    case 'titleCase':
      processedText = text.split(' ').map((word, index) => {
        const lowerWord = word.toLowerCase();
        // Always capitalize the first word.
        // Keep connectors lowercase if they are not the first word.
        if (index > 0 && lowercaseConnectors.includes(lowerWord)) {
          return lowerWord + ' ';
        }
        // Capitalize the first letter, lowercase the rest for other words.
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }).join(' ');
      break;
    case 'sentenceCase':
      // First, make the entire string lowercase
      processedText = text.toLowerCase();
      // Capitalize the very first character
      processedText = processedText.charAt(0).toUpperCase() + processedText.slice(1);
      // Capitalize letters after sentence terminators (. ! ?) and space
      processedText = processedText.replace(/([\.\?\!])\s+([a-z])/g, (match, p1, p2) => `${p1} ${p2.toUpperCase()}`);
      // processedText = processedText.replace(/(AS|A)/g, match => match.toLowerCase()); // Removed this line
      break;
    case 'uppercase':
      processedText = text.toUpperCase();
      break;
    case 'lowercase':
      processedText = text.toLowerCase();
      break;
    default:
      processedText = text; // Handle default case
      break;
  }

  // Preserve specific acronyms - apply this after main casing logic
  // Ensure this runs for both titleCase and sentenceCase if needed
  if (casing === 'titleCase' || casing === 'sentenceCase') {
    processedText = processedText.replace(/\bgcc\b/gi, 'GCC');
    processedText = processedText.replace(/\bhr\b/gi, 'HR');
    processedText = processedText.replace(/\bit\b/gi, 'IT');
  }

  return processedText;
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