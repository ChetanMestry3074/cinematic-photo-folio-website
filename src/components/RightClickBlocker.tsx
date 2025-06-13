import React, { useEffect, useState } from "react";

const RightClickBlocker = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setIsVisible(true);

      // Delay message slightly after background appears
      setTimeout(() => setShowMessage(true), 100);

      // Hide everything after 1.5 seconds
      setTimeout(() => {
        setShowMessage(false);
        setIsVisible(false);
      }, 1500);
    };

    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? "opacity-100 bg-black/80" : "opacity-0 pointer-events-none"
      }`}
    >
      <span
        className={`text-white text-sm font-semibold transition-opacity duration-300 delay-150 ${
          showMessage ? "opacity-100" : "opacity-0"
        }`}
      >
        Hah, nice try!
      </span>
    </div>
  );
};

export default RightClickBlocker;
