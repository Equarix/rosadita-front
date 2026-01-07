"use client";

import Button from "@/components/ui/button/Button";
import { LuMail } from "react-icons/lu";

export default function FooterBlog() {
  return (
    <section className="w-full py-16 flex flex-col items-center justify-center bg-[#F8FAFC] border-slate-200 border-t">
      <span className="flex items-center justify-center w-14 h-15.5 bg-white border border-slate-200 rounded-full mb-4">
        <LuMail size={34} className="text-blue-700" />
      </span>

      <h3 className="font-bold text-3xl mb-2">Mantente actualizado</h3>
      <p className="max-w-105 text-center leading-6 mb-8">
        Recibe los mejores artículos de desarrollo y tecnología directamente en
        tu bandeja de entrada. Sin spam.
      </p>

      <div className="flex items-center gap-3">
        <input
          type="text"
          className="py-3.5 px-4 border border-[#CBD5E1] rounded-lg text-[#94A3B8]"
          placeholder="tu@email.com"
        />
        <Button className="h-full">Suscribirse</Button>
      </div>
    </section>
  );
}
