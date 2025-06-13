
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useIsMobile } from "@/hooks/use-mobile";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isMobile = useIsMobile();

  return (
    <div className={`fixed z-50 ${isMobile ? "left-4 bottom-4" : "right-8 top-1/2 transform -translate-y-1/2"}`}>
      <div className={`relative ${isMobile ? "bg-white/20 dark:bg-black/60" : "bg-white/10 dark:bg-black/40"} backdrop-blur-lg rounded-full p-1 flex ${isMobile ? "flex-row" : "flex-col"} items-center shadow-lg border border-gray-200 dark:border-gray-800`}>
        <button
          onClick={() => setTheme("dark")}
          className={`${isMobile ? "w-7 h-7" : "w-10 h-10"} rounded-full flex items-center justify-center transition-all duration-300 ${
            theme === "dark" 
              ? "bg-film-800 text-white" 
              : "text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
          aria-label="Dark mode"
        >
          <Moon className={`${isMobile ? "h-3 w-3" : "h-5 w-5"}`} />
        </button>
        
        <div className={`${isMobile ? "mx-1 h-4 w-[1px]" : "my-2 w-6 h-[1px]"} bg-gray-300 dark:bg-gray-600`} />
        
        <button
          onClick={() => setTheme("light")}
          className={`${isMobile ? "w-7 h-7" : "w-10 h-10"} rounded-full flex items-center justify-center transition-all duration-300 ${
            theme === "light" 
              ? "bg-film-100 text-film-800" 
              : "text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
          aria-label="Light mode"
        >
          <Sun className={`${isMobile ? "h-3 w-3" : "h-5 w-5"}`} />
        </button>
      </div>
    </div>
  );
}
