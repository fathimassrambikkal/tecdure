"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

// Sample Instagram posts data with actual images from public folder
const instagramPosts = [
  { id: 1, image: "/images/1.webp" },
  { id: 2, image: "/images/2.webp" },
  { id: 3, image: "/images/3.jpg" },
  { id: 4, image: "/images/4.webp" },
  { id: 5, image: "/images/5.jpg" },
  { id: 6, image: "/images/6.webp" },
  { id: 7, image: "/images/7.webp" },
  { id: 8, image: "/images/8.webp" },
  { id: 9, image: "/images/9.jpg" },
  { id: 10, image: "/images/10.jpg" },
];

// Duplicate posts for seamless infinite scroll
const duplicatedPosts = [...instagramPosts, ...instagramPosts];

// Different aspect ratios for variety
const getAspectRatio = (index: number) => {
  const ratios = [
    "aspect-square",
    "aspect-[4/5]",
    "aspect-[5/4]",
    "aspect-[3/4]",
    "aspect-[4/3]",
  ];
  return ratios[index % ratios.length];
};

export default function InstagramSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll animation
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let startTime: number;
    const duration = 25000;

    const scroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;

      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const scrollPosition = (progress % 1) * maxScroll;
      scrollContainer.scrollLeft = scrollPosition;

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="py-16 px-6 bg-white relative z-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-gray-800 text-3xl md:text-4xl font-light tracking-wide mb-2">
            Instagram
          </h2>

    

          {/* @tecdure text */}
          <Link
            href="https://www.instagram.com/tecdure?igsh=eHI1Y2xqOHNibDNx&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-gray-400 text-sm tracking-[0.3em] uppercase hover:text-gray-600 transition-colors duration-300 font-light"
          >
            @tecdure
          </Link>
        </div>

        {/* Single Row Infinite Scroll */}
        <div
          ref={scrollRef}
          className="relative overflow-x-auto overflow-y-hidden hide-scrollbar"
          style={{
            scrollBehavior: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="grid grid-flow-col auto-cols-[160px] sm:auto-cols-[180px] md:auto-cols-[220px] lg:auto-cols-[260px] xl:auto-cols-[280px] gap-3 md:gap-4">
            {duplicatedPosts.map((post, index) => (
              <Link
                key={`${post.id}-${index}`}
                href="https://www.instagram.com/tecdure?igsh=eHI1Y2xqOHNibDNx&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative ${getAspectRatio(
                  index
                )} overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 ease-out`}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={post.image}
                    alt={`Instagram post ${post.id}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 160px, (max-width: 768px) 180px, (max-width: 1024px) 220px, (max-width: 1280px) 260px, 280px"
                  />
                </div>

                {/* Subtle dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}