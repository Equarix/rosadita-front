import { env } from "@/config/env";
import {
  ResponseApi,
  ResponseBlog,
  ResponseCategory,
} from "@/interface/api.interface";
import CardBlog from "@/modules/blog/components/CardBlog";
import CategoriesSection from "@/modules/blog/components/CategoriesSection";
import FooterBlog from "@/modules/blog/footer/Footer";
import HeroBlog from "@/modules/blog/hero/HeroBlog";

export default async function BlogPage() {
  const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/public/category`);
  const categories: ResponseApi<ResponseCategory[]> = await res.json();

  const resBlog = await fetch(`${env.NEXT_PUBLIC_API_URL}/public/blogs`);
  const blogs: ResponseApi<ResponseBlog[]> = await resBlog.json();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-24 gap-16 relative">
      <HeroBlog />

      <section className="w-full border-b border-slate-200 py-4 flex items-center justify-center z-10 gap-3">
        <CategoriesSection categories={categories.body} />
      </section>

      <div className="flex items-center justify-center w-full max-w-240 px-4 py-12">
        <section className="grid grid-cols-3 w-full gap-6">
          {blogs.body.map((blog) => (
            <CardBlog key={blog._id} blog={blog} />
          ))}
        </section>
      </div>

      <FooterBlog />
    </div>
  );
}
