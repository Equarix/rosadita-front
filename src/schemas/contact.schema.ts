import z from "zod";

export const ContactSchema = z.object({
  fullName: z
    .string()
    .min(2, "El nombre completo debe tener al menos 2 caracteres"),
  email: z.email("Por favor, ingresa un correo electrónico válido"),
  assunto: z.string().min(2, "El asunto debe tener al menos 2 caracteres"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  phone: z
    .string()
    .min(7, "El teléfono debe tener al menos 7 caracteres")
    .max(15, "El teléfono no puede tener más de 15 caracteres"),
});

export type ContactData = z.infer<typeof ContactSchema>;
