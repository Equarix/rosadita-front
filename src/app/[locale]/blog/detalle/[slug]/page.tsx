import Component from "@/components/ui/component/Component";
import HeroBlog from "@/components/ui/hero-blog/HeroBlog";
import { env } from "@/config/env";
import { ResponseApi, ResponseBlog } from "@/interface/api.interface";
import { notFound } from "next/navigation";
import { LuCircleUser } from "react-icons/lu";

export const dynamic = "force-dynamic";

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
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-slate-50/50 via-white to-slate-50/30">
      {/* Esferas de Luz / Círculos con Blur atmosféricos y Malla Neomórfica */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        {/* Esfera superior derecha (Azul / Púrpura) */}
        <div className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-blue-400/20 via-indigo-500/15 to-purple-400/20 blur-[130px]" />

        {/* Esfera superior izquierda (Cian / Índigo) */}
        <div className="absolute top-40 -left-40 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-cyan-400/20 via-blue-500/15 to-indigo-400/15 blur-[120px]" />

        {/* Esfera central flotante */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-blue-300/10 via-purple-300/10 to-emerald-300/10 blur-[160px]" />

        {/* Esfera inferior derecha */}
        <div className="absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-purple-400/15 via-blue-400/15 to-emerald-400/15 blur-[140px]" />

        {/* Patrón de Malla Neomórfica de Puntos (Innovación visual) */}
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>



      <main className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <HeroBlog
          blogName={blog.blogName}
          blogKey={blog.blogKey}
          category={blog.category}
          createdAt={blog.createdAt}
          timeline={blog.timeline}
          url={blog.image.url}
        />

        <div className="flex lg:flex-row flex-col items-start gap-8 sm:gap-16 w-full px-5 sm:px-10 lg:px-45 py-12 max-w-[1400px]">
          <aside className="space-y-3 flex lg:flex-col lg:gap-0 gap-3 h-full w-full lg:w-60 bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-gray-100/80 shadow-xs">
            <LuCircleUser size={64} className="text-blue-600" />
            <div className="w-full">
              <h2 className="font-extrabold text-gray-900 text-lg">{blog.user.name}</h2>
              <p className="text-xs font-semibold text-blue-600 mb-2">Senior Fullstack</p>
              <p className="max-w-60 text-xs text-gray-500 leading-relaxed">
                Apasionado por las arquitecturas distribuidas y el escalado masivo de sistemas.
              </p>
            </div>
          </aside>
          <section className="w-full h-full max-w-[1200px] mx-auto py-4 px-0 flex flex-col items-center justify-center">
            {blog.components.map((c, idx) => (
              <Component key={idx.toString()} sectionId={c.key} {...c} />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
