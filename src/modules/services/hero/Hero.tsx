import "./hero.css";
import Chip from "@/components/ui/chip/Chip";
import { LuBadgeCheck } from "react-icons/lu";

export default function Hero() {
  return (
    <section className="flex flex-col gap-6 items-center justify-center relative w-full">
      <span className="block size-150 bg-hero rounded-full absolute -top-full right-0" />

      <Chip className="border-[#DBEAFE] bg-[#EFF6FF] text-[#137FEC]">
        <LuBadgeCheck />
        EXCELENCIA TECNOLOGICA
      </Chip>

      <h1 className="font-black text-6xl">
        Soluciones <span className="text-blue-700">Exclusivas</span>
      </h1>
      <span className="block w-24 h-1.5 bg-blue-700 rounded-full" />

      <p className="w-160.75 text-center text-xl">
        Ingeniería de software de precisión diseñada para transformar modelos de
        negocio. Profundizamos en cada desafío para entregar resultados que
        escalan.
      </p>
    </section>
  );
}
