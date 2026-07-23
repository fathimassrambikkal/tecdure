// app/favorites/page.tsx
"use client";

import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";
import { useWishlistStore } from "@/store/wishlistStore";

import { ArrowRightIcon, HeartIcon } from "@/components/icons/Icons";
import { toast } from "@/components/ui/Toast";

export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useWishlistStore();

  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  const showToast = (
    type: "success" | "info",
    title: string,
    description: string
  ) => {
    if (toast && typeof toast[type] === "function") {
      toast[type]({ title, description, duration: 3000 });
    } else {
      console.warn("toast module missing method:", type);
    }
  };

  const handleRemoveFromFavorites = (
    productName: string,
    productId: number
  ) => {
    toggleFavorite(productId);

    showToast(
      "info",
      "Removed from Wishlist",
      `"${productName}" has been removed from your wishlist`
    );
  };

  return (
    <main className="min-h-screen bg-white pt-20 xs:pt-24 pb-12 xs:pb-16 px-3 xs:px-4 sm:px-6 lg:px-8 2xl:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 xs:mb-10 md:mb-16">
          <div className="flex items-center gap-2 xs:gap-3 mb-3 xs:mb-4">
            {/* Header content removed as it was empty */}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 xs:gap-4">
            <div>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-light tracking-tight text-black">
                Saved Items
              </h1>
              <p className="text-gray-400 text-xs xs:text-sm sm:text-base mt-2 font-light">
                {favoriteProducts.length}{" "}
                {favoriteProducts.length === 1 ? "item" : "items"} in your
                wishlist
              </p>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {favoriteProducts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 xs:py-20 sm:py-28 md:py-40 px-2 text-center">
            <div className="relative">
              <div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 rounded-full bg-gray-50 flex items-center justify-center mb-5 xs:mb-6">
                <HeartIcon className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-gray-300" />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 xs:w-6 xs:h-6 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-[9px] xs:text-[10px] text-gray-400">0</span>
              </div>
            </div>

            <h2 className="text-xl xs:text-2xl sm:text-3xl font-light mb-3 text-black">
              Your wishlist is empty
            </h2>

            <p className="text-gray-400 text-xs xs:text-sm sm:text-base mb-8 xs:mb-10 text-center max-w-xs xs:max-w-md">
              Start saving your favorite pieces — they&apos;ll appear here for
              when you&apos;re ready.
            </p>

            <Link
              href="/products"
              className="group inline-flex items-center gap-2 xs:gap-3 bg-black text-white px-6 xs:px-8 sm:px-10 py-3.5 xs:py-4 uppercase tracking-[0.1em] xs:tracking-[0.15em] text-[10px] xs:text-[11px] sm:text-xs hover:bg-neutral-800 transition-all duration-300 whitespace-nowrap"
            >
              <span>Discover Products</span>
              <ArrowRightIcon className="w-3.5 h-3.5 xs:w-4 xs:h-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </Link>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 lg:gap-8 2xl:gap-10">
          {favoriteProducts.map((product, index) => {
            const isFav = favorites.includes(product.id);

            return (
              <div key={product.id} className="flex flex-col min-w-0">
                <ProductCard
                  product={product}
                  variant="favorites"
                  index={index}
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}