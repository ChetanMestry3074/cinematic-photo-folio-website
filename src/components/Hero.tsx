
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ShutterAnimation from "./ShutterAnimation";
import AnimatedHeadline from "./AnimatedHeadline";

const Hero = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  
  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Shutter Animation */}
      <ShutterAnimation onAnimationComplete={handleAnimationComplete} />
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-film-900/80 via-film-900/10 to-background z-10" />
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto" 
          className="w-full h-full object-cover object-center brightness-[1.2] contrast-[1.05]"
        >
          <source 
            src="/videobg.mp4" 
            type="video/mp4" 
          />
          {/* Fallback to image if video doesn't load */}
          <img
            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2250&q=80"
            alt="Cinematic photograph"
            className="w-full h-full object-cover object-center"
          />
        </video>
      </div>

      {/* Hero Content */}
      <div 
        className={`container relative z-20 px-6 md:px-12 transition-opacity duration-1000 ${
          animationComplete ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedHeadline />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button
              size="lg"
                className="bg-transparent text-white border border-white transition-all duration-300 font-bold tracking-wide 
            hover:bg-[#FFD700] hover:text-black hover:border-yellow-400 
            hover:shadow-[0_0_15px_rgba(255,215,0,0.6),0_0_30px_rgba(255,215,0,0.4)]"

              onClick={() => scrollToSection("categories")}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              <span className="relative overflow-hidden inline-flex items-center">
                <span 
                  className={`inline-block transition-transform duration-500 ${
                    isButtonHovered ? 'translate-x-2' : 'translate-x-0'
                  }`}
                >
                  Explore My Work
                </span>
                <ArrowRight 
                  className={`ml-2 h-4 w-4 transition-all duration-500 ${
                    isButtonHovered 
                      ? 'translate-x-1 opacity-100' 
                      : 'translate-x-0 opacity-70'
                  }`} 
                />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
