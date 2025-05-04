import React from "react";
import LeaderProfileCard from "@/components/leadership/LeaderProfileCard";
import type { Leader } from "@/data/leadershipData";

interface LeadershipGridProps {
  leaders: Leader[];
  onKnowMore: (leader: Leader) => void;
}

const LeadershipGrid: React.FC<LeadershipGridProps> = ({ leaders, onKnowMore }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-16">
      {leaders.map((leader) => (
        <LeaderProfileCard
          key={leader.id}
          leader={leader}
          onKnowMore={onKnowMore}
        />
      ))}
    </div>
  );
};

export default LeadershipGrid; 