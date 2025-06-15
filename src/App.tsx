import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/ThemeToggle";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";
import GalleryPage from "./pages/GalleryPage";
import RightClickBlocker from "@/components/RightClickBlocker";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const video = document.createElement("video");
    video.src = "https://ik.imagekit.io/k911vjyfi/videobg.mp4?updatedAt=1749920848154"; // ✅ Your actual video URL
    video.preload = "auto";
    video.crossOrigin = "anonymous"; // optional, ensures full buffer visibility
    video.load();

    const checkIfBuffered = () => {
      if (
        video.readyState >= 4 && // HAVE_ENOUGH_DATA
        video.buffered.length > 0 &&
        video.buffered.end(0) >= video.duration
      ) {
        setTimeout(() => setLoading(false), 300); // smooth UX
      } else {
        setTimeout(checkIfBuffered, 200); // retry
      }
    };

    video.onloadeddata = checkIfBuffered;
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white text-xl font-semibold">
        <span className="animate-pulse">Loading...</span>
      </div>
    );
  }

  return (
    <ThemeProvider defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <ThemeToggle />
          <RightClickBlocker />

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
