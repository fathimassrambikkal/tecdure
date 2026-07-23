import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-[#121212] py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/about/about.jpg" 
                alt="About Tecdure"
                fill
                className="object-cover"
              />
            </div>

            {/* Rest of your component remains the same */}
            <div className="text-white space-y-6">
              <h1 className="text-4xl md:text-5xl font-serif tracking-widest uppercase">
                Style with Purpose
              </h1>
              
              <p className="text-white/70 leading-relaxed">
                Tecdure promises functional clothing pieces that provide comfort 
                and protection without compromising style and elegance. Sprung 
                from expert understanding of the technical qualities of the 
                selected fabrics, the craft of garment construction, and deeply 
                rooted in art and design, our creations establish harmony and 
                context.
              </p>
              
              <p className="text-white/70 leading-relaxed">
                Each piece of our creations is carefully designed to create a 
                constant interplay between the body microclimate and the outer 
                environment that transcends and empowers. We keep our promises 
                while staying friendly to our environment through sustainable 
                material choices and manufacturing practices.
              </p>
              
              <p className="text-white/90 font-light tracking-wide">
                We believe in <span className="font-serif italic">Style with Purpose</span>, 
                where every piece not only elevates the wearer's look but also 
                supports cultural and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}