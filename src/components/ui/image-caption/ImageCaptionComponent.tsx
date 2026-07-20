import { ImageCaptionComponent as IImageCaptionComponent } from "@/interface/component.interface";
import * as ReactIcons from "react-icons/lu";

export default function ImageCaptionComponent({
  header,
  description,
  subheading,
  images,
}: IImageCaptionComponent) {
  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8 max-w-[1400px] mx-auto">
      <div className="text-center mb-14 flex flex-col items-center">
        {subheading && (
          <h4 className="text-[#8b5cf6] font-bold tracking-widest text-sm mb-4 uppercase">
            {subheading}
          </h4>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111827] mb-6 max-w-5xl leading-tight">
          {header}
        </h2>
        {description && (
          <p className="text-gray-500 text-lg md:text-xl max-w-3xl">
            {description}
          </p>
        )}
      </div>

      {images && images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, idx) => {
            const Icon = image.icon ? ReactIcons[image.icon as keyof typeof ReactIcons] : null;

            return (
              <div
                key={idx}
                className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[3/2] md:aspect-square lg:aspect-[4/3] group bg-gray-100"
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle dark gradient to ensure the pill stands out slightly if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-5 left-5 right-5 flex justify-start">
                  <div className="bg-[#f8f9fa] rounded-xl px-4 py-3 flex items-center gap-3 shadow-md max-w-full">
                    {Icon && (
                      <Icon className="w-5 h-5 text-[#8b5cf6] shrink-0" />
                    )}
                    <span className="font-bold text-gray-900 text-sm truncate">
                      {image.caption}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
