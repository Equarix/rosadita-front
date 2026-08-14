import { FaDove } from "react-icons/fa6";
import "./footer.css";
import { Link } from "@/i18n/navigation";
import CharCircle from "@/components/ui/char-circle/CharCircle";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("common.footer");

  return (
    <footer className="flex flex-col md:flex-row z-10 relative items-start justify-between w-full py-8 px-6 bg-white">
      <span className="border-footer" />

      <section className="flex flex-col gap-y-3.5 py-12 ">
        <Link href="/" className="flex items-center gap-2 font-semibold text-xl hover:opacity-80 transition">
          <FaDove className="text-blue-500" />
          Equarix
        </Link>

        <p className="max-w-96 text-gray-600">
          {t("description")}
        </p>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-3 gap-12 py-12">
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-lg text-gray-900">{t("services.title")}</h2>
          <Link href="/servicios" className="text-gray-600 hover:text-blue-600 transition">{t("services.web")}</Link>
          <Link href="/servicios" className="text-gray-600 hover:text-blue-600 transition">{t("services.mobile")}</Link>
          <Link href="/servicios" className="text-gray-600 hover:text-blue-600 transition">{t("services.consulting")}</Link>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-lg text-gray-900">{t("company.title")}</h2>
          <Link href="/proyectos" className="text-gray-600 hover:text-blue-600 transition">{t("company.projects")}</Link>
          <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition">{t("company.blog")}</Link>
          <Link href="/contacto" className="text-gray-600 hover:text-blue-600 transition">{t("company.contact")}</Link>
        </div>

        <div className="flex flex-col gap-3 col-span-2 md:col-span-1">
          <h2 className="font-semibold text-lg text-gray-900">{t("contact.title")}</h2>
          <div className="flex items-center gap-3">
            <CharCircle>LI</CharCircle>
            <CharCircle>TW</CharCircle>
          </div>
        </div>
      </section>
    </footer>
  );
}
