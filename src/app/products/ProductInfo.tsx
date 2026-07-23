"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/data/products";


interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const mainImage = product.image || "/placeholder.jpg";
  
  const getAdditionalImages = () => {
    const images = [mainImage];
    const basePath = mainImage.replace(/\.[^.]+$/, '');
    const ext = mainImage.split('.').pop();
    
    const patterns = [
      `${basePath} 2.${ext}`,
      `${basePath}_2.${ext}`,
      `${basePath}-2.${ext}`,
      `${basePath}2.${ext}`
    ];
    
    for (const pattern of patterns) {
      images.push(mainImage);
    }
    
    return images.slice(0, 3);
  };
  
  const thumbnailImages = getAdditionalImages();

  return (
    <div className="flex flex-col">
      {/* Main Image */}
      <div className="group relative overflow-hidden rounded-3xl bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.3)]">
        <div className="relative aspect-[4/5] w-full sm:aspect-[3/4] lg:aspect-[4/5] xl:aspect-[3/4] 2xl:h-[800px] 2xl:aspect-auto">
          {isImageLoading && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-black/5 via-black/10 to-black/5" />
          )}
          <Image
            src={thumbnailImages[selectedImage] || mainImage}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.04] ${
              isImageLoading ? "opacity-0" : "opacity-[0.97]"
            }`}
            priority
            onLoad={() => setIsImageLoading(false)}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/5" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.04]" />

          <div className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-black/60 backdrop-blur-lg">
            <span className="text-[9px] font-light tracking-wider text-[#C9A96E]">
              {String(selectedImage + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* Thumbnail Previews */}
      <div className="mt-4 grid grid-cols-3 gap-2.5 sm:gap-3 max-w-[280px]">
        {thumbnailImages.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            aria-label={`View image ${index + 1}`}
            className={`relative aspect-square overflow-hidden rounded-xl transition-all duration-500 ${
              selectedImage === index
                ? "opacity-100 shadow-lg shadow-[#D4AF37]/20 ring-2 ring-[#C9A96E] ring-offset-2 ring-offset-white"
                : "opacity-40 ring-1 ring-black/8 hover:opacity-90"
            }`}
          >
            <Image
              src={img}
              alt={`${product.name} view ${index + 1}`}
              fill
              sizes="90px"
              className="object-cover"
            />
            {selectedImage === index && (
              <div className="absolute inset-0 bg-[#D4AF37]/5" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}