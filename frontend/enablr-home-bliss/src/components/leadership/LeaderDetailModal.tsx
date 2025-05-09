import React, { useEffect } from "react";
import type { Leader } from "@/data/leadershipData";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface LeaderDetailModalProps {
  leader: Leader | null;
  onClose: () => void;
}

const LeaderDetailModal: React.FC<LeaderDetailModalProps> = ({ leader, onClose }) => {
  if (!leader) return null;
  
  // Prevent body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  // Add a style tag for custom scrollbar styling
  React.useEffect(() => {
    // Create a style element
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      .hide-scrollbar {
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE and Edge */
      }
      .hide-scrollbar::-webkit-scrollbar {
        display: none; /* Chrome, Safari, and Opera */
      }
    `;
    document.head.appendChild(styleElement);
    // Clean up on unmount
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);
  
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 sm:p-4 z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg w-full max-w-xl sm:max-w-4xl max-h-[85vh] sm:max-h-[80vh] relative overflow-hidden">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10"
          onClick={onClose}
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
        
        <div className="p-4 sm:p-8 overflow-y-auto hide-scrollbar" style={{ maxHeight: 'calc(85vh - 1rem)' }}>
          <div className="flex flex-col md:flex-row gap-4 sm:gap-8">
            {/* Image section - smaller on mobile, fixed on desktop */}
            <div className="w-full md:w-1/4 flex-shrink-0 mb-4 md:mb-0">
              <div className="rounded-lg shadow-md overflow-hidden mx-auto max-w-[200px] md:max-w-none md:sticky md:top-8">
                <img
                  src={leader.photoUrl}
                  alt={leader.name}
                  className="object-cover w-full"
                />
              </div>
            </div>
            
            {/* Content section */}
            <div className="w-full md:w-3/4">
              <div className="flex items-center gap-2 sm:gap-4 mb-2">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{leader.name}</h2>
                {leader.linkedInUrl && (
                  <a
                    href={leader.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-enablr-navy hover:text-enablr-navy/80 transition-colors"
                    aria-label={`View ${leader.name}'s LinkedIn profile`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50" className="sm:w-[30px] sm:h-[30px]">
                      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                    </svg>
                  </a>
                )}
              </div>
              <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4">{leader.title}</p>
              <div className="text-sm sm:text-base text-gray-700 whitespace-normal">{leader.bio}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderDetailModal;