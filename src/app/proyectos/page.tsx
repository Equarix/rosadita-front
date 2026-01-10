import FooterProject from "@/modules/projects/components/FooterProject";
import HeroProjects from "@/modules/projects/components/Hero";

export default function page() {
  return (
    <div className="w-full h-full flex flex-col">
      <HeroProjects />
      <div className="h-310 bg-gray-200 flex flex-col justify-center items-center">
        <div className="w-full w-max rounded-2xl bg-white">
          <div className="grid grid-cols-5 py-1">
            <div className="flex justify-center items-center">
              <button className="px-7 py-3 rounded-xl transition-all duration-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                Todos
              </button>
            </div>

            <div className="flex justify-center items-center">
              <button className="px-5 py-3 rounded-xl transition-all duration-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                Desarrollo Web
              </button>
            </div>

            <div className="flex justify-center items-center">
              <button className="px-5 py-3 rounded-xl transition-all duration-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                App Moviles
              </button>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button className="px-5 py-3 rounded-xl transition-all duration-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                Consultoría
              </button>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button className="px-5 py-3 rounded-xl transition-all duration-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                UI/UX Design
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition ">
              <div className="relative h-48">
                <img
                  src="/images/c1.jpg"
                  alt="Card1"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                  WEB
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">
                  Plataforma E-commerce Retail
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Solución integral B2C con gestión de inventario en tiempo real
                  y pasarela de pagos multicurrency. Aumentó las ventas un 40%
                  en el primer Q.
                </p>
                <div className="bg-gray-400 w-85 h-0.5 rounded-full"></div>
                <div className="py-3 flex gap-2">
                  <span className=" py-2 px-4 items-center  bottom-4 left-4 bg-gray-200 text-gray-600 text-xs font-semibold   rounded-full">
                    React
                  </span>
                  <span className=" py-2 px-4 items-center  bottom-4 left-4 bg-gray-200 text-gray-600 text-xs font-semibold   rounded-full">
                    Node.js
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition ">
              <div className="relative h-48">
                <img
                  src="/images/c2.jpg"
                  alt="Card1"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                  MOVIL
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">
                  App de Delivery &quot;FastEat&quot;
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Aplicación nativa iOS y Android con rastreo GPS en vivo para
                  una cadena de restaurantes. Optimizó tiempos de entrega en un
                  25%.
                </p>
                <div className="bg-gray-400 w-85 h-0.5 rounded-full"></div>
                <div className="py-3 flex gap-2">
                  <span className=" py-2 px-4 items-center  bottom-4 left-4 bg-gray-200 text-gray-600 text-xs font-semibold   rounded-full">
                    Flutter
                  </span>
                  <span className=" py-2 px-4 items-center  bottom-4 left-4 bg-gray-200 text-gray-600 text-xs font-semibold   rounded-full">
                    FireBase
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition ">
              <div className="relative h-48">
                <img
                  src="/images/c3.jpg"
                  alt="Card1"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                  SAAS
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">
                  Dashboard Financiero SaaS
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Panel administrativo para gestión de activos financieros con
                  visualización de datos complejos y reportes automatizados.
                </p>

                <div className="bg-gray-400 w-85 h-0.5 rounded-full"></div>
                <div className="py-3 flex gap-2">
                  <span className=" py-2 px-4 items-center  bottom-4 left-4 bg-gray-200 text-gray-600 text-xs font-semibold   rounded-full">
                    Vue.js
                  </span>
                  <span className=" py-2 px-4 items-center  bottom-4 left-4 bg-gray-200 text-gray-600 text-xs font-semibold   rounded-full">
                    D3.JS
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition ">
              <div className="relative h-48">
                <img
                  src="/images/c4.jpg"
                  alt="Card1"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                  Consultoría
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">
                  Transformación Digital BancoSur
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Auditoría técnica y reingeniería de procesos legacy para una
                  de las instituciones bancarias más grandes de la región.
                </p>

                <div className="bg-gray-400 w-85 h-0.5 rounded-full"></div>
                <div className="py-3 flex gap-2">
                  <span className=" py-2 px-4 items-center  bottom-4 left-4 bg-gray-200 text-gray-600 text-xs font-semibold   rounded-full">
                    Cloud Migration
                  </span>
                  <span className=" py-2 px-4 items-center  bottom-4 left-4 bg-gray-200 text-gray-600 text-xs font-semibold   rounded-full">
                    DevOps
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition ">
              <div className="relative h-48">
                <img
                  src="/images/c5.jpg"
                  alt="Card1"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                  Móvil
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">HealthTrack Pro</h3>
                <p className="text-gray-500 text-sm mb-6">
                  Ecosistema de salud digital conectado a wearables para
                  monitoreo de pacientes crónicos a distancia efectivo.
                </p>

                <div className="bg-gray-400 w-85 h-0.5 rounded-full"></div>
                <div className="py-3 flex gap-2">
                  <span className=" py-2 px-4 items-center  bottom-4 left-4 bg-gray-200 text-gray-600 text-xs font-semibold   rounded-full">
                    Swift
                  </span>
                  <span className=" py-2 px-4 items-center  bottom-4 left-4 bg-gray-200 text-gray-600 text-xs font-semibold   rounded-full">
                    Kotlin
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition ">
              <div className="relative h-48">
                <img
                  src="/images/c6.png "
                  alt="Card1"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                  UX/UI
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">
                  Rediseño Portal Educativo
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Investigación de usuarios y rediseño completo de la
                  experiencia de aprendizaje para una universidad online líder.
                </p>

                <div className="bg-gray-400 w-85 h-0.5 rounded-full"></div>
                <div className="py-3 flex gap-2">
                  <span className=" py-2 px-4 items-center  bottom-4 left-4 bg-gray-200 text-gray-600 text-xs font-semibold   rounded-full">
                    Figma
                  </span>
                  <span className=" py-2 px-4 items-center  bottom-4 left-4 bg-gray-200 text-gray-600 text-xs font-semibold   rounded-full">
                    Prototyping
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center py-10">
            <button className="bg-white hover:bg-gray-300 text-gray-700 font-bold text-md py-2 px-4 rounded">
              Cargar más proyectos ↓
            </button>
          </div>
        </div>
      </div>
      <FooterProject />
    </div>
  );
}
