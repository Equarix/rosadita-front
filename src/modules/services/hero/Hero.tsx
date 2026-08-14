"use client";

import "./hero.css";
import Chip from "@/components/ui/chip/Chip";
import { LuBadgeCheck } from "react-icons/lu";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("services.hero");

  return (
    <section className="flex flex-col gap-6 items-center justify-center relative w-full">
      <span className="block size-150 bg-hero rounded-full absolute -top-full right-0" />

      <Chip className="border-[#DBEAFE] bg-[#EFF6FF] text-[#137FEC]">
        <LuBadgeCheck />
        {t("badge")}
      </Chip>

      <h1 className="font-black text-5xl text-center sm:text-start sm:text-6xl">
        {t("titleLine1")} <span className="text-blue-700">{t("titleHighlight")}</span>
      </h1>
      <span className="block w-24 h-1.5 bg-blue-700 rounded-full" />

      <p className="max-w-160.75 text-center text-lg sm:text-xl">
        {t("description")}
      </p>
    </section>
  );
}
