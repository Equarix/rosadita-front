import TimeLine from "@/components/ui/time-line/TimeLine";
import React from "react";

const data = [
  {
    icon: "LuAccessibility",
    color: "RED",
    title: "a",
    description: "a",
    position: "LEFT",
  },
  {
    icon: "LuAccessibility",
    color: "RED",
    title: "a",
    description: "a",
    position: "LEFT",
  },
];

export default function page() {
  return (
    <div>
      <TimeLine items={data} />
    </div>
  );
}
