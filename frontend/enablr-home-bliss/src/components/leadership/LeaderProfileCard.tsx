import React from "react";
import type { Leader } from "@/data/leadershipData";
import { ArrowRight } from 'lucide-react';

interface LeaderProfileCardProps {
  leader: Leader;
  onKnowMore: (leader: Leader) => void;
}

const LeaderProfileCard: React.FC<LeaderProfileCardProps> = ({ leader, onKnowMore }) => {
  return (
    <div className="leadership-card group h-full flex flex-col shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 bg-white hover:bg-[#F0F7FF]">
      <div className="overflow-hidden rounded-t-[16px] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#002868]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <img
          src={leader.photoUrl}
          alt={leader.name}
          className="w-full object-cover object-center aspect-[4/5] transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      <div className="pt-5 px-6 pb-14 flex-grow">
        <h3 className="text-[24px] font-medium text-black mb-1 font-['Inter'] leading-tight text-left">{leader.name}</h3>
        <p className="text-black text-[16px] font-['Inter'] font-normal mt-0">{leader.title}</p>
      </div>
      <div className="absolute bottom-5 right-6">
        <button
          onClick={() => onKnowMore(leader)}
          className="bg-white p-2 rounded-full shadow-sm flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:bg-gradient-to-r group-hover:from-[#F0F7FF] group-hover:to-white"
          aria-label={`Know more about ${leader.name}`}
        >
          <ArrowRight size={20} color="#FF4444" className="transform transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default LeaderProfileCard; 