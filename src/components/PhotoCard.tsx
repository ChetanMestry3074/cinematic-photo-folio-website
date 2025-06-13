import React from "react";
import { cn } from "@/lib/utils";

interface PhotoCardProps {
  id: string;
  src: string;
  title: string;
  photographer: string;
  featured?: boolean;
  className?: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({
  id,
  src,
  title,
  photographer,
  featured = false,
  className,
}) => {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl group relative cursor-pointer",
        featured ? "col-span-2 row-span-2" : "",
        className
      )}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
      <div className="absolute bottom-0 left-0 p-4 w-full">
        <h3 className="font-serif text-lg text-white font-medium mb-1">{title}</h3>
        <p className="text-sm text-white/80">{photographer}</p>
      </div>
    </div>
  );
};

export default PhotoCard;
