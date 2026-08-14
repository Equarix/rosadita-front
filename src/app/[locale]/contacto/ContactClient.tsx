"use client";
import { MdMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import Image from "next/image";
import Input from "@/components/ui/input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ContactData, ContactSchema } from "@/schemas/contact.schema";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { env } from "@/config/env";

import { useTranslations } from "next-intl";

export default function ContactClient() {
  const t = useTranslations("contact");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(ContactSchema),
  });

  const { mutate } = useMutation({
    mutationFn: async (data: ContactData) => {
      const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/public/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("Error al enviar el mensaje");
      }
      return res.json();
    },
    onSuccess: () => {
      toast.success(t("form.successToast"));
    },
    onError: () => {
      toast.error(t("form.errorToast"));
    },
  });

  return (
    <div className="flex flex-col">
      <header className="relative w-full z-1 py-24 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/contacto.png"
          alt="Equipo trabajando"
          className="absolute inset-0 w-full h-full object-cover z-0"
          width={1980}
          height={1200}
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#020617]/90 via-[#0b1e3b]/85 to-[#2b1b5a]/80 z-10"></div>
        <div className="relative z-20 max-w-6xl text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full bg-white/10 text-white text-xs tracking-wide">
            {t("hero.badge")}
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            <span className="bg-linear-to-r from-white to-blue-500 bg-clip-text text-transparent">
              {t("hero.title")}
            </span>
          </h1>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto leading-relaxed text-xl">
            {t("hero.description")}
          </p>
        </div>
      </header>

      <div className="flex flex-col items-center justify-center py-10 ">
        <section className="relative flex flex-col rounded-2xl sm:border border-gray-300 overflow-hidden sm:shadow-2xl shadow-blue-300">
          <div className="py-6 px-8  border-b border-gray-300">
            <h1 className="text-center text-2xl font-bold py-2">
              {t("form.title")}
            </h1>
            <h2 className="text-center text-xs text-gray-500">
              {t("form.subtitle")}
            </h2>
          </div>
          <form
            className="px-8 py-6 grid grid-cols-2 gap-y-4 gap-x-6"
            onSubmit={handleSubmit((data) => mutate(data))}
          >
            <Input
              label={t("form.fullName")}
              {...register("fullName")}
              error={errors.fullName?.message}
            />
            <Input
              label={t("form.email")}
              {...register("email")}
              error={errors.email?.message}
            />
            <Input
              label={t("form.subject")}
              {...register("assunto")}
              error={errors.assunto?.message}
            />
            <Input
              label={t("form.phone")}
              {...register("phone")}
              error={errors.phone?.message}
            />
            <div className="col-span-2">
              <h1 className="font-medium">{t("form.message")}</h1>
              <textarea
                className="w-full border border-gray-300 rounded-md p-2 mt-2 mb-4 h-60 placeholder:text-sm text-gray-800"
                {...register("message")}
              ></textarea>
            </div>

            <button className="bg-blue-600 col-span-2 w-full items-center text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              {t("form.submit")}
            </button>
          </form>
        </section>
        <footer className="flex items-center justify-center py-4 ">
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col items-center">
              <div className=" bg-gray-200 border border-gray-300 rounded-4xl text-xl py-2 px-2 flex justify-center items-center  text-gray-600">
                <MdMailOutline />
              </div>
              <h2 className="text-xs text-gray-400 py-1">
                {t("footer.response24h")}
              </h2>
            </div>

            <div className="flex flex-col items-center">
              <div className=" bg-gray-200 border border-gray-300 rounded-4xl text-xl py-2 px-2 flex justify-center items-center  text-gray-800">
                <CiLock />
              </div>
              <h2 className="text-xs text-gray-400 py-1">{t("footer.secureData")}</h2>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
