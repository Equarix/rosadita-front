import { Metadata } from "next";
import ContactClient from "./ContactClient";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.meta" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords").split(", "),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `https://equarix.vercel.app/${locale === "es" ? "contacto" : "en/contact"}`,
      images: ["/images/og-contact.jpg"],
    },
  };
}

export default function ContactPage() {
  return <ContactClient />;
}
