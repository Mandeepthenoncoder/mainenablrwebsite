import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const LOGO_URL = "https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//Updated%20Logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<{[key: string]: boolean}>({});
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleSubMenu = (menu: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const isActive = (path: string) => location.pathname === path;

  // Animation styles
  const mobileMenuAnimation = isOpen 
    ? "animate-in slide-in-from-top-5 fade-in duration-300" 
    : "";
    
  const subMenuAnimation = "transition-all duration-300 ease-in-out";

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src={LOGO_URL}
              alt="Enablr Logo" 
              className="h-8 md:h-12"
              onError={(e) => {
                console.error("Image failed to load");
                e.currentTarget.src = '/enablr-logo.png';
              }}
            />
          </Link>
        </div>

        <div className="lg:hidden">
          <button 
            onClick={toggleMenu}
            className="p-2 text-enablr-navy rounded-md hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden lg:block relative z-50">
          <NavigationMenu>
            <NavigationMenuList className="gap-10">
              <NavigationMenuItem className="relative">
                <Link 
                  to="/solutions" 
                  className={cn(
                    "text-sm font-medium text-gray-700 hover:text-[#BF0404] transition-colors duration-300",
                    isActive('/solutions') && "text-[#BF0404]"
                  )}
                >
                  <NavigationMenuTrigger 
                    className={cn(
                      "bg-transparent px-0 font-medium hover:bg-transparent hover:text-[#BF0404] focus:text-[#BF0404]",
                      isActive('/solutions') && "text-[#BF0404]"
                    )}
                  >
                    Solutions
                  </NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent className="absolute left-0 bg-white p-2 rounded-lg shadow-lg min-w-[256px]">
                  <ul className="w-full p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/services/gcc-as-service" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BF0404]/10 hover:to-[#0D214F]/10 hover:text-[#BF0404] rounded-md whitespace-nowrap"
                        >
                          GCC as a Service
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/services/technology-enablement" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BF0404]/10 hover:to-[#0D214F]/10 hover:text-[#BF0404] rounded-md"
                        >
                          Technology Enablement
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/services/workspace-solutions" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BF0404]/10 hover:to-[#0D214F]/10 hover:text-[#BF0404] rounded-md"
                        >
                          Workspace Solutions
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/services/talent-hr-solutions" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BF0404]/10 hover:to-[#0D214F]/10 hover:text-[#BF0404] rounded-md"
                        >
                          Talent & HR Solutions
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/services/business-operations" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BF0404]/10 hover:to-[#0D214F]/10 hover:text-[#BF0404] rounded-md"
                        >
                          Business Operations
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/services/staff-augmentation" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BF0404]/10 hover:to-[#0D214F]/10 hover:text-[#BF0404] rounded-md"
                        >
                          Staff Augmentation
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="relative">
                <Link 
                  to="/engagement" 
                  className={cn(
                    "text-sm font-medium text-gray-700 hover:text-[#BF0404] transition-colors duration-300",
                    location.pathname.includes('/engagement') && "text-[#BF0404]"
                  )}
                >
                  <NavigationMenuTrigger 
                    className={cn(
                      "bg-transparent px-0 font-medium hover:bg-transparent hover:text-[#BF0404] focus:text-[#BF0404]",
                      location.pathname.includes('/engagement') && "text-[#BF0404]"
                    )}
                  >
                    Engagement Models
                  </NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent className="absolute left-0 bg-white p-2 rounded-lg shadow-lg min-w-[256px]">
                  <ul className="w-full p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/engagement/comprehensive-management" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BF0404]/10 hover:to-[#0D214F]/10 hover:text-[#BF0404] rounded-md"
                        >
                          Comprehensive Management
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/engagement/modular-services" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BF0404]/10 hover:to-[#0D214F]/10 hover:text-[#BF0404] rounded-md"
                        >
                          Modular Services
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/engagement/bot" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BF0404]/10 hover:to-[#0D214F]/10 hover:text-[#BF0404] rounded-md whitespace-nowrap"
                        >
                          Build-Operate-Transfer (B-O-T)
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/engagement/dedicated-team" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BF0404]/10 hover:to-[#0D214F]/10 hover:text-[#BF0404] rounded-md"
                        >
                          Dedicated Teams
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="relative">
                <Link 
                  to="/about" 
                  className={cn(
                    "text-sm font-medium text-gray-700 hover:text-[#BF0404] transition-colors duration-300",
                    location.pathname.includes('/about') && "text-[#BF0404]"
                  )}
                >
                  <NavigationMenuTrigger 
                    className={cn(
                      "bg-transparent px-0 font-medium hover:bg-transparent hover:text-[#BF0404] focus:text-[#BF0404]",
                      location.pathname.includes('/about') && "text-[#BF0404]"
                    )}
                  >
                    About Us
                  </NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent className="absolute left-0 bg-white p-2 rounded-lg shadow-lg min-w-[256px]">
                  <ul className="w-full p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/about" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BF0404]/10 hover:to-[#0D214F]/10 hover:text-[#BF0404] rounded-md"
                        >
                          Overview
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/about/leadership" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BF0404]/10 hover:to-[#0D214F]/10 hover:text-[#BF0404] rounded-md"
                        >
                          Leadership
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link 
                  to="/blog" 
                  className={cn(
                    "text-sm font-medium text-gray-700 hover:text-[#BF0404] transition-colors duration-300",
                    isActive('/blog') && "text-[#BF0404]"
                  )}
                >
                  Insights
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link 
                  to="/careers" 
                  className={cn(
                    "text-sm font-medium text-gray-700 hover:text-[#BF0404] transition-colors duration-300",
                    isActive('/careers') && "text-[#BF0404]"
                  )}
                >
                  Careers
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Button 
                  className="bg-enablr-navy text-white hover:bg-white hover:text-enablr-navy border border-transparent hover:border-enablr-navy transition-all duration-300"
                  asChild
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {isOpen && (
          <div className={`lg:hidden fixed top-[72px] left-0 right-0 h-[calc(100vh-72px)] bg-white shadow-md z-50 overflow-y-auto ${mobileMenuAnimation}`}>
            <nav className="flex flex-col px-6 py-2">
              {/* Solutions Menu */}
              <div className="py-3 border-b border-gray-100">
                <button 
                  onClick={() => toggleSubMenu('solutions')}
                  className={cn(
                    "w-full flex items-center justify-between text-base font-medium py-2 px-3 rounded-md",
                    (isActive('/solutions') || location.pathname.includes('/services')) 
                      ? "text-[#BF0404] bg-gradient-to-r from-red-50 to-blue-50/80" 
                      : "text-gray-800 hover:bg-gray-50"
                  )}
                >
                  <span>Solutions</span>
                  {expandedMenus['solutions'] ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </button>
                
                <div className={cn(
                  subMenuAnimation,
                  expandedMenus['solutions'] 
                    ? "max-h-[500px] opacity-100 mt-2" 
                    : "max-h-0 opacity-0 overflow-hidden"
                )}>
                  <ul className="pl-3 space-y-1 rounded-md bg-gradient-to-br from-red-50/80 to-blue-50/80 py-2">
                    <li>
                      <Link 
                        to="/services/gcc-as-service" 
                        className={cn(
                          "flex items-center text-sm py-2 px-4 rounded-md",
                          isActive('/services/gcc-as-service') 
                            ? "text-[#BF0404] bg-gradient-to-r from-red-100 to-white" 
                            : "text-gray-700 hover:bg-white/60"
                        )}
                      >
                        GCC as a Service
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/services/technology-enablement" 
                        className={cn(
                          "flex items-center text-sm py-2 px-4 rounded-md",
                          isActive('/services/technology-enablement') 
                            ? "text-[#BF0404] bg-gradient-to-r from-red-100 to-white" 
                            : "text-gray-700 hover:bg-white/60"
                        )}
                      >
                        Technology Enablement
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/services/workspace-solutions" 
                        className={cn(
                          "flex items-center text-sm py-2 px-4 rounded-md",
                          isActive('/services/workspace-solutions') 
                            ? "text-[#BF0404] bg-gradient-to-r from-red-100 to-white" 
                            : "text-gray-700 hover:bg-white/60"
                        )}
                      >
                        Workspace Solutions
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/services/talent-hr-solutions" 
                        className={cn(
                          "flex items-center text-sm py-2 px-4 rounded-md",
                          isActive('/services/talent-hr-solutions') 
                            ? "text-[#BF0404] bg-gradient-to-r from-red-100 to-white" 
                            : "text-gray-700 hover:bg-white/60"
                        )}
                      >
                        Talent & HR Solutions
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/services/business-operations" 
                        className={cn(
                          "flex items-center text-sm py-2 px-4 rounded-md",
                          isActive('/services/business-operations') 
                            ? "text-[#BF0404] bg-gradient-to-r from-red-100 to-white" 
                            : "text-gray-700 hover:bg-white/60"
                        )}
                      >
                        Business Operations
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/services/staff-augmentation" 
                        className={cn(
                          "flex items-center text-sm py-2 px-4 rounded-md",
                          isActive('/services/staff-augmentation') 
                            ? "text-[#BF0404] bg-gradient-to-r from-red-100 to-white" 
                            : "text-gray-700 hover:bg-white/60"
                        )}
                      >
                        Staff Augmentation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Engagement Models Menu */}
              <div className="py-3 border-b border-gray-100">
                <button 
                  onClick={() => toggleSubMenu('engagement')}
                  className={cn(
                    "w-full flex items-center justify-between text-base font-medium py-2 px-3 rounded-md",
                    location.pathname.includes('/engagement') 
                      ? "text-[#BF0404] bg-gradient-to-r from-red-50 to-blue-50/80" 
                      : "text-gray-800 hover:bg-gray-50"
                  )}
                >
                  <span>Engagement Models</span>
                  {expandedMenus['engagement'] ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </button>
                
                <div className={cn(
                  subMenuAnimation,
                  expandedMenus['engagement'] 
                    ? "max-h-[500px] opacity-100 mt-2" 
                    : "max-h-0 opacity-0 overflow-hidden"
                )}>
                  <ul className="pl-3 space-y-1 rounded-md bg-gradient-to-br from-red-50/80 to-blue-50/80 py-2">
                    <li>
                      <Link 
                        to="/engagement/comprehensive-management" 
                        className={cn(
                          "flex items-center text-sm py-2 px-4 rounded-md",
                          isActive('/engagement/comprehensive-management') 
                            ? "text-[#BF0404] bg-gradient-to-r from-red-100 to-white" 
                            : "text-gray-700 hover:bg-white/60"
                        )}
                      >
                        Comprehensive Management
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/engagement/modular-services" 
                        className={cn(
                          "flex items-center text-sm py-2 px-4 rounded-md",
                          isActive('/engagement/modular-services') 
                            ? "text-[#BF0404] bg-gradient-to-r from-red-100 to-white" 
                            : "text-gray-700 hover:bg-white/60"
                        )}
                      >
                        Modular Services
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/engagement/bot" 
                        className={cn(
                          "flex items-center text-sm py-2 px-4 rounded-md",
                          isActive('/engagement/bot') 
                            ? "text-[#BF0404] bg-gradient-to-r from-red-100 to-white" 
                            : "text-gray-700 hover:bg-white/60"
                        )}
                      >
                        Build-Operate-Transfer (B-O-T)
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/engagement/dedicated-team" 
                        className={cn(
                          "flex items-center text-sm py-2 px-4 rounded-md",
                          isActive('/engagement/dedicated-team') 
                            ? "text-[#BF0404] bg-gradient-to-r from-red-100 to-white" 
                            : "text-gray-700 hover:bg-white/60"
                        )}
                      >
                        Dedicated Teams
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* About Us Menu */}
              <div className="py-3 border-b border-gray-100">
                <button 
                  onClick={() => toggleSubMenu('about')}
                  className={cn(
                    "w-full flex items-center justify-between text-base font-medium py-2 px-3 rounded-md",
                    (isActive('/about') || location.pathname.includes('/about')) 
                      ? "text-[#BF0404] bg-gradient-to-r from-red-50 to-blue-50/80" 
                      : "text-gray-800 hover:bg-gray-50"
                  )}
                >
                  <span>About Us</span>
                  {expandedMenus['about'] ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </button>
                <div className={cn(
                  subMenuAnimation,
                  expandedMenus['about'] 
                    ? "max-h-[500px] opacity-100 mt-2" 
                    : "max-h-0 opacity-0 overflow-hidden"
                )}>
                  <ul className="pl-3 space-y-1 rounded-md bg-gradient-to-br from-red-50/80 to-blue-50/80 py-2">
                    <li>
                      <Link 
                        to="/about" 
                        className={cn(
                          "flex items-center text-sm py-2 px-4 rounded-md",
                          isActive('/about') 
                            ? "text-[#BF0404] bg-gradient-to-r from-red-100 to-white" 
                            : "text-gray-700 hover:bg-white/60"
                        )}
                      >
                        Overview
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/about/leadership" 
                        className={cn(
                          "flex items-center text-sm py-2 px-4 rounded-md",
                          isActive('/about/leadership') 
                            ? "text-[#BF0404] bg-gradient-to-r from-red-100 to-white" 
                            : "text-gray-700 hover:bg-white/60"
                        )}
                      >
                        Leadership
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Regular menu items */}
              <Link 
                to="/blog" 
                className={cn(
                  "flex items-center text-base font-medium py-3 px-3 border-b border-gray-100",
                  isActive('/blog') 
                    ? "text-[#BF0404] bg-gradient-to-r from-red-50/60 to-blue-50/60" 
                    : "text-gray-800 hover:text-[#BF0404] hover:bg-gradient-to-r hover:from-red-50/30 hover:to-blue-50/30"
                )}
              >
                Insights
              </Link>
              
              <Link 
                to="/careers" 
                className={cn(
                  "flex items-center text-base font-medium py-3 px-3 border-b border-gray-100",
                  isActive('/careers') 
                    ? "text-[#BF0404] bg-gradient-to-r from-red-50/60 to-blue-50/60" 
                    : "text-gray-800 hover:text-[#BF0404] hover:bg-gradient-to-r hover:from-red-50/30 hover:to-blue-50/30"
                )}
              >
                Careers
              </Link>
              
              <Link 
                to="/contact" 
                className={cn(
                  "flex items-center text-base font-medium py-3 px-3 border-b border-gray-100",
                  isActive('/contact') 
                    ? "text-[#BF0404] bg-gradient-to-r from-red-50/60 to-blue-50/60" 
                    : "text-gray-800 hover:text-[#BF0404] hover:bg-gradient-to-r hover:from-red-50/30 hover:to-blue-50/30"
                )}
              >
                Contact Us
              </Link>
              
              {/* CTA Button */}
              <div className="mt-6 px-3">
                <Button 
                  className="w-full py-6 bg-gradient-to-r from-enablr-navy to-[#19214F] text-white hover:from-white hover:to-white hover:text-enablr-navy border border-transparent hover:border-enablr-navy transition-all duration-300"
                  asChild
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
