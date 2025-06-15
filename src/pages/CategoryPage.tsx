import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

// Helper to build CDN image URL
const IK_BASE = "https://ik.imagekit.io/k911vjyfi"; // Replace with your ImageKit base URL
const getImgUrl = (category: string, file: string) => `${IK_BASE}/${category}/${file}`;

interface CategoryData {
  id: string;
  title: string;
  description: string;
  banner: string;
  photos: {
    id: string;
    src: string;
    title: string;
    photographer: string;
  }[];
}

// Define categories with ImageKit URLs
const categories: Record<string, CategoryData> = {
  "architecture": {
    id: "architecture",
    title: "Architecture",
    description: "Capturing the beauty and design of built structures through a cinematic lens",
    banner: getImgUrl("Architecture", "1.jpg"),
    photos: Array.from({ length: 20 }, (_, i) => ({
      id: `a${i + 1}`,
      src: getImgUrl("Architecture", `${i + 1}.jpg`),
      title: "Interior Design",
      photographer: "David Wilson",
    }))
  },
  "portraits": {
    id: "portraits",
    title: "Portrait",
    description: "Expressive portrait photography that reveals character and emotion",
    banner: getImgUrl("Portrait", "5.jpg"),
    photos: Array.from({ length: 20 }, (_, i) => ({
      id: `p${i + 1}`,
      src: getImgUrl("Portrait", `${i + 1}.jpg`),
      title: i % 4 === 0 ? "Studio light" : "Natural light",
      photographer: "James Wilson",
    }))
  },
  "corporate-events": {
    id: "corporate-events",
    title: "Corporate Events",
    description: "Professional coverage of business events, conferences and corporate gatherings",
    banner: getImgUrl("Meets", "1.jpg"),
    photos: Array.from({ length: 20 }, (_, i) => ({
      id: `c${i + 1}`,
      src: getImgUrl("Meets", `${i + 1}.jpg`),
      title: "Founder's Meet",
      photographer: "Mark Williams",
    }))
  },
  "family-gatherings": {
    id: "family-gatherings",
    title: "Family Gatherings",
    description: "Capturing precious moments during family reunions, celebrations and daily life",
    banner: getImgUrl("Family", "9.jpg"),
    photos: Array.from({ length: 20 }, (_, i) => ({
      id: `f${i + 1}`,
      src: getImgUrl("Family", `${i + 1}.jpg`),
      title: "Togetherness",
      photographer: "Mark Williams",
    }))
  },
  "product-shoot": {
    id: "product-shoot",
    title: "Product Shoot",
    description: "Professional product photography for ecommerce, marketing and advertising",
    banner: getImgUrl("Product", "13.jpg"),
    photos: Array.from({ length: 19 }, (_, i) => ({
      id: `r${i + 1}`,
      src: getImgUrl("Product", `${i + 1}.jpg`),
      title: i < 6 ? "Tech" : i < 10 ? "Commercial" : "Machine",
      photographer: "Mark Williams",
    }))
  },
  "nature": {
    id: "nature",
    title: "Landscape",
    description: "Beautiful landscapes and wildlife captured in their natural environment",
    banner: getImgUrl("Landscape", "11.jpg"),
    photos: Array.from({ length: 20 }, (_, i) => ({
      id: `l${i + 1}`,
      src: getImgUrl("Landscape", `${i + 1}.jpg`),
      title: i % 5 === 0 ? "Festival" : "Nature",
      photographer: "Mark Williams",
    }))
  }
};

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex !== null) {
        if (e.key === "ArrowRight") handleNext();
        else if (e.key === "ArrowLeft") handlePrev();
        else if (e.key === "Escape") setSelectedPhotoIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex]);

  if (!categoryId || !categories[categoryId]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Category Not Found</h2>
          <Link to="/" className="text-film-500 hover:text-film-600 inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const category = categories[categoryId];

  const handleNext = () => {
    if (selectedPhotoIndex !== null && selectedPhotoIndex < category.photos.length - 1) {
      setSelectedPhotoIndex(selectedPhotoIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedPhotoIndex !== null && selectedPhotoIndex > 0) {
      setSelectedPhotoIndex(selectedPhotoIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />

      <div className="relative h-[50vh] md:h-[60vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/5 z-10" />
          <img
            src={category.banner}
            alt={category.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="container relative z-10 px-6 pb-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif font-semibold text-black dark:text-white mb-4">
              {category.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-white/80">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-film-500 hover:text-film-600">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {category.photos.map((photo, index) => (
              <div key={photo.id} onClick={() => setSelectedPhotoIndex(index)} className="break-inside-avoid cursor-pointer">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedPhotoIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-6 right-6 text-white hover:text-red-500"
          >
            <X size={32} />
          </button>
          <button
            onClick={handlePrev}
            disabled={selectedPhotoIndex === 0}
            className="absolute left-6 text-white hover:text-gray-300"
          >
            <ArrowLeft size={40} />
          </button>
          <img
            src={category.photos[selectedPhotoIndex].src}
            alt={category.photos[selectedPhotoIndex].title}
            className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
          />
          <button
            onClick={handleNext}
            disabled={selectedPhotoIndex === category.photos.length - 1}
            className="absolute right-6 text-white hover:text-gray-300"
          >
            <ArrowRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
