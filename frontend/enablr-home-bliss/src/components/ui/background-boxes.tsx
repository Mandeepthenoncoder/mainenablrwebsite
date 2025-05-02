"use client";
import { memo, useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Define a type for the box state
type BoxState = {
  active: boolean;
  color: string;
};

export const BoxesCore = ({ className }: { className?: string }) => {
  // More manageable grid size
  const rows = 15;
  const cols = 12;
  
  // Enablr color palette
  const colors = [
    "rgba(125, 211, 252, 0.5)", // sky-300
    "rgba(147, 197, 253, 0.5)", // blue-300
    "rgba(199, 210, 254, 0.5)", // indigo-200
    "rgba(196, 181, 253, 0.5)", // violet-300
    "rgba(216, 180, 254, 0.5)", // purple-300
    "rgba(249, 168, 212, 0.5)", // pink-300
  ];
  
  // Initialize box states
  const [boxesState, setBoxesState] = useState<BoxState[][]>(() => {
    return Array(rows)
      .fill(null)
      .map(() => 
        Array(cols)
          .fill(null)
          .map(() => ({ 
            active: false, 
            color: getRandomColor() 
          }))
      );
  });
  
  // Get a random color from our palette
  const getRandomColor = useCallback(() => {
    return colors[Math.floor(Math.random() * colors.length)];
  }, [colors]);
  
  // Activate a random box
  const activateRandomBox = useCallback(() => {
    const row = Math.floor(Math.random() * rows);
    const col = Math.floor(Math.random() * cols);
    
    setBoxesState(prev => {
      const newState = [...prev];
      // Create a new row to avoid mutation
      newState[row] = [...newState[row]];
      // Update the specific box
      newState[row][col] = {
        active: true,
        color: getRandomColor()
      };
      return newState;
    });
    
    // Deactivate after delay
    setTimeout(() => {
      setBoxesState(prev => {
        const newState = [...prev];
        // Create a new row to avoid mutation
        if (newState[row]) {
          newState[row] = [...newState[row]];
          // Update the specific box if it exists
          if (newState[row][col]) {
            newState[row][col] = {
              ...newState[row][col],
              active: false
            };
          }
        }
        return newState;
      });
    }, 2000);
  }, [rows, cols, getRandomColor]);
  
  // Run animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      activateRandomBox();
    }, 300);
    
    return () => clearInterval(interval);
  }, [activateRandomBox]);
  
  return (
    <div
      className={cn(
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0",
        className
      )}
      style={{
        perspective: "1000px",
        transform: "scale(1.2)"
      }}
    >
      <div 
        className="relative w-full h-full"
        style={{
          transform: "rotateX(45deg) rotateZ(45deg)",
          transformStyle: "preserve-3d"
        }}
      >
        {boxesState.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="flex">
            {row.map((box, colIndex) => {
              const showPlus = rowIndex % 4 === 0 && colIndex % 4 === 0;
              
              return (
                <div
                  key={`box-${rowIndex}-${colIndex}`}
                  className="h-12 w-16 border border-slate-700/20 relative"
                  style={{
                    backgroundColor: box.active ? box.color : 'transparent',
                    transition: 'background-color 0.5s ease'
                  }}
                >
                  {showPlus && (
                    <span className="absolute -top-2 -left-2 text-slate-400/20">+</span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Boxes = memo(BoxesCore); 