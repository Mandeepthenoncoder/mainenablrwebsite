import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CookiePreferencesModal } from './CookiePreferencesModal';
import { setCookieConsent, getCookieConsent } from '../../utils/cookieUtils';

export type CookieCategory = 'necessary' | 'analytics' | 'marketing' | 'functional';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  timestamp: number;
}

export const defaultCookiePreferences: CookiePreferences = {
  necessary: true, // Always required
  analytics: false,
  marketing: false,
  functional: false,
  timestamp: Date.now(),
};

export const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [showPreferencesModal, setShowPreferencesModal] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultCookiePreferences);

  useEffect(() => {
    // Check if user has already made a choice
    const savedPreferences = getCookieConsent();
    
    if (savedPreferences) {
      setPreferences(savedPreferences);
      setShowBanner(false);
    } else {
      // Show banner if no preferences saved
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      ...defaultCookiePreferences,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: Date.now(),
    };
    
    setPreferences(allAccepted);
    setCookieConsent(allAccepted);
    setShowBanner(false);
    
    // Trigger any analytics or marketing scripts here
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'cookieConsentAccepted' });
    }
  };

  const handleRejectAll = () => {
    const allRejected: CookiePreferences = {
      ...defaultCookiePreferences,
      timestamp: Date.now(),
    };
    
    setPreferences(allRejected);
    setCookieConsent(allRejected);
    setShowBanner(false);
  };

  const handleCustomize = () => {
    setShowPreferencesModal(true);
  };

  const handleSavePreferences = (newPreferences: CookiePreferences) => {
    setPreferences(newPreferences);
    setCookieConsent(newPreferences);
    setShowPreferencesModal(false);
    setShowBanner(false);
    
    // Handle enabling/disabling specific scripts based on preferences
    if (newPreferences.analytics && window.dataLayer) {
      window.dataLayer.push({ event: 'analyticsEnabled' });
    }
  };

  const closeModal = () => {
    setShowPreferencesModal(false);
  };

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-enablr-navy text-white p-4 md:p-6 shadow-lg"
          >
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1 pr-4">
                  <h2 className="text-lg font-bold mb-2">Cookie Consent</h2>
                  <p className="text-sm md:text-base mb-2">
                    We use cookies to enhance your experience on our website. By continuing to browse, you consent to our use of cookies and other tracking technologies.
                  </p>
                  <div className="text-xs text-enablr-light-coral">
                    <Link to="/cookies-policy" className="underline hover:text-enablr-coral">
                      Learn more about our cookie policy
                    </Link>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-2 md:items-center">
                  <button
                    onClick={handleRejectAll}
                    className="px-4 py-2 text-sm border border-white text-white hover:bg-white hover:text-enablr-navy transition-colors duration-300 rounded-md"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={handleCustomize}
                    className="px-4 py-2 text-sm bg-enablr-purple text-white hover:bg-opacity-90 transition-colors duration-300 rounded-md"
                  >
                    Customize
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-4 py-2 text-sm bg-white text-enablr-navy hover:bg-enablr-light-coral hover:text-enablr-navy transition-colors duration-300 rounded-md font-medium"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CookiePreferencesModal
        isOpen={showPreferencesModal}
        onClose={closeModal}
        preferences={preferences}
        onSave={handleSavePreferences}
      />
    </>
  );
};

// Add this to global.d.ts or a similar declaration file
declare global {
  interface Window {
    dataLayer?: any[];
  }
}

export default CookieConsent; 