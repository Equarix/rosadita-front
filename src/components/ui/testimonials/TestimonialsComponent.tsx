import { TestimonialsComponent as ITestimonialsComponent } from "@/interface/component.interface";
import { LuStar } from "react-icons/lu";
import clsx from "clsx";

export default function TestimonialsComponent({
  title,
  subtitle,
  testimonials,
}: ITestimonialsComponent) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {subtitle && (
          <span className="text-sm font-bold tracking-widest text-[#8b5cf6] uppercase mb-4">
            {subtitle}
          </span>
        )}
        {title && (
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">
            {title}
          </h2>
        )}

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials?.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col h-full"
            >
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, starIdx) => (
                  <LuStar
                    key={starIdx}
                    className={clsx(
                      "w-5 h-5",
                      starIdx < testimonial.starts
                        ? "text-orange-500 fill-orange-500"
                        : "text-gray-200 fill-gray-200",
                    )}
                  />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {testimonial.description}
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] flex items-center justify-center font-bold text-lg">
                  {getInitials(testimonial.name)}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-gray-900 text-sm">
                    {testimonial.name}
                  </span>
                  <span className="text-gray-500 text-xs">
                    {testimonial.position}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
