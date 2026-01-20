import { IoMailSharp } from "react-icons/io5";
import ServiceCard from "@/modules/home/components/ServiceCard";
import { serviceCards } from "@/modules/home/services";
import HeroHome from "@/modules/home/hero/HeroHome";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-white">
      <HeroHome />

      <div className="flex flex-col items-center justify-center">
        <div className="font-inter font-bold text-4xl py-3">
          Nuestros Servicios
        </div>
        <div className="rounded-2xl w-24 h-1.5 bg-blue-600"></div>
        <div className="py-5 text-gray-500 w-150 text-center text-lg">
          Ofrecemos servicios de desarrollo integral para ayudarte a mantener la
          ventaja en un entorno digital en constante evolución.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 transition max-w-7xl mx-auto">
          {serviceCards.map((card, index) => (
            <ServiceCard key={index} {...card} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-14">
        <div className="font-inter font-bold text-4xl py-3">
          Portafolio Seleccionado
        </div>
        <div className="rounded-2xl w-24 h-1.5 bg-blue-600 "></div>
        <div className="py-5 text-gray-500 w-150 text-center text-lg">
          Vea cómo hemos ayudado a las empresas a transformar sus ideas en
          realidad.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition ">
            <div className="relative h-48">
              <img
                src="/images/card1.jpg"
                alt="Card1"
                className="w-full h-full object-cover"
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
              <img
                src="/images/card2.jpg"
                alt="Card1"
                className="w-full h-full object-cover"
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
              <img
                src="/images/card3.jpg"
                alt="Card1"
                className="w-full h-full object-cover"
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
      <div className="w-full flex items-center justify-center py-10">
        <div className="flex flex-col   w-fit px-10 rounded-2xl bg-gray-100">
          <div className="flex flex-col items-center justify-center py-10">
            <div className="font-inter font-bold text-3xl py-3">
              Ponte en contacto
            </div>
            <div className="rounded-2xl w-20 h-1 bg-blue-600 "></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-1 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="">
                <h1 className="text-3xl font-inter font-black text-gray-900">
                  Construyamos algo grande juntos.
                </h1>

                <p className="py-6 text-gray-500">
                  Si tiene alguna pregunta sobre nuestros servicios, precios o
                  simplemente desea hablar sobre su próximo proyecto, nuestro
                  equipo está listo para responder todas sus preguntas.
                </p>
                <div className="flex flex-col ">
                  <div className=" justify-center py-5">
                    <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md">
                      <div className="flex items-center justify-center bg-blue-600 rounded-2xl w-8 h-8">
                        <IoMailSharp className="text-white" />
                      </div>
                      <div>
                        <h1 className="font-black">Nuestro Email</h1>
                        <h2 className="text-gray-500 font-inter">
                          contacto@rosadita.com
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md ">
                    <div className="flex items-center justify-center bg-blue-600 rounded-2xl w-8 h-8">
                      <IoMailSharp className="text-white" />
                    </div>
                    <div>
                      <h1 className="font-black">Llamanos</h1>
                      <h2 className="text-gray-500 font-inter">
                        +1 (555) 123-4567
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="py-5">
                  <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md ">
                    <div className="flex items-center justify-center bg-blue-600 rounded-2xl w-8 h-8">
                      <IoMailSharp className="text-white" />
                    </div>
                    <div>
                      <h1 className="font-black">Visitanos</h1>
                      <h2 className="text-gray-500 font-inter">
                        123 Calle Principal, Ciudad, Pais
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center ">
                <div className="relative w-[580px] h-[600px] rounded-2xl border border-gray-300 overflow-hidden shadow-lg">
                  <div className="px-8 py-10">
                    <div className=" grid grid-cols-2">
                      <div>
                        <h1 className="font-medium">Nombre Completo</h1>
                        <input
                          type="text"
                          className="w-fit border border-gray-300 rounded-md p-2 mt-2 mb-4"
                        ></input>
                      </div>
                      <div>
                        <h1 className="font-medium">Email</h1>
                        <input
                          type="text"
                          className="w-fit border border-gray-300 rounded-md p-2 mt-2 mb-4"
                        ></input>
                      </div>
                    </div>
                    <div>
                      <h1 className="font-medium">Sujeto</h1>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2 mt-2 mb-4"
                      ></input>
                    </div>
                    <div>
                      <h1 className="font-medium">Mensaje</h1>
                      <textarea
                        name=""
                        id=""
                        className="w-full border border-gray-300 rounded-md p-2 mt-2 mb-4 h-60 placeholder:text-sm text-gray-800"
                        placeholder=""
                      ></textarea>
                    </div>
                    <button className="bg-blue-600 w-full items-center text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                      Enviar Mensaje
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
