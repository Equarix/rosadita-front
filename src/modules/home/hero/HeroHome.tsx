import Image from "next/image";
import Link from "next/link";
import { LuArrowRight, LuCode, LuTrendingUp } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

export default function HeroHome() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 flex flex-col items-center justify-center">
      <span className="hidden md:block size-150 rounded-full bg-gradient-to-r from-[#60A5FA]/20 to-[#A855F7]/20 blur-[100px] absolute top-0 right-1/4 -translate-y-24 -z-10" />
      <span className="hidden md:block size-80 rounded-full absolute bg-gradient-to-r from-[#C084FC]/20 to-[#EC4899]/20 blur-3xl left-0 translate-x-1/4 -z-10" />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 w-full">
        <div className="max-w-xl text-center lg:text-left z-10 w-full">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 text-blue-500 text-[11px] font-bold tracking-wide mb-8 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            AGENCIA DE DESARROLLO DE SOFTWARE
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-inter font-black text-[#1a1a2e] leading-[1.1] tracking-tight">
            Construyendo el <br />
            <span className="relative inline-block text-blue-500">
              futuro
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-blue-500/80"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,10 Q50,20 100,5"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            de los <span className="text-blue-500">Negocios</span> <br />
            <span className="text-blue-500">Digitales</span>
          </h1>

          {/* Description */}
          <p className="py-6 mt-4 text-gray-500 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            Desarrollo de software personalizado, adaptado a la escalabilidad de
            su empresa. Transformamos problemas complejos en soluciones
            elegantes y escalables.
          </p>

          {/* Buttons */}
          <div className="py-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#5b5fff] hover:bg-[#4b4fee] text-white font-medium transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5"
            >
              Comencemos su proyecto juntos <LuArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/proyectos"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium transition-all hover:-translate-y-0.5 shadow-sm"
            >
              Ver Proyectos
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-100 max-w-lg mx-auto lg:mx-0">
            <div>
              <div className="text-3xl font-black text-blue-600">+4</div>
              <div className="text-[11px] text-gray-500 font-medium mt-1 uppercase tracking-wider">
                Proyectos entregados
              </div>
            </div>
            <div>
              <div className="text-3xl font-black text-blue-600">98%</div>
              <div className="text-[11px] text-gray-500 font-medium mt-1 uppercase tracking-wider">
                Clientes satisfechos
              </div>
            </div>
            <div>
              <div className="text-3xl font-black text-blue-600">2 años</div>
              <div className="text-[11px] text-gray-500 font-medium mt-1 uppercase tracking-wider">
                De experiencia
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Image with Floating Cards */}
        <div className="relative w-full max-w-xl lg:max-w-none lg:w-[600px] h-[500px] mt-12 lg:mt-0 flex-shrink-0 z-10">
          <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-gray-900 to-black shadow-2xl">
            <Image
              src="/images/portada.jpg"
              alt="Dashboard de desarrollo de software"
              fill
              className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              priority
            />
            {/* Inner glow/border */}
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/10" />
          </div>

          {/* Floating Card: Uptime */}
          <div className="absolute -left-6 lg:-left-12 top-12 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3 animate-[bounce_6s_infinite_ease-in-out]">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
              <LuCode className="w-5 h-5" />
            </div>
            <div className="pr-2">
              <div className="text-[11px] text-gray-500 font-medium">
                Despliegue
              </div>
              <div className="font-bold text-gray-900 text-sm">
                99.9% uptime
              </div>
            </div>
          </div>

          {/* Floating Card: ROI */}
          <div className="absolute -left-4 lg:-left-8 bottom-16 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3 animate-[bounce_7s_infinite_ease-in-out_1s]">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              <LuTrendingUp className="w-5 h-5" />
            </div>
            <div className="pr-2">
              <div className="text-[11px] text-gray-500 font-medium">
                Crecimiento
              </div>
              <div className="font-bold text-gray-900 text-sm">+312% ROI</div>
            </div>
          </div>

          {/* Floating Card: Rating */}
          <div className="absolute -right-4 lg:-right-10 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-4 flex flex-col gap-1.5 animate-[bounce_8s_infinite_ease-in-out_2s]">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-4 h-4 text-[#ffc107]" />
              ))}
            </div>
            <div>
              <div className="font-bold text-gray-900 text-[15px] leading-tight">
                5.0 Rating
              </div>
              <div className="text-[11px] text-gray-500">+200 reseñas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
