"use client";
import Chip from "@/components/ui/chip/Chip";
import { useWidth } from "@/hooks/useWidth";
import { ResponseCategory } from "@/interface/api.interface";
import { useParams } from "next/navigation";
import Marquee from "react-fast-marquee";

interface CategoriesSectionProps {
  categories: ResponseCategory[];
}

export default function CategoriesSection({
  categories,
}: CategoriesSectionProps) {
  const param = useParams<{
    categorySlug: string;
  }>();

  const width = useWidth();

  if (width > 1028) {
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

  return (
    <Marquee
      speed={40}
      style={{
        gap: 12,
      }}
    >
      <div className="w-full flex items-center gap-3">
        <Chip
          className="px-5 text-sm border-slate-200 cursor-pointer"
          isActive={!param.categorySlug}
          href="/blog"
        >
          Todas
        </Chip>

        {categories.map((c) => (
          <Chip
            className="px-5 text-sm border-slate-200 cursor-pointer text-nowrap lg:bg-transparent bg-white"
            key={c._id}
            isActive={param.categorySlug === c.slug}
            href={`/blog/${c.slug}`}
          >
            {c.name}
          </Chip>
        ))}
      </div>
    </Marquee>
  );
}
