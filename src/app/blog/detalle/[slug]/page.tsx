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

      <main className="flex items-center gap-16 w-full px-45 py-20">
        <aside className="space-y-2 h-full min-w-60">
          <LuCircleUser size={84} />
          <div>
            <h2 className="font-black text-xl">{blog.user.name}</h2>
            <p className="text-sm">Senior Fullstack</p>
          </div>
          <p className="max-w-60 text-sm">
            Apasionado por las arquitecturas distribuidas y el escalado masivo
            de sistemas.
          </p>
        </aside>
        <section className="w-full h-full max-w-full flex flex-col gap-6">
          {blog.components.map((c, idx) => (
            <Component key={idx} {...c} />
          ))}
        </section>
      </main>
    </div>
  );
}
