import FooterProject from "@/modules/projects/components/FooterProject";
import HeroProjects from "@/modules/projects/components/Hero";
import ProjectCard from "@/modules/project/components/ProjectCard";
import { Metadata } from "next";
import { env } from "@/config/env";
import {
  ResponseApi,
  ResponseCategoryProjects,
} from "@/interface/api.interface";
import { notFound } from "next/navigation";
import CategoriesProjectSection from "@/modules/projects/components/CategoriesProjectSection";
import ProjectSections from "@/modules/projects/sections/ProjectSections";
import { Suspense } from "react";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Casos de Éxito y Proyectos",
  description:
    "Explora nuestro portafolio de proyectos exitosos. Desde aplicaciones fintech hasta plataformas retail, descubre cómo hemos ayudado a empresas a transformar sus ideas en realidades digitales de alto impacto.",
  keywords: [
    "portafolio desarrollo software",
    "casos de éxito tecnología",
    "proyectos web",
    "ejemplos aplicaciones móviles",
    "transformación digital casos",
  ],
  openGraph: {
    title: "Portafolio de Innovación Digital | Equarix",
    description:
      "Vea cómo ayudamos a las empresas a transformar sus ideas en realidad.",
    url: "https://equarix.vercel.app/proyectos",
    images: ["/images/og-projects.jpg"],
  },
};
export default async function ProjectPage() {
  const categories = await fetch(
    `${env.NEXT_PUBLIC_API_URL}/public/category-projects`,
  );

  if (!categories.ok) {
    console.error(categories);
    return notFound();
  }

  const resCategories = (await categories.json()) as ResponseApi<
    ResponseCategoryProjects[]
  >;

  return (
    <div className="w-full h-full flex flex-col">
      <HeroProjects />
      <div className="py-12 bg-gray-200 flex flex-col justify-center items-center">
        <Suspense
          fallback={
            <div className="w-full flex items-center justify-center py-8">
              Cargando categorías...
            </div>
          }
        >
          <CategoriesProjectSection categories={resCategories.body} />
        </Suspense>

        <Suspense
          fallback={
            <div className="w-full flex items-center justify-center py-20">
              Cargando proyectos...
            </div>
          }
        >
          <ProjectSections />
        </Suspense>
      </div>
      <FooterProject />
    </div>
  );
}
