"use client";
import { CarrouselComponent as ICarrouselComponent } from "@/interface/component.interface";
import { useState } from "react";
import { LuChevronLeft, LuChevronRight, LuX, LuDownload, LuMaximize2 } from "react-icons/lu";
import { motion, AnimatePresence } from "motion/react";

export default function CarrouselComponent({
  title,
  subtitle,
  description,
  urls,
}: ICarrouselComponent) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    if (!urls || urls.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % urls.length);
  };

  const prevImage = () => {
    if (!urls || urls.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + urls.length) % urls.length);
  };

  const handleDownload = async (url: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      const fileName = url.substring(url.lastIndexOf("/") + 1) || "captura.png";
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      const link = document.createElement("a");
      link.href = url;
      link.download = "captura.png";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
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
            <div 
              className="relative w-full aspect-video bg-gray-50 flex items-center justify-center overflow-hidden cursor-pointer group"
              onClick={() => setIsModalOpen(true)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={urls[currentIndex]}
                  alt={`Pantalla ${currentIndex + 1}`}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </AnimatePresence>

              {/* Overlay en hover indicando que se puede hacer clic */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <div className="bg-black/70 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium backdrop-blur-sm shadow-md">
                  <LuMaximize2 className="w-4 h-4" />
                  <span>Ver imagen completa</span>
                </div>
              </div>
            </div>

            {urls.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg transition-all z-10 focus:outline-none"
                  aria-label="Anterior imagen"
                >
                  <LuChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
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
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(i);
                    }}
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

        {/* Modal de Imagen Completa */}
        <AnimatePresence>
          {isModalOpen && urls && urls[currentIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8"
            >
              {/* Botón para cerrar */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-50 focus:outline-none"
                aria-label="Cerrar modal"
              >
                <LuX className="w-6 h-6" />
              </button>

              {/* Contenido de la imagen */}
              <div 
                className="relative max-w-7xl max-h-[82vh] w-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={urls[currentIndex]}
                  alt={`Pantalla ${currentIndex + 1} en tamaño completo`}
                  className="max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Único Botón de Descarga */}
              <div className="mt-6 z-50" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => handleDownload(urls[currentIndex])}
                  className="flex items-center gap-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all transform hover:scale-105 active:scale-95 focus:outline-none"
                >
                  <LuDownload className="w-5 h-5" />
                  <span>Descargar Imagen</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
