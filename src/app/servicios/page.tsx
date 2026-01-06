import CardServices from "@/components/ui/card-services/CardServices";
import { cardItems } from "@/modules/services/card-items";
import Hero from "@/modules/services/hero/Hero";
import MiddleCircle from "@/modules/services/MiddleCircle";

export default function ServicesPage() {
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
