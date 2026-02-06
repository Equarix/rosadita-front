import { useState } from "react";
import { useWidth } from "@/hooks/useWidth";

export function useResponsiveHeader() {
  const width = useWidth();
  const [open, setOpen] = useState(false);

  const isDesktop = width >= 1080;

  function toggleMenu() {
    setOpen((prev) => !prev);
  }

  function closeMenu() {
    setOpen(false);
  }

  return {
    isDesktop,
    open,
    toggleMenu,
    closeMenu,
  };
}
