import { TimeLineComponent } from "@/interface/api.interface";
import cx from "@/utils/cx";
import { getColorClass } from "@/utils/getColor";
import * as ReactIcons from "react-icons/lu";

interface TimeLineProps {
  items: TimeLineComponent[];
}

export default function TimeLine({ items }: TimeLineProps) {
  return (
    <main className="w-full flex flex-col items-center justify-center py-24">
      {items.map((i, idx) => {
        const index = idx + 1;
        const isLeft = i.position.toLowerCase() === "left";
        const Icon = ReactIcons[i.icon as keyof typeof ReactIcons];

        return (
          <div key={idx} className="flex items-center">
            <article
              className={cx(
                "px-5.5 py-4.5 rounded-2xl",
                getColorClass(i.color)
              )}
            >
              <Icon className="text-white size-9" />
            </article>
          </div>
        );
      })}
    </main>
  );
}
