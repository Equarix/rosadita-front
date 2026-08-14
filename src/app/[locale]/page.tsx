import ServiceCard from "@/modules/home/components/ServiceCard";
import { serviceCards } from "@/modules/home/services";
import HeroHome from "@/modules/home/hero/HeroHome";
import ContactSection from "@/modules/home/contact-section/ContactSection";
import ProjectCard from "@/modules/project/components/ProjectCard";
import { env } from "@/config/env";
import { ResponseApi, ResponseProjects } from "@/interface/api.interface";
import ClientMarquee from "@/modules/home/components/ClientMarquee";
import { ClientResponse } from "@/interface/component.interface";
export const dynamic = "force-dynamic";

export default async function Home() {
  let featuredProjects: ResponseProjects[] = [];
  let clients: ClientResponse[] = [];

  try {
    const resClients = await fetch(
      `${env.NEXT_PUBLIC_API_URL}/public/clients-public`,
    );
    if (resClients.ok) {
      const dataClients = (await resClients.json()) as ResponseApi<ClientResponse[]>;
      clients = dataClients.body || [];
    }
  } catch (error) {
    console.error("Error fetching clients:", error);
  }

  try {
    const res = await fetch(
      `${env.NEXT_PUBLIC_API_URL}/public/projects/home/featured`,
    );
    if (res.ok) {
      const data = (await res.json()) as ResponseApi<ResponseProjects[]>;
      featuredProjects = data.body || [];
    }
  } catch (error) {
    console.error("Error fetching featured projects:", error);
  }

  return (
    <div className="relative overflow-hidden bg-white">
      <HeroHome />
      <ClientMarquee clients={clients} />

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto mt-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </section>

      <section className="sm:p-8">
        <ContactSection />
      </section>
    </div>
  );
}
