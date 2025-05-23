import { useRef, useState, useEffect } from "react";
import { typography } from "@/styles/typography";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";
import HubSpotNewsletterForm from "./newsletter/HubSpotNewsletterForm";

interface NewsletterProps {
  variant?: 'compact' | 'expanded';
}

const Newsletter = ({ variant = 'expanded' }: NewsletterProps) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmedEmail, setConfirmedEmail] = useState("");
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    if (showConfirmation && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, [showConfirmation]);

  const handleSuccessfulSubmit = (email: string) => {
    // This function will be passed to the HubSpotNewsletterForm component
    setConfirmedEmail(email);
    setShowConfirmation(true);
  };
  
  if (variant === 'compact') {
    return (
      <>
        {/* Confirmation Modal */}
        <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
          <DialogContent
            className="w-[90vw] max-w-[450px] rounded-2xl p-8 bg-[#FFF] shadow-[0_8px_32px_rgba(0,0,0,0.10)] border-none flex flex-col items-center animate-fade-in-scale focus:outline-none"
            aria-modal="true"
            aria-labelledby="newsletter-confirm-title"
            aria-describedby="newsletter-confirm-desc"
          >
            <div className="flex flex-col items-center w-full">
              <div className="bg-[#FDE1D3] flex items-center justify-center rounded-full w-16 h-16 mb-6 animate-pulse-slow">
                <CheckCircle className="w-10 h-10 text-[#1A1F2C]" aria-hidden="true" />
              </div>
              <h2 id="newsletter-confirm-title" className="text-[24px] font-bold text-[#1A1F2C] mb-1 tracking-tight">Thank You!</h2>
              <div className="text-[18px] font-semibold text-[#1A1F2C] mb-2">You're Successfully Subscribed</div>
              <div id="newsletter-confirm-desc" className="text-[16px] text-[#64748b] leading-relaxed text-center mb-4 font-normal">
                Welcome to our newsletter. You'll receive the latest updates, news, and exclusive content directly to your inbox.
              </div>
              <div className="text-[14px] bg-[#F3F4F6] text-[#1A1F2C] px-4 py-2 rounded-lg font-medium mb-6 break-all border border-[#64748b]">
                {confirmedEmail}
              </div>
              <button
                ref={closeBtnRef}
                className="mt-2 bg-[#1A1F2C] text-white px-6 py-3 rounded-lg font-semibold text-base transition-colors duration-200 hover:bg-[#111827] focus:outline-none focus:ring-2 focus:ring-[#f9f9fb] focus:ring-offset-2 close-button shadow-sm"
                onClick={() => setShowConfirmation(false)}
                aria-label="Close confirmation dialog"
              >
                Got it, thanks!
              </button>
              <div className="mt-4 flex flex-col items-center w-full">
                <a href="#" className="text-[#EE6C4D] text-sm font-medium underline mb-2 hover:opacity-80 focus:underline focus:outline-none">Manage Preferences</a>
                <div className="flex gap-3 mt-2 justify-center">
                  <a href={`https://x.com/intent/tweet?text=I%20just%20subscribed%20to%20the%20Enablr%20newsletter!`} target="_blank" rel="noopener noreferrer" aria-label="Share on X">
                    <svg width="24" height="24" fill="currentColor" className="text-[#000000]" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://enablr.in`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
                    <svg width="24" height="24" fill="currentColor" className="text-[#0A66C2]" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        
        <section className="py-[20px] md:py-[40px] bg-enablr-navy">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className={`${typography.h3} text-white mb-4`}>Stay Ahead With Our Weekly Insights</h2>
              <p className="text-gray-200 mb-6">
                Get the latest trends, insights and updates on Global Capability Centers delivered to your inbox.
              </p>
              
              <div className="mt-8">
                <HubSpotNewsletterForm 
                  className="max-w-md mx-auto" 
                  onSuccessfulSubmit={handleSuccessfulSubmit}
                />
              </div>
              
              <p className="text-gray-300 text-xs mt-4">
                By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  return (
    <>
      {/* Confirmation Modal */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent
          className="w-[90vw] max-w-[450px] rounded-2xl p-8 bg-[#FFF] shadow-[0_8px_32px_rgba(0,0,0,0.10)] border-none flex flex-col items-center animate-fade-in-scale focus:outline-none"
          aria-modal="true"
          aria-labelledby="newsletter-confirm-title"
          aria-describedby="newsletter-confirm-desc"
        >
          <div className="flex flex-col items-center w-full">
            <div className="bg-[#FDE1D3] flex items-center justify-center rounded-full w-16 h-16 mb-6 animate-pulse-slow">
              <CheckCircle className="w-10 h-10 text-[#1A1F2C]" aria-hidden="true" />
            </div>
            <h2 id="newsletter-confirm-title" className="text-[24px] font-bold text-[#1A1F2C] mb-1 tracking-tight">Thank You!</h2>
            <div className="text-[18px] font-semibold text-[#1A1F2C] mb-2">You're Successfully Subscribed</div>
            <div id="newsletter-confirm-desc" className="text-[16px] text-[#64748b] leading-relaxed text-center mb-4 font-normal">
              Welcome to our newsletter. You'll receive the latest updates, news, and exclusive content directly to your inbox.
            </div>
            <div className="text-[14px] bg-[#F3F4F6] text-[#1A1F2C] px-4 py-2 rounded-lg font-medium mb-6 break-all border border-[#64748b]">
              {confirmedEmail}
            </div>
            <button
              ref={closeBtnRef}
              className="mt-2 bg-[#1A1F2C] text-white px-6 py-3 rounded-lg font-semibold text-base transition-colors duration-200 hover:bg-[#111827] focus:outline-none focus:ring-2 focus:ring-[#f9f9fb] focus:ring-offset-2 close-button shadow-sm"
              onClick={() => setShowConfirmation(false)}
              aria-label="Close confirmation dialog"
            >
              Got it, thanks!
            </button>
            <div className="mt-4 flex flex-col items-center w-full">
              <a href="#" className="text-[#EE6C4D] text-sm font-medium underline mb-2 hover:opacity-80 focus:underline focus:outline-none">Manage Preferences</a>
              <div className="flex gap-3 mt-2 justify-center">
                <a href={`https://x.com/intent/tweet?text=I%20just%20subscribed%20to%20the%20Enablr%20newsletter!`} target="_blank" rel="noopener noreferrer" aria-label="Share on X">
                  <svg width="24" height="24" fill="currentColor" className="text-[#000000]" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://enablr.in`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
                  <svg width="24" height="24" fill="currentColor" className="text-[#0A66C2]" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-enablr-navy rounded-xl overflow-hidden shadow-xl relative">
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-8 p-8 md:p-12 relative z-10">
                <h2 className={`${typography.h2} text-white mb-4`}>
                  Stay informed with GCC insights
                </h2>
                <p className={`${typography.body.base} text-gray-100 mb-6 max-w-xl`}>
                  Subscribe to our newsletter to receive the latest updates, expert analyses, and thought leadership content straight to your inbox.
                </p>
                
                <div className="mt-8">
                  <HubSpotNewsletterForm 
                    className="max-w-xl" 
                    onSuccessfulSubmit={handleSuccessfulSubmit}
                  />
                </div>
                
                <p className="text-gray-300 text-xs mt-4">
                  By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
                </p>
              </div>
              
              <div className="md:col-span-4 relative">
                <img
                  src="/Global/newsletter.webp"
                  alt="Newsletter"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;