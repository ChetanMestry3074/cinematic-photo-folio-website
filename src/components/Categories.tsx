
import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

import architecture1 from "@/components/images/Architecture/9.jpg";
import portrait1 from "@/components/images/Portrait/17.jpg";
import meet12 from "@/components/images/Meets/12.jpg";
import family8 from "@/components/images/Family/8.jpg";
import product8 from "@/components/images/Product/8.jpg";
import land11 from "@/components/images/Landscape/8.jpg";
// Define categories with their images
const categories = [
  {
    id: "architecture",
    title: "Architecture",
    image: architecture1,
    description: "Stunning architectural photography capturing the beauty of buildings and structures"
  },
  {
    id: "portraits",
    title: "Portraits",
    image: portrait1,
    description: "Expressive portrait photography that reveals character and emotion"
  },
  {
    id: "corporate-events",
    title: "Corporate Events",
    image: meet12,
    description: "Professional coverage of business events, conferences and corporate gatherings"
  },
  {
    id: "family-gatherings",
    title: "Family Gatherings",
    image: family8,
    description: "Capturing precious moments during family reunions, celebrations and daily life"
  },
  {
    id: "product-shoot",
    title: "Product Shoot",
    image: product8,
    description: "Showcasing products with stunning professional photography"
  },
  {
    id: "nature",
    title: "Landscape",
    image: land11,
    description: "Beautiful landscapes and wildlife captured in their natural environment"
  }
];

const Categories = () => {
  return (
    <section id="categories" className="py-20 px-6">
      <div className="container mx-auto">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6">
            Recent Work
          </h2>
          <p className="text-lg text-film-600 dark:text-film-300">
            Explore our photography services across various specialized categories
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <ScrollReveal key={category.id} delay={index * 100}>
              <Link 
                to={`/category/${category.id}`} 
                className="relative group overflow-hidden rounded-lg shadow-lg h-[250px]" // ↓ changed height here
              >
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl md:text-2xl font-serif text-white font-medium">{category.title}</h3>
                  <p className="text-white/80 text-sm mt-1 hidden md:block">{category.description}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
