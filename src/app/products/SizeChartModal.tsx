"use client";

interface SizeChartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const sizeChartData = {
  title: "SIZE GUIDE",
  subtitle: "Women's Wear",
  description: "Below are key body measurements to help you determine your best size.",
  sizes: [
    { size: "S", uk: "8-10", us: "4-6" },
    { size: "M", uk: "12-14", us: "8-10" },
    { size: "L", uk: "16-18", us: "12-14" },
    { size: "XL", uk: "20-22", us: "16-18" }
  ]
};

export default function SizeChartModal({ isOpen, onClose }: SizeChartModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl border border-[#D4AF37]/20 bg-white p-8 sm:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">Fit Reference</p>
            <h2 className="font-serif text-3xl sm:text-4xl tracking-wide text-black">{sizeChartData.title}</h2>
            <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.28em] text-[#8A7A5C]">{sizeChartData.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close size guide"
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-black/10 text-black/35 transition-all duration-300 hover:border-[#D4AF37]/60 hover:text-black hover:rotate-90 hover:bg-[#D4AF37]/5"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="mb-8 text-sm leading-relaxed text-black/50">{sizeChartData.description}</p>

        <div className="overflow-hidden rounded-2xl border border-black/8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#D4AF37]/20 bg-gradient-to-r from-black to-[#1a1714]">
                <th className="px-4 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">Size</th>
                <th className="px-4 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">UK</th>
                <th className="px-4 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">US</th>
              </tr>
            </thead>
            <tbody>
              {sizeChartData.sizes.map((item) => (
                <tr
                  key={item.size}
                  className="border-b border-black/6 transition-colors hover:bg-[#D4AF37]/8 last:border-0"
                >
                  <td className="px-4 py-4 font-medium text-black">{item.size}</td>
                  <td className="px-4 py-4 text-black/55">{item.uk}</td>
                  <td className="px-4 py-4 text-black/55">{item.us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 border-t border-black/8 pt-6 text-center">
          <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-black/20">tecdure.com</p>
        </div>
      </div>
    </div>
  );
}