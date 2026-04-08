import CardForm from "../components/card-form/CardForm";
import { IoMailSharp } from "react-icons/io5";
import ContactHome from "../components/contact-home/ContactHome";

export default function ContactSection() {
  return (
    <div className="w-full flex items-center justify-center sm:px-5 py-10 flex-col sm:bg-gray-100 relative rounded-3xl">
      <header className="flex flex-col items-center justify-center w-fit px-10 rounded-2xl py-10">
        <h2 className="font-inter font-bold text-3xl py-3">
          Ponte en contacto
        </h2>
        <span className="rounded-2xl w-20 h-1 bg-blue-600 block" />
      </header>
      <section className="relative max-w-7xl mx-auto px-1 py-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
          <div className="sm:block flex items-center justify-center flex-col">
            <h1 className="text-3xl font-inter font-black text-gray-900 sm:text-start text-center">
              Construyamos algo grande juntos.
            </h1>

            <p className="py-6 text-gray-500 sm:px-0 px-5 text-center sm:text-start">
              Si tiene alguna pregunta sobre nuestros servicios, precios o
              simplemente desea hablar sobre su próximo proyecto, nuestro equipo
              está listo para responder todas sus preguntas.
            </p>
            <section className="flex flex-col gap-5">
              <CardForm
                icon={<IoMailSharp className="text-white" />}
                label="Nuestro Email"
                value="contacto@rosadita.com"
              />

              <CardForm
                icon={<IoMailSharp className="text-white" />}
                label="Llamanos"
                value="+1 (555) 123-4567"
              />
              <CardForm
                icon={<IoMailSharp className="text-white" />}
                label="Visitanos"
                value="123 Calle Principal, Ciudad, Pais"
              />
            </section>
          </div>

          <ContactHome />
        </div>
      </section>

      <span className="size-96 block rounded-full bg-linear-to-r from-[#BFDBFE]/50 to-[#E9D5FF]/50 absolute -bottom-20 -left-20 blur-3xl" />
    </div>
  );
}
