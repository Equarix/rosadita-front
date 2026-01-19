import { env } from "@/config/env";
import { ResponseApi, ResponseCategory } from "@/interface/api.interface";
import CategoriesSection from "@/modules/blog/components/CategoriesSection";
import FooterBlog from "@/modules/blog/footer/Footer";
import HeroBlog from "@/modules/blog/hero/HeroBlog";
import BlogSections from "@/modules/blog/sections/BlogSections";
import { Suspense } from "react";

export default async function CategorySlug({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;

  const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/public/category`);
  const categories: ResponseApi<ResponseCategory[]> = await res.json();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-24 gap-16 relative">
      <HeroBlog />
      <Suspense
        fallback={
          <div className="w-full flex items-center justify-center py-8">
            Cargando categorías...
          </div>
        }
      >
        <section className="w-full border-b border-slate-200 py-4 flex items-center justify-center z-10 gap-3">
          <CategoriesSection categories={categories.body} />
        </section>
      </Suspense>
      <Suspense
        fallback={
          <div className="w-full flex items-center justify-center py-20">
            Loading...
          </div>
        }
      >
        <BlogSections categorySlug={categorySlug} />
      </Suspense>
      <FooterBlog />
    </div>
  );
}
