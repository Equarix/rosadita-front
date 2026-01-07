"use client";
import Chip from "@/components/ui/chip/Chip";
import { ResponseCategory } from "@/interface/api.interface";

interface CategoriesSectionProps {
  categories: ResponseCategory[];
}

export default function CategoriesSection({
  categories,
}: CategoriesSectionProps) {
  return (
    <>
      <Chip className="px-5 text-sm border-slate-200 cursor-pointer" isActive>
        Todas
      </Chip>

      {categories.map((c) => (
        <Chip
          className="px-5 text-sm border-slate-200 cursor-pointer"
          key={c._id}
        >
          {c.name}
        </Chip>
      ))}
    </>
  );
}
