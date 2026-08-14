"use client";
import Chip from "@/components/ui/chip/Chip";
import SearchBlog from "../components/SearchBlog";
import { Suspense } from "react";
import { useTranslations } from "next-intl";

export default function HeroBlog() {
  const t = useTranslations("blog.hero");

  return (
    <section className="flex flex-col items-center py-24 gap-6 relative w-full ">
      <span className="block size-96 rounded-full bg-blue-700/20 blur-3xl absolute -top-1/2 right-0 translate-x-1/2" />
      <span className="block size-64 rounded-full bg-purple-600/20 blur-3xl absolute -bottom-1/2 -translate-x-1/2 left-0" />

      <Chip className="border-[#DBEAFE] bg-[#EFF6FF] text-[#137FEC]">
        <span className="size-2 rounded-full bg-[#137FEC]" />
        {t("badge")}
      </Chip>

      <h1 className="font-black text-5xl text-center lg:text-start sm:text-6xl">
        {t("titleLine1")} <span className="text-blue-700">{t("titleHighlight")}</span>
      </h1>

      <p className="max-w-160.75 text-center text-lg sm:text-xl">
        {t("description")}
      </p>
      <Suspense>
        <SearchBlog className="mt-4" />
      </Suspense>
    </section>
  );
}
