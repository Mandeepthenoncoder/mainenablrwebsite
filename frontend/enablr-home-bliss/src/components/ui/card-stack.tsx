
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, ArrowDown } from "lucide-react";
import { Progress } from "@/components/ui/progress";

type Card = {
  id: number;
  title: string;
  description: string;
};

export const CardStack = ({
  items,
  offset = 14,
  scaleFactor = 0.05,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const [cards, setCards] = useState<Card[]>(items);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          rotateCards('down');
          return 0;
        }
        return prev + 1;
      });
    }, 80); // 8 seconds total duration (80ms * 100 steps)

    return () => clearInterval(timer);
  }, []);

  const rotateCards = (direction: 'up' | 'down') => {
    setProgress(0);
    setCards((prevCards) => {
      const newArray = [...prevCards];
      if (direction === 'down') {
        const lastCard = newArray.pop()!;
        newArray.unshift(lastCard);
      } else {
        const firstCard = newArray.shift()!;
        newArray.push(firstCard);
      }
      return newArray;
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-[450px] h-[280px] mx-auto">
        {cards.slice(0, 3).map((card, index) => (
          <motion.div
            key={card.id}
            className="absolute w-full h-full rounded-2xl p-7 bg-white border border-gray-100 shadow-sm flex flex-col"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              y: index * offset,
              scale: 1 - index * scaleFactor,
              opacity: index === 0 ? 1 : index === 1 ? 0.75 : 0.65,
              zIndex: cards.length - index,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.4
            }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-enablr-navy">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full max-w-[450px] mt-8 bg-gray-50 rounded-full p-4 mx-auto">
        <div className="flex justify-center gap-4 mb-4">
          <button 
            onClick={() => rotateCards('up')}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-enablr-navy hover:bg-white/80 transition-all duration-300 hover:scale-105"
            aria-label="Show previous card"
          >
            <ArrowUp className="h-5 w-5 text-enablr-navy" />
          </button>
          <button 
            onClick={() => rotateCards('down')}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-enablr-navy hover:bg-white/80 transition-all duration-300 hover:scale-105"
            aria-label="Show next card"
          >
            <ArrowDown className="h-5 w-5 text-enablr-navy" />
          </button>
        </div>
        
        <Progress value={progress} className="h-1.5 w-full bg-gray-200" />
      </div>
    </div>
  );
};
