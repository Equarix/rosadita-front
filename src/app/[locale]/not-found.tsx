"use client";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  FiHome,
  FiArrowLeft,
  FiAlertTriangle,
  FiSearch,
  FiGrid,
} from "react-icons/fi";

export default function NotFoundPage() {
  const t = useTranslations("common.notFound");

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="hidden lg:flex absolute left-[15%] top-[70%] -translate-y-1/2 items-center gap-4 p-4 pr-8 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 z-10">
        <div className="p-3 bg-slate-50 text-slate-600 rounded-xl">
          <FiSearch size={22} />
        </div>
        <div>
          <p className="font-bold text-slate-800 text-sm">{t("searching")}</p>
          <p className="text-xs text-slate-400 mt-0.5">{t("noResults")}</p>
        </div>
      </div>

      <div className="hidden lg:flex absolute right-[15%] top-[25%] items-center gap-4 p-4 pr-8 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 z-10">
        <div className="p-3 bg-[#7375FF] text-white rounded-xl shadow-lg shadow-[#7375FF]/20">
          <FiAlertTriangle size={22} />
        </div>
        <div>
          <p className="font-bold text-slate-800 text-sm">{t("routeLost")}</p>
          <p className="text-xs text-slate-400 mt-0.5">{t("pageNotExist")}</p>
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-2xl">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-100 bg-indigo-50/50 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#7375FF] shadow-[0_0_8px_rgba(115,117,255,0.8)]" />
          <span className="text-xs font-semibold tracking-wide text-[#7375FF] uppercase">
            {t("badge")}
          </span>
        </div>

        <h1 className="text-[120px] sm:text-[180px] md:text-[220px] font-black leading-[0.8] tracking-tighter text-[#7375FF] drop-shadow-sm mb-6">
          404
        </h1>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          {t("title")}
        </h2>
        <p className="text-base sm:text-lg text-slate-500 max-w-[500px] leading-relaxed mb-10">
          {t("description")}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#7375FF] hover:bg-[#6264e6] text-white rounded-full font-semibold transition-all duration-200 shadow-lg shadow-[#7375FF]/25 hover:shadow-[#7375FF]/40 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <FiHome size={18} />
            <span>{t("backToHome")}</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-700 rounded-full font-semibold transition-all duration-200 border border-slate-200 hover:border-slate-300 w-full sm:w-auto"
          >
            <FiArrowLeft size={18} />
            <span>{t("goBack")}</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 flex items-center gap-2 opacity-80 select-none">
        <div className="flex items-center justify-center w-6 h-6 rounded bg-[#7375FF] text-white">
          <FiGrid size={14} />
        </div>
        <span className="font-semibold text-sm text-slate-600 tracking-wide">
          Equarix
        </span>
      </div>
    </div>
  );
}
