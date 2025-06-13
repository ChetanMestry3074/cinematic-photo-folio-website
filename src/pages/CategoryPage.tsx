import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PhotoCard from "@/components/PhotoCard";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

import architecture1 from "@/components/images/Architecture/1.jpg";
import architecture2 from "@/components/images/Architecture/2.jpg";
import architecture3 from "@/components/images/Architecture/3.jpg";
import architecture4 from "@/components/images/Architecture/4.jpg";
import architecture5 from "@/components/images/Architecture/5.jpg";
import architecture6 from "@/components/images/Architecture/6.jpg";
import architecture7 from "@/components/images/Architecture/7.jpg";
import architecture8 from "@/components/images/Architecture/8.jpg";
import architecture9 from "@/components/images/Architecture/9.jpg";
import architecture10 from "@/components/images/Architecture/10.jpg";
import architecture11 from "@/components/images/Architecture/11.jpg";
import architecture12 from "@/components/images/Architecture/12.jpg";
import architecture13 from "@/components/images/Architecture/13.jpg";
import architecture14 from "@/components/images/Architecture/14.jpg";
import architecture15 from "@/components/images/Architecture/15.jpg";
import architecture16 from "@/components/images/Architecture/16.jpg";
import architecture17 from "@/components/images/Architecture/17.jpg";
import architecture18 from "@/components/images/Architecture/18.jpg";
import architecture19 from "@/components/images/Architecture/19.jpg";
import architecture20 from "@/components/images/Architecture/20.jpg";

import portrait1 from "@/components/images/Portrait/1.jpg";
import portrait2 from "@/components/images/Portrait/2.jpg";
import portrait3 from "@/components/images/Portrait/3.jpg";
import portrait4 from "@/components/images/Portrait/4.jpg";
import portrait5 from "@/components/images/Portrait/5.jpg";
import portrait6 from "@/components/images/Portrait/6.jpg";
import portrait7 from "@/components/images/Portrait/7.jpg";
import portrait8 from "@/components/images/Portrait/8.jpg";
import portrait9 from "@/components/images/Portrait/9.jpg";
import portrait10 from "@/components/images/Portrait/10.jpg";
import portrait11 from "@/components/images/Portrait/11.jpg";
import portrait12 from "@/components/images/Portrait/12.jpg";
import portrait13 from "@/components/images/Portrait/13.jpg";
import portrait14 from "@/components/images/Portrait/14.jpg";
import portrait15 from "@/components/images/Portrait/15.jpg";
import portrait16 from "@/components/images/Portrait/16.jpg";
import portrait17 from "@/components/images/Portrait/17.jpg";
import portrait18 from "@/components/images/Portrait/18.jpg";
import portrait19 from "@/components/images/Portrait/19.jpg";
import portrait20 from "@/components/images/Portrait/20.jpg";

import meet1 from "@/components/images/Meets/1.jpg";
import meet2 from "@/components/images/Meets/2.jpg";
import meet3 from "@/components/images/Meets/3.jpg";
import meet4 from "@/components/images/Meets/4.jpg";
import meet5 from "@/components/images/Meets/5.jpg";
import meet6 from "@/components/images/Meets/6.jpg";
import meet7 from "@/components/images/Meets/7.jpg";
import meet8 from "@/components/images/Meets/8.jpg";
import meet9 from "@/components/images/Meets/9.jpg";
import meet10 from "@/components/images/Meets/10.jpg";
import meet11 from "@/components/images/Meets/11.jpg";
import meet12 from "@/components/images/Meets/12.jpg";
import meet13 from "@/components/images/Meets/13.jpg";
import meet14 from "@/components/images/Meets/14.jpg";
import meet15 from "@/components/images/Meets/15.jpg";
import meet16 from "@/components/images/Meets/16.jpg";
import meet17 from "@/components/images/Meets/17.jpg";
import meet18 from "@/components/images/Meets/18.jpg";
import meet19 from "@/components/images/Meets/19.jpg";
import meet20 from "@/components/images/Meets/20.jpg";

import family1 from "@/components/images/Family/1.jpg";
import family2 from "@/components/images/Family/2.jpg";
import family3 from "@/components/images/Family/3.jpg";
import family4 from "@/components/images/Family/4.jpg";
import family5 from "@/components/images/Family/5.jpg";
import family6 from "@/components/images/Family/6.jpg";
import family7 from "@/components/images/Family/7.jpg";
import family8 from "@/components/images/Family/8.jpg";
import family9 from "@/components/images/Family/9.jpg";
import family10 from "@/components/images/Family/10.jpg";
import family11 from "@/components/images/Family/11.jpg";
import family12 from "@/components/images/Family/12.jpg";
import family13 from "@/components/images/Family/13.jpg";
import family14 from "@/components/images/Family/14.jpg";
import family15 from "@/components/images/Family/15.jpg";
import family16 from "@/components/images/Family/16.jpg";
import family17 from "@/components/images/Family/17.jpg";
import family18 from "@/components/images/Family/18.jpg";
import family19 from "@/components/images/Family/19.jpg";
import family20 from "@/components/images/Family/20.jpg";

import product1 from "@/components/images/Product/1.jpg";
import product2 from "@/components/images/Product/2.jpg";
import product3 from "@/components/images/Product/3.jpg";
import product4 from "@/components/images/Product/4.jpg";
import product5 from "@/components/images/Product/5.jpg";
import product6 from "@/components/images/Product/6.jpg";
import product7 from "@/components/images/Product/7.jpg";
import product8 from "@/components/images/Product/8.jpg";
import product9 from "@/components/images/Product/9.jpg";
import product10 from "@/components/images/Product/10.jpg";
import product11 from "@/components/images/Product/11.jpg";
import product12 from "@/components/images/Product/12.jpg";
import product13 from "@/components/images/Product/13.jpg";
import product14 from "@/components/images/Product/14.jpg";
import product15 from "@/components/images/Product/15.jpg";
import product16 from "@/components/images/Product/16.jpg";
import product17 from "@/components/images/Product/17.jpg";
import product18 from "@/components/images/Product/18.jpg";
import product19 from "@/components/images/Product/19.jpg";

import land1 from "@/components/images/Landscape/1.jpg";
import land2 from "@/components/images/Landscape/2.jpg";
import land3 from "@/components/images/Landscape/3.jpg";
import land4 from "@/components/images/Landscape/4.jpg";
import land5 from "@/components/images/Landscape/5.jpg";
import land6 from "@/components/images/Landscape/6.jpg";
import land7 from "@/components/images/Landscape/7.jpg";
import land8 from "@/components/images/Landscape/8.jpg";
import land9 from "@/components/images/Landscape/9.jpg";
import land10 from "@/components/images/Landscape/10.jpg";
import land11 from "@/components/images/Landscape/11.jpg";
import land12 from "@/components/images/Landscape/12.jpg";
import land13 from "@/components/images/Landscape/13.jpg";
import land14 from "@/components/images/Landscape/14.jpg";
import land15 from "@/components/images/Landscape/15.jpg";
import land16 from "@/components/images/Landscape/16.jpg";
import land17 from "@/components/images/Landscape/17.jpg";
import land18 from "@/components/images/Landscape/18.jpg";
import land19 from "@/components/images/Landscape/19.jpg";
import land20 from "@/components/images/Landscape/20.jpg";

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

const categories: Record<string, CategoryData> = {
  "architecture": {
    id: "architecture",
    title: "Architecture",
    description: "Capturing the beauty and design of built structures through a cinematic lens",
    banner: architecture1,
    photos: [
      {
        id: "a1",
        src: architecture1,
        title: "Modern Facade",
        photographer: ". "
      },
      {
        id: "a2",
        src: architecture7,
        title: "Interior Design",
        photographer: "Sarah Miller"
      },
      {
        id: "a3",
        src: architecture3,
        title: "Interior Design",
        photographer: "Michael Chen"
      },
      {
        id: "a4",
        src: architecture8,
        title: "City Heights",
        photographer: "Emma Johnson"
      },
      {
        id: "a5",
        src: architecture4,
        title: "Interior Design",
        photographer: "David Wilson"
      },
      {
        id: "a6",
        src: architecture9,
        title: "Urban Geometry",
        photographer: "David Wilson"
      },
      {
        id: "a7",
        src: architecture2,
        title: "Interior Design",
        photographer: "David Wilson"
      },
      {
        id: "a8",
        src: architecture5,
        title: "Interior Design",
        photographer: "David Wilson"
      },
      {
        id: "a9",
        src: architecture6,
        title: "Interior Design",
        photographer: "David Wilson"
      },
      {
        id: "a10",
        src: architecture10,
        title: "Interior Design",
        photographer: "David Wilson"
      },
      {
        id: "a11",
        src: architecture11,
        title: "Urban Architecture",
        photographer: "David Wilson"
      },
      {
        id: "a12",
        src: architecture12,
        title: "Urban Architecture",
        photographer: "David Wilson"
      },
      {
        id: "a13",
        src: architecture13,
        title: "Urban Geometry",
        photographer: "David Wilson"
      },
      {
        id: "a14",
        src: architecture14,
        title: "Interior Design",
        photographer: "David Wilson"
      },
      {
        id: "a15",
        src: architecture15,
        title: "Interior Design",
        photographer: "David Wilson"
      },
      {
        id: "a16",
        src: architecture16,
        title: "Interior Design",
        photographer: "David Wilson"
      },
      {
        id: "a17",
        src: architecture17,
        title: "Interior Design",
        photographer: "David Wilson"
      },
      {
        id: "a18",
        src: architecture18,
        title: "Interior Design",
        photographer: "David Wilson"
      },
      {
        id: "a19",
        src: architecture19,
        title: "Interior Design",
        photographer: "David Wilson"
      },
      {
        id: "a20",
        src: architecture20,
        title: "Interior Design",
        photographer: "David Wilson"
      }
    ]
  },
  "portraits": {
    id: "portraits",
    title: "Portrait",
    description: "Photography",
    banner: portrait5,
    photos: [
      {
        id: "p1",
        src: portrait1,
        title: "Natural light",
        photographer: "James Wilson"
      },
      {
        id: "p2",
        src: portrait2,
        title: "Natural light",
        photographer: "James Wilson"
      },
      {
        id: "p3",
        src: portrait3,
        title: "Natural light",
        photographer: "James Wilson"
      },
      {
        id: "p4",
        src: portrait4,
        title: "Studio light",
        photographer: "James Wilson"
      },
      {
        id: "p5",
        src: portrait5,
        title: "Natural light",
        photographer: "James Wilson"
      },
      {
        id: "p6",
        src: portrait6,
        title: "Natural light",
        photographer: "James Wilson"
      },
      {
        id: "p7",
        src: portrait15,
        title: "Natural light",
        photographer: "James Wilson"
      },
      {
        id: "p8",
        src: portrait19,
        title: "Natural light",
        photographer: "James Wilson"
      },
      {
        id: "p9",
        src: portrait9,
        title: "Natural light",
        photographer: "James Wilson"
      },
      {
        id: "p10",
        src: portrait10,
        title: "Studio light",
        photographer: "James Wilson"
      },
      {
        id: "p11",
        src: portrait11,
        title: "Natural light",
        photographer: "James Wilson"
      },
      {
        id: "p12",
        src: portrait12,
        title: "Natural light",
        photographer: "James Wilson"
      },
      {
        id: "p13",
        src: portrait13,
        title: "Natural light",
        photographer: "James Wilson"
      },
      {
        id: "p14",
        src: portrait14,
        title: "Natural light",
        photographer: "James Wilson"
      },
      {
        id: "p15",
        src: portrait7,
        title: "Night Portrait",
        photographer: "James Wilson"
      },
      {
        id: "p16",
        src: portrait17,
        title: "Natural light",
        photographer: "James Wilson"
      },
      {
        id: "p17",
        src: portrait16,
        title: "Natural light",
        photographer: "James Wilson"
      },
      {
        id: "p18",
        src: portrait18,
        title: "Natural light",
        photographer: "James Wilson"
      },
      {
        id: "p19",
        src: portrait8,
        title: "Natural light",
        photographer: "James Wilson"
      },
      {
        id: "p20",
        src: portrait20,
        title: "Natural light",
        photographer: "James Wilson"
      }
    ]
  },
  "corporate-events": {
    id: "corporate-events",
    title: "Corporate Events",
    description: "Professional photography for business conferences, meetings and corporate gatherings",
    banner: meet1,
    photos: [
      {
        id: "c1",
        src: meet1,
        title: "Founder's Meet",
        photographer: "Mark Williams"
      },
      {
        id: "c2",
        src: meet2,
        title: "Founder's Meet",
        photographer: "Mark Williams"
      },
      {
        id: "c3",
        src: meet3,
        title: "Conference Hall",
        photographer: "Mark Williams"
      },
      {
        id: "c4",
        src: meet4,
        title: "Founder's Meet",
        photographer: "Mark Williams"
      },
      {
        id: "c5",
        src: meet5,
        title: "Founder's Meet",
        photographer: "Mark Williams"
      },
      {
        id: "c6",
        src: meet6,
        title: "Founder's Meet",
        photographer: "Mark Williams"
      },
      {
        id: "c7",
        src: meet7,
        title: "Founder's Meet",
        photographer: "Mark Williams"
      },
      {
        id: "c8",
        src: meet8,
        title: "Founder's Meet",
        photographer: "Mark Williams"
      },
      {
        id: "c9",
        src: meet9,
        title: "Founder's Meet",
        photographer: "Mark Williams"
      },
      {
        id: "c10",
        src: meet10,
        title: "Founder's Meet",
        photographer: "Mark Williams"
      },
      {
        id: "c11",
        src: meet11,
        title: "Founder's Meet",
        photographer: "Mark Williams"
      },
      {
        id: "c12",
        src: meet12,
        title: "Founder's Meet",
        photographer: "Mark Williams"
      },
      {
        id: "c13",
        src: meet13,
        title: "Founder's Meet",
        photographer: "Mark Williams"
      },
      {
        id: "c14",
        src: meet14,
        title: "Founder's Meet",
        photographer: "Mark Williams"
      },
      {
        id: "c15",
        src: meet15,
        title: "Founder's Meet",
        photographer: "Mark Williams"
      },
      {
        id: "c16",
        src: meet16,
        title: "Founder's Meet",
        photographer: "Mark Williams"
      },
      {
        id: "c17",
        src: meet17,
        title: "Founder's Meet",
        photographer: "Mark Williams"
      },
      {
        id: "c18",
        src: meet18,
        title: "Founder's Meet",
        photographer: "Mark Williams"
      },
      {
        id: "c19",
        src: meet19,
        title: "Founder's Meet",
        photographer: "Mark Williams"
      },
      {
        id: "c20",
        src: meet20,
        title: "Founder's Meet",
        photographer: "Mark Williams"
      }
    ]
  },
  "family-gatherings": {
    id: "family-gatherings",
    title: "Family Gatherings",
    description: "Capturing precious moments during family reunions and celebrations",
    banner: family9,
    photos: [
      {
        id: "f1",
        src: family1,
        title: "Togetherness",
        photographer: "Mark Williams"
      },
      {
        id: "f2",
        src: family2,
        title: "Togetherness",
        photographer: "Mark Williams"
      },
      {
        id: "f3",
        src: family3,
        title: "Togetherness",
        photographer: "Mark Williams"
      },
      {
        id: "f4",
        src: family4,
        title: "Togetherness",
        photographer: "Mark Williams"
      },
      {
        id: "f5",
        src: family5,
        title: "Togetherness",
        photographer: "Mark Williams"
      },
      {
        id: "f6",
        src: family6,
        title: "Wedding Attire",
        photographer: "Mark Williams"
      },
      {
        id: "f7",
        src: family7,
        title: "Togetherness",
        photographer: "Mark Williams"
      },
      {
        id: "f8",
        src: family8,
        title: "Togetherness",
        photographer: "Mark Williams"
      },
      {
        id: "f9",
        src: family9,
        title: "Togetherness",
        photographer: "Mark Williams"
      },
      {
        id: "f10",
        src: family10,
        title: "Togetherness",
        photographer: "Mark Williams"
      },
      {
        id: "f11",
        src: family11,
        title: "Togetherness",
        photographer: "Mark Williams"
      },
      {
        id: "f12",
        src: family12,
        title: "Togetherness",
        photographer: "Mark Williams"
      },
      {
        id: "f13",
        src: family13,
        title: "Togetherness",
        photographer: "Mark Williams"
      },
      {
        id: "f14",
        src: family14,
        title: "Togetherness",
        photographer: "Mark Williams"
      },
      {
        id: "f15",
        src: family15,
        title: "Togetherness",
        photographer: "Mark Williams"
      },
      {
        id: "f16",
        src: family16,
        title: "Togetherness",
        photographer: "Mark Williams"
      },
      {
        id: "f17",
        src: family17,
        title: "Togetherness",
        photographer: "Mark Williams"
      },
      {
        id: "f18",
        src: family18,
        title: "Togetherness",
        photographer: "Mark Williams"
      },
      {
        id: "f19",
        src: family19,
        title: "Togetherness",
        photographer: "Mark Williams"
      },
      {
        id: "f20",
        src: family20,
        title: "Togetherness",
        photographer: "Mark Williams"
      }
    ]
  },
  "product-shoot": {
    id: "product-shoot",
    title: "Product Shoot",
    description: "Professional product photography for ecommerce, marketing and advertising",
    banner: product13,
    photos: [
      {
        id: "r1",
        src: product1,
        title: "Tech",
        photographer: "Mark Williams"
      },
      {
        id: "r2",
        src: product2,
        title: "Tech",
        photographer: "Mark Williams"
      },
      {
        id: "r3",
        src: product3,
        title: "Tech",
        photographer: "Mark Williams"
      },
      {
        id: "r4",
        src: product4,
        title: "Tech",
        photographer: "Mark Williams"
      },
      {
        id: "r5",
        src: product5,
        title: "Tech",
        photographer: "Mark Williams"
      },
      {
        id: "r6",
        src: product6,
        title: "Tech",
        photographer: "Mark Williams"
      },
      {
        id: "r7",
        src: product7,
        title: "Commercial",
        photographer: "Mark Williams"
      },
      {
        id: "r8",
        src: product8,
        title: "Machine",
        photographer: "Mark Williams"
      },
      {
        id: "r9",
        src: product9,
        title: "Tech",
        photographer: "Mark Williams"
      },
      {
        id: "r10",
        src: product10,
        title: "Commercial",
        photographer: "Mark Williams"
      },
      {
        id: "r11",
        src: product11,
        title: "Commercial",
        photographer: "Mark Williams"
      },
      {
        id: "r12",
        src: product12,
        title: "Tech",
        photographer: "Mark Williams"
      },
      {
        id: "r13",
        src: product13,
        title: "Machine",
        photographer: "Mark Williams"
      },
      {
        id: "r14",
        src: product14,
        title: "Machine",
        photographer: "Mark Williams"
      },
      {
        id: "r15",
        src: product15,
        title: "Commercial",
        photographer: "Mark Williams"
      },
      {
        id: "r16",
        src: product16,
        title: "Machine",
        photographer: "Mark Williams"
      },
      {
        id: "r17",
        src: product17,
        title: "Commercial",
        photographer: "Mark Williams"
      },
      {
        id: "r18",
        src: product18,
        title: "Machine",
        photographer: "Mark Williams"
      },
      {
        id: "r19",
        src: product19,
        title: "Machine",
        photographer: "Mark Williams"
      }
    ]
  },
  "nature": {
    id: "nature",
    title: "Landscape",
    description: "Beautiful landscapes and wildlife captured in their natural environment",
    banner: land11,
    photos: [
      {
        id: "l1",
        src: land1,
        title: "Nature",
        photographer: "Mark Williams"
      },
      {
        id: "l2",
        src: land2,
        title: "Nature",
        photographer: "Mark Williams"
      },
      {
        id: "l3",
        src: land3,
        title: "Nature",
        photographer: "Mark Williams"
      },
      {
        id: "l4",
        src: land4,
        title: "Nature",
        photographer: "Mark Williams"
      },{
        id: "l5",
        src: land5,
        title: "Festival",
        photographer: "Mark Williams"
      },
      {
        id: "l6",
        src: land6,
        title: "Festival",
        photographer: "Mark Williams"
      },
      {
        id: "l7",
        src: land7,
        title: "Nature",
        photographer: "Mark Williams"
      },
      {
        id: "l8",
        src: land8,
        title: "Nature",
        photographer: "Mark Williams"
      },
      {
        id: "l9",
        src: land9,
        title: "Nature",
        photographer: "Mark Williams"
      },
      {
        id: "l10",
        src: land10,
        title: "Nature",
        photographer: "Mark Williams"
      },
      {
        id: "l11",
        src: land11,
        title: "Nature",
        photographer: "Mark Williams"
      },
      {
        id: "l12",
        src: land12,
        title: "Outdoor",
        photographer: "Mark Williams"
      },
      {
        id: "l13",
        src: land13,
        title: "Outdoor",
        photographer: "Mark Williams"
      },
      {
        id: "l14",
        src: land14,
        title: "Nature",
        photographer: "Mark Williams"
      },
      {
        id: "l15",
        src: land15,
        title: "Nature",
        photographer: "Mark Williams"
      },
      {
        id: "l16",
        src: land16,
        title: "Nature",
        photographer: "Mark Williams"
      },
      {
        id: "l17",
        src: land17,
        title: "Festival",
        photographer: "Mark Williams"
      },
      {
        id: "l18",
        src: land18,
        title: "Nature",
        photographer: "Mark Williams"
      },
      {
        id: "l19",
        src: land19,
        title: "Nature",
        photographer: "Mark Williams"
      },
      {
        id: "l20",
        src: land20,
        title: "Nature",
        photographer: "Mark Williams"
      }
    ]
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
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "Escape") {
        setSelectedPhotoIndex(null);
      }
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
