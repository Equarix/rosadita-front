import { FaDove } from "react-icons/fa6";
import HeaderLinks from "./HeaderLinks";
import Button from "@/components/ui/button/Button";
export default function Header() {
  return (
    <header className="flex z-10 w-full py-4 px-6 justify-between border-b border-gray-200 bg-white">
      <span className="flex items-center gap-2 font-semibold text-xl">
        <FaDove className="text-blue-500" />
        Equarix
      </span>

      <HeaderLinks />

      <Button>Cotizar Servicio</Button>
    </header>
  );
}
