"use client";

import { useState } from "react";
import { toast } from "sonner";
import {
  HeartIcon,
  CartIcon,
  CheckIcon,
} from "@/components/icons/Icons";

import type { Product } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

interface ProductButtonProps {
  product: Product;
  onSizeGuideClick: () => void;
  onMeasurementsClick: () => void;
}

export default function ProductButton({ 
  product, 
  onSizeGuideClick, 
  onMeasurementsClick 
}: ProductButtonProps) {

  const addToCart = useCartStore((state) => state.addToCart);
  const toggleFavorite = useWishlistStore((state) => state.toggleFavorite);
  const isFavorite = useWishlistStore((state) => state.isFavorite);
  const isFav = isFavorite(product?.id || 0);

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "M");
  const [selectedColor] = useState(product.colors?.[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize, selectedColor);
    }

    setIsAddedToCart(true);

    toast.success("Added to Collection", {
      description: `${product.name} has been added successfully.`,
      duration: 3000,
    });

    setTimeout(() => {
      setIsAddedToCart(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col pt-1 lg:pt-2">
      {/* Category Label */}
      <p className="mb-3.5 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#C9A96E]">
        {product.category}
      </p>

      {/* Product Name */}
      <h1 className="font-serif leading-[1.05] tracking-tight text-black" 
          style={{ fontSize: "clamp(1.9rem, 1.3rem + 2.6vw, 3.5rem)" }}>
        {product.name}
      </h1>

      {/* Product Price */}
      <div className="mt-6 flex flex-wrap items-baseline gap-3.5">
        <span className="font-serif font-light tracking-wide text-black" 
              style={{ fontSize: "clamp(1.5rem, 1.2rem + 1vw, 2.25rem)" }}>
          {product.price} <span className="text-[0.5em] font-sans font-medium tracking-[0.15em] text-[#8A7A5C]">QAR</span>
        </span>
      </div>

      <div className="my-7 h-px w-full bg-gradient-to-r from-[#C9A96E]/60 via-[#C9A96E]/20 to-transparent" />

      {/* Product Description */}
      <p className="max-w-prose text-sm font-light leading-7 tracking-wide text-black/55 sm:text-[15px]">
        {product.description}
      </p>

      {/* Size Guide & Measurements Buttons */}
      <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
        {/* Size Guide Button */}
        <button
          onClick={onSizeGuideClick}
          className="group flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-black/70 transition-colors duration-300 hover:text-[#C9A96E]"
          aria-label="Open size guide"
        >
          <svg className="h-3.5 w-3.5 text-[#C9A96E] transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Size Guide
          <span className="h-px w-0 bg-[#C9A96E] transition-all duration-300 group-hover:w-3" />
        </button>

        {/* Measurements Button */}
        <button
          onClick={onMeasurementsClick}
          className="group flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-black/70 transition-colors duration-300 hover:text-[#C9A96E]"
          aria-label="Open measurements guide"
        >
          <svg className="h-3.5 w-3.5 text-[#C9A96E] transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          Measurements
          <span className="h-px w-0 bg-[#C9A96E] transition-all duration-300 group-hover:w-3" />
        </button>
      </div>

      {/* Size Selection */}
      <div className="mt-9 border-t border-black/8 pt-8">
        <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-black/35">
          Select Size
        </h3>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 text-xs font-medium rounded-full border transition-all duration-300 ${
                selectedSize === size
                  ? "border-black bg-black text-white"
                  : "border-black/15 text-black/60 hover:border-black/40 hover:text-black"
              }`}
              aria-label={`Select size ${size}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity & Add to Cart */}
      <div className="mt-9 border-t border-black/8 pt-7">
        <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center">
          {/* Quantity Controls */}
          <div className="flex w-fit items-center gap-1 self-start rounded-xl border border-black/12 bg-white/50 p-1 sm:self-auto">
            {/* Decrease Quantity Button */}
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              aria-label="Decrease quantity"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-black/55 transition-all duration-300 hover:bg-black/5 hover:text-black"
            >
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
              </svg>
            </button>

            {/* Quantity Display */}
            <span className="min-w-[1.6rem] text-center font-mono text-base font-light tracking-wider text-black">
              {String(quantity).padStart(2, "0")}
            </span>

            {/* Increase Quantity Button */}
            <button
              onClick={() => setQuantity(quantity + 1)}
              aria-label="Increase quantity"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-black/55 transition-all duration-300 hover:bg-black/5 hover:text-black"
            >
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center gap-3">
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isAddedToCart}
              className={`flex-1 rounded-xl py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300 ${
                isAddedToCart
                  ? "bg-[#C9A96E] text-white"
                  : "bg-black text-white hover:bg-[#1a1714]"
              }`}
              aria-label={isAddedToCart ? "Added to collection" : "Add to collection"}
            >
              <span className="flex items-center justify-center gap-2">
                {isAddedToCart ? (
                  <>
                    <CheckIcon className="h-4 w-4 text-white" />
                    Added to Collection
                  </>
                ) : (
                  <>
                    <CartIcon className="h-3.5 w-3.5 text-[#C9A96E]" />
                    Add to Collection
                  </>
                )}
              </span>
            </button>

            {/* Wishlist/Favorite Button */}
            <button
              onClick={() => {
                if (product) {
                  toggleFavorite(product.id);
                }
              }}
              aria-label={isFav ? "Remove from favourites" : "Add to favourites"}
              className={`flex h-[52px] w-[52px] items-center justify-center rounded-xl border transition-all duration-300 hover:shadow-lg ${
                isFav
                  ? "border-[#C9A96E] bg-[#C9A96E]/10"
                  : "border-black/10 bg-white hover:border-[#C9A96E]"
              }`}
            >
              <HeartIcon
                filled={isFav}
                className={`w-5 h-5 transition-colors duration-300 ${
                  isFav ? "text-[#C9A96E]" : "text-black/70 hover:text-[#C9A96E]"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}