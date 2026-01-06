import { FaDove } from "react-icons/fa6";
import "./footer.css";
import Link from "next/link";
import CharCircle from "@/components/ui/char-circle/CharCircle";

export default function Footer() {
  return (
    <footer className="flex relative items-center justify-between w-full py-12 px-6">
      <span className="border-footer" />

      <section className="flex flex-col gap-y-3.5">
        <span className="flex items-center gap-2 font-semibold text-xl">
          <FaDove className="text-blue-500" />
          Equarix
        </span>

        <p className="max-w-96">
          Impulsamos a las empresas con soluciones de software de vanguardia.
          Construimos el futuro digital, línea de código a línea.
        </p>
      </section>

      <section className="grid grid-cols-3 gap-16">
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg">Servicios</h3>
          <Link href="#">Desarrollo Web</Link>
          <Link href="#">Aplicaciones Móviles</Link>
          <Link href="#">Consultoría TI</Link>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg">LEGAL</h3>
          <Link href="#">Privacidad</Link>
          <Link href="#">Términos de Servicio</Link>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg">Contacto</h3>
          <div className="flex items-center gap-3">
            <CharCircle>LA</CharCircle>
            <CharCircle>MA</CharCircle>
          </div>
        </div>
      </section>
    </footer>
  );
}
