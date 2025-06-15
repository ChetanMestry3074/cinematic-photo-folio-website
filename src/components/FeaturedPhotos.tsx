import React, { useState } from "react";
import family1 from "@/components/images/featured/1.jpg";
import product8 from "@/components/images/featured/p8.jpg";
import product9 from "@/components/images/featured/p9.jpg";
import architecture1 from "@/components/images/featured/a1.jpg";
import portrait12 from "@/components/images/featured/19.jpg";
import architecture2 from "@/components/images/featured/2.jpg";

const featuredPhotos = [
  {
    id: "1",
    src: family1,
    title: "Mountain Silhouette",
  },
  {
    id: "2",
    src: product8,
    title: "Valley Vista",
  },
  {
    id: "3",
    src: portrait12,
    title: "Lakeside Reflections",
  },
  {
    id: "4",
    src: architecture1,
    title: "Alpine Landscape",
  },
  {
    id: "5",
    src: architecture2,
    title: "Northern Lights",
  },
  {
    id: "6",
    src: product9,
    title: "Northern Lights",
  },
];

const FeaturedPhotos = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="py-12 md:py-20 bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      <div className="w-full max-w-none">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-black dark:text-white">
            Featured Photos
          </h2>
          <p className="text-lg text-film-600 dark:text-film-300">
            Explore our photography services across various specialized categories
          </p>
        </div>

        {/* ✅ Masonry Grid (no text, no border radius) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {featuredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="break-inside-avoid cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              {/* Title removed */}
            </div>
          ))}
        </div>

        
      </div>

      {/* Zoom-in Modal (also removed border radius) */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="max-w-full max-h-full overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              className="max-w-full max-h-[90vh] object-contain shadow-lg"
            />
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/50 rounded-full px-3 pb-1"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedPhotos;
