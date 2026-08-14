import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contacto | Hablemos de tu Proyecto",
  description: "¿Tienes una idea o proyecto en mente? Ponte en contacto con el equipo de Equarix. Ofrecemos consultoría gratuita y presupuestos personalizados para desarrollo de software.",
  keywords: ["contacto equarix", "presupuesto desarrollo web", "agencia software contacto", "consultoría tecnológica gratis"],
  openGraph: {
    title: "Contacto | Equarix - Soluciones Digitales",
    description: "Estamos listos para transformar tu negocio con tecnología de punta. El primer paso es una simple conversación.",
    url: "https://equarix.vercel.app/contacto",
    images: ["/images/og-contact.jpg"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
