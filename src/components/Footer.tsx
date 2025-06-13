
import React from "react";
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-film-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif mb-4">CineFolio</h3>
            <p className="text-film-300 mb-6 max-w-md">
              Creating cinematic photography that tells stories and captures moments with film-inspired aesthetics.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </SocialLink>
              
              <SocialLink href="https://www.linkedin.com/in/chetanmestry3074/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </SocialLink>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#gallery">Gallery</FooterLink>
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-4">Services</h4>
            <ul className="space-y-2">
              <FooterLink href="#">Portrait Photography</FooterLink>
              <FooterLink href="#">Photo Editing</FooterLink>
              <FooterLink href="#">Event Coverage</FooterLink>
              <FooterLink href="#">Commercial Photography</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-film-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
    
          <div className="flex space-x-6 mt-4 md:mt-0">
            
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper components
const SocialLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-film-800 flex items-center justify-center text-film-300 hover:bg-film-700 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
};

const FooterLink = ({
  children,
  href,
  size = "base",
}: {
  children: React.ReactNode;
  href: string;
  size?: "sm" | "base";
}) => {
  return (
    <li>
      <a
        href={href}
        className={cn(
          "text-film-300 hover:text-white transition-colors",
          size === "sm" ? "text-sm" : "text-base"
        )}
      >
        {children}
      </a>
    </li>
  );
};

export default Footer;
