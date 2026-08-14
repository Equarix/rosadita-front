import Component from "@/components/ui/component/Component";
import { env } from "@/config/env";
import { ResponseApi, ResponseProjects } from "@/interface/api.interface";
import { notFound } from "next/navigation";
export const dynamic = "force-dynamic";

export default async function DetailProject({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/public/projects/${slug}`);

  if (!res.ok) {
    console.error("Project not found");
    console.log(`${env.NEXT_PUBLIC_API_URL}/public/projects/${slug}`);
    return notFound();
  }

  const resBlog = (await res.json()) as ResponseApi<ResponseProjects>;
  const blog = resBlog.body;
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-slate-50/50 via-white to-slate-50/30">
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        <div className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-blue-400/20 via-indigo-500/15 to-purple-400/20 blur-[130px]" />

        <div className="absolute top-40 -left-40 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-cyan-400/20 via-blue-500/15 to-indigo-400/15 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-blue-300/10 via-purple-300/10 to-emerald-300/10 blur-[160px]" />

        <div className="absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-purple-400/15 via-blue-400/15 to-emerald-400/15 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Contenido principal del Proyecto */}
      <main className="relative z-10 w-full flex flex-col items-center justify-center py-6">
        {blog.components.map((c, idx) => (
          <Component key={idx.toString()} sectionId={c.key} {...c} />
        ))}
      </main>
    </div>
  );
}
