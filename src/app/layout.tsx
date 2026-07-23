import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
// import Preloader from "@/components/layout/Preloader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Toast from "@/components/ui/Toast";

export const metadata: Metadata = {
  title: "TECDURE | Modern Arabian Luxury",
  description: "Luxury women's clothing with timeless elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body>
        <CartProvider>
          <Navbar />
          <Toast />
          {children}

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
