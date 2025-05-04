import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from "@/lib/utils";

const LOGO_URL = "https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//Updated%20Logo.svg";

// Custom dropdown component that doesn't rely on Radix UI
const NavDropdown = ({ 
  trigger, 
  children, 
  isActive 
}: { 
  trigger: React.ReactNode, 
  children: React.ReactNode,
  isActive: boolean
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 300); // Increased delay for better usability
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
    // Clear any pending close operation
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);
  
  return (
    <div 
      className="relative" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
    >
      <div 
        className="cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex items-center">
          {trigger}
          <ChevronDown 
            className={cn(
              "ml-1 h-3 w-3 transition-transform duration-300",
              isOpen && "rotate-180"
            )} 
          />
        </div>
      </div>
      
      <div 
        className={cn(
          "absolute left-0 top-full pt-1 w-64 z-50 transition-all duration-300 ease-in-out transform origin-top",
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={cn(
          "bg-white rounded-lg shadow-lg p-2 transition-all duration-300",
          isOpen ? "translate-y-0" : "-translate-y-2"
        )}>
          {children}
        </div>
      </div>
    </div>
  );
};

// Wrapper for dropdown menu items with staggered animation
const DropdownMenuItem = ({ 
  to, 
  children, 
  index = 0 
}: { 
  to: string, 
  children: React.ReactNode, 
  index?: number 
}) => {
  return (
    <li className={`transition-all duration-200 animate-fadeIn`} style={{ animationDelay: `${index * 50}ms` }}>
      <Link 
        to={to}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BF0404]/10 hover:to-[#0D214F]/10 hover:text-[#BF0404] rounded-md transition-all duration-200 transform hover:translate-x-1"
      >
        {children}
      </Link>
    </li>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<{[key: string]: boolean}>({});
  const location = useLocation();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const toggleSubMenu = (menu: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const isActive = (path: string) => location.pathname === path;
  const isActiveOrContains = (path: string) => location.pathname.includes(path);

  // Animation styles for mobile menu
  const mobileMenuAnimation = isMobileMenuOpen 
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
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10">
          {/* Solutions Dropdown */}
          <NavDropdown 
            trigger={
              <span className={cn(
                "text-sm font-medium transition-colors duration-300",
                isActive('/solutions') ? "text-[#BF0404]" : "text-gray-700 hover:text-[#BF0404]"
              )}>
                <Link to="/solutions">Solutions</Link>
              </span>
            }
            isActive={isActive('/solutions')}
          >
            <div className="py-1">
              <ul className="w-full space-y-1">
                <DropdownMenuItem to="/services/gcc-as-service" index={0}>
                  GCC as a Service
                </DropdownMenuItem>
                <DropdownMenuItem to="/services/technology-enablement" index={1}>
                  Technology Enablement
                </DropdownMenuItem>
                <DropdownMenuItem to="/services/workspace-solutions" index={2}>
                  Workspace Solutions
                </DropdownMenuItem>
                <DropdownMenuItem to="/services/talent-hr-solutions" index={3}>
                  Talent & HR Solutions
                </DropdownMenuItem>
                <DropdownMenuItem to="/services/business-operations" index={4}>
                  Business Operations
                </DropdownMenuItem>
                <DropdownMenuItem to="/services/staff-augmentation" index={5}>
                  Staff Augmentation
                </DropdownMenuItem>
              </ul>
            </div>
          </NavDropdown>

          {/* Engagement Models Dropdown */}
          <NavDropdown 
            trigger={
              <span className={cn(
                "text-sm font-medium transition-colors duration-300",
                isActiveOrContains('/engagement') ? "text-[#BF0404]" : "text-gray-700 hover:text-[#BF0404]"
              )}>
                <Link to="/engagement">Engagement Models</Link>
              </span>
            }
            isActive={isActiveOrContains('/engagement')}
          >
            <div className="py-1">
              <ul className="w-full space-y-1">
                <DropdownMenuItem to="/engagement/comprehensive-management" index={0}>
                  Comprehensive Management
                </DropdownMenuItem>
                <DropdownMenuItem to="/engagement/modular-services" index={1}>
                  Modular Services
                </DropdownMenuItem>
                <DropdownMenuItem to="/engagement/bot" index={2}>
                  Build-Operate-Transfer (B-O-T)
                </DropdownMenuItem>
                <DropdownMenuItem to="/engagement/dedicated-team" index={3}>
                  Dedicated Teams
                </DropdownMenuItem>
              </ul>
            </div>
          </NavDropdown>

          {/* About Us Dropdown */}
          <NavDropdown 
            trigger={
              <span className={cn(
                "text-sm font-medium transition-colors duration-300",
                isActiveOrContains('/about') ? "text-[#BF0404]" : "text-gray-700 hover:text-[#BF0404]"
              )}>
                About Us
              </span>
            }
            isActive={isActiveOrContains('/about')}
          >
            <div className="py-1">
              <ul className="w-full space-y-1">
                <DropdownMenuItem to="/about" index={0}>
                  Overview
                </DropdownMenuItem>
                <DropdownMenuItem to="/about/leadership" index={1}>
                  Leadership
                </DropdownMenuItem>
              </ul>
            </div>
          </NavDropdown>

          {/* Regular links */}
          <Link 
            to="/blog" 
            className={cn(
              "text-sm font-medium transition-colors duration-300",
              isActive('/blog') ? "text-[#BF0404]" : "text-gray-700 hover:text-[#BF0404]"
            )}
          >
            Insights
          </Link>
          
          <Link 
            to="/careers" 
            className={cn(
              "text-sm font-medium transition-colors duration-300",
              isActive('/careers') ? "text-[#BF0404]" : "text-gray-700 hover:text-[#BF0404]"
            )}
          >
            Careers
          </Link>
          
          <Button 
            className="bg-enablr-navy text-white hover:bg-white hover:text-enablr-navy border border-transparent hover:border-enablr-navy transition-all duration-300"
            asChild
          >
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
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
                  <Link to="/solutions" className="flex-grow text-left">
                    <span>Solutions</span>
                  </Link>
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
                  <Link to="/engagement" className="flex-grow text-left">
                    <span>Engagement Models</span>
                  </Link>
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
