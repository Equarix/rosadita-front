"use client";
import { ResponseCategoryProjects } from "@/interface/api.interface";
import { useParams } from "next/navigation";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "motion/react";
import { useState } from "react";

interface CategoriesProjectSectionProps {
  categories: ResponseCategoryProjects[];
}

export default function CategoriesProjectSection({
  categories,
}: CategoriesProjectSectionProps) {
  const param = useParams<{
    categorySlug: string;
  }>();

  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const activeSlug = param.categorySlug || "todos";
  const currentBlueSlug = hoveredTab ?? activeSlug;

  const renderLinks = (isDesktop: boolean) => {
    return (
      <>
        <Link
          href="/proyectos"
          onMouseEnter={() => setHoveredTab("todos")}
          className={clsx(
            "relative px-7 py-3 rounded-full transition-colors duration-200 whitespace-nowrap",
            currentBlueSlug === "todos" ? "text-white" : "text-gray-700"
          )}
        >
          {activeSlug === "todos" && currentBlueSlug !== "todos" && (
            <div className="absolute inset-0 bg-gray-100 rounded-full" />
          )}
          {currentBlueSlug === "todos" && (
            isDesktop ? (
              <motion.div
                layoutId="desktop-blue-pill"
                className="absolute inset-0 bg-blue-600 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            ) : (
              <div className="absolute inset-0 bg-blue-600 rounded-full" />
            )
          )}
          <span className="relative z-10">Todos</span>
        </Link>

        {categories.map((c) => {
          const hasBluePill = currentBlueSlug === c.slug;
          const isActiveButNotBlue = activeSlug === c.slug && currentBlueSlug !== c.slug;

          return (
            <Link
              key={c._id}
              href={`/proyectos/${c.slug}`}
              onMouseEnter={() => setHoveredTab(c.slug)}
              className={clsx(
                "relative px-5 py-3 rounded-full transition-colors duration-200 whitespace-nowrap",
                hasBluePill ? "text-white" : "text-gray-700"
              )}
            >
              {isActiveButNotBlue && (
                <div className="absolute inset-0 bg-gray-100 rounded-full" />
              )}
              {hasBluePill && (
                isDesktop ? (
                  <motion.div
                    layoutId="desktop-blue-pill"
                    className="absolute inset-0 bg-blue-600 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-blue-600 rounded-full" />
                )
              )}
              <span className="relative z-10">{c.name}</span>
            </Link>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div 
        className="max-[1028px]:hidden w-max rounded-full bg-white shadow-sm flex items-center p-1 mx-auto relative z-0"
        onMouseLeave={() => setHoveredTab(null)}
      >
        {renderLinks(true)}
      </div>

      <div className="min-[1029px]:hidden w-full overflow-hidden">
        <Marquee
          speed={40}
          style={{
            gap: 12,
          }}
        >
          <div className="w-full flex items-center gap-3 p-1">
            {renderLinks(false)}
          </div>
        </Marquee>
      </div>
    </>
  );
}
