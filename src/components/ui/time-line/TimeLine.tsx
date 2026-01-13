import { TimeLineComponent } from "@/interface/api.interface";
import cx from "@/utils/cx";
import { getColorClass } from "@/utils/getColor";
import * as ReactIcons from "react-icons/lu";

interface TimeLineProps {
  items: TimeLineComponent[];
}

export default function TimeLine({ items }: TimeLineProps) {
  return (
    <main className="w-full flex flex-col items-center justify-center py-36">
      {items.map((i, idx) => {
        const index = idx + 1;
        const isLeft = i.position.toLowerCase() === "left";
        const isLast = index === items.length;
        const Icon = ReactIcons[i.icon as keyof typeof ReactIcons];

        return (
          <div key={idx} className="flex items-center flex-col">
            <article
              className={cx(
                "px-5.5 py-4.5 rounded-2xl relative",
                getColorClass(i.color)
              )}
            >
              <Icon className="text-white size-9" />

              <section
                className={cx(
                  "absolute bg-white border border-gray-100 shadow-lg rounded-3xl min-w-md top-1/2 -translate-y-1/2 p-8 ",
                  isLeft
                    ? "left-full translate-x-40"
                    : "right-full -translate-x-40 text-end"
                )}
              >
                <h3 className="font-semibold text-lg mb-2">{i.title}</h3>
                <p>{i.description}</p>
              </section>
            </article>
            {!isLast && <span className="h-52 w-0.5 bg-blue-500"></span>}
          </div>
        );
      })}
    </main>
  );
}
