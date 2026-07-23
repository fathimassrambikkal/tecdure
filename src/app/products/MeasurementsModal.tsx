"use client";

import Image from "next/image";

interface MeasurementsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MeasurementsModal({ isOpen, onClose }: MeasurementsModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[#D4AF37]/20 bg-white p-8 sm:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-7 flex items-center justify-between gap-4">
          <div>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">Fit Guide</p>
            <h2 className="font-serif text-3xl sm:text-4xl tracking-wide text-black">Measurements</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-black/10 text-black/35 transition-all duration-300 hover:border-[#D4AF37]/60 hover:text-black hover:rotate-90 hover:bg-[#D4AF37]/5"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Abayas</p>

        <p className="mb-8 text-sm leading-7 text-black/50">
          Use the below guide to determine key measurements for the best Abaya fit. The measurements must be taken from one of your Abayas, not body measurements.
        </p>

        <div className="relative h-[280px] sm:h-[420px] w-full overflow-hidden rounded-2xl border border-black/8 bg-[#F8F5F0]">
          <Image
            src="/images/measurement-guide.jpg"
            alt="Measurement Guide"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}