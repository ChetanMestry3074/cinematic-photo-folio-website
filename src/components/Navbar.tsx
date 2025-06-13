
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

import logo from "@/components/images/edits/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    setIsOpen(false);
    
    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="CM Visuals Logo" className="h-14 w-auto" />
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleNavigation("categories")}
            className="hover:text-film-500 dark:hover:text-film-300 transition-colors"
          >
            Gallery
          </button>
          <button 
            onClick={() => handleNavigation("editing")}
            className="hover:text-film-500 dark:hover:text-film-300 transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => handleNavigation("about")}
            className="hover:text-film-500 dark:hover:text-film-300 transition-colors"
          >
            About
          </button>
          <Button 
            variant="outline" 
            className="border-film-300" 
            onClick={() => handleNavigation("contact")}
          >
            Contact
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 dark:bg-film-900/95 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4 p-6">
            <button
              className="py-2 hover:text-film-500 dark:hover:text-film-300 transition-colors"
              onClick={() => handleNavigation("categories")}
            >
              Gallery
            </button>
            <button
              className="py-2 hover:text-film-500 dark:hover:text-film-300 transition-colors"
              onClick={() => handleNavigation("editing")}
            >
              Services
            </button>
            <button
              className="py-2 hover:text-film-500 dark:hover:text-film-300 transition-colors"
              onClick={() => handleNavigation("about")}
            >
              About
            </button>
            <Button
              variant="outline"
              className="border-film-300 w-full"
              onClick={() => handleNavigation("contact")}
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
