"use client";

import { ResponseApi, ResponseBlog } from "@/interface/api.interface";
import { useInfiniteQuery } from "@tanstack/react-query";
import CardBlog from "../components/CardBlog";
import CardBlogSkeleton from "../components/CardBlogSkeleton";
import { env } from "@/config/env";
import { AnimatePresence } from "motion/react";
import Button from "@/components/ui/button/Button";
import { TbReload } from "react-icons/tb";
import { useSearchParams } from "next/navigation";

interface BlogSectionsProps {
  categorySlug?: string;
}

export default function BlogSections({ categorySlug }: BlogSectionsProps) {
  const searchParams = useSearchParams();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery<ResponseApi<ResponseBlog[]>>({
      queryKey: ["blogs-infinite"],
      initialPageParam: 1,
      queryFn: async ({ pageParam }) => {
        const search = searchParams.get("search");

        const url = new URL(`${env.NEXT_PUBLIC_API_URL}/public/blogs`);
        url.searchParams.append("page", (pageParam as number).toString());
        url.searchParams.append("limit", "6");
        if (categorySlug) {
          url.searchParams.append("category", categorySlug);
        }
        if (search && search.trim().length > 0) {
          url.searchParams.append("search", search);
        }

        const res = await fetch(url.toString());

        if (!res.ok) {
          throw new Error("Error fetching blogs");
        }

        return res.json();
      },
      getNextPageParam: (lastPage) => {
        const currentPage = Number(lastPage!.metadata!.currentPage);
        const totalPages = lastPage!.metadata!.totalPages;

        return currentPage < totalPages ? currentPage + 1 : undefined;
      },
    });

  const blogs = data?.pages.flatMap((page) => page.body) ?? [];

  if (status === "pending") {
    return (
      <div className="flex flex-col items-center justify-center w-full max-w-240 px-4 py-12">
        <section className="grid grid-cols-3 w-full gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <CardBlogSkeleton key={i} />
          ))}
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-240 px-4 py-12">
      <section className="grid grid-cols-3 w-full gap-6">
        <AnimatePresence>
          {blogs.map((blog) => (
            <CardBlog key={blog._id} blog={blog} />
          ))}

          {isFetchingNextPage &&
            Array.from({ length: 6 }).map((_, i) => (
              <CardBlogSkeleton key={`skeleton-${i}`} />
            ))}
        </AnimatePresence>
      </section>

      {hasNextPage && (
        <div className="mt-11">
          <Button
            variant="secondary"
            className="flex items-center gap-2 py-2.5"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            <TbReload
              size={24}
              className={isFetchingNextPage ? "animate-spin" : ""}
            />
            {isFetchingNextPage ? "Cargando..." : "Cargar más artículos"}
          </Button>
        </div>
      )}
    </div>
  );
}
