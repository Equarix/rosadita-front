"use client";

import { useTranslations } from "next-intl";

interface HeroProjectsProps {
  totalProjects?: number;
}

export default function HeroProjects({ totalProjects }: HeroProjectsProps) {
  const t = useTranslations("projects.hero");

  return (
    <div className="flex flex-col justify-center items-center py-32">
      <h1 className="text-6xl font-inter font-black text-gray-900">
        {t("titleLine1")} <span className="text-blue-600">{t("titleHighlight")}</span>
      </h1>
      <p className="pt-6 pb-10 text-gray-500 text-center text-xl font-inter w-155.75">
        {t("description")}
      </p>
      <div className="rounded-2xl h-0.5 w-md bg-[#E2E8F0]"></div>
      <div className="grid grid-cols-3 gap-10 py-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-black text-2xl">
            {totalProjects !== undefined ? `+${totalProjects}` : "150+"}
          </h1>
          <h4 className="font-inter text-gray-500 text-xs">{t("stat1Label")}</h4>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-black text-2xl">98%</h1>
          <h4 className="font-inter text-gray-500 text-xs">{t("stat2Label")}</h4>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-black text-2xl">12</h1>
          <h4 className="font-inter text-gray-500 text-xs">{t("stat3Label")}</h4>
        </div>
      </div>
    </div>
  );
}
