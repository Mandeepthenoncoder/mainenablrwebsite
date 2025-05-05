import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CookiePreferences } from './CookieConsent';
import { X } from 'lucide-react';

interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  preferences: CookiePreferences;
  onSave: (preferences: CookiePreferences) => void;
}

const cookieCategoryInfo = {
  necessary: {
    title: 'Strictly Necessary Cookies',
    description: 'These cookies are essential for the website to function properly and cannot be disabled.',
    required: true
  },
  analytics: {
    title: 'Analytics Cookies',
    description: 'These cookies help us understand how visitors interact with our website by collecting anonymous information.',
    required: false
  },
  marketing: {
    title: 'Marketing Cookies',
    description: 'These cookies are used to track visitors across websites to display relevant advertisements.',
    required: false
  },
  functional: {
    title: 'Functional Cookies',
    description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences.',
    required: false
  }
};

export const CookiePreferencesModal: React.FC<CookiePreferencesModalProps> = ({
  isOpen,
  onClose,
  preferences,
  onSave
}) => {
  const [localPreferences, setLocalPreferences] = useState<CookiePreferences>(preferences);

  const handleToggle = (category: keyof CookiePreferences) => {
    if (category === 'necessary' || category === 'timestamp') return; // Cannot toggle necessary cookies or timestamp
    
    setLocalPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleSave = () => {
    onSave({
      ...localPreferences,
      timestamp: Date.now()
    });
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
        >
          <motion.div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl"
            variants={modalVariants}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-enablr-navy text-white p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">Cookie Preferences</h2>
              <button 
                onClick={onClose}
                className="p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-5 text-enablr-navy">
              <p className="mb-6">
                You can customize your cookie preferences here. Some cookies are essential for the website to function properly.
              </p>
              
              <div className="space-y-6">
                {Object.entries(cookieCategoryInfo).map(([category, info]) => (
                  <div key={category} className="p-4 border border-gray-200 rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{info.title}</h3>
                      </div>
                      <div className="ml-3">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={localPreferences[category as keyof CookiePreferences] as boolean}
                            onChange={() => handleToggle(category as keyof CookiePreferences)}
                            disabled={info.required}
                            className="sr-only peer"
                          />
                          <div className={`
                            w-11 h-6 
                            ${info.required ? 'bg-enablr-purple opacity-80' : 'bg-gray-300'} 
                            peer-checked:bg-enablr-purple
                            rounded-full 
                            peer-checked:after:translate-x-5 
                            after:content-[''] 
                            after:absolute 
                            after:top-[2px] 
                            after:left-[2px] 
                            after:bg-white 
                            after:rounded-full 
                            after:h-5 
                            after:w-5 
                            after:transition-all
                          `}></div>
                        </label>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{info.description}</p>
                    {info.required && (
                      <div className="mt-2 text-xs text-enablr-purple">
                        This cookie category cannot be disabled.
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-end space-x-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-sm border border-enablr-navy text-enablr-navy hover:bg-enablr-navy hover:text-white transition-colors duration-300 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 text-sm bg-enablr-navy text-white hover:bg-opacity-90 transition-colors duration-300 rounded-md"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookiePreferencesModal; 