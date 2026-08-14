import { env } from "@/config/env";
import { ResponseApi, ResponseCategory } from "@/interface/api.interface";
import CategoriesSection from "@/modules/blog/components/CategoriesSection";
import FooterBlog from "@/modules/blog/footer/Footer";
import HeroBlog from "@/modules/blog/hero/HeroBlog";
import BlogSections from "@/modules/blog/sections/BlogSections";
import { Suspense } from "react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog.meta" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords").split(", "),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `https://equarix.vercel.app/${locale === "es" ? "blog" : "en/blog"}`,
      images: ["/images/og-blog.jpg"],
    },
  };
}

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const t = await getTranslations("blog");

  const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/public/category`);
  const categories: ResponseApi<ResponseCategory[]> = await res.json();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-24 px-5 sm:px-0 gap-2 sm:gap-16 relative">
      <HeroBlog />

      <Suspense
        fallback={
          <div className="w-full flex items-center justify-center py-8">
            {t("loadingCategories")}
          </div>
        }
      >
        <section className="w-full border-b border-slate-200 sm:py-4 flex items-center justify-center z-10 gap-3">
          <CategoriesSection categories={categories.body} />
        </section>
      </Suspense>

      <Suspense
        fallback={
          <div className="w-full flex items-center justify-center py-20">
            {t("loading")}
          </div>
        }
      >
        <BlogSections />
      </Suspense>

      <FooterBlog />
    </div>
  );
}
