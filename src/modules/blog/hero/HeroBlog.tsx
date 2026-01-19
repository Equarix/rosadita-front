"use client";
import Chip from "@/components/ui/chip/Chip";
import SearchBlog from "../components/SearchBlog";
import { Suspense } from "react";

export default function HeroBlog() {
  return (
    <section className="flex flex-col items-center py-24 gap-6 relative w-full">
      <span className="block size-96 rounded-full bg-blue-700/20 blur-3xl absolute -top-1/2 right-0 translate-x-1/2" />
      <span className="block size-64 rounded-full bg-purple-600/20 blur-3xl absolute -bottom-1/2 -translate-x-1/2 left-0" />

      <Chip className="border-[#DBEAFE] bg-[#EFF6FF] text-[#137FEC]">
        <span className="size-2 rounded-full bg-[#137FEC]" />
        Nuestras últimas ideas
      </Chip>

      <h1 className="font-black text-6xl">
        Perspectivas e <span className="text-blue-700">Innovación</span>
      </h1>

      <p className="w-160.75 text-center text-xl">
        Ingeniería de software de precisión diseñada para transformar modelos de
        negocio. Profundizamos en cada desafío para entregar resultados que
        escalan.
      </p>
      <Suspense>
        <SearchBlog className="mt-4" />
      </Suspense>
    </section>
  );
}
