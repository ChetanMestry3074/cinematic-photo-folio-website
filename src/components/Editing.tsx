import React from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import ScrollReveal from "./ScrollReveal";

import e1a from "@/components/images/edits/1a.jpg";
import e1b from "@/components/images/edits/1b.jpg";
import e2a from "@/components/images/edits/2a.jpg";
import e2b from "@/components/images/edits/2b.jpg";
import e3a from "@/components/images/edits/3a.jpg";
import e3b from "@/components/images/edits/3b.jpg";

// Sample before-after images for editing services
const editingSamples = [
  {
    id: 1,
    before: e1a,
    after: e1b,
    title: "Grayscale Transformation"
  },
  {
    id: 2,
    before: e2a,
    after: e2b, 
    title: "Creative Lighting"
  },
  {
    id: 3,
    before: e3a,
    after: e3b,
    title: "Portrait Enhancement"
  }
];

const Editing = () => {
  return (
    <section id="editing" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6">
            Editing
          </h2>
          <p className="text-lg text-film-600 dark:text-film-300">
            Transforming pictures to reveal the true character of the shot
          </p>
        </ScrollReveal>

        {/* Before/After carousel */}
        <ScrollReveal className="mx-auto max-w-5xl" delay={300}>
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {editingSamples.map((sample) => (
                <CarouselItem key={sample.id} className="w-full">
                  <div className="flex justify-center items-center">
                    {/* Polaroid Frame (entire card) */}
                    <div className="bg-[#f5f5f4] dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 shadow-lg px-6 pt-6 pb-20 max-w-5xl w-full relative">
                      
                      {/* Title as Polaroid Caption */}
                      <h3 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center font-medium text-gray-800 dark:text-gray-200 text-lg font-serif">
                        {sample.title}
                      </h3>

                      {/* Image Comparison Section */}
                      <div className="flex flex-col md:flex-row justify-center items-start gap-6">
                        
                        {/* Before Image */}
                        <div className="relative">
                          <span className="absolute top-3 left-3 bg-amber-800/80 text-white px-3 py-1 text-sm font-bold rounded-md z-10">
                            Before
                          </span>
                          <img
                            src={sample.before}
                            alt={`${sample.title} before`}
                            className="max-h-[400px] w-auto object-contain transition-transform duration-500 hover:scale-105"
                          />
                        </div>

                        {/* After Image */}
                        <div className="relative">
                          <span className="absolute top-3 left-3 bg-green-600/80 text-white px-3 py-1 text-sm font-bold rounded-md z-10">
                            After
                          </span>
                          <img
                            src={sample.after}
                            alt={`${sample.title} after`}
                            className="max-h-[400px] w-auto object-contain transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>


              ))}
            </CarouselContent>

            <>
            <CarouselPrevious className="absolute left-[-48px] top-1/2 -translate-y-1/2 z-10 text-3xl text-gray-800 dark:text-white hover:text-film-500 transition-all duration-200" />
            <CarouselNext className="absolute right-[-48px] top-1/2 -translate-y-1/2 z-10 text-3xl text-gray-800 dark:text-white hover:text-film-500 transition-all duration-200" />

            </>

          </Carousel>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Editing;
