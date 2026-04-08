import ServiceCard from "@/modules/home/components/ServiceCard";
import { serviceCards } from "@/modules/home/services";
import HeroHome from "@/modules/home/hero/HeroHome";
import Image from "next/image";
import ContactSection from "@/modules/home/contact-section/ContactSection";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-white">
      <HeroHome />

      <div className="flex flex-col items-center justify-center px-5">
        <div className="font-inter font-bold text-4xl py-3">
          Nuestros Servicios
        </div>
        <div className="rounded-2xl w-24 h-1.5 bg-blue-600"></div>
        <div className="py-5 text-gray-500 max-w-150 text-center text-lg">
          Ofrecemos servicios de desarrollo integral para ayudarte a mantener la
          ventaja en un entorno digital en constante evolución.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 transition max-w-7xl mx-auto">
          {serviceCards.map((card, index) => (
            <ServiceCard key={index} {...card} />
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-center py-14 px-5">
        <div className="font-inter font-bold text-center text-4xl py-3">
          Portafolio Seleccionado
        </div>
        <div className="rounded-2xl w-24 h-1.5 bg-blue-600 "></div>
        <div className="py-5 text-gray-500 max-w-150 text-center text-lg">
          Vea cómo hemos ayudado a las empresas a transformar sus ideas en
          realidad.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition ">
            <div className="relative h-48">
              <Image
                src="/images/card1.jpg"
                alt="Card1"
                className="w-full h-full object-cover"
                width={400}
                height={300}
              />
              <span className="absolute top-4 left-4 bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                FINTECH
              </span>
            </div>

            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">
                Panel de finanzas globales
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Una plataforma de análisis integral para la visualización de
                datos de mercado en tiempo real.
              </p>
              <div className="bg-gray-400 w-85 h-0.5 rounded-full"></div>
              <button className="flex py-2 items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 transition">
                Ver proyecto
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition ">
            <div className="relative h-48">
              <Image
                src="/images/card2.jpg"
                alt="Card1"
                className="w-full h-full object-cover"
                width={400}
                height={300}
              />
              <span className="absolute top-4 left-4 bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                RETAIL
              </span>
            </div>

            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">
                App Movil de Compra Facil
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Una experiencia de compra fluida con recomendaciones impulsadas
                por IA.
              </p>
              <div className="bg-gray-400 w-85 h-0.5 rounded-full"></div>
              <button className="flex py-2 items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 transition">
                Ver proyecto
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition ">
            <div className="relative h-48">
              <Image
                src="/images/card3.jpg"
                alt="Card1"
                className="w-full h-full object-cover"
                width={400}
                height={300}
              />
              <span className="absolute top-4 left-4 bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                HEALTHCARE
              </span>
            </div>

            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">
                Portal para pacientes de Medicare
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Sistema seguro de gestión de pacientes con capacidades de
                telemedicina.
              </p>
              <div className="bg-gray-400 w-85 h-0.5 rounded-full"></div>
              <button className="flex py-2 items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 transition">
                Ver proyecto
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="sm:p-8">
        <ContactSection />
      </section>
    </div>
  );
}
