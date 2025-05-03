import React from "react";
import type { Leader } from "@/data/leadershipData";
import { Button } from "@/components/ui/button";

interface LeaderProfileCardProps {
  leader: Leader;
  onKnowMore: (leader: Leader) => void;
}

const LeaderProfileCard: React.FC<LeaderProfileCardProps> = ({ leader, onKnowMore }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={leader.photoUrl}
          alt={leader.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{leader.name}</h3>
        <p className="text-gray-600 mb-4">{leader.title}</p>
        <Button
          variant="outline"
          className="w-full group-hover:bg-enablr-navy group-hover:text-white transition-colors duration-300"
          onClick={() => onKnowMore(leader)}
        >
          Know More
        </Button>
      </div>
    </div>
  );
};

export default LeaderProfileCard; 