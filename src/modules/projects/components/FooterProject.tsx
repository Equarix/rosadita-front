export default function FooterProject() {
  return (
    <section className="w-full py-24 flex items-center justify-center bg-linear-to-br from-[#020617] via-[#0b1e3b] to-[#2b1b5a] overflow-hidden">
      <div className="relative z-10 max-w-4xl text-center px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full bg-white/10 text-green-400 text-xs font-semibold tracking-wide">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          INNOVACIÓN CONTINUA
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          ¿Tienes un proyecto en mente?
          <br />
          <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Hagámoslo realidad.
          </span>
        </h1>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto leading-relaxed text-xl">
          Nuestro equipo está listo para ayudarte a convertir tu visión
          abstracta en una realidad digital de alto impacto. Diseño, estrategia
          y tecnología en un solo lugar.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
            Iniciar Proyecto Hoy
          </button>
          <button className="px-8 py-3 rounded-full border border-white/30 text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition">
            Contactar Expertos ↗
          </button>
        </div>
      </div>
    </section>
  );
}
