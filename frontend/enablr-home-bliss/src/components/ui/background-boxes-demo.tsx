"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

interface BackgroundBoxesDemoProps {
  className?: string;
  children?: React.ReactNode;
  customMask?: string;
  bgColor?: string;
}

export function BackgroundBoxesDemo({ 
  className, 
  children,
  customMask = "radial-gradient(transparent,white)",
  bgColor = "bg-slate-900"
}: BackgroundBoxesDemoProps) {
  return (
    <div className={cn("relative w-full h-full overflow-hidden", bgColor, className)}>
      {/* Background color with mask */}
      <div 
        className={cn("absolute inset-0 w-full h-full z-10", bgColor)}
        style={{ 
          maskImage: customMask, 
          WebkitMaskImage: customMask 
        }}
      />
      
      {/* Boxes container */}
      <Boxes />
      
      {/* Content container - conditionally rendered */}
      {children && (
        <div className="relative w-full h-full z-20">
          {children}
        </div>
      )}
    </div>
  );
} 