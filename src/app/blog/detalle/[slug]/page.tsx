import Component from "@/components/ui/component/Component";
import HeroBlog from "@/components/ui/hero-blog/HeroBlog";
import { env } from "@/config/env";
import { ResponseApi, ResponseBlog } from "@/interface/api.interface";
import { notFound } from "next/navigation";
import { LuCircleUser } from "react-icons/lu";

export default async function DetailBlog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/public/blogs/${slug}`);

  if (!res.ok) {
    console.error("Blog not found");
    console.log(`${env.NEXT_PUBLIC_API_URL}/public/blogs/${slug}`);
    return notFound();
  }

  const resBlog = (await res.json()) as ResponseApi<ResponseBlog>;
  const blog = resBlog.body;
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <HeroBlog
        blogName={blog.blogName}
        blogKey={blog.blogKey}
        category={blog.category}
        createdAt={blog.createdAt}
        timeline={blog.timeline}
        url={blog.image.url}
      />

      <main className="flex lg:flex-row flex-col items-center gap-4 sm:gap-16 w-full px-5 sm:px-10 lg:px-45 py-20 max-w-full">
        <aside className="space-y-2 flex lg:flex-col lg:gap-0 gap-2 h-full w-full lg:w-60">
          <LuCircleUser size={84} />
          <div className="w-full">
            <h2 className="font-black text-xl">{blog.user.name}</h2>
            <p className="text-sm">Senior Fullstack</p>

            <p className="max-w-60 text-sm">
              Apasionado por las arquitecturas distribuidas y el escalado masivo
              de sistemas.
            </p>
          </div>
        </aside>
        <section className="w-full h-full max-w-[1200px] mx-auto py-10 px-5 sm:px-10 lg:px-0 flex flex-col items-center justify-center">
          {blog.components.map((c, idx) => (
            <Component key={idx.toString()} sectionId={c.key} {...c} />
          ))}
        </section>
      </main>
    </div>
  );
}
