import CardServices from "@/components/ui/card-services/CardServices";
import { cardItemsMetadata } from "@/modules/services/card-items";
import Hero from "@/modules/services/hero/Hero";
import MiddleCircle from "@/modules/services/MiddleCircle";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services.meta" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords").split(", "),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `https://equarix.vercel.app/${locale === "es" ? "servicios" : "en/services"}`,
      images: ["/images/og-services.jpg"],
    },
  };
}

export default async function ServicesPage() {
  const t = await getTranslations("services.items");

  const cardItems = cardItemsMetadata.map((item) => {
    const rawDesc = t.raw(`${item.key}.description`);
    const descriptionList = Array.isArray(rawDesc) ? rawDesc : [rawDesc];

    const featureItems = item.featureKeys.map((fKey) => ({
      title: t(`${item.key}.features.${fKey}.title`),
      description: t(`${item.key}.features.${fKey}.description`),
    }));

    return {
      icon: item.icon,
      mainColor: item.mainColor,
      secondaryColor: item.secondaryColor,
      title: t(`${item.key}.title`),
      description: descriptionList,
      cardFeatures: {
        icon: item.cardFeaturesIcon,
        title: t(`${item.key}.featuresTitle`),
        items: featureItems,
      },
    };
  });

  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-24 px-6 gap-16 relative">
      <Hero />
      <MiddleCircle />

      <section className="space-y-12">
        {cardItems.map((item, index) => (
          <CardServices key={index} {...item} />
        ))}
      </section>
    </div>
  );
}
