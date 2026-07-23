// data/products.ts

export interface Product {
  id: number;
  slug: string;
  category: string;
  name: string;
  image: string;
  price: number;
  description: string;
  sizes: string[];
  colors: string[];
  inStock: boolean;
}

export const products: Product[] = [
  // ==========================
  // ABAYAS
  // ==========================
  {
    id: 1,
    slug: "abaya",
    category: "Abayas",
    name: "Majestic Maroon",
    image: "/images/majestic 1.png",
    price: 280,
    description: "Luxury Maroon abaya with elegant draping. Perfect for special occasions.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Maroon"],
    inStock: true,
  },
  {
    id: 2,
    slug: "abaya",
    category: "Abayas",
    name: "Foilage Black",
    image: "/images/Foilage Black 1.jpg",
    price: 250,
    description: "Modern black abaya with foil detailing. A contemporary classic.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    inStock: true,
  },
  {
    id: 3,
    slug: "abaya",
    category: "Abayas",
    name: "Gold Blazer",
    image: "/images/Gold Blazer 1.webp",
    price: 320,
    description: "Statement gold blazer abaya for the modern woman.",
    sizes: ["S", "M", "L"],
    colors: ["Gold", "Black"],
    inStock: true,
  },
  {
    id: 4,
    slug: "abaya",
    category: "Abayas",
    name: "Green Sand",
    image: "/images/Green Sand 1.webp",
    price: 195,
    description: "Subtle green sand abaya with elegant flow and comfort.",
    sizes: ["S", "M", "L"],
    colors: ["Green"],
    inStock: true,
  },
  {
    id: 5,
    slug: "abaya",
    category: "Abayas",
    name: "Urban Eclipse",
    image: "/images/urban eclipse 1.jpg",
    price: 310,
    description: "Urban inspired eclipse design with modern silhouette.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    inStock: true,
  },
  {
    id: 6,
    slug: "abaya",
    category: "Abayas",
    name: "Winter Breeze",
    image: "/images/Winter Breeze 1.jpg",
    price: 270,
    description: "Winter breeze collection with soft, flowing fabric.",
    sizes: ["S", "M", "L"],
    colors: ["Blue"],
    inStock: true,
  },
  {
    id: 7,
    slug: "abaya",
    category: "Abayas",
    name: "Wilde",
    image: "/images/Wilde 1.jpg",
    price: 340,
    description: "Wild-inspired design with bold elegance.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Grey"],
    inStock: true,
  },
  {
    id: 8,
    slug: "abaya",
    category: "Abayas",
    name: "Shimmering Blue",
    image: "/images/shimmering blue 1.jpg",
    price: 230,
    description: "Shimmering blue abaya with luxurious finish.",
    sizes: ["S", "M", "L"],
    colors: ["Blue"],
    inStock: true,
  },
  {
    id: 9,
    slug: "abaya",
    category: "Abayas",
    name: "Shimmering Pink",
    image: "/images/shimmering pink 1.jpg",
    price: 230,
    description: "Shimmering pink abaya with elegant detailing.",
    sizes: ["S", "M", "L"],
    colors: ["Pink"],
    inStock: true,
  },
  {
    id: 10,
    slug: "abaya",
    category: "Abayas",
    name: "Black Pearl",
    image: "/images/black pearl 1.png",
    price: 290,
    description: "Black pearl collection with sophisticated shine.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    inStock: true,
  },
  {
    id: 11,
    slug: "abaya",
    category: "Abayas",
    name: "Gold Lace",
    image: "/images/Gold Lace 1.jpg",
    price: 350,
    description: "Gold lace detailing on premium abaya fabric.",
    sizes: ["S", "M", "L"],
    colors: ["Gold", "Black"],
    inStock: true,
  },
  {
    id: 12,
    slug: "abaya",
    category: "Abayas",
    name: "Golden Leaves",
    image: "/images/Golden Leaves 1.jpg",
    price: 265,
    description: "Golden leaves pattern with elegant draping.",
    sizes: ["S", "M", "L"],
    colors: ["Black"],
    inStock: true,
  },
  

  // ==========================
  // TURBANAS
  // ==========================
  {
    id: 19,
    slug: "turbana",
    category: "Turbanas",
    name: "Classic Turbana Black",
    image: "/images/turbana.jpg",
    price: 180,
    description: "Classic black turbana with premium fabric.",
    sizes: ["One Size"],
    colors: ["Black"],
    inStock: true,
  },
  {
    id: 20,
    slug: "turbana",
    category: "Turbanas",
    name: "Silk Turbana Navy",
    image: "/images/turbana.jpg",
    price: 250,
    description: "Luxury silk turbana in navy blue.",
    sizes: ["One Size"],
    colors: ["Navy", "Black"],
    inStock: true,
  },
  {
    id: 21,
    slug: "turbana",
    category: "Turbanas",
    name: "Embroidered Turbana Gold",
    image: "/images/turbana.jpg",
    price: 220,
    description: "Embroidered gold turbana for special occasions.",
    sizes: ["One Size"],
    colors: ["Gold", "Cream"],
    inStock: true,
  },

  // ==========================
  // DRESSES
  // ==========================
  {
    id: 22,
    slug: "dress",
    category: "Dresses",
    name: "Evening Gown Navy",
    image: "/images/dress.jpg",
    price: 1200,
    description: "Elegant evening gown in deep navy blue.",
    sizes: ["S", "M", "L"],
    colors: ["Navy", "Black"],
    inStock: true,
  },
  {
    id: 23,
    slug: "dress",
    category: "Dresses",
    name: "Cocktail Dress Red",
    image: "/images/dress.jpg",
    price: 890,
    description: "Bold cocktail dress in vibrant red.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Black"],
    inStock: true,
  },
  {
    id: 24,
    slug: "dress",
    category: "Dresses",
    name: "Maxi Dress Floral",
    image: "/images/dress.jpg",
    price: 750,
    description: "Floral maxi dress with flowing silhouette.",
    sizes: ["M", "L", "XL"],
    colors: ["Floral", "Black"],
    inStock: false,
  },
];

// Helper functions
export const getProductById = (id: number): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (slug: string): Product[] => {
  return products.filter(p => p.slug === slug);
};

export const getCategories = (): string[] => {
  const uniqueCategories = new Set(products.map(p => p.slug));
  return Array.from(uniqueCategories);
};

export const getCategoryProducts = (slug: string): Product[] => {
  return products.filter(p => p.slug === slug);
};

export const getUniqueSizes = (): string[] => {
  const sizes = new Set<string>();
  products.forEach(p => p.sizes.forEach(s => sizes.add(s)));
  return Array.from(sizes);
};

export const getUniqueColors = (): string[] => {
  const colors = new Set<string>();
  products.forEach(p => p.colors.forEach(c => colors.add(c)));
  return Array.from(colors);
};