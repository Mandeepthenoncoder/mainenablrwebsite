import { useState, useEffect } from "react";

interface HubSpotNewsletterFormProps {
  className?: string;
  onSuccessfulSubmit?: (email: string) => void;
}

const HubSpotNewsletterForm = ({ className, onSuccessfulSubmit }: HubSpotNewsletterFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formId, setFormId] = useState("newsletter-form");

  useEffect(() => {
    // Generate a unique form ID to prevent conflicts if multiple instances exist on the same page
    setFormId(`newsletter-form-${Math.random().toString(36).substring(2, 9)}`);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically make an API call to HubSpot
      // This is a placeholder for the actual HubSpot form submission
      await new Promise(resolve => setTimeout(resolve, 800)); // Simulate API call
      
      // Call the onSuccessfulSubmit callback if provided
      if (onSuccessfulSubmit) {
        onSuccessfulSubmit(email);
      }
      
      // Reset form
      setEmail("");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      id={formId}
      onSubmit={handleSubmit} 
      className={`flex flex-col sm:flex-row gap-3 ${className || ""}`}
    >
      <div className="flex-grow relative">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30"
          required
        />
      </div>
      
      <button 
        type="submit" 
        className="inline-flex items-center justify-center gap-2 bg-white text-enablr-navy hover:bg-enablr-navy hover:text-white hover:border hover:border-white px-6 py-3 rounded-md transition-colors duration-300 font-medium disabled:opacity-70 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Subscribing...
          </>
        ) : (
          "Subscribe"
        )}
      </button>
    </form>
  );
};

export default HubSpotNewsletterForm;