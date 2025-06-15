
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const About = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const x = (window.innerWidth / 2 - e.clientX) / 30;
        const y = (window.innerHeight / 2 - e.clientY) / 30;
        
        imageRef.current.style.transform = `rotate(6deg) translate(${x}px, ${y}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="about" className="py-20 px-6 bg-secondary/30 dark:bg-film-800/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-[38%_62%] gap-8 items-center">

          <ScrollReveal className="relative max-w-sm mx-auto md:mx-0" delay={200}>
            {/* Tilted background frame */}
            <div className="absolute w-[90%] h-[95%] -top-6 left-6 bg-amber-700/60 dark:bg-amber-900/60 rounded-lg transform rotate-6 z-0"></div>
            
            {/* Main image with dark overlay for red tint effect - slightly smaller */}
            <div ref={imageRef} className="relative z-10 overflow-hidden rounded-lg shadow-xl parallax">
              <div className="absolute "></div>
              <img
                src="public/profile.jpg"
                alt="Photographer"
                className="w-full h-72 sm:h-80 md:h-[500px] object-cover object-top z-0"
              />

            </div>
          </ScrollReveal>
          
          <div className="space-y-6">
            <ScrollReveal delay={300}>
              <h2 className="text-3xl md:text-6xl font-serif">
                About <span className="text-film-500 dark:text-film-400">Me</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <p className="text-lg text-film-600 dark:text-film-300">
                Photography, for me, isn’t just about capturing visuals, it’s a creative outlet that balances my logical side as an engineer.
                  <br />
I’m Chetan Mestry — an engineer by profession and a photographer by passion. Through the lens, I explore the contrast between precision and spontaneity, structure and emotion. Whether it’s a quiet frame of nature or a moment in motion, I try to freeze what words can’t express.
It’s my way of seeing the world differently, not just as it is, but as it feels. Welcome to my world!
              </p>
            </ScrollReveal>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
