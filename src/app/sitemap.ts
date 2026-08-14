import { MetadataRoute } from "next";
import { env } from "@/config/env";
import {
  ResponseApi,
  ResponseBlog,
  ResponseCategory,
} from "@/interface/api.interface";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://equarix.vercel.app";

  // 1. Rutas Estáticas
  const staticRoutes = ["", "/servicios", "/proyectos", "/blog", "/contacto"];
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route || "/"}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));


  try {
    // 2. Rutas Dinámicas: Categorías
    const categoryRes = await fetch(`${env.NEXT_PUBLIC_API_URL}/public/category`);
    const categories: ResponseApi<ResponseCategory[]> = await categoryRes.json();
    
    const categoryEntries: MetadataRoute.Sitemap = Array.isArray(categories?.body)
      ? categories.body.map((category) => ({
          url: `${baseUrl}/blog/${category.slug}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.6,
        }))
      : [];

    // 3. Rutas Dinámicas: Artículos de Blog
    const blogRes = await fetch(`${env.NEXT_PUBLIC_API_URL}/public/blog`);
    const blogs: ResponseApi<ResponseBlog[]> = await blogRes.json();

    const blogEntries: MetadataRoute.Sitemap = Array.isArray(blogs?.body)
      ? blogs.body.map((blog) => ({
          url: `${baseUrl}/blog/detalle/${blog.blogSlug}`,
          lastModified: new Date(blog.timeline || blog.createdAt),
          changeFrequency: "weekly",
          priority: 0.7,
        }))
      : [];

    return [...staticEntries, ...categoryEntries, ...blogEntries];
  } catch (error) {
    console.error("Error fetching dynamic routes for sitemap:", error);
    // Fallback a solo rutas estáticas si falla la API
    return staticEntries;
  }
}

