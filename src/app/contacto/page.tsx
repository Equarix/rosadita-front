import React from "react";
import { MdMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
export default function page() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full py-24 flex items-center justify-center overflow-hidden">
        <img
          src="/images/contacto.png"
          alt="Equipo trabajando"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/90 via-[#0b1e3b]/85 to-[#2b1b5a]/80 z-10"></div>
        <div className="relative z-20 max-w-6xl text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full bg-white/10 text-white text-xs tracking-wide">
            ¿Tienes una idea?
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            <span className="bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">
              Hablemos de tu próximo proyecto.
            </span>
          </h1>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto leading-relaxed text-xl">
            Estamos listos para transformar tu negocio con tecnología de punta.
            El primer paso es una simple conversación.
          </p>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center py-10 ">
        <div className="relative flex flex-col rounded-2xl border border-gray-300 overflow-hidden shadow-2xl shadow-blue-300">
          <div className="py-6 px-8  border-b border-gray-300">
            <h1 className="text-center text-2xl font-bold py-2">
              Formulario en Contacto
            </h1>
            <h2 className="text-center text-xs text-gray-500">
              Completa tus datos y nos pondremos en contacto contigo en menos de
              24 horas.
            </h2>
          </div>
          <div className="px-8 py-6">
            <div className=" grid grid-cols-2 gap-8">
              <div className="">
                <h1 className="font-bold text-xs">Nombre Completo</h1>
                <input
                  type="text"
                  className="w-fit border border-gray-300 rounded-md p-2 mt-2 mb-4 placeholder:text-sm"
                  placeholder="Ej: Juan Pérez"
                ></input>
              </div>
              <div className="">
                <h1 className="font-bold text-xs">Correo Corporativo</h1>
                <input
                  type="text"
                  className="w-fit border border-gray-300 rounded-md p-2 mt-2 mb-4 placeholder:text-sm"
                  placeholder="Ej: juan.perez@empresa.com"
                ></input>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-xs">Asunto</h1>
              <select
                name=""
                id=""
                className="w-full border border-gray-300 rounded-md p-2 mt-2 mb-4 text-sm text-gray-500"
              >
                <option value="">Selecciona una opción</option>
              </select>
            </div>
            <div>
              <h1 className="font-bold text-xs">Mensaje</h1>
              <textarea
                name=""
                id=""
                className="w-full border border-gray-300 rounded-md p-2 mt-2 mb-4 h-60 placeholder:text-sm text-gray-800"
                placeholder="Cuéntanos más detalles sobre lo que necesitas..."
              ></textarea>
            </div>
            <div className="py-3 flex items-center gap-2 text-xs text-gray-700">
              <input
                type="checkbox"
                id="privacy"
                className="border border-gray-300 rounded"
              />

              <label htmlFor="privacy" className="flex gap-1">
                He leído y acepto la
                <a
                  href="/politica-privacidad"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  política de privacidad
                </a>
              </label>
            </div>
            <div className="flex py-3">
              <button className="bg-blue-600 w-full items-center text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Enviar Mensaje
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-4 ">
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col items-center">
              <div className=" bg-gray-200 border border-gray-300 rounded-4xl text-xl py-2 px-2 flex justify-center items-center  text-gray-600">
                <MdMailOutline />
              </div>
              <h2 className="text-xs text-gray-400 py-1">
                Respuesta en 24 horas
              </h2>
            </div>

            <div className="flex flex-col items-center">
              <div className=" bg-gray-200 border border-gray-300 rounded-4xl text-xl py-2 px-2 flex justify-center items-center  text-gray-800">
                <CiLock />
              </div>
              <h2 className="text-xs text-gray-400 py-1">Datos Seguros</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
