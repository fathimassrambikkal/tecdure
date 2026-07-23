// app/search/page.tsx
"use client";

import SearchOverlay from "@/components/search/SearchOverlay";
import { useRouter } from "next/navigation";

export default function SearchPage() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return <SearchOverlay onClose={handleClose} />;
}