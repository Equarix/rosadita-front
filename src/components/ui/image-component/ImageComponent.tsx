import { ImageType } from "@/interface/api.interface";
import cx from "@/utils/cx";
import Image from "next/image";

export interface ImageComponentProps {
  url: string;
  imageType: ImageType;
}

export default function ImageComponent(props: ImageComponentProps) {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-center">
      <Image
        src={props.url}
        alt="Image"
        width={1200}
        height={800}
        className={cx(
          "w-full max-w-full lg:h-240 object-cover",
          props.imageType === "ROUNDED"
            ? "rounded-lg"
            : props.imageType === "CIRCLE"
              ? "rounded-full"
              : "rounded-none",
        )}
      />
    </div>
  );
}
