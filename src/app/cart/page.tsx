// app/cart/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

import { useCartStore } from "@/store/cartStore";
import { getPriceNumber, formatPrice } from "@/store/checkoutStore";
import {
  CloseIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  CheckIcon,
} from "@/components/icons/Icons";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const subtotal = cart.reduce((sum, item) => {
    return sum + getPriceNumber(item.price) * item.quantity;
  }, 0);

  const shipping = cart.length > 0 ? 25 : 0;
  const total = subtotal + shipping;

  return (
    <>
   
      <section className="min-h-screen bg-white  px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] uppercase text-center text-black">
              Shopping Cart
            </h1>
            <p className="text-center text-black/40 text-xs sm:text-sm tracking-[0.15em] uppercase mt-3">
              {cart.length} {cart.length === 1 ? 'item' : 'items'} in your bag
            </p>
          </div>

          {cart.length === 0 ? (
            <div className="max-w-md mx-auto text-center py-12 sm:py-16 md:py-20">
              {/* Empty State Illustration */}
              <div className="relative mb-8 sm:mb-10">
                <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-black/[0.03] flex items-center justify-center">
                  <ShoppingBagIcon className="w-10 h-10 sm:w-12 sm:h-12 text-black/20" />
                </div>
              </div>

              {/* Empty State Text */}
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl font-light tracking-[0.15em] uppercase text-black">
                  Your cart is empty
                </h2>
                <p className="text-black/40 text-sm sm:text-base font-light leading-relaxed max-w-xs mx-auto">
                  Discover our curated collection of premium products
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-8 sm:mt-10">
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-2.5 border border-black/20 hover:border-black text-black/60 hover:text-black px-10 sm:px-12 py-3.5 sm:py-4 uppercase tracking-[0.2em] text-[11px] sm:text-xs font-light transition-all duration-300 hover:bg-black hover:text-white"
                >
                  <span>Explore Collection</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Subtle Decorative Line */}
              <div className="mt-10 sm:mt-12 flex items-center justify-center gap-4">
                <span className="w-12 h-px bg-black/10" />
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] text-black/20 font-light">
                  Start Shopping
                </span>
                <span className="w-12 h-px bg-black/10" />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                    className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 border-b border-black/10 pb-4 sm:pb-6 hover:border-black/30 transition-all duration-300"
                  >
                    {/* Product Image */}
                    <div className="relative w-full sm:w-20 h-20 md:w-24 md:h-24 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 w-full">
                      <h3 className="font-light text-base sm:text-lg tracking-wide uppercase text-black">
                        {item.name}
                      </h3>
                      <p className="text-black/30 text-[10px] sm:text-xs mt-1 uppercase tracking-[0.15em]">
                        {item.category}
                      </p>
                      <div className="flex flex-wrap gap-3 sm:gap-4 mt-2 text-black/40 text-[10px] sm:text-xs uppercase tracking-wider">
                        {item.selectedSize && (
                          <span className="flex items-center gap-1">
                            <span className="text-black/20">Size</span>
                            {item.selectedSize}
                          </span>
                        )}
                        {item.selectedColor && (
                          <span className="flex items-center gap-1">
                            <span className="text-black/20">Color</span>
                            <span 
                              className="inline-block w-3 h-3 rounded-full border border-black/10"
                              style={{ backgroundColor: item.selectedColor.toLowerCase() }}
                            />
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                      <div className="flex items-center border border-black/20 rounded-full">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="p-1.5 sm:p-2 text-black/40 hover:text-black transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <MinusIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        <span className="w-8 text-center text-xs sm:text-sm text-black">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="p-1.5 sm:p-2 text-black/40 hover:text-black transition-colors"
                          aria-label="Increase quantity"
                        >
                          <PlusIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </div>

                      <div className="text-right min-w-[60px] sm:min-w-[80px]">
                        <p className="text-black font-medium text-sm sm:text-base">
                          {formatPrice(item.price)}
                        </p>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-black/20 hover:text-black/60 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <CloseIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="bg-black/[0.02] border border-black/10 rounded-2xl p-6 sm:p-8 h-fit">
                <h2 className="font-light uppercase tracking-[0.2em] text-base sm:text-lg mb-6 text-black">
                  Order Summary
                </h2>

                <div className="space-y-3 text-sm text-black/60">
                  <div className="flex justify-between py-2">
                    <span className="tracking-wide">Subtotal</span>
                    <span className="font-light">QAR {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-t border-black/5">
                    <span className="tracking-wide">Shipping</span>
                    <span className="font-light">
                      {shipping > 0 ? `QAR ${shipping.toFixed(2)}` : 'Free'}
                    </span>
                  </div>
                </div>

                <div className="border-t border-black/10 mt-4 pt-4 flex justify-between text-black text-base sm:text-lg">
                  <span className="font-light tracking-wide">Total</span>
                  <span className="font-medium">QAR {total.toFixed(2)}</span>
                </div>

                <Link
                  href="/checkout"
                  className="mt-6 sm:mt-8 flex items-center justify-center gap-2 w-full bg-black text-white py-3.5 sm:py-4 px-4 uppercase tracking-[0.15em] text-[10px] sm:text-xs font-light hover:bg-black/90 transition-all duration-300 rounded-full group"
                >
                  Proceed to Checkout
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>

                <Link
                  href="/products"
                  className="mt-3 flex items-center justify-center gap-2 text-black/40 hover:text-black text-[10px] sm:text-xs uppercase tracking-[0.2em] transition-colors"
                >
                  <ArrowLeftIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  Continue Shopping
                </Link>

                {/* Trust Badge */}
                <div className="mt-6 sm:mt-8 pt-6 border-t border-black/5">
                  <div className="flex items-center justify-center gap-4 text-black/30 text-[8px] sm:text-[10px] uppercase tracking-[0.2em]">
                    <span className="flex items-center gap-1.5">
                      <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                      Secure Checkout
                    </span>
                    <span className="w-px h-4 bg-black/10" />
                    <span className="flex items-center gap-1.5">
                      <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                      Free Returns
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
   
    </>
  );
}