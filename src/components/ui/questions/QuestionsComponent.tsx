"use client";
import { QuestionsComponent as IQuestionsComponent } from "@/interface/component.interface";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LuChevronDown } from "react-icons/lu";
import clsx from "clsx";

export default function QuestionsComponent({
  header,
  subHeading,
  questions,
}: IQuestionsComponent) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Abierto el primero por defecto

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  if (!questions || questions.length === 0) return null;

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        {subHeading && (
          <h4 className="text-[#8b5cf6] font-bold tracking-widest text-sm mb-4 uppercase">
            {subHeading}
          </h4>
        )}
        <h2 className="text-3xl md:text-5xl font-black text-[#111827] mb-6">
          {header}
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {questions.map((q, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className={clsx(
                "border rounded-2xl overflow-hidden transition-colors duration-300",
                isOpen
                  ? "border-[#8b5cf6]/40 bg-[#f9f8ff]"
                  : "border-gray-200 bg-white hover:border-gray-300",
              )}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className="font-bold text-gray-900 text-lg">
                  {q.question}
                </span>
                <motion.div
                  initial={false}
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={clsx(
                    "shrink-0 ml-4",
                    isOpen ? "text-[#8b5cf6]" : "text-gray-400",
                  )}
                >
                  <LuChevronDown className="w-6 h-6" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-600 text-base leading-relaxed">
                      {/* En caso de que el answer contenga tags HTML (como imágenes o negritas) se usa dangerouslySetInnerHTML, si es texto plano igual se renderiza bien */}
                      <div dangerouslySetInnerHTML={{ __html: q.answer }} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
