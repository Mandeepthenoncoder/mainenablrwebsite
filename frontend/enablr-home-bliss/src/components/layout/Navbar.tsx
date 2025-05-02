import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
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
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;

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
            className="p-2 text-enablr-navy"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden lg:block relative z-50">
          <NavigationMenu>
            <NavigationMenuList className="gap-10">
              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger 
                  className={cn(
                    "bg-transparent px-0 font-medium hover:bg-transparent hover:text-[#BF0404] focus:text-[#BF0404]",
                    isActive('/solutions') && "text-[#BF0404]"
                  )}
                >
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-0 bg-white p-2 rounded-lg shadow-lg min-w-[256px]">
                  <ul className="w-full p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/solutions/gcc-service" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BF0404]/10 hover:to-[#0D214F]/10 hover:text-[#BF0404] rounded-md whitespace-nowrap"
                        >
                          GCC as a Service
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/solutions/technology-enablement" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BF0404]/10 hover:to-[#0D214F]/10 hover:text-[#BF0404] rounded-md"
                        >
                          Technology Enablement
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/solutions/workspace-solutions" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BF0404]/10 hover:to-[#0D214F]/10 hover:text-[#BF0404] rounded-md"
                        >
                          Workspace Solutions
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/solutions/talent-hr" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BF0404]/10 hover:to-[#0D214F]/10 hover:text-[#BF0404] rounded-md"
                        >
                          Talent & HR
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/solutions/business-operations" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BF0404]/10 hover:to-[#0D214F]/10 hover:text-[#BF0404] rounded-md"
                        >
                          Business Operations
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/solutions/staff-augmentation" 
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
                <NavigationMenuTrigger 
                  className={cn(
                    "bg-transparent px-0 font-medium hover:bg-transparent hover:text-[#BF0404] focus:text-[#BF0404]",
                    location.pathname.includes('/engagement') && "text-[#BF0404]"
                  )}
                >
                  Engagement Models
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-0 bg-white p-2 rounded-lg shadow-lg min-w-[256px]">
                  <ul className="w-full p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/engagement/bot" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BF0404]/10 hover:to-[#0D214F]/10 hover:text-[#BF0404] rounded-md whitespace-nowrap"
                        >
                          B-O-T (Build-Operate-Transfer Model)
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
                          to="/engagement/dedicated-team" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BF0404]/10 hover:to-[#0D214F]/10 hover:text-[#BF0404] rounded-md"
                        >
                          Dedicated Team
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link 
                  to="/about" 
                  className={cn(
                    "text-sm font-medium text-gray-700 hover:text-[#BF0404] transition-colors duration-300",
                    isActive('/about') && "text-[#BF0404]"
                  )}
                >
                  About us
                </Link>
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
                <Link 
                  to="/contact" 
                  className={cn(
                    "text-sm font-medium text-gray-700 hover:text-[#BF0404] transition-colors duration-300",
                    isActive('/contact') && "text-[#BF0404]"
                  )}
                >
                  Contact us
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
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 z-50">
            <nav className="flex flex-col space-y-4">
              <div className="space-y-2">
                <span className="text-sm font-medium text-gray-700">Solutions</span>
                <Link 
                  to="/solutions/gcc-service" 
                  className="block pl-4 text-sm text-gray-600 hover:text-[#BF0404] transition-colors duration-300"
                >
                  GCC as a Service
                </Link>
                <Link 
                  to="/solutions/technology-enablement" 
                  className="block pl-4 text-sm text-gray-600 hover:text-[#BF0404] transition-colors duration-300"
                >
                  Technology Enablement
                </Link>
                <Link 
                  to="/solutions/workspace-solutions" 
                  className="block pl-4 text-sm text-gray-600 hover:text-[#BF0404] transition-colors duration-300"
                >
                  Workspace Solutions
                </Link>
                <Link 
                  to="/solutions/talent-hr" 
                  className="block pl-4 text-sm text-gray-600 hover:text-[#BF0404] transition-colors duration-300"
                >
                  Talent & HR
                </Link>
                <Link 
                  to="/solutions/business-operations" 
                  className="block pl-4 text-sm text-gray-600 hover:text-[#BF0404] transition-colors duration-300"
                >
                  Business Operations
                </Link>
                <Link 
                  to="/solutions/staff-augmentation" 
                  className="block pl-4 text-sm text-gray-600 hover:text-[#BF0404] transition-colors duration-300"
                >
                  Staff Augmentation
                </Link>
              </div>

              <div className="space-y-2">
                <span className="text-sm font-medium text-gray-700">Engagement Models</span>
                <Link 
                  to="/engagement/bot" 
                  className="block pl-4 text-sm text-gray-600 hover:text-[#BF0404] transition-colors duration-300"
                >
                  B-O-T (Build-Operate-Transfer Model)
                </Link>
                <Link 
                  to="/engagement/modular-services" 
                  className="block pl-4 text-sm text-gray-600 hover:text-[#BF0404] transition-colors duration-300"
                >
                  Modular Services
                </Link>
                <Link 
                  to="/engagement/comprehensive-management" 
                  className="block pl-4 text-sm text-gray-600 hover:text-[#BF0404] transition-colors duration-300"
                >
                  Comprehensive Management
                </Link>
                <Link 
                  to="/engagement/dedicated-team" 
                  className="block pl-4 text-sm text-gray-600 hover:text-[#BF0404] transition-colors duration-300"
                >
                  Dedicated Team
                </Link>
              </div>

              <Link 
                to="/about" 
                className="text-sm font-medium text-gray-700 hover:text-[#BF0404] transition-colors duration-300"
              >
                About us
              </Link>
              <Link 
                to="/blog" 
                className="text-sm font-medium text-gray-700 hover:text-[#BF0404] transition-colors duration-300"
              >
                Insights
              </Link>
              <Link 
                to="/careers" 
                className="text-sm font-medium text-gray-700 hover:text-[#BF0404] transition-colors duration-300"
              >
                Careers
              </Link>
              <Link 
                to="/contact" 
                className="text-sm font-medium text-gray-700 hover:text-[#BF0404] transition-colors duration-300"
              >
                Contact us
              </Link>
              <Button 
                className="bg-enablr-navy text-white hover:bg-white hover:text-enablr-navy border border-transparent hover:border-enablr-navy transition-all duration-300"
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
