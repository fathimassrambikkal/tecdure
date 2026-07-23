"use client";

import { Toaster } from "sonner";

export default function Toast() {
  return (
    <Toaster
      position="top-center"
      richColors={false}
      duration={3000}
      closeButton={false}
      expand={false}
      toastOptions={{
        className:
          "!bg-black/30 !backdrop-blur-lg !text-white !border !border-white/15 !rounded-md !shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] !px-3 xs:!px-4 sm:!px-5 md:!px-6 !py-3.5 xs:!py-4 sm:!py-5 !font-sans",
        classNames: {
          toast:
            "!bg-black/30 !backdrop-blur-lg !text-white !border !border-white/15 !rounded-md !shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] !px-3 xs:!px-4 sm:!px-5 md:!px-6 !py-3.5 xs:!py-4 sm:!py-5 !font-sans",

          title:
            "!text-[11px] xs:!text-xs sm:!text-[13px] md:!text-sm !font-medium !tracking-[0.12em] !uppercase !text-white !leading-tight",

          description:
            "!text-[10px] xs:!text-[11px] sm:!text-xs md:!text-[13px] !font-normal !text-white/85 !leading-relaxed !mt-1",

          icon: "!hidden",

          actionButton:
            "!text-[10px] xs:!text-[11px] sm:!text-xs !uppercase !tracking-[0.12em] !font-medium !text-white/90 hover:!text-white !transition-colors !duration-300",

          cancelButton:
            "!text-[10px] xs:!text-[11px] sm:!text-xs !uppercase !tracking-[0.12em] !font-medium !text-white/60 hover:!text-white/90 !transition-colors !duration-300",

          error:
            "!border-white/15 !bg-black/30 !backdrop-blur-lg !text-white",

          success:
            "!border-white/15 !bg-black/30 !backdrop-blur-lg !text-white",

          warning:
            "!border-white/15 !bg-black/30 !backdrop-blur-lg !text-white",

          info:
            "!border-white/15 !bg-black/30 !backdrop-blur-lg !text-white",
        },
      }}
    />
  );
}