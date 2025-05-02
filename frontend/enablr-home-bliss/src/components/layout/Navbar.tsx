import { useState, useEffect } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={cn(
      "w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src={LOGO_URL} 
              alt="Enablr Logo" 
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium">
                    Solutions
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
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link 
                    to="/about" 
                    className={cn(
                      "h-10 px-4 flex items-center text-sm font-medium",
                      isActive("/about") ? "text-enablr-navy" : "text-gray-700 hover:text-enablr-navy"
                    )}
                  >
                    About
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link 
                    to="/contact" 
                    className={cn(
                      "h-10 px-4 flex items-center text-sm font-medium",
                      isActive("/contact") ? "text-enablr-navy" : "text-gray-700 hover:text-enablr-navy"
                    )}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-enablr-navy focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={cn(
          "lg:hidden fixed inset-x-0 top-[4rem] sm:top-[5rem] bg-white shadow-lg transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}>
          <div className="px-4 py-3 space-y-1">
            <Link
              to="/engagement/bot"
              className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gradient-to-r hover:from-[#BF0404]/10 hover:to-[#0D214F]/10 hover:text-[#BF0404] rounded-md"
            >
              B-O-T Model
            </Link>
            <Link
              to="/engagement/modular-services"
              className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gradient-to-r hover:from-[#BF0404]/10 hover:to-[#0D214F]/10 hover:text-[#BF0404] rounded-md"
            >
              Modular Services
            </Link>
            <Link
              to="/engagement/comprehensive-management"
              className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gradient-to-r hover:from-[#BF0404]/10 hover:to-[#0D214F]/10 hover:text-[#BF0404] rounded-md"
            >
              Comprehensive Management
            </Link>
            <Link
              to="/about"
              className={cn(
                "block px-4 py-2 text-base font-medium rounded-md",
                isActive("/about") 
                  ? "text-enablr-navy bg-gradient-to-r from-[#BF0404]/10 to-[#0D214F]/10" 
                  : "text-gray-700 hover:bg-gradient-to-r hover:from-[#BF0404]/10 hover:to-[#0D214F]/10 hover:text-[#BF0404]"
              )}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={cn(
                "block px-4 py-2 text-base font-medium rounded-md",
                isActive("/contact") 
                  ? "text-enablr-navy bg-gradient-to-r from-[#BF0404]/10 to-[#0D214F]/10" 
                  : "text-gray-700 hover:bg-gradient-to-r hover:from-[#BF0404]/10 hover:to-[#0D214F]/10 hover:text-[#BF0404]"
              )}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
