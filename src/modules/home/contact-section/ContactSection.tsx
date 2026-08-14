"use client";

import CardForm from "../components/card-form/CardForm";
import { IoMailSharp } from "react-icons/io5";
import ContactHome from "../components/contact-home/ContactHome";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("home.contactSection");

  return (
    <div className="w-full flex items-center justify-center sm:px-5 py-10 flex-col sm:bg-gray-100 relative rounded-3xl">
      <header className="flex flex-col items-center justify-center w-fit px-10 rounded-2xl py-10">
        <h2 className="font-inter font-bold text-3xl py-3">
          {t("badge")}
        </h2>
        <span className="rounded-2xl w-20 h-1 bg-blue-600 block" />
      </header>
      <section className="relative max-w-7xl mx-auto px-1 py-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
          <div className="sm:block flex items-center justify-center flex-col">
            <h1 className="text-3xl font-inter font-black text-gray-900 sm:text-start text-center">
              {t("title")}
            </h1>

            <p className="py-6 text-gray-500 sm:px-0 px-5 text-center sm:text-start">
              {t("description")}
            </p>
            <section className="flex flex-col gap-5">
              <CardForm
                icon={<IoMailSharp className="text-white" />}
                label={t("emailLabel")}
                value="equarix@outlook.com"
              />

              <CardForm
                icon={<IoMailSharp className="text-white" />}
                label={t("phoneLabel")}
                value="+51 977834606"
              />
              <CardForm
                icon={<IoMailSharp className="text-white" />}
                label={t("addressLabel")}
                value={t("addressValue")}
              />
            </section>
          </div>

          <ContactHome />
        </div>
      </section>

      <span className="size-96 block rounded-full bg-linear-to-r from-[#BFDBFE]/50 to-[#E9D5FF]/50 absolute -bottom-20 -left-20 blur-3xl" />
    </div>
  );
}
