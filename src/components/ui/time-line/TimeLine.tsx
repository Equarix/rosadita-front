"use client";
import { TimeLineComponent } from "@/interface/component.interface";
import cx from "@/utils/cx";
import { getColorClass } from "@/utils/getColor";
import * as ReactIcons from "react-icons/lu";

interface TimeLineProps {
  items: TimeLineComponent[];
}

export default function TimeLine({ items }: TimeLineProps) {
  return (
    <main className="w-full flex flex-col items-center justify-center py-12 sm:py-24 px-4 overflow-x-hidden">
      {items.map((i, idx) => {
        const index = idx + 1;
        const isLeft = i.position.toLowerCase() === "left";
        const isLast = index === items.length;
        const IconComponent = ReactIcons[i.icon as keyof typeof ReactIcons];
        const Icon = IconComponent || ReactIcons.LuDot;

        return (
          <div key={idx} className="flex flex-col items-center relative w-full max-w-sm sm:max-w-none">
            {/* Icon circle */}
            <article
              className={cx(
                "p-4 sm:px-5.5 sm:py-4.5 rounded-2xl relative z-10 shadow-md flex items-center justify-center shrink-0",
                getColorClass(i.color)
              )}
            >
              <Icon className="text-white size-7 sm:size-9" />
            </article>

            {/* Details section - always visible on mobile, alternating on desktop */}
            <section
              className={cx(
                "bg-white border border-gray-100 shadow-lg rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 w-full sm:w-80 lg:w-96 mt-4 sm:mt-0 sm:absolute sm:top-1/2 sm:-translate-y-1/2 z-20 text-center sm:text-left transition-all duration-300",
                isLeft
                  ? "sm:right-1/2 sm:mr-14 lg:mr-20 sm:text-end"
                  : "sm:left-1/2 sm:ml-14 lg:ml-20 sm:text-start"
              )}
            >
              <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2">
                {i.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {i.description}
              </p>
            </section>

            {/* Vertical connector line */}
            {!isLast && (
              <span className="h-28 sm:h-44 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-500 my-2 sm:my-0"></span>
            )}
          </div>
        );
      })}
    </main>
  );
}
