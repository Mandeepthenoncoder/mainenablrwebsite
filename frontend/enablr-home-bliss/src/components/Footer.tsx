import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { typography } from "@/styles/typography";
import Image from "@/components/Image";

const Footer = () => {
  return (
    <footer className="py-10 md:py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/Global/Updated-Logo.svg"
                alt="Enablr Logo"
                className="h-[4.2rem]"
              />
            </Link>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              <Link to="/solutions" className="hover:text-enablr-navy">
                Solutions
              </Link>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/solutions/gcc-as-service"
                  className="text-gray-600 hover:text-enablr-navy text-sm"
                >
                  GCC-as-a-Service
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/technology-enablement"
                  className="text-gray-600 hover:text-enablr-navy text-sm"
                >
                  Technology Enablement
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/workspace-solutions"
                  className="text-gray-600 hover:text-enablr-navy text-sm"
                >
                  Workspace Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/talent-hr-solutions"
                  className="text-gray-600 hover:text-enablr-navy text-sm"
                >
                  Talent & HR Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/business-operations"
                  className="text-gray-600 hover:text-enablr-navy text-sm"
                >
                  Business Operations
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/staff-augmentation"
                  className="text-gray-600 hover:text-enablr-navy text-sm"
                >
                  Staff Augmentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              <Link to="/engagement" className="hover:text-enablr-navy">
                Engagement Models
              </Link>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/engagement/comprehensive-management"
                  className="text-gray-600 hover:text-enablr-navy text-sm"
                >
                  Comprehensive Management
                </Link>
              </li>

              <li>
                <Link
                  to="/engagement/modular-services"
                  className="text-gray-600 hover:text-enablr-navy text-sm"
                >
                  Modular Services
                </Link>
              </li>
              <li>
                <Link
                  to="/engagement/bot"
                  className="text-gray-600 hover:text-enablr-navy text-sm"
                >
                  Build-Operate-Transfer (B-O-T)
                </Link>
              </li>
              <li>
                <Link
                  to="/engagement/dedicated-team"
                  className="text-gray-600 hover:text-enablr-navy text-sm"
                >
                  Dedicated Teams
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-enablr-navy text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-600 hover:text-enablr-navy text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/careers/life-at-enablr"
                  className="text-gray-600 hover:text-enablr-navy text-sm"
                >
                  Life at Enablr
                </Link>
              </li>
              <li>
                <Link
                  to="/careers/current-openings"
                  className="text-gray-600 hover:text-enablr-navy text-sm"
                >
                  Current Openings
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-enablr-navy text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-600 hover:text-enablr-navy text-sm"
                >
                  Insights
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2025 Enablr. All rights reserved.
          </p>
          <div className="flex items-center justify-center space-x-6">
            <Link
              to="/privacy-policy"
              className="text-sm text-gray-600 hover:text-enablr-navy"
            >
              Privacy Policy
            </Link>
            <Link
              to="/cookies-policy"
              className="text-sm text-gray-600 hover:text-enablr-navy"
            >
              Cookies Policy
            </Link>
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/company/gccenablr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-enablr-navy transition-colors duration-300"
            >
              

 
              <img
                src="/Global/Platform=LinkedIn, Color=Negative.svg"
                alt="LinkedIn"
                className="h-5 w-5"
                style={{ filter: "invert(0.5) brightness(0.3)" }}
              />
            </a>
            <a
              href="https://x.com/GCCenablr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-enablr-navy transition-colors duration-300"
            >
              <img
                src="/Global/Platform=X (Twitter), Color=Original.svg"
                alt="X (Twitter)"
                className="h-5 w-5"
              />
            </a>
            <a
              href="https://www.facebook.com/GCCEnablr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-enablr-navy transition-colors duration-300"
            >
              <img
                src="/Global/Platform=Facebook, Color=Negative.svg"
                alt="Facebook"
                className="h-5 w-5"
                style={{ filter: "invert(0.5) brightness(0.3)" }}
              />
            </a>
            <a
              href="https://www.instagram.com/gccenablr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-enablr-navy transition-colors duration-300"
            >
              <img
                src="/Global/Platform=Instagram, Color=Original.svg"
                alt="Instagram"
                className="h-5 w-5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
