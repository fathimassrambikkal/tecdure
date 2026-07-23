"use client";

import { Toaster } from "sonner";

export default function Toast() {
  return (
    <Toaster
      position="top-center"
      richColors
      duration={2500}
      closeButton={false}
      expand={false}
      toastOptions={{
        classNames: {
          toast:
            "rounded-xl border border-[#D4AF37]/20 bg-black text-white shadow-2xl",
          title:
            "uppercase tracking-[0.18em] text-[11px] font-medium",
        },
      }}
    />
  );
}