"use client";
import Input from "@/components/ui/input/Input";
import { env } from "@/config/env";
import { ContactData, ContactSchema } from "@/schemas/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AnimatePresence, motion } from "motion/react";
import { useForm } from "react-hook-form";
import { Player } from "@lottiefiles/react-lottie-player";

export default function ContactHome() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(ContactSchema),
  });

  const { mutate, isSuccess } = useMutation({
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
  });

  return (
    <form
      className="relative flex flex-col sm:grid grid-cols-2 px-8 py-10 w-full xl:max-w-145 min-h-150 gap-4 bg-white rounded-2xl border border-gray-300 overflow-hidden shadow-lg"
      onSubmit={handleSubmit((data) => mutate(data))}
    >
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.4 }}
            className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center h-full w-full z-20"
          >
            <Player
              autoplay
              keepLastFrame
              src="https://assets3.lottiefiles.com/packages/lf20_jbrw3hcz.json"
              style={{ height: '200px', width: '200px' }}
            />
            <div className="text-center px-8 -mt-4">
              <h2 className="text-3xl font-extrabold text-slate-800 mb-3 tracking-tight">
                ¡Mensaje Enviado!
              </h2>
              <p className="text-slate-500 font-medium">
                Gracias por contactarnos. Nos pondremos en contacto contigo pronto.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <span className="block bg-[#137FEC]/5 size-32 rounded-full -top-10 -right-10 absolute" />

      <Input
        label="Nombre Completo"
        {...register("fullName")}
        error={errors.fullName?.message}
      />
      <Input
        label="Email"
        {...register("email")}
        error={errors.email?.message}
      />
      <Input
        label="Asunto"
        {...register("assunto")}
        error={errors.assunto?.message}
      />
      <Input
        label="Telefono"
        {...register("phone")}
        error={errors.phone?.message}
      />
      <div className="col-span-2">
        <h1 className="font-medium">Mensaje</h1>
        <textarea
          className="w-full border border-gray-300 rounded-md p-2 mt-2 mb-4 h-60 placeholder:text-sm text-gray-800"
          {...register("message")}
        ></textarea>
      </div>
      <button className="bg-blue-600 w-full items-center col-span-2 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
        Enviar Mensaje
      </button>
    </form>
  );
}
