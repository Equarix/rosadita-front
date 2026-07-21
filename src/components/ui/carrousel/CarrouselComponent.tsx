"use client";
import { CarrouselComponent as ICarrouselComponent } from "@/interface/component.interface";
import { useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { motion, AnimatePresence } from "motion/react";

export default function CarrouselComponent({
  title,
  subtitle,
  description,
  urls,
}: ICarrouselComponent) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (!urls || urls.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % urls.length);
  };

  const prevImage = () => {
    if (!urls || urls.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + urls.length) % urls.length);
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {subtitle && (
          <span className="text-sm font-bold tracking-widest text-[#8b5cf6] uppercase mb-4 text-center">
            {subtitle}
          </span>
        )}
        {title && (
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 text-center">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-gray-600 text-center text-lg max-w-3xl mb-12">
            {description}
          </p>
        )}

        {urls && urls.length > 0 && (
          <div className="relative w-full max-w-5xl mx-auto rounded-xl shadow-lg border border-gray-200/60 bg-white overflow-hidden">
            <div className="relative w-full aspect-video bg-gray-50 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={urls[currentIndex]}
                  alt={`Pantalla ${currentIndex + 1}`}
                  className="w-full h-full object-cover object-top"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>

            {urls.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg transition-all z-10 focus:outline-none"
                  aria-label="Anterior imagen"
                >
                  <LuChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg transition-all z-10 focus:outline-none"
                  aria-label="Siguiente imagen"
                >
                  <LuChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {urls.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                {urls.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`transition-all duration-300 rounded-full ${
                      currentIndex === i
                        ? "w-8 h-3 bg-[#8b5cf6]"
                        : "w-3 h-3 bg-gray-400/80 hover:bg-gray-400"
                    }`}
                    aria-label={`Ir a la imagen ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
