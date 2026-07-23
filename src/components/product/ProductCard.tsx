"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: any) {
  const { addToCart } = useCart();

  return (
    <div className="group">

      <Link href={`/products/${product.id}`}>

        <div className="overflow-hidden rounded-xl">

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-105"
          />

        </div>

        <h3 className="mt-5 text-xl text-white">
          {product.name}
        </h3>

        <p className="text-[#C9A96E] text-lg mt-2">
          ${product.price}
        </p>

      </Link>

      <button
        onClick={() => addToCart(product)}
        className="mt-5 w-full py-3 border border-[#C9A96E] text-white hover:bg-[#C9A96E] hover:text-black transition"
      >
        Add to Collection
      </button>

    </div>
  );
}