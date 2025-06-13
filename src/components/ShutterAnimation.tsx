
import React, { useEffect, useState } from "react";

const ShutterAnimation = ({ onAnimationComplete }: { onAnimationComplete: () => void }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  
  useEffect(() => {
    // Check if this is the first visit to the page
    const hasVisited = sessionStorage.getItem('hasVisitedPage');
    
    if (hasVisited === 'true') {
      // Skip animation if already visited during this session
      setIsAnimating(false);
      onAnimationComplete();
      return;
    }
    
    // Set the flag that the user has visited the page
    sessionStorage.setItem('hasVisitedPage', 'true');
    
    const timer = setTimeout(() => {
      setIsAnimating(false);
      onAnimationComplete();
    }, 2000); // Animation duration
    
    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  // If animation has already been shown, render nothing
  if (!isAnimating) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Top shutters */}
      <div className="flex h-1/2 w-full">
        {[...Array(5)].map((_, i) => (
          <div 
            key={`top-${i}`}
            className="h-full bg-black transition-transform duration-1000 ease-out transform translate-y-0"
            style={{ 
              width: "20%", 
              transitionDelay: `${i * 100}ms`,
              animation: "shutter-open-top 1.5s forwards",
              animationDelay: `${i * 100}ms`
            }}
          />
        ))}
      </div>
      
      {/* Bottom shutters */}
      <div className="flex h-1/2 w-full">
        {[...Array(5)].map((_, i) => (
          <div 
            key={`bottom-${i}`}
            className="h-full bg-black transition-transform duration-1000 ease-out transform translate-y-0"
            style={{ 
              width: "20%", 
              transitionDelay: `${i * 100}ms`,
              animation: "shutter-open-bottom 1.5s forwards",
              animationDelay: `${i * 100}ms`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ShutterAnimation;
