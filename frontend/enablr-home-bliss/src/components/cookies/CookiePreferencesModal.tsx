import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CookiePreferences } from './CookieConsent';
import { X, Shield, BarChart, Target, Settings } from 'lucide-react';

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
    required: true,
    icon: Shield
  },
  analytics: {
    title: 'Analytics Cookies',
    description: 'These cookies help us understand how visitors interact with our website by collecting anonymous information.',
    required: false,
    icon: BarChart
  },
  marketing: {
    title: 'Marketing Cookies',
    description: 'These cookies are used to track visitors across websites to display relevant advertisements.',
    required: false,
    icon: Target
  },
  functional: {
    title: 'Functional Cookies',
    description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences.',
    required: false,
    icon: Settings
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
    onClose();
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
        >
          <motion.div
            className="w-full max-w-2xl max-h-[90vh] overflow-hidden bg-white rounded-xl shadow-2xl"
            variants={modalVariants}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-r from-enablr-navy to-enablr-navy/90 text-white p-5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6" />
                <h2 className="text-xl font-bold">Cookie Preferences</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-white/20 transition-colors duration-200"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 text-enablr-navy overflow-y-auto max-h-[calc(90vh-70px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-enablr-navy">
                <p className="text-sm">
                  You can customize your cookie preferences here. Some cookies are essential for the website to function properly.
                </p>
              </div>
              
              <div className="space-y-4">
                {Object.entries(cookieCategoryInfo).map(([category, info]) => {
                  const Icon = info.icon;
                  const isChecked = localPreferences[category as keyof CookiePreferences] as boolean;
                  
                  return (
                    <motion.div 
                      key={category} 
                      className={`p-5 rounded-lg border transition-all duration-300 ${
                        isChecked 
                          ? 'border-enablr-navy/30 bg-gradient-to-br from-white to-blue-50/50 shadow-md' 
                          : 'border-gray-200 bg-white'
                      }`}
                      whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    >
                      <div className="flex items-start">
                        <div className={`p-2 rounded-full mr-3 ${
                          isChecked 
                            ? 'bg-enablr-navy text-white' 
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          <Icon size={18} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold text-lg">{info.title}</h3>
                            <div className="ml-3">
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => handleToggle(category as keyof CookiePreferences)}
                                  disabled={info.required}
                                  className="sr-only peer"
                                />
                                <div className={`
                                  w-12 h-6 
                                  ${info.required ? 'bg-enablr-navy opacity-90' : 'bg-gray-300'} 
                                  peer-checked:bg-enablr-navy
                                  rounded-full 
                                  peer-focus:ring-2
                                  peer-focus:ring-enablr-navy/30
                                  peer-checked:after:translate-x-6
                                  after:content-[''] 
                                  after:absolute 
                                  after:top-[2px] 
                                  after:left-[2px] 
                                  after:bg-white 
                                  after:rounded-full 
                                  after:h-5 
                                  after:w-5 
                                  after:transition-all
                                  after:shadow-md
                                `}></div>
                              </label>
                            </div>
                          </div>
                          <p className="text-gray-600 mt-1">{info.description}</p>
                          {info.required && (
                            <div className="mt-2 flex items-center text-xs text-enablr-navy font-medium">
                              <Shield size={12} className="mr-1 inline" />
                              Required for proper website functionality
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row sm:justify-between items-center gap-3 border-t pt-6">
                <div className="text-xs text-gray-500">
                  Your privacy is important to us. Settings will be saved for 6 months.
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-medium border border-enablr-navy text-enablr-navy hover:bg-enablr-navy hover:text-white transition-all duration-300 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-6 py-2 text-sm font-medium bg-enablr-navy text-white hover:bg-enablr-navy/90 transition-all duration-300 rounded-md shadow-lg hover:shadow-xl hover:shadow-enablr-navy/20"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookiePreferencesModal;