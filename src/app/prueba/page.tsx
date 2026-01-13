import Details from "@/components/ui/details/Details";
import Hero from "@/components/ui/hero/Hero";
import React from "react";

const data = {
  title: " FinTech Dashboard Revolution",
  span: {
    text: "Case Study",
    color: "blue",
  },
  image:
    "https://res.cloudinary.com/dl0wif5vm/image/upload/v1767764593/b4bxn2wxkmbc77o8cgm0.jpg",
  buttonLive: "asd",
  buttonDemo: "asd",
};

const detailsData = [
  {
    header: "Cliente",
    content: "asd",
  },
  {
    header: "Cliente",
    content: "asd",
  },
  {
    header: "Cliente",
    content: "asd",
  },
  {
    header: "Cliente",
    content: "asd",
  },
];

export default function page() {
  return (
    <div className="flex flex-col gap-20">
      <Hero {...data} />

      <Details details={detailsData} />
    </div>
  );
}
