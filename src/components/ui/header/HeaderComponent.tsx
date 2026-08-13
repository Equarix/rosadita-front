import {
  HeaderComponent as IHeaderComponent,
  TypeHeader,
} from "@/interface/component.interface";
import clsx from "clsx";
import Link from "next/link";
import { FaDove } from "react-icons/fa";
import { LuArrowLeft } from "react-icons/lu";

export default function HeaderComponent({
  proyectName,
  proyectIcon,
  isFixed,
  type = TypeHeader.TYPE_ONE,
  items,
  buttons,
}: IHeaderComponent) {
  const headerType = type || TypeHeader.TYPE_ONE;

  return (
    <>
      {isFixed && <div className="h-20 w-full" aria-hidden="true" />}
      <header
        className={clsx(
          "w-full z-50",
          isFixed ? "fixed top-0 left-0 right-0" : "relative",
          headerType === TypeHeader.TYPE_TWO ? "py-4 px-4 sm:px-6 lg:px-8" : "bg-white shadow-sm",
        )}
      >
        <div
          className={clsx(
            "mx-auto transition-all duration-300",
            headerType === TypeHeader.TYPE_TWO
              ? "max-w-fit bg-white/90 backdrop-blur-md rounded-full border border-gray-200/80 shadow-md px-4 sm:px-6"
              : "max-w-[1400px] px-4 sm:px-6 lg:px-8",
          )}
        >
          <div className="flex items-center justify-between h-16 sm:h-20 gap-4 sm:gap-8">
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href={"/"}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <LuArrowLeft />
                <FaDove className="text-blue-500" />
              </Link>

              {proyectIcon ? (
                <img
                  src={proyectIcon}
                  alt={`${proyectName} icon`}
                  className="w-8 h-8 object-contain"
                />
              ) : (
                <div className="w-8 h-8 rounded-lg bg-lime-400 flex items-center justify-center font-black text-black">
                  {proyectName?.charAt(0) || "H"}
                </div>
              )}
              {headerType === TypeHeader.TYPE_ONE && (
                <h1 className="text-xl font-bold text-gray-900">{proyectName}</h1>
              )}
            </div>

            {/* Navigation Items */}
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
          </div>
        </div>
      </header>
    </>
  );
}
