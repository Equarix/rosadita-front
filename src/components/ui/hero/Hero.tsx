import { ColorType } from "@/interface/api.interface";
import cx from "@/utils/cx";
import { LuAArrowDown } from "react-icons/lu";

export interface HeroComponentProps {
  title: string;
  span: {
    text: string;
    color: ColorType;
  };
  image: string;
  buttonLive: string;
  buttonDemo: string;
}

export default function Hero({
  buttonDemo,
  buttonLive,
  image,
  span,
  title,
}: HeroComponentProps) {
  return (
    <div>
      <span
        className={cx(
          "w-[200px]",
          span.color === "blue" && "bg-blue-100 text-blue-800",
          span.color === "red" && "bg-red-100 text-red-800"
        )}
      >
        <LuAArrowDown />
        {span.text}
      </span>

      <h1 className="">{title}</h1>
    </div>
  );
}
