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
              <div className="flex items-center gap-4 mb-2">
                <h2 className="text-2xl font-bold text-gray-900">{leader.name}</h2>
                {leader.linkedInUrl && (
                  <a
                    href={leader.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-enablr-navy hover:text-enablr-navy/80 transition-colors"
                    aria-label={`View ${leader.name}'s LinkedIn profile`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                    </svg>
                  </a>
                )}
              </div>
              <p className="text-lg text-gray-600 mb-6">{leader.title}</p>
              <p className="text-gray-700 mb-6">{leader.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderDetailModal; 