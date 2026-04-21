import ServiceCard from "@/modules/home/components/ServiceCard";
import { serviceCards } from "@/modules/home/services";
import HeroHome from "@/modules/home/hero/HeroHome";
import Image from "next/image";
import ContactSection from "@/modules/home/contact-section/ContactSection";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-white">
      <HeroHome />

      <section className="flex flex-col items-center justify-center px-5 py-12">
        <h2 className="font-inter font-bold text-4xl py-3 text-center">
          Nuestros Servicios
        </h2>
        <div className="rounded-2xl w-24 h-1.5 bg-blue-600 mb-6"></div>
        <p className="py-5 text-gray-500 max-w-150 text-center text-lg">
          Ofrecemos servicios de desarrollo integral para ayudarte a mantener la
          ventaja en un entorno digital en constante evolución.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 transition max-w-7xl mx-auto">
          {serviceCards.map((card, index) => (
            <ServiceCard key={index} {...card} />
          ))}
        </div>
      </section>

      <section className="flex flex-col w-full items-center justify-center py-14 px-5 bg-gray-50/50">
        <h2 className="font-inter font-bold text-center text-4xl py-3">
          Portafolio Seleccionado
        </h2>
        <div className="rounded-2xl w-24 h-1.5 bg-blue-600 mb-8"></div>
        <p className="py-5 text-gray-500 max-w-150 text-center text-lg">
          Vea cómo hemos ayudado a las empresas a transformar sus ideas en
          realidad.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition ">
            <div className="relative h-48">
              <Image
                src="/images/card1.jpg"
                alt="Panel de finanzas globales - Plataforma de análisis Fintech"
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
              <div className="bg-gray-400 w-full h-0.5 rounded-full opacity-20"></div>
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
                alt="App Móvil de Compra Fácil - Experiencia de E-commerce Retail"
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
                App Móvil de Compra Fácil
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Una experiencia de compra fluida con recomendaciones impulsadas
                por IA.
              </p>
              <div className="bg-gray-400 w-full h-0.5 rounded-full opacity-20"></div>
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
                alt="Portal para pacientes de Medicare - Sistema Healthcare"
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
              <div className="bg-gray-400 w-full h-0.5 rounded-full opacity-20"></div>
              <button className="flex py-2 items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 transition">
                Ver proyecto
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="sm:p-8">
        <ContactSection />
      </section>
    </div>
  );
}
