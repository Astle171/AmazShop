"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images?: string[];
  badgeText?: string;
}

export default function ProductGallery({ images, badgeText }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryImages = images && images.length > 0 ? images : [];

  return (
    <div className="space-y-6">
      {/* Main image */}
      <div className="aspect-[4/3] bg-white rounded-2xl sm:rounded-[40px] flex items-center justify-center relative overflow-hidden shadow-soft group">
        {badgeText && (
          <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
            <span className="bg-accent text-white text-[10px] font-black px-3 py-1.5 rounded-full tracking-widest uppercase">
              {badgeText}
            </span>
          </div>
        )}
        {galleryImages.length > 0 ? (
          <Image
            src={galleryImages[activeIndex]}
            alt="Product image"
            fill
            className="object-contain p-4 sm:p-8 transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        ) : (
          <div className="w-2/3 h-2/3 bg-main/5 rounded-3xl" />
        )}
      </div>

      {/* Thumbnails */}
      {galleryImages.length > 1 && (
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {galleryImages.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`aspect-square rounded-2xl p-2 flex items-center justify-center cursor-pointer transition-colors relative overflow-hidden ${
                activeIndex === index
                  ? "bg-white border-2 border-accent shadow-soft"
                  : "bg-[#EAE3D8] hover:bg-white"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-contain p-2"
                sizes="100px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
