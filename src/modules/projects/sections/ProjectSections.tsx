"use client";

import { ResponseApi, ResponseProjects } from "@/interface/api.interface";
import { useInfiniteQuery } from "@tanstack/react-query";
import ProjectCard from "@/modules/project/components/ProjectCard";
import ProjectCardSkeleton from "@/modules/project/components/ProjectCardSkeleton";
import { env } from "@/config/env";
import { AnimatePresence } from "motion/react";
import Button from "@/components/ui/button/Button";
import { TbReload } from "react-icons/tb";
import { useSearchParams } from "next/navigation";

interface ProjectSectionsProps {
  categorySlug?: string;
}

export default function ProjectSections({
  categorySlug,
}: ProjectSectionsProps) {
  const searchParams = useSearchParams();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery<ResponseApi<ResponseProjects[]>>({
      queryKey: ["projects-infinite", categorySlug, searchParams.get("search")],
      initialPageParam: 1,
      queryFn: async ({ pageParam }) => {
        const search = searchParams.get("search");

        const url = new URL(`${env.NEXT_PUBLIC_API_URL}/public/projects`);
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
          throw new Error("Error fetching projects");
        }

        return res.json();
      },
      getNextPageParam: (lastPage) => {
        const currentPage = Number(lastPage?.metadata?.currentPage || 1);
        const totalPages = lastPage?.metadata?.totalPages || 1;

        return currentPage < totalPages ? currentPage + 1 : undefined;
      },
    });

  const projects = data?.pages.flatMap((page) => page.body) ?? [];

  if (status === "pending") {
    return (
      <div className="flex flex-col items-center justify-center py-14 w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-14 w-full max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        <AnimatePresence>
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}

          {isFetchingNextPage &&
            Array.from({ length: 6 }).map((_, i) => (
              <ProjectCardSkeleton key={`skeleton-${i}`} />
            ))}
        </AnimatePresence>
      </div>

      {hasNextPage && (
        <div className="flex justify-center items-center py-10">
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
            {isFetchingNextPage ? "Cargando..." : "Cargar más proyectos ↓"}
          </Button>
        </div>
      )}
    </div>
  );
}
