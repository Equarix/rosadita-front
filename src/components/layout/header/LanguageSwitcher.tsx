"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { HiGlobeAlt } from "react-icons/hi2";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const toggleLanguage = () => {
    const nextLocale = locale === "es" ? "en" : "es";
    router.replace(
      // @ts-expect-error -- next-intl accepts { pathname, params }
      { pathname, params },
      { locale: nextLocale }
    );
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
      aria-label="Cambiar idioma"
    >
      <HiGlobeAlt className="text-lg text-gray-500" />
      <span className="uppercase font-semibold text-xs">{locale}</span>
    </button>
  );
}
