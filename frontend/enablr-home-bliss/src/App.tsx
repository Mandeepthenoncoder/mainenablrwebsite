import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useState, useEffect, lazy, Suspense } from "react";
import PreloadResources from "./components/PreloadResources";
import CookiesPolicy from './pages/CookiesPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookieConsent from './components/cookies/CookieConsent';
import { initializeCookies } from './utils/cookieUtils';

// Eagerly load the Index page for faster initial render
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load all other pages
const Solutions = lazy(() => import("./pages/Solutions"));
const GCCService = lazy(() => import("./pages/GCCService"));
const TechnologyEnablement = lazy(() => import("./pages/TechnologyEnablement"));
const WorkspaceSolutions = lazy(() => import("./pages/WorkspaceSolutions"));
const TalentAndHR = lazy(() => import("./pages/talent/TalentAndHR"));
const BusinessOperations = lazy(() => import("./pages/solutions/BusinessOperations"));
const BOT = lazy(() => import("./pages/engagement/BOT"));
const ModularServices = lazy(() => import("./pages/engagement/ModularServices"));
const DedicatedTeam = lazy(() => import("./pages/engagement/DedicatedTeam"));
const Engagement = lazy(() => import("./pages/engagement/Engagement"));
const EngagementModel = lazy(() => import("./pages/EngagementModel"));
const ComprehensiveManagement = lazy(() => import("./pages/engagement/ComprehensiveManagement"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Leadership = lazy(() => import("./pages/Leadership"));
const Blog = lazy(() => import("./pages/blog/Blog"));
const BlogPost = lazy(() => import("./pages/blog/BlogPost"));
const BlogAdmin = lazy(() => import("./pages/blog/BlogAdmin"));
const Careers = lazy(() => import("./pages/careers/Careers"));
const LifeAtEnablr = lazy(() => import("./pages/careers/LifeAtEnablr"));
const CurrentOpenings = lazy(() => import("./pages/careers/CurrentOpenings"));
const JobDetails = lazy(() => import("./pages/careers/JobDetails"));
const JobApplication = lazy(() => import("./pages/careers/JobApplication"));
const GeneralApplication = lazy(() => import("./pages/careers/GeneralApplication"));
const ContactUs = lazy(() => import("./pages/contact/ContactUs"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const CookiePolicy = lazy(() => import("./pages/legal/CookiePolicy"));
const StaffAugmentation = lazy(() => import("./pages/solutions/StaffAugmentation"));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin w-10 h-10 border-4 border-enablr-navy border-t-transparent rounded-full"></div>
  </div>
);

// ScrollToTop component that will be used inside the Router
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App = () => {
  // Create QueryClient within the component to ensure React is fully loaded
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute
        retry: 1
      }
    }
  }));

  // Initialize cookies when the app loads
  useEffect(() => {
    initializeCookies();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <PreloadResources />
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                
                {/* Redirects for old service routes */}
                <Route path="/services/gcc-as-service" element={<Navigate to="/solutions/gcc-as-service" replace />} />
                <Route path="/services/technology-enablement" element={<Navigate to="/solutions/technology-enablement" replace />} />
                <Route path="/services/workspace-solutions" element={<Navigate to="/solutions/workspace-solutions" replace />} />
                <Route path="/services/talent-hr-solutions" element={<Navigate to="/solutions/talent-hr-solutions" replace />} />
                <Route path="/services/business-operations" element={<Navigate to="/solutions/business-operations" replace />} />
                <Route path="/services/staff-augmentation" element={<Navigate to="/solutions/staff-augmentation" replace />} />
                
                {/* Solutions Routes */}
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/solutions/gcc-as-service" element={<GCCService />} />
                <Route path="/solutions/technology-enablement" element={<TechnologyEnablement />} />
                <Route path="/solutions/workspace-solutions" element={<WorkspaceSolutions />} />
                <Route path="/solutions/talent-hr-solutions" element={<TalentAndHR />} />
                <Route path="/solutions/business-operations" element={<BusinessOperations />} />
                <Route path="/solutions/staff-augmentation" element={<StaffAugmentation />} />
                
                {/* Engagement Models Routes */}
                <Route path="/engagement" element={<EngagementModel />} />
                <Route path="/engagement/bot" element={<BOT />} />
                <Route path="/engagement/comprehensive-management" element={<ComprehensiveManagement />} />
                <Route path="/engagement/modular-services" element={<ModularServices />} />
                <Route path="/engagement/dedicated-team" element={<DedicatedTeam />} />
                
                {/* Main Routes */}
                <Route path="/about" element={<AboutUs />} />
                <Route path="/about/leadership" element={<Leadership />} />
                
                {/* Blog Routes */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/blog/admin" element={<BlogAdmin />} />
                
                {/* Careers Routes */}
                <Route path="/careers" element={<Careers />} />
                <Route path="/careers/life-at-enablr" element={<Careers />} />
                <Route path="/careers/current-openings" element={<CurrentOpenings />} />
                <Route path="/careers/job/:id" element={<JobDetails />} />
                <Route path="/careers/apply/:id" element={<JobApplication />} />
                <Route path="/careers/general-application" element={<GeneralApplication />} />
                
                {/* Contact Routes */}
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/thank-you" element={<ThankYou />} />
                
                {/* Legal Routes */}
                <Route path="/cookies-policy" element={<CookiesPolicy />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                
                {/* 404 Route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            {/* Cookie Consent Banner */}
            <CookieConsent />
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
