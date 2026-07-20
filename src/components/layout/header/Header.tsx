"use client";
import { FaDove, FaBars } from "react-icons/fa";
import Button from "@/components/ui/button/Button";
import { HeaderLinks } from "./HeaderLinks";
import { useResponsiveHeader } from "../header/useResponsiveHeader";
import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const { open, toggleMenu } = useResponsiveHeader();
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (pathname.startsWith("/proyectos/detalle/")) {
    return null;
  }

  return (
    <header className="sticky top-0 flex z-100000 w-full py-4 px-6 justify-between items-center border-b border-gray-200 bg-white">
      <Link href="/" className="flex items-center gap-2 font-semibold text-xl hover:opacity-80 transition">
        <FaDove className="text-blue-500" />
        Equarix
      </Link>

      <HeaderLinks />

      <div className="flex items-center gap-4">
        <Button buttonType="link" href="/contacto" className="sm:block hidden">
          Cotizar Servicio
        </Button>

        <button
          onClick={toggleMenu}
          aria-label="Abrir menú de navegación"
          aria-expanded={open}
          className="p-2 rounded-md hover:bg-gray-100 transition lg:hidden block"
        >
          <FaBars className="text-xl" />
        </button>
      </div>

      {open && (
        <div className="absolute lg:hidden z-500 top-full right-6 mt-3 w-56 rounded-xl bg-white shadow-lg border border-gray-200 p-4">
          <HeaderLinks vertical />
        </div>
      )}
    </header>
  );
}
