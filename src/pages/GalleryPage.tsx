import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, X, ArrowRight, ArrowLeft as LeftArrow } from "lucide-react";

const galleryImages = [
    // Featured photos
  {
    id: "f1",
    src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
    title: "Mountain Silhouette",
    photographer: "John Anderson"
  },
  {
    id: "f2",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop",
    title: "Valley Vista",
    photographer: "Emma Rodriguez"
  },
  {
    id: "f3",
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop",
    title: "Lakeside Reflections",
    photographer: "Michael Chen"
  },
  {
    id: "f4",
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1950&auto=format&fit=crop",
    title: "Alpine Landscape",
    photographer: "Sarah Johnson"
  },
  {
    id: "f5",
    src: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2076&auto=format&fit=crop",
    title: "Northern Lights",
    photographer: "David Miller"
  },
  // Architecture category
  {
    id: "a1",
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop",
    title: "Modern Facade",
    photographer: "Alex Wong"
  },
  {
    id: "a2",
    src: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?q=80&w=2070&auto=format&fit=crop",
    title: "Urban Geometry",
    photographer: "Sarah Miller"
  },
  // Portraits category
  {
    id: "p1",
    src: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?q=80&w=2033&auto=format&fit=crop",
    title: "Studio Portrait",
    photographer: "James Wilson"
  },
  {
    id: "p2",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    title: "Natural Light",
    photographer: "Anna Kim"
  },
  // Nature category
  {
    id: "n1",
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2074&auto=format&fit=crop",
    title: "Mountain Lake",
    photographer: "Thomas Anderson"
  },
  {
    id: "n2",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop",
    title: "Mountain Range",
    photographer: "Sarah Williams"
  },
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      } else if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-3xl md:text-5xl font-serif">Complete Gallery</h1>
            <Link
              to="/"
              className="inline-flex items-center text-film-500 dark:text-film-400 hover:text-film-600 dark:hover:text-film-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="break-inside-avoid rounded-lg overflow-hidden shadow-md mb-4 cursor-pointer"
              >
                <div
                  onClick={() => {
                    setSelectedImage(image);
                    setSelectedIndex(index);
                  }}
                  className="group relative"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto object-cover rounded"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center px-4">
                      <h3 className="text-white text-xl font-serif">{image.title}</h3>
                      <p className="text-white/80 text-sm mt-2">{image.photographer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
            onClick={() =>
              setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length)
            }
          >
            <LeftArrow size={32} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
            onClick={() => setSelectedIndex((selectedIndex + 1) % galleryImages.length)}
          >
            <ArrowRight size={32} />
          </button>

          <div
            onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStartX === null) return;
              const deltaX = e.changedTouches[0].clientX - touchStartX;
              if (deltaX > 50) {
                setSelectedIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
              } else if (deltaX < -50) {
                setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
              }
              setTouchStartX(null);
            }}
          >
            <img
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].title}
              className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
            <div className="text-center mt-4 text-white">
              <h3 className="text-2xl font-serif">{galleryImages[selectedIndex].title}</h3>
              <p className="text-white/70">{galleryImages[selectedIndex].photographer}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;
