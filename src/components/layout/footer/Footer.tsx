import { FaDove } from "react-icons/fa6";
import "./footer.css";
import Link from "next/link";
import CharCircle from "@/components/ui/char-circle/CharCircle";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row z-10 relative items-start justify-between w-full py-8 px-6 bg-white">
      <span className="border-footer" />

      <section className="flex flex-col gap-y-3.5 py-12 ">
        <Link href="/" className="flex items-center gap-2 font-semibold text-xl hover:opacity-80 transition">
          <FaDove className="text-blue-500" />
          Equarix
        </Link>

        <p className="max-w-96 text-gray-600">
          Impulsamos a las empresas con soluciones de software de vanguardia.
          Construimos el futuro digital, paso a paso.
        </p>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-3 gap-12 py-12">
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-lg text-gray-900">Servicios</h2>
          <Link href="/servicios" className="text-gray-600 hover:text-blue-600 transition">Desarrollo Web</Link>
          <Link href="/servicios" className="text-gray-600 hover:text-blue-600 transition">Apps Móviles</Link>
          <Link href="/servicios" className="text-gray-600 hover:text-blue-600 transition">Consultoría TI</Link>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-lg text-gray-900">Compañía</h2>
          <Link href="/proyectos" className="text-gray-600 hover:text-blue-600 transition">Proyectos</Link>
          <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition">Blog</Link>
          <Link href="/contacto" className="text-gray-600 hover:text-blue-600 transition">Contacto</Link>
        </div>

        <div className="flex flex-col gap-3 col-span-2 md:col-span-1">
          <h2 className="font-semibold text-lg text-gray-900">Contacto</h2>
          <div className="flex items-center gap-3">
            <CharCircle>LI</CharCircle>
            <CharCircle>TW</CharCircle>
          </div>
        </div>
      </section>
    </footer>
  );
}
