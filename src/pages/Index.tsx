
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Categories from "@/components/Categories";
import FeaturedPhotos from "@/components/FeaturedPhotos";
import Editing from "@/components/Editing";


const Index = () => {
  const location = useLocation();
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize intersection observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    // Observe all reveal sections
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    // Add smooth scrolling behavior similar to MetaMask
    const html = document.documentElement;
    
    // Apply smooth scrolling with optimized performance
    html.style.scrollBehavior = "smooth";
    
    // Check if there's a scrollTo state from navigation
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      html.style.scrollBehavior = "";
    };
  }, [location]);

  return (
    <div className="min-h-screen bg-background" ref={sectionsRef}>
      <Navbar />
      <Hero />
      <FeaturedPhotos />
      <Categories />
      <Editing />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
