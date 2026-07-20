import { StatsComponent as IStatsComponent } from "@/interface/component.interface";
import * as ReactIcons from "react-icons/lu";
import clsx from "clsx";

interface StatsComponentProps {
  items: IStatsComponent[];
}

const getTextColorClass = (color: string) => {
  const colorMap: Record<string, string> = {
    red: "text-red-500",
    blue: "text-blue-500",
    green: "text-emerald-500",
    purple: "text-[#8b5cf6]",
    yellow: "text-yellow-500",
  };
  return colorMap[color?.toLowerCase()] || "text-gray-900";
};

export default function StatsComponent({ items }: StatsComponentProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="w-full bg-[#f8f9fa] py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon
              ? ReactIcons[item.icon as keyof typeof ReactIcons]
              : null;

            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center space-y-2"
              >
                <div
                  className={clsx(
                    "text-4xl md:text-5xl lg:text-6xl font-extrabold flex items-center justify-center gap-2",
                    getTextColorClass(item.color)
                  )}
                >
                  {item.positionIcon?.toUpperCase() === "LEFT" && Icon && (
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-orange-400 shrink-0" />
                  )}
                  <span>{item.text}</span>
                  {item.positionIcon?.toUpperCase() === "RIGHT" && Icon && (
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-orange-400 shrink-0" />
                  )}
                </div>
                <p className="text-gray-500 text-sm md:text-base font-medium">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
