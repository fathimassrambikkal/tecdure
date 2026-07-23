// components/ui/ProductCard.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "scroll" | "favorites";
  index?: number;
  className?: string;
}

export default function ProductCard({ 
  product, 
  variant = "default",
  index = 0,
  className = ""
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Generate second image by replacing number in filename
  const getSecondImage = (imagePath: string) => {
    if (imagePath.includes(' 1.')) {
      return imagePath.replace(' 1.', ' 2.');
    }
    if (imagePath.includes('_1.')) {
      return imagePath.replace('_1.', '_2.');
    }
    if (imagePath.includes(' 1.png')) {
      return imagePath.replace(' 1.png', ' 2.png');
    }
    if (imagePath.includes(' 1.jpg')) {
      return imagePath.replace(' 1.jpg', ' 2.jpg');
    }
    if (imagePath.includes(' 1.webp')) {
      return imagePath.replace(' 1.webp', ' 2.webp');
    }
    return imagePath;
  };

  const image2 = getSecondImage(product.image);

  // Variant-specific styles
  const getVariantStyles = () => {
    switch (variant) {
      case "scroll":
        return {
          container: "bg-white border-r border-black/10 last:border-r-0",
          imageContainer: "aspect-[3/4] bg-[#f8f6f3] relative overflow-hidden",
          name: "truncate text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] font-light uppercase tracking-[0.1em] sm:tracking-[0.12em] md:tracking-[0.15em] text-black hover:text-black/70",
          price: "mt-0.5 sm:mt-1 md:mt-1.5 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] font-light text-neutral-500",
          padding: "px-2 sm:px-3 md:px-4 py-3 sm:py-4 md:py-5 lg:py-6",
          imageTransition: "transition-transform duration-700 ease-out group-hover:scale-105",
          showGradient: false,
          showOutOfStock: false,
        };
      case "favorites":
        return {
          container: "group relative",
          imageContainer: "relative overflow-hidden bg-[#f5f5f5] rounded-2xl aspect-[3/4]",
          name: "truncate text-[13px] font-light uppercase tracking-[0.15em] text-black hover:text-black/70",
          price: "mt-1.5 text-[13px] font-light text-neutral-500",
          padding: "mt-4 sm:mt-5",
          imageTransition: "transition duration-700 ease-out group-hover:scale-105",
          showGradient: false,
          showOutOfStock: false,
        };
      default:
        return {
          container: "group",
          imageContainer: "relative overflow-hidden bg-[#f5f5f5] aspect-[3/4]",
          name: "truncate text-[13px] font-light uppercase tracking-[0.15em] text-black hover:text-black/70",
          price: "mt-1.5 text-[13px] font-light text-neutral-500",
          padding: "mt-3 text-left",
          imageTransition: "transition-transform duration-[1200ms] ease-out group-hover:scale-110",
          showGradient: true,
          showOutOfStock: true,
        };
    }
  };

  const styles = getVariantStyles();

  // Determine which image to show
  const imageToShow = isHovered && !imgError ? image2 : product.image;

  return (
    <div
      className={`${styles.container} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.id}`}>
        <div className={styles.imageContainer}>
          <Image
            src={imageToShow}
            alt={product.name}
            fill
            className={`object-cover ${styles.imageTransition}`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={index < 3}
            onError={() => setImgError(true)}
          />
          
        
          {/* Out of Stock Badge (Default variant only) */}
          {styles.showOutOfStock && !product.inStock && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-black/60 text-[10px] font-medium tracking-[0.15em] uppercase">
              Out of Stock
            </div>
          )}
        </div>
      </Link>

      {/* Product Description - Only Name and Price */}
      <div className={styles.padding}>
        <Link href={`/products/${product.id}`}>
          <h3 className={styles.name}>
            {product.name}
          </h3>
        </Link>

        <p className={styles.price}>
          QAR {product.price}
        </p>
      </div>
    </div>
  );
}