"use client";
import Chip from "@/components/ui/chip/Chip";
import { ResponseCategory } from "@/interface/api.interface";
import { useParams } from "next/navigation";

interface CategoriesSectionProps {
  categories: ResponseCategory[];
}

export default function CategoriesSection({
  categories,
}: CategoriesSectionProps) {
  const param = useParams<{
    categorySlug: string;
  }>();

  return (
    <>
      <Chip
        className="px-5 text-sm border-slate-200 cursor-pointer"
        isActive={!param.categorySlug}
        href="/blog"
      >
        Todas
      </Chip>

      {categories.map((c) => (
        <Chip
          className="px-5 text-sm border-slate-200 cursor-pointer"
          key={c._id}
          isActive={param.categorySlug === c.slug}
          href={`/blog/${c.slug}`}
        >
          {c.name}
        </Chip>
      ))}
    </>
  );
}
