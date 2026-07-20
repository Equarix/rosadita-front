import Component from "@/components/ui/component/Component";
import { env } from "@/config/env";
import { ResponseApi, ResponseProjects } from "@/interface/api.interface";
import { notFound } from "next/navigation";

export default async function DetailProject({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/public/projects/${slug}`);

  if (!res.ok) {
    console.error("Blog not found");
    console.log(`${env.NEXT_PUBLIC_API_URL}/public/projects/${slug}`);
    return notFound();
  }

  const resBlog = (await res.json()) as ResponseApi<ResponseProjects>;
  const blog = resBlog.body;
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {blog.components.map((c, idx) => (
        <Component key={idx.toString()} {...c} />
      ))}
    </div>
  );
}
