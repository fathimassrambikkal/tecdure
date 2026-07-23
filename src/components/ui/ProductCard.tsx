// components/ui/ProductCard.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { HeartIcon } from "@/components/icons/Icons";
import { useWishlistStore } from "@/store/wishlistStore";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "scroll" | "favorites" | "luxury";
  index?: number;
  className?: string;
  priority?: boolean;
}

export default function ProductCard({ 
  product, 
  variant = "default",
  index = 0,
  className = "",
  priority = false
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleFavorite = useWishlistStore((state) => state.toggleFavorite);
  const isFavorite = useWishlistStore((state) => state.isFavorite);
  const isFav = isFavorite(product.id);

  // Generate multiple image variants with sophisticated pattern matching
  const getImageVariants = (imagePath: string) => {
    const baseName = imagePath.replace(/\s*\d+\.[^.]+$/, '');
    const extension = imagePath.split('.').pop();
    const variants = [imagePath];
    
    // Try to find up to 4 images
    for (let i = 2; i <= 4; i++) {
      const variant = `${baseName} ${i}.${extension}`;
      variants.push(variant);
    }
    
    return variants;
  };

  const imageVariants = getImageVariants(product.image);
  const currentImage = imageVariants[currentImageIndex] || product.image;

  // Handle auto-rotation for luxury variant
  useEffect(() => {
    if (variant === "luxury" && isHovered && imageVariants.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % imageVariants.length);
      }, 2500);
      
      return () => clearInterval(interval);
    }
  }, [isHovered, imageVariants.length, variant]);

  // Handle hover with delay for better UX
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
      if (variant !== "luxury") {
        setCurrentImageIndex(0);
      }
    }, 150);
  };

  // Variant-specific styles with premium enhancements
  const getVariantStyles = () => {
    switch (variant) {
      case "luxury":
        return {
          container: "group relative bg-[#FAFAFA] rounded-[2px] transition-all duration-700 hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)]",
          imageContainer: "relative overflow-hidden bg-[#F5F3F0] aspect-[3/4] rounded-[2px]",
          name: "font-light tracking-[0.2em] text-[clamp(10px,1.2vw,20px)] text-[#1A1A1A] hover:text-[#8B7355] transition-colors duration-500 uppercase",
          price: "mt-2 font-light tracking-[0.1em] text-[clamp(10px,1.2vw,20px)] text-[#8B7355]",
          padding: "mt-[clamp(12px,2vw,32px)] px-[clamp(4px,0.5vw,8px)]",
          imageTransition: "transition-all duration-[1500ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105",
          showGradient: true,
          showOutOfStock: true,
          showWishlist: true,
          showColors: true,
          showQuickView: true,
          showImageCounter: true,
          gradientClass: "bg-gradient-to-t from-black/40 via-transparent to-transparent",
          badgeClass: "bg-[#8B7355] text-white text-[10px] tracking-[0.2em] px-6 py-2 uppercase",
          overlayClass: "absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700",
        };
      case "scroll":
        return {
          container: "bg-white border-r border-black/5 last:border-r-0 transition-all duration-500 hover:bg-[#FAFAFA]",
          imageContainer: "aspect-[3/4] bg-[#F5F3F0] relative overflow-hidden rounded-[2px]",
          name: "font-light tracking-[0.15em] text-[clamp(8px,1.2vw,18px)] text-[#1A1A1A] hover:text-[#8B7355] transition-colors duration-500 uppercase",
          price: "mt-1 text-[clamp(8px,1.2vw,18px)] font-light text-[#8B7355]",
          padding: "px-[clamp(6px,1vw,20px)] py-[clamp(8px,1.2vw,24px)]",
          imageTransition: "transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105",
          showGradient: false,
          showOutOfStock: false,
          showWishlist: true,
          showColors: false,
          showQuickView: false,
          showImageCounter: false,
          gradientClass: "",
          badgeClass: "",
          overlayClass: "",
        };
      case "favorites":
        return {
          container: "group relative transition-all duration-500 hover:-translate-y-1",
          imageContainer: "relative overflow-hidden bg-[#F5F3F0] rounded-[12px] aspect-[3/4]",
          name: "font-light tracking-[0.18em] text-[clamp(11px,1.4vw,22px)] text-[#1A1A1A] hover:text-[#8B7355] transition-colors duration-500 uppercase",
          price: "mt-1.5 text-[clamp(11px,1.4vw,22px)] font-light text-[#8B7355]",
          padding: "mt-[clamp(12px,1.5vw,28px)] px-[clamp(4px,0.5vw,8px)]",
          imageTransition: "transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105",
          showGradient: false,
          showOutOfStock: false,
          showWishlist: true,
          showColors: false,
          showQuickView: false,
          showImageCounter: false,
          gradientClass: "",
          badgeClass: "",
          overlayClass: "",
        };
      default:
        return {
          container: "group relative transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)]",
          imageContainer: "relative overflow-hidden bg-[#F5F3F0] aspect-[3/4] rounded-[2px]",
          name: "font-light tracking-[0.18em] text-[clamp(11px,1.4vw,22px)] text-[#1A1A1A] hover:text-[#8B7355] transition-colors duration-500 uppercase",
          price: "mt-1.5 text-[clamp(11px,1.4vw,22px)] font-light text-[#8B7355]",
          padding: "mt-[clamp(12px,1.5vw,28px)] px-[clamp(4px,0.5vw,8px)]",
          imageTransition: "transition-all duration-[1500ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110",
          showGradient: true,
          showOutOfStock: true,
          showWishlist: true,
          showColors: false,
          showQuickView: false,
          showImageCounter: false,
          gradientClass: "bg-gradient-to-t from-black/40 via-transparent to-transparent",
          badgeClass: "bg-[#8B7355] text-white text-[10px] tracking-[0.2em] px-5 py-1.5 uppercase",
          overlayClass: "absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700",
        };
    }
  };

  const styles = getVariantStyles();

  // Premium heart button styles
  const getHeartButtonStyles = () => ({
    container: `
      absolute 
      top-[clamp(8px,1.5vw,28px)] 
      right-[clamp(8px,1.5vw,28px)] 
      z-20
      flex items-center justify-center
      w-[clamp(36px,4.5vw,56px)] 
      h-[clamp(36px,4.5vw,56px)] 
      rounded-full
      backdrop-blur-md
      bg-white/10
      hover:bg-white/20
      transition-all duration-500
      hover:scale-110
      active:scale-95
      border border-white/10
      shadow-[0_4px_20px_rgba(0,0,0,0.05)]
    `,
    icon: `
      h-[clamp(16px,2vw,24px)] 
      w-[clamp(16px,2vw,24px)] 
      transition-all duration-500
      ${isFav 
        ? 'text-[#C9A96E] fill-[#C9A96E]' 
        : 'text-white/90 hover:text-white'
      }
      drop-shadow-md
    `
  });

  const heartStyles = getHeartButtonStyles();

  // Handle image change with fade effect
  const [imageKey, setImageKey] = useState(0);
  
  useEffect(() => {
    setImageKey(prev => prev + 1);
  }, [currentImage]);

  return (
    <div
      className={`${styles.container} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        opacity: 0,
        animation: `fadeInUp 0.6s ease forwards ${index * 0.05}s`
      }}
    >
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>

      <div className={styles.imageContainer}>
        <Link href={`/products/${product.id}`} className="block h-full w-full">
          <div className="relative h-full w-full">
            <Image
              key={imageKey}
              src={currentImage}
              alt={`${product.name} - Premium Collection`}
              fill
              className={`object-cover ${styles.imageTransition} ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              sizes="(max-width: 250px) 250px, (max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1920px) 33vw, 25vw"
              priority={priority || index < 3}
              quality={95}
              onError={() => setImgError(true)}
              onLoadingComplete={() => setImageLoaded(true)}
              style={{ transition: 'opacity 0.5s ease' }}
            />
            
            {/* Skeleton loader */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5F3F0] via-[#EDEAE6] to-[#F5F3F0] animate-pulse" />
            )}
          </div>

          {/* Premium Gradient Overlay */}
          {styles.showGradient && (
            <div className={`absolute inset-0 ${styles.gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
          )}

          {/* Subtle Hover Overlay */}
          {styles.overlayClass && (
            <div className={styles.overlayClass} />
          )}

          {/* Out of Stock Badge - Premium Style */}
          {styles.showOutOfStock && !product.inStock && (
            <div 
              className="absolute top-[clamp(12px,2vw,32px)] left-[clamp(12px,2vw,32px)] z-10"
              style={{
                animation: 'slideInLeft 0.5s ease forwards'
              }}
            >
              <div className={`${styles.badgeClass} backdrop-blur-sm`}>
                Out of Stock
              </div>
            </div>
          )}

          {/* Quick Shop Indicator - Luxury Only */}
          {styles.showQuickView && isHovered && product.inStock && (
            <div 
              className="absolute bottom-[clamp(16px,2.5vw,40px)] left-1/2 -translate-x-1/2 z-10"
              style={{
                animation: 'fadeInUp 0.3s ease forwards'
              }}
            >
              <div className="bg-white/90 backdrop-blur-md text-[#1A1A1A] text-[10px] tracking-[0.25em] px-8 py-3 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-white/20 hover:bg-white transition-colors duration-300 cursor-pointer">
                Quick View
              </div>
            </div>
          )}
        </Link>

        {/* Premium Wishlist Button */}
        {styles.showWishlist && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleFavorite(product.id);
            }}
            aria-label={isFav ? "Remove from favourites" : "Add to favourites"}
            className={heartStyles.container}
          >
            <HeartIcon
              filled={isFav}
              className={heartStyles.icon}
            />
          </button>
        )}

        {/* Image Counter - Luxury Only */}
        {styles.showImageCounter && imageVariants.length > 1 && isHovered && (
          <div 
            className="absolute bottom-[clamp(12px,1.5vw,24px)] right-[clamp(12px,1.5vw,24px)] z-10"
            style={{
              animation: 'fadeIn 0.3s ease forwards'
            }}
          >
            <div className="text-white/80 text-[10px] tracking-[0.15em] bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
              {currentImageIndex + 1} / {imageVariants.length}
            </div>
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className={styles.padding}>
        <Link href={`/products/${product.id}`} className="block group/link">
          <div className="flex items-start justify-between">
            <h3 className={styles.name}>
              {product.name}
            </h3>
            
            {/* Decorative Line - Luxury Only */}
            {variant === "luxury" && (
              <div 
                className="hidden sm:block h-px bg-[#8B7355]/20 mt-3 transition-all duration-700"
                style={{ 
                  width: isHovered ? '32px' : '0px',
                  transition: 'width 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              />
            )}
          </div>
        </Link>

        <p className={styles.price}>
          QAR {product.price.toLocaleString()}
        </p>

        {/* Color Palette - Luxury Only */}
        {styles.showColors && product.colors && product.colors.length > 0 && (
          <div className="flex gap-2 mt-3">
            {product.colors.slice(0, 4).map((color, idx) => (
              <div
                key={idx}
                className="w-3 h-3 rounded-full border border-black/5 hover:scale-110 transition-transform duration-300 cursor-pointer"
                style={{ backgroundColor: color }}
                title={`Color ${idx + 1}`}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-[10px] text-[#8B7355] tracking-[0.1em] ml-1 self-center">
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}