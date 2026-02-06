import Button from "@/components/ui/button/Button";
import Image from "next/image";
import { IoRocketOutline } from "react-icons/io5";

export default function HeroHome() {
  return (
    <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-24 flex flex-col items-center justify-center">
      <span className="hidden md:block size-150 rounded-full bg-gradient-to-r from-[#60A5FA]/20 to-[#A855F7]/20 blur-[80px] absolute top-0 right-1/4 -translate-y-24" />
      <span className="hidden md:block size-80 rounded-full absolute bg-gradient-to-r from-[#C084FC]/20 to-[#EC4899]/20 blur-3xl left-0 translate-x-1/4" />

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="max-w-xl text-center lg:text-left">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold mb-6">
            <IoRocketOutline /> AGENCIA DE DESARROLLO DE SOFTWARE
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-black text-gray-900 leading-tight">
            Construyendo el futuro <br />
            de los <span className="text-blue-600">Negocios Digitales</span>
          </h1>

          <p className="py-6 text-gray-500 text-base sm:text-lg">
            Desarrollo de software personalizado, adaptado a la escalabilidad de
            su empresa. Transformamos problemas complejos en soluciones
            elegantes y escalables.
          </p>

          <div className="py-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button>Comencemos su proyecto juntos</Button>
            <Button variant="secondary">Mira nuestro trabajo</Button>
          </div>
        </div>
        <div className="relative w-full max-w-md lg:max-w-none lg:w-[480px] lg:h-[300px] h-[220px] rounded-2xl overflow-hidden hover:shadow-2xl transition">
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
