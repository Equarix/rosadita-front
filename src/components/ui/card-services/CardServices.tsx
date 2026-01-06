import { LuCircleCheck } from "react-icons/lu";
import CharCircle from "../char-circle/CharCircle";
import cx from "@/utils/cx";
import { cloneElement, ReactElement, ReactNode } from "react";

export interface CardServicesProps {
  icon: ReactNode;
  mainColor: string;
  secondaryColor: string;
  title: string;
  description: string[];
  cardFeatures: {
    icon: ReactNode;
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
}

export default function CardServices({
  cardFeatures,
  description,
  icon,
  mainColor,
  secondaryColor,
  title,
}: CardServicesProps) {
  return (
    <div className="p-10 rounded-3xl flex w-full gap-12 border max-w-284 border-slate-100 bg-white z-10 shadow-md">
      <section className="flex flex-col gap-6 w-full max-w-1/3">
        <CharCircle
          className={cx("rounded-2xl size-16", mainColor, secondaryColor)}
        >
          {cloneElement(icon as ReactElement<{ className?: string }>, {
            className: "size-8",
          })}
        </CharCircle>

        <h2 className="font-bold text-3xl">{title}</h2>

        {description.map((desc, index) => (
          <p key={index} className="text-slate-600">
            {desc}
          </p>
        ))}
      </section>

      <section className="w-full p-8 rounded-2xl bg-slate-50 max-h-max flex flex-col gap-6">
        <span className="flex items-center gap-2 font-bold">
          {cloneElement(
            cardFeatures.icon as ReactElement<{ className?: string }>,
            {
              className: cx("size-6", mainColor),
            }
          )}
          {cardFeatures.title}
        </span>

        <div className="grid grid-cols-2 gap-6">
          {cardFeatures.items.map((item, index) => (
            <FeatureCard
              key={index}
              title={item.title}
              description={item.description}
              className={mainColor}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className="flex w-full gap-3">
      <LuCircleCheck className={cx("size-6", className)} />

      <span className="flex flex-col gap-1">
        <strong className="text-sm">{title}</strong>
        <span className="text-xs">{description}</span>
      </span>
    </div>
  );
}
