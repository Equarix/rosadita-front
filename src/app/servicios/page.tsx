import CardServices from "@/components/ui/card-services/CardServices";
import { cardItems } from "@/modules/services/card-items";
import Hero from "@/modules/services/hero/Hero";
import MiddleCircle from "@/modules/services/MiddleCircle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestros Servicios",
  description: "Descubre nuestra amplia gama de servicios de desarrollo de software: desarrollo web personalizado, aplicaciones móviles iOS y Android, consultoría tecnológica y transformación digital.",
  keywords: ["servicios desarrollo web", "desarrollo apps móviles", "consultoría it", "software a medida", "cloud computing", "diseño ux ui"],
  openGraph: {
    title: "Servicios de Desarrollo de Software | Equarix",
    description: "Soluciones tecnológicas integrales para impulsar tu negocio al siguiente nivel.",
    url: "https://equarix-front.vercel.app/servicios",
    images: ["/images/og-services.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-24 px-6 gap-16 relative">
      <Hero />
      <MiddleCircle />

      <section className="space-y-12">
        {cardItems.map((item, index) => (
          <CardServices key={index} {...item} />
        ))}
      </section>
    </div>
  );
}
