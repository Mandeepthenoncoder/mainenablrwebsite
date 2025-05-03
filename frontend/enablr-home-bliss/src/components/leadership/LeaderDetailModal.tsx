import React from "react";
import type { Leader } from "@/data/leadershipData";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface LeaderDetailModalProps {
  leader: Leader | null;
  onClose: () => void;
}

const LeaderDetailModal: React.FC<LeaderDetailModalProps> = ({ leader, onClose }) => {
  if (!leader) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>

        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img
                src={leader.photoUrl}
                alt={leader.name}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h2>
              <p className="text-lg text-gray-600 mb-6">{leader.title}</p>
              <p className="text-gray-700 mb-6">{leader.bio}</p>
              
              {leader.linkedInUrl && (
                <a
                  href={leader.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-enablr-navy hover:text-enablr-navy/80 transition-colors"
                >
                  View on LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderDetailModal; 