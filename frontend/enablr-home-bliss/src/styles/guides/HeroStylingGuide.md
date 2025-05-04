# Enablr Hero Section Styling Guide

## Overview

This guide provides design and implementation standards for hero sections across Enablr solution pages, ensuring consistency while allowing for solution-specific customization.

## Core Elements

### 1. Container Structure
- **Height**: 
  - Mobile: 40vh
  - Desktop: 80vh
- **Border Radius**: Rounded bottom corners (48px)
- **Overflow**: Hidden to maintain clean edges

### 2. Background Image
- **Positioning**: 
  - Consider horizontally flipping images when it improves composition
  - Desktop: Position to emphasize key visual elements (backgroundPosition: "center 40%")
  - Mobile: Adjust positioning to ensure focal points remain visible (backgroundPosition: "center 60%")
- **Sizing**:
  - Desktop: Cover (natural sizing)
  - Mobile: Consider increased zoom (180% auto) when needed to emphasize details
- **Animation Effects**:
  - Ken Burns effect: Subtle zoom animation for landing pages to add visual interest
  - Toggle with the `enableKenBurns` prop when appropriate for main landing pages

### 3. Overlay System
- **Base Overlay**: Light darkening overlay (bg-black/20) for better text readability
- **Gradient Overlay**: 
  - Direction: left-to-right (bg-gradient-to-r)
  - Colors: from primary color (90% opacity) to transparent
  - Width: Responsive - covers 40-60% of width (sm:w-[60%] md:w-[50%] lg:w-[40%])

### 4. Content Area
- **Alignment**: Left-aligned content with appropriate container padding
- **Width**: Maximum width constraint on text content (max-w-xl)
- **Spacing**: 
  - Responsive vertical spacing between elements
  - Smaller margins on mobile, larger on desktop

### 5. Typography
- **Headings**:
  - Font: Bold (font-bold)
  - Size: Responsive (text-3xl md:text-4xl lg:text-5xl xl:text-6xl)
  - Color: White (text-white)
  - Leading: Tight (leading-tight)
  - HTML Support: Can include HTML for line breaks and styling spans
  
- **Body Text**:
  - Size: Responsive (text-base md:text-lg)
  - Color: Slightly transparent white (text-white/90)
  - Width: Constrained for readability (max-w-lg)
  - Line Breaks: Strategic line breaks for key points
  - HTML Support: Can include HTML for line breaks

### 6. Call-to-Action
- **Button Style**: 
  - Background: White for visibility against dark backgrounds
  - Text: Brand color (text-enablr-navy)
  - Hover Effects: Color inversion with subtle shadow increase
  - Size: Large (size="lg")
  - Corners: Rounded (rounded-md)

## Responsive Considerations

### Desktop-Specific
- Larger text sizes
- Natural image scaling
- More vertical space (80vh)
- Gradient covering 40-50% of width

### Mobile-Specific
- Reduced height (40vh) 
- Increased image zoom (180%)
- Adjusted image position to maintain focal points
- More gradient coverage (60%)
- Reduced text sizes
- Tighter vertical spacing

## Implementation Guidelines

1. Create specific components for each solution's hero section
2. Use background position and zoom variables to fine-tune image presentation
3. Ensure proper text contrast against backgrounds
4. Test all breakpoints for proper responsive behavior
5. Consider motion effects for initial content reveal
6. Use the Ken Burns effect for main landing pages to enhance visual appeal

## Using the Reusable HeroSection Component

We've created a reusable `HeroSection` component that implements all the styling guidelines. This component should be used as the basis for all solution hero sections.

### Component Location
```
/src/components/ui/HeroSection.tsx
```

### Props Interface
```tsx
interface HeroSectionProps {
  title: string;                  // The main heading text (supports HTML)
  description: string;            // Description text (supports HTML for line breaks)
  image: string;                  // Path to background image
  ctaText: string;                // Call-to-action button text 
  ctaLink: string;                // Call-to-action button link
  flipImage?: boolean;            // Whether to flip the image horizontally
  primaryColor?: string;          // Brand color for gradient (defaults to #0D214F)
  customMobilePosition?: string;  // Custom mobile background position
  customDesktopPosition?: string; // Custom desktop background position
  mobileZoom?: string;            // Custom mobile zoom level
  enableKenBurns?: boolean;       // Enable subtle zoom animation effect (for landing pages)
}
```

### Basic Usage Example
```tsx
import HeroSection from "@/components/ui/HeroSection";

const MySolutionPage = () => {
  return (
    <HeroSection
      title="Solution Title"
      description="Main solution description<br />with strategic line breaks."
      image="/path/to/hero-image.jpg"
      ctaText="Get Started"
      ctaLink="/contact"
    />
  );
};
```

### Advanced Usage Example
```tsx
import HeroSection from "@/components/ui/HeroSection";

const MySolutionPage = () => {
  return (
    <HeroSection
      title="Custom Solution"
      description="Tailored description with<br />specific styling needs."
      image="/path/to/hero-image.jpg"
      ctaText="Learn More"
      ctaLink="/solutions/details"
      flipImage={true}
      primaryColor="#1A365D"
      customMobilePosition="center 70%"
      customDesktopPosition="center 30%"
      mobileZoom="200% auto"
      enableKenBurns={true}
    />
  );
};
```

### Creating Solution-Specific Hero Components

For solution pages, create wrapper components that use the base HeroSection:

```tsx
// /src/components/solutions/MySolutionHeroSection.tsx
import React from "react";
import HeroSection from "@/components/ui/HeroSection";

interface Slide {
  image: string;
  // other properties...
}

interface MySolutionHeroSectionProps {
  slide: Slide;
}

const MySolutionHeroSection = ({ slide }: MySolutionHeroSectionProps) => {
  return (
    <HeroSection
      title="My Solution"
      description="Solution-specific description<br />with unique selling points."
      image={slide.image}
      ctaText="Get Started"
      ctaLink="/contact"
      flipImage={true}
      primaryColor="#0D214F"
      enableKenBurns={true} // For main landing pages
    />
  );
};

export default MySolutionHeroSection;
```

## Code Example (Basic Implementation)

```tsx
<section className="relative h-[40vh] md:h-[80vh] rounded-b-[48px] overflow-hidden">
  {/* Ken Burns effect (optional) */}
  {enableKenBurns && (
    <style dangerouslySetInnerHTML={{
      __html: `
        @keyframes kenBurns {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .ken-burns-bg {
          animation: kenBurns 10s ease-in-out infinite;
        }
      `
    }} />
  )}

  {/* Background image with mobile optimization */}
  <div 
    className={`absolute inset-0 bg-cover ${enableKenBurns ? 'ken-burns-bg' : ''}`}
    style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundPosition: "center 60%",
      backgroundSize: "180% auto",
    }}
  />
  
  {/* Desktop-optimized background */}
  <div 
    className={`hidden md:block absolute inset-0 bg-cover ${enableKenBurns ? 'ken-burns-bg' : ''}`}
    style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundPosition: "center 40%",
      backgroundSize: "cover",
    }}
  />
  
  {/* Base overlay */}
  <div className="absolute inset-0 bg-black/20"></div>
  
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#PrimaryColor]/90 via-[#PrimaryColor]/60 to-transparent sm:w-[60%] md:w-[50%] lg:w-[40%]"></div>
  
  {/* Content container */}
  <div className="absolute inset-0 flex items-center">
    <div className="container mx-auto px-4 sm:px-6 md:px-8">
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-2 md:mb-4">
          Solution Title
        </h1>
        
        <p className="text-base md:text-lg text-white/90 mb-4 md:mb-8 max-w-lg">
          Solution description with<br />strategic line breaks.
        </p>
        
        <CTAButton 
          text="CTA Text" 
          link="/path" 
          variant="secondary"
          size="lg"
          className="bg-white text-enablr-navy hover:bg-enablr-navy hover:text-white hover:border hover:border-white shadow-sm hover:shadow-md transition-all duration-300 rounded-md"
        />
      </div>
    </div>
  </div>
</section>
``` 