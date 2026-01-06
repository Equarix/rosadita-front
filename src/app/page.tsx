import { IoRocketOutline } from "react-icons/io5";
import Image from "next/image";
import { MdWeb } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";
import { RiCodeView } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
import { GoCodescan } from "react-icons/go";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-1 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold mb-6">
              <IoRocketOutline /> AGENCIA DE DESARROLLO DE SOFTWARE
            </span>

            <h1 className="text-5xl font-inter font-black text-gray-900">
              Contruyendo el futuro <br />
              de los <span className="text-blue-600">Negocios Digitales</span>
            </h1>

            <p className="py-6 text-gray-500">
              Desarrollo de software personalizado, adaptado a la escalabilidad
              de su empresa. Transformamos problemas complejos en soluciones
              elegantes y escalables.
            </p>

            <div className="py-4 flex gap-4">
              <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold">
                Iniciar
              </button>

              <button className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold">
                Mira nuestro trabajo
              </button>
            </div>
          </div>

          <div className="flex justify-center ">
            <div className="relative w-[480px] h-[300px] rounded-2xl ">
              <Image
                src="/images/portada.jpg"
                alt="Portada"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="font-inter font-bold text-2xl py-3">
          Nuestros Servicios
        </div>
        <div className="rounded-2xl w-20 h-1 bg-blue-600 "></div>
        <div className="py-5 text-gray-500 w-150 text-center">
          Ofrecemos servicios de desarrollo integral para ayudarte a mantener la
          ventaja en un entorno digital en constante evolución.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div className="w-[350px] bg-white rounded-2xl shadow-lg p-6 flex flex-col ">
            <div className="bg-blue-600 rounded-2xl w-12 h-12 flex items-center justify-center">
              <MdWeb className="  text-white w-8 h-8" />
            </div>
            <h3 className="font-inter font-bold text-lg py-4">
              Desarrollo Web
            </h3>
            <p className="text-gray-500 text-sm">
              Aplicaciones web escalables y modernas adaptadas a su negocio.
            </p>
          </div>

          <div className="w-[350px] bg-white rounded-2xl shadow-lg p-6 flex flex-col ">
            <div className="bg-blue-600 rounded-2xl w-12 h-12 flex items-center justify-center">
              <FaMobileScreen className="  text-white w-8 h-8" />
            </div>
            <h3 className="font-inter font-bold text-lg py-4">Apps Moviles</h3>
            <p className="text-gray-500 text-sm">
              Soluciones móviles nativas y multiplataforma para iOS y Android
              con Flutter y React Native.
            </p>
          </div>

          <div className="w-[350px] bg-white rounded-2xl shadow-lg p-6 flex flex-col ">
            <div className="bg-blue-600 rounded-2xl w-12 h-12 flex items-center justify-center">
              <FaCloud className="  text-white w-8 h-8" />
            </div>
            <h3 className="font-inter font-bold text-lg py-4">
              Infraestructura en la Nube
            </h3>
            <p className="text-gray-500 text-sm">
              Arquitectura de nube escalable y segura que utiliza AWS y Azure
              para garantizar que sus aplicaciones estén siempre disponibles.
            </p>
          </div>

          <div className="w-[350px] bg-white rounded-2xl shadow-lg p-6 flex flex-col ">
            <div className="bg-blue-600 rounded-2xl w-12 h-12 flex items-center justify-center">
              <RiCodeView className="  text-white w-8 h-8" />
            </div>
            <h3 className="font-inter font-bold text-lg py-4">
              DevOps & CI/CD
            </h3>
            <p className="text-gray-500 text-sm">
              Canalizaciones automatizadas y contenedorización para optimizar el
              proceso de desarrollo e implementación.
            </p>
          </div>

          <div className="w-[350px] bg-white rounded-2xl shadow-lg p-6 flex flex-col ">
            <div className="bg-blue-600 rounded-2xl w-12 h-12 flex items-center justify-center">
              <MdOutlineSecurity className="  text-white w-8 h-8" />
            </div>
            <h3 className="font-inter font-bold text-lg py-4">
              CiberSeguridad
            </h3>
            <p className="text-gray-500 text-sm">
              Implementando sólidas medidas de seguridad para proteger sus datos
              y garantizar el cumplimiento de los estándares de la industria.
            </p>
          </div>

          <div className="w-[350px] bg-white rounded-2xl shadow-lg p-6 flex flex-col ">
            <div className="bg-blue-600 rounded-2xl w-12 h-12 flex items-center justify-center">
              <GoCodescan className="  text-white w-8 h-8" />
            </div>
            <h3 className="font-inter font-bold text-lg py-4">
              Analisis de Datos
            </h3>
            <p className="text-gray-500 text-sm">
              Transformamos datos sin procesar en información útil mediante
              paneles de control personalizados y soluciones de inteligencia
              empresarial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
