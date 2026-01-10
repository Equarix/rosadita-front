export default function HeroProjects() {
  return (
    <div className="flex flex-col justify-center items-center py-32">
      <h1 className="text-6xl font-inter font-black text-gray-900">
        Nuestros <span className="text-blue-600">Proyectos</span>
      </h1>
      <p className="pt-6 pb-10 text-gray-500 text-center text-xl font-inter w-155.75">
        Explora cómo hemos transformado ideas complejas en soluciones digitales
        exitosas. Desde plataformas web escalables hasta aplicaciones móviles
        intuitivas para clientes globales.
      </p>
      <div className="rounded-2xl h-0.5 w-md bg-[#E2E8F0]"></div>
      <div className="grid grid-cols-3 gap-10 py-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-black text-2xl">150+</h1>
          <h4 className="font-inter text-gray-500 text-xs">PROYECTOS</h4>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-black text-2xl">98%</h1>
          <h4 className="font-inter text-gray-500 text-xs">SATISFACCIÓN</h4>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-black text-2xl">12</h1>
          <h4 className="font-inter text-gray-500 text-xs">PAÍSES</h4>
        </div>
      </div>
    </div>
  );
}
