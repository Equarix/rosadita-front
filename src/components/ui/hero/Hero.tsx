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
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 flex flex-col items-center justify-center">
      <div className="flex items-center gap-8 lg:gap-16 lg:flex-row flex-col w-full">
        <div className="w-full lg:max-w-2xl text-left">
          {span?.text && (
            <span
              className={cx(
                "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 sm:mb-6",
                span.color === "blue" && "bg-blue-100 text-blue-800",
                span.color === "red" && "bg-red-100 text-red-800",
                span.color === "green" && "bg-green-100 text-green-800",
                span.color === "yellow" && "bg-yellow-100 text-yellow-800",
                span.color === "purple" && "bg-purple-100 text-purple-800",
              )}
            >
              <IoRocketOutline />
              {span.text}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter font-black text-gray-900 tracking-tight leading-tight">
            {title}
          </h1>
          <p className="py-4 sm:py-6 text-gray-600 text-base sm:text-lg leading-relaxed">{description}</p>
          <div className="py-2 sm:py-4 flex flex-wrap gap-3 sm:gap-4">
            {buttonLive && buttonLive.length > 0 && <Button>{buttonLive}</Button>}
            {buttonDemo && buttonDemo.length > 0 && (
              <Button variant="secondary">{buttonDemo}</Button>
            )}
          </div>
        </div>
        <div className="relative w-full lg:w-auto lg:min-w-[460px] h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
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
