import Button from "@/components/ui/button/Button";
import Image from "next/image";
import { IoRocketOutline } from "react-icons/io5";

export default function HeroHome() {
  return (
    <div className="relative max-w-8xl mx-auto px-1 py-24 flex flex-col items-center justify-center">
      <span className="size-150 rounded-full bg-linear-to-r from-[#60A5FA]/20 to-[#A855F7]/20 blur-[80px] absolute top-0 right-1/7 -translate-y-25" />
      <span className="size-80 rounded-full block absolute bg-linear-to-r from-[#C084FC]/20 to-[#EC4899]/20 blur-3xl left-0 translate-x-1/4" />

      <div className="flex items-center gap-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold mb-6">
            <IoRocketOutline /> AGENCIA DE DESARROLLO DE SOFTWARE
          </span>

          <h1 className="text-6xl font-inter font-black text-gray-900">
            Contruyendo el futuro <br />
            de los <span className="text-blue-600">Negocios Digitales</span>
          </h1>

          <p className="py-6 text-gray-500 text-lg">
            Desarrollo de software personalizado, adaptado a la escalabilidad de
            su empresa. Transformamos problemas complejos en soluciones
            elegantes y escalables.
          </p>

          <div className="py-4 flex gap-4">
            <Button>Comencemos su proyecto juntos</Button>

            <Button variant="secondary">Mira nuestro trabajo</Button>
          </div>
        </div>

        <div className="relative w-120 h-75 rounded-2xl overflow-hidden hover:shadow-2xl transition ">
          <Image
            src="/images/portada.jpg"
            alt="Portada"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
