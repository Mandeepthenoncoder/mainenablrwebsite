import { CookiePreferences, defaultCookiePreferences } from '../components/cookies/CookieConsent';

const CONSENT_STORAGE_KEY = 'enablr_cookie_consent';
const CONSENT_EXPIRY_DAYS = 365; // 1 year

/**
 * Get cookie consent preferences from localStorage
 */
export const getCookieConsent = (): CookiePreferences | null => {
  try {
    const storedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!storedConsent) return null;
    
    const parsedConsent = JSON.parse(storedConsent) as CookiePreferences;
    
    // Check if consent has expired (1 year)
    const consentTimestamp = parsedConsent.timestamp || 0;
    const expiryTime = consentTimestamp + (CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000);
    
    if (Date.now() > expiryTime) {
      // Consent has expired, user needs to reconsent
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }
    
    return parsedConsent;
  } catch (error) {
    console.error('Error getting cookie consent:', error);
    return null;
  }
};

/**
 * Save cookie consent preferences to localStorage
 */
export const setCookieConsent = (preferences: CookiePreferences): void => {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(preferences));
  } catch (error) {
    console.error('Error saving cookie consent:', error);
  }
};

/**
 * Clear cookie consent (forces banner to show again)
 */
export const clearCookieConsent = (): void => {
  try {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing cookie consent:', error);
  }
};

/**
 * Check if a specific cookie category is allowed
 */
export const isCookieAllowed = (category: keyof CookiePreferences): boolean => {
  // Necessary cookies are always allowed
  if (category === 'necessary') return true;
  
  const preferences = getCookieConsent();
  
  // If no preferences set, default to conservative approach and deny
  if (!preferences) return false;
  
  return preferences[category] === true;
};

/**
 * Set a cookie with expiration
 */
export const setCookie = (name: string, value: string, days: number = 30): void => {
  try {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
  } catch (error) {
    console.error('Error setting cookie:', error);
  }
};

/**
 * Get a cookie by name
 */
export const getCookie = (name: string): string | null => {
  try {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(';');
    
    for (const cookie of cookies) {
      let c = cookie;
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  } catch (error) {
    console.error('Error getting cookie:', error);
    return null;
  }
};

/**
 * Delete a cookie
 */
export const deleteCookie = (name: string): void => {
  try {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Lax`;
  } catch (error) {
    console.error('Error deleting cookie:', error);
  }
};

/**
 * Helper function to enable cookies for a specific category
 * This can be called from different parts of the app
 */
export const enableCookiesForCategory = (category: keyof CookiePreferences): void => {
  if (!isCookieAllowed(category)) return;
  
  // Logic to enable specific cookie categories
  switch (category) {
    case 'analytics':
      // Initialize analytics (example)
      if (window.dataLayer) {
        window.dataLayer.push({ event: 'analytics_consent_given' });
      }
      break;
    case 'marketing':
      // Initialize marketing cookies (example)
      if (window.dataLayer) {
        window.dataLayer.push({ event: 'marketing_consent_given' });
      }
      break;
    case 'functional':
      // Initialize functional cookies
      break;
    default:
      break;
  }
};

/**
 * Initialize all cookies based on saved preferences
 * Call this on app initialization
 */
export const initializeCookies = (): void => {
  const preferences = getCookieConsent();
  
  if (!preferences) return;
  
  // Enable cookies for each allowed category
  Object.keys(preferences).forEach((category) => {
    if (category !== 'timestamp' && preferences[category as keyof CookiePreferences]) {
      enableCookiesForCategory(category as keyof CookiePreferences);
    }
  });
}; 