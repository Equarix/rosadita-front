"use client";

import { useState } from "react";
import {
  HeaderComponent as IHeaderComponent,
  TypeHeader,
} from "@/interface/component.interface";
import clsx from "clsx";
import Link from "next/link";
import { FaDove } from "react-icons/fa";
import { LuArrowLeft, LuMenu, LuX } from "react-icons/lu";

export default function HeaderComponent({
  proyectName,
  proyectIcon,
  isFixed,
  type = TypeHeader.TYPE_ONE,
  items,
  buttons,
}: IHeaderComponent) {
  const [isOpen, setIsOpen] = useState(false);
  const headerType = type || TypeHeader.TYPE_ONE;
  const hasMenu = (items && items.length > 0) || (buttons && buttons.length > 0);

  return (
    <>
      {isFixed && <div className="h-16 sm:h-20 w-full" aria-hidden="true" />}
      <header
        className={clsx(
          "w-full z-50 transition-all duration-300",
          isFixed ? "fixed top-0 left-0 right-0 py-2 sm:py-3" : "relative",
          headerType === TypeHeader.TYPE_TWO
            ? "px-3 sm:px-6 lg:px-8"
            : "bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-100",
        )}
      >
        <div
          className={clsx(
            "mx-auto transition-all duration-300",
            headerType === TypeHeader.TYPE_TWO
              ? "w-full md:max-w-fit bg-white/95 backdrop-blur-md rounded-2xl md:rounded-full border border-gray-200/80 shadow-md px-4 sm:px-6"
              : "max-w-[1400px] px-4 sm:px-6 lg:px-8",
          )}
        >
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 gap-3 sm:gap-8">
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <Link
                href={"/"}
                className="flex items-center gap-1.5 hover:opacity-80 transition-opacity p-1"
                aria-label="Volver"
              >
                <LuArrowLeft className="text-lg text-gray-700" />
                <FaDove className="text-blue-500 text-lg" />
              </Link>

              {proyectIcon ? (
                <img
                  src={proyectIcon}
                  alt={`${proyectName || "Project"} icon`}
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                />
              ) : (
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-lime-400 flex items-center justify-center font-black text-black text-xs sm:text-sm">
                  {proyectName?.charAt(0) || "H"}
                </div>
              )}
              {headerType === TypeHeader.TYPE_ONE && (
                <h1 className="text-base sm:text-xl font-bold text-gray-900 truncate max-w-[140px] sm:max-w-xs">
                  {proyectName}
                </h1>
              )}
            </div>

            {/* Desktop Navigation Items */}
            {items && items.length > 0 && (
              <nav className="hidden md:flex items-center gap-6 sm:gap-8">
                {items.map((item) => (
                  <a
                    key={item.key}
                    href={`#${item.key}`}
                    className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors whitespace-nowrap"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            )}

            {/* Desktop Buttons */}
            {buttons && buttons.length > 0 && (
              <div className="hidden md:flex items-center gap-3 shrink-0">
                {buttons.map((btn, index) => {
                  const isPrimary = index === buttons.length - 1;

                  return (
                    <a
                      key={btn.key}
                      href={btn.link || "#"}
                      target={btn.isExternal ? "_blank" : undefined}
                      rel={btn.isExternal ? "noopener noreferrer" : undefined}
                      className={clsx(
                        "px-5 py-2 rounded-full font-medium text-sm transition-colors duration-200 whitespace-nowrap",
                        isPrimary
                          ? headerType === TypeHeader.TYPE_TWO
                            ? "bg-[#1f242d] hover:bg-[#111827] text-white shadow-xs"
                            : "bg-[#8b5cf6] hover:bg-[#7c3aed] text-white shadow-sm"
                          : "border border-gray-300 text-gray-700 hover:bg-gray-50",
                      )}
                    >
                      {btn.name}
                    </a>
                  );
                })}
              </div>
            )}

            {/* Mobile Hamburger Button */}
            {hasMenu && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Abrir menú"
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors md:hidden"
              >
                {isOpen ? <LuX className="text-xl" /> : <LuMenu className="text-xl" />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && hasMenu && (
          <div className="md:hidden mt-2 w-full max-w-sm mx-auto bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200/80 shadow-xl p-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            {items && items.length > 0 && (
              <nav className="flex flex-col gap-1">
                {items.map((item) => (
                  <a
                    key={item.key}
                    href={`#${item.key}`}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-blue-600 font-medium text-sm py-2 px-3 rounded-lg hover:bg-gray-100/80 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            )}
            {buttons && buttons.length > 0 && (
              <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
                {buttons.map((btn, index) => {
                  const isPrimary = index === buttons.length - 1;

                  return (
                    <a
                      key={btn.key}
                      href={btn.link || "#"}
                      onClick={() => setIsOpen(false)}
                      target={btn.isExternal ? "_blank" : undefined}
                      rel={btn.isExternal ? "noopener noreferrer" : undefined}
                      className={clsx(
                        "w-full text-center px-4 py-2.5 rounded-xl font-medium text-sm transition-colors duration-200",
                        isPrimary
                          ? "bg-[#1f242d] hover:bg-[#111827] text-white shadow-xs"
                          : "border border-gray-300 text-gray-700 hover:bg-gray-50",
                      )}
                    >
                      {btn.name}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </header>
    </>
  );
}

