import { ColorType } from "@/interface/api.interface";
import cx from "@/utils/cx";
import Button from "@/components/ui/button/Button";
import { IoRocketOutline } from "react-icons/io5";

export interface HeroComponentProps {
  title: string;
  span: {
    text: string;
    color: ColorType;
  };
  image: string;
  buttonLive: string;
  buttonDemo: string;
  description: string;
}

export default function Hero({
  buttonDemo,
  buttonLive,
  image,
  span,
  title,
  description,
}: HeroComponentProps) {
  return (
    <div className="relative max-w-8xl mx-auto px-1 py-24 flex flex-col items-center justify-center">
      <div className="flex items-center gap-16 ">
        <div className="max-w-2xl">
          <span
            className={cx(
              "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6",
              span.color === "blue" && "bg-blue-100 text-blue-800",
              span.color === "red" && "bg-red-100 text-red-800",
              span.color === "green" && "bg-green-100 text-green-800",
              span.color === "yellow" && "bg-yellow-100 text-yellow-800",
              span.color === "purple" && "bg-purple-100 text-purple-800"
            )}
          >
            <IoRocketOutline />
            {span.text}
          </span>
          <h1 className="text-6xl font-inter font-black text-gray-900">
            {title}
          </h1>
          <p className="py-6 text-gray-500 text-lg">{description}</p>
          <div className="py-4 flex gap-4">
            <Button>{buttonLive}</Button>

            <Button variant="secondary">{buttonDemo}</Button>
          </div>
        </div>
        <div className="relative w-120 h-75 rounded-2xl overflow-hidden hover:shadow-2xl transition ">
          <img
            src={image}
            alt="Portada"
            className="object-cover rounded-2xl w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
