
import React from "react";
import { cn } from "@/lib/utils";
import { typography as typographyStyles } from "@/styles/typography";

interface TypographyProps {
  variant: keyof typeof typographyStyles | 
           "body.lg" | "body.base" | "body.sm" | "body.xs" | 
           "card.title" | "card.body";
  children: React.ReactNode;
  className?: string;
}

export const Typography = ({
  variant,
  children,
  className,
  ...props
}: TypographyProps & React.HTMLAttributes<HTMLElement>) => {
  // Handle nested variants like "body.lg"
  const getTypographyClass = (variant: string) => {
    if (variant.includes(".")) {
      const [parent, child] = variant.split(".");
      return (typographyStyles as any)[parent][child];
    }
    return (typographyStyles as any)[variant];
  };
  
  const typographyClass = getTypographyClass(variant);
  
  // Map variant to HTML element
  const getElement = () => {
    if (variant === "hero" || variant === "h1") return "h1";
    if (variant === "h2") return "h2";
    if (variant === "h3") return "h3";
    if (variant === "h4") return "h4";
    if (variant.startsWith("body") || variant.startsWith("card")) return "p";
    return "span";
  };
  
  const Element = getElement();
  
  return React.createElement(
    Element,
    {
      className: cn(typographyClass, className),
      ...props
    },
    children
  );
};
