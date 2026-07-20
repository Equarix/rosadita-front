import { HeaderComponent as IHeaderComponent } from "@/interface/component.interface";
import clsx from "clsx";

export default function HeaderComponent({
  proyectName,
  proyectIcon,
  isFixed,
  items,
  buttons,
}: IHeaderComponent) {
  return (
    <>
      {isFixed && <div className="h-20 w-full" aria-hidden="true" />}
      <header
        className={clsx(
          "w-full bg-white shadow-sm",
          isFixed ? "fixed top-0 left-0 right-0 z-50" : "relative",
        )}
      >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            {proyectIcon && (
              <img
                src={proyectIcon}
                alt={`${proyectName} icon`}
                className="w-8 h-8 object-contain"
              />
            )}
            <h1 className="text-xl font-bold text-gray-900">{proyectName}</h1>
          </div>

          {/* Navigation Items */}
          {items && items.length > 0 && (
            <nav className="hidden md:flex items-center gap-8">
              {items.map((item) => (
                <a
                  key={item.key}
                  href={`#${item.key}`}
                  className="text-gray-500 hover:text-gray-900 font-medium text-sm transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          )}

          <div className="hidden md:flex items-center gap-4">
            {buttons?.map((btn, index) => {
              const isPrimary = index === buttons.length - 1;

              return (
                <a
                  key={btn.key}
                  href={btn.link || "#"}
                  target={btn.isExternal ? "_blank" : undefined}
                  rel={btn.isExternal ? "noopener noreferrer" : undefined}
                  className={clsx(
                    "px-6 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200",
                    isPrimary
                      ? "bg-[#8b5cf6] hover:bg-[#7c3aed] text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-900",
                  )}
                >
                  {btn.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
    </>
  );
}
