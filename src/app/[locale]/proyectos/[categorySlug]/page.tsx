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
import HeroProjects from "@/modules/projects/components/Hero";
import FooterProject from "@/modules/projects/components/FooterProject";

export const dynamic = "force-dynamic";

export default async function CategorySlug({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;

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
          <ProjectSections categorySlug={categorySlug} />
        </Suspense>
      </div>
      <FooterProject />
    </div>
  );
}
