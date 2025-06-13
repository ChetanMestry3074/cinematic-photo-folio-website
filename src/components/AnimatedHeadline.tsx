
import React, { useState, useEffect } from "react";

const phrases = [
  "I AM A PHOTOGRAPHER",
  "A STORYTELLER",
  "A VISUAL ARTIST"
];

const AnimatedHeadline = () => {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const typeText = () => {
      const fullText = phrases[currentIndex];
      
      if (!isDeleting) {
        setCurrentPhrase(fullText.substring(0, currentPhrase.length + 1));
        
        if (currentPhrase === fullText) {
          // Start deleting after a pause
          setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setCurrentPhrase(fullText.substring(0, currentPhrase.length - 1));
        
        if (currentPhrase === "") {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % phrases.length);
          return;
        }
      }
    };
    
    const timer = setTimeout(typeText, isDeleting ? 75 : 150);
    return () => clearTimeout(timer);
  }, [currentPhrase, currentIndex, isDeleting]);
  
  return (
    <div className="font-serif relative overflow-hidden">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6">
        <span className="relative">
          {currentPhrase}
          <span className="absolute right-[-8px] top-0 h-full w-[2px] bg-white animate-pulse"></span>
        </span>
      </h1>
    </div>
  );
};

export default AnimatedHeadline;
