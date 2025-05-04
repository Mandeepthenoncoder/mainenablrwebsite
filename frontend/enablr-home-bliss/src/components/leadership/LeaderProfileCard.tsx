import React from "react";
import type { Leader } from "@/data/leadershipData";
import { ArrowRight } from 'lucide-react';

interface LeaderProfileCardProps {
  leader: Leader;
  onKnowMore: (leader: Leader) => void;
}

const LeaderProfileCard: React.FC<LeaderProfileCardProps> = ({ leader, onKnowMore }) => {
  return (
    <div className="leadership-card group h-full flex flex-col shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="overflow-hidden rounded-t-[16px] aspect-square">
        <img
          src={leader.photoUrl}
          alt={leader.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold text-card-foreground mb-1">{leader.name}</h3>
        <p className="text-gray-500">{leader.title}</p>
      </div>
      <div className="card-icons">
        <button
          onClick={() => onKnowMore(leader)}
          className="arrow-icon"
          aria-label={`Know more about ${leader.name}`}
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default LeaderProfileCard; 