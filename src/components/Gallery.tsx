import React, { useState } from "react";
import { cn } from "@/lib/utils";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
};

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1623109784940-6f341cacbf22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
    alt: "Person walking in foggy forest",
    width: 1200,
    height: 1600,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
    alt: "Cinematic landscape with mountains",
    width: 1200,
    height: 800,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1536882240095-0379873feb4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
    alt: "Moody cityscape",
    width: 1200,
    height: 1600,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1615306119247-67565cb0e8b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
    alt: "Person looking at city lights",
    width: 1200,
    height: 900,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1584214125863-5c0ca82a13a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
    alt: "Architectural photography with film look",
    width: 1200,
    height: 1600,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1518141532615-4305c9f914c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
    alt: "Person in dramatic lighting",
    width: 1200,
    height: 800,
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1572177215152-32f247303126?ixlib=rb-4.0.3&auto=format&fit=crop&w=1700&q=80",
    alt: "Moody portrait",
    width: 1200,
    height: 1500,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1603574670812-d24560880210?ixlib=rb-4.0.3&auto=format&fit=crop&w=1700&q=80",
    alt: "Cinematic landscape",
    width: 1200,
    height: 800,
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
    alt: "Cinematic cityscape",
    width: 1200,
    height: 900,
  },
];

const Gallery = () => {
  const [zoomedImage, setZoomedImage] = useState<GalleryImage | null>(null);

  const handleImageClick = (image: GalleryImage) => {
    setZoomedImage(image);
  };

  const handleClose = () => {
    setZoomedImage(null);
  };

  return (
    <section id="gallery" className="py-20 px-6 bg-film-50 dark:bg-black relative z-10">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6">
            Photography Portfolio
          </h2>
          <p className="text-lg text-film-600 dark:text-film-300">
            A selection of my most cinematic works capturing moments with dramatic lighting and emotion.
          </p>
        </div>

        <div className="masonry-grid">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={cn(
                "image-container rounded-md overflow-hidden shadow-md animate-fade-in cursor-pointer",
                {
                  "row-span-2": image.height > image.width * 1.2,
                }
              )}
              style={{
                animationDelay: `${image.id * 100}ms`,
                aspectRatio: `${image.width} / ${image.height}`,
              }}
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={handleClose}
        >
          <img
            src={zoomedImage.src}
            alt={zoomedImage.alt}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl object-contain transition-transform duration-300"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
