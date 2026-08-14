import FooterProject from "@/modules/projects/components/FooterProject";
import HeroProjects from "@/modules/projects/components/Hero";
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
import { getTranslations } from "next-intl/server";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects.meta" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords").split(", "),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `https://equarix.vercel.app/${locale === "es" ? "proyectos" : "en/projects"}`,
      images: ["/images/og-projects.jpg"],
    },
  };
}

export default async function ProjectPage() {
  const t = await getTranslations("projects");

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
              {t("loadingCategories")}
            </div>
          }
        >
          <CategoriesProjectSection categories={resCategories.body} />
        </Suspense>

        <Suspense
          fallback={
            <div className="w-full flex items-center justify-center py-20">
              {t("loadingProjects")}
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
