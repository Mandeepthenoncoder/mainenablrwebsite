import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { typography } from "@/styles/typography";
import { ArrowRight } from "lucide-react";

interface NewsletterProps {
  variant?: 'compact' | 'expanded';
}

const Newsletter = ({ variant = 'expanded' }: NewsletterProps) => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Email submitted:", email);
    setEmail("");
    // Show success message or toast notification
  };
  
  if (variant === 'compact') {
    return (
      <section className="py-14 md:py-16 bg-enablr-navy">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className={`${typography.h3} text-white mb-4`}>Stay Ahead With Our Weekly Insights</h2>
            <p className="text-gray-200 mb-6">
              Get the latest trends, insights and updates on Global Capability Centers delivered to your inbox.
            </p>
            
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-grow bg-white/90 placeholder:text-gray-500 focus-visible:ring-white"
                required
              />
              <Button 
                type="submit" 
                className="inline-flex items-center gap-2 bg-enablr-navy text-white px-6 py-2.5 rounded-md hover:bg-white hover:text-enablr-navy hover:border-enablr-navy hover:border transition-colors font-medium"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
            <p className="text-gray-300 text-xs mt-4">
              By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-enablr-navy rounded-xl overflow-hidden shadow-xl relative">
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIG9wYWNpdHk9IjAuMyIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQxMl8xMTApIj48cGF0aCBkPSJNMTYwMCAwSDBWMTIwMEgxNjAwVjBaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTIwMCAwSDBWMTIwMEgxMjAwVjBaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNODAwIDEyMDBMODAwIDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik00MDAgMTIwMEw0MDAgMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTAgODAwTDEyMDAgODAwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMCA0MDBMMTI2MCA0MDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwXzQxMl8xMTAiPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+')] bg-no-repeat bg-cover opacity-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-8 p-8 md:p-12 relative z-10">
              <h2 className={`${typography.h2} text-white mb-4`}>
                Stay Informed With GCC Insights
              </h2>
              <p className={`${typography.body.base} text-gray-100 mb-6 max-w-xl`}>
                Subscribe to our newsletter to receive the latest updates, expert analyses, and thought leadership content straight to your inbox.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <Input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-white text-enablr-navy hover:bg-enablr-navy hover:text-white hover:border hover:border-white shadow-sm hover:shadow-md group transition-all duration-300 rounded-md"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
              <p className="text-gray-300 text-xs mt-4">
                By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
              </p>
            </div>
            <div className="hidden md:block md:col-span-4 relative">
              <img 
                src="/images/blog/newsletter.jpg" 
                alt="Newsletter" 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
