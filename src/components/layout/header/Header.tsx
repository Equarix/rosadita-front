"use client";
import { FaDove, FaBars } from "react-icons/fa";
import Button from "@/components/ui/button/Button";
import { HeaderLinks } from "./HeaderLinks";
import { useResponsiveHeader } from "../header/useResponsiveHeader";

export default function Header() {
  const { isDesktop, open, toggleMenu, closeMenu } = useResponsiveHeader();

  return (
    <header className="relative flex z-10 w-full py-4 px-6 justify-between items-center border-b border-gray-200 bg-white">
      <span className="flex items-center gap-2 font-semibold text-xl">
        <FaDove className="text-blue-500" />
        Equarix
      </span>

      {isDesktop && <HeaderLinks />}

      <div className="flex items-center gap-4">
        <Button>Cotizar Servicio</Button>

        {!isDesktop && (
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-gray-100 transition"
          >
            <FaBars className="text-xl" />
          </button>
        )}
      </div>

      {!isDesktop && open && (
        <div className="absolute z-500 top-full right-6 mt-3 w-56 rounded-xl bg-white shadow-lg border border-gray-200 p-4">
          <HeaderLinks vertical />
        </div>
      )}
    </header>
  );
}
