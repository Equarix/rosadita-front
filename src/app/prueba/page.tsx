import Details from "@/components/ui/details/Details";
import HeroBlog from "@/components/ui/hero-blog/HeroBlog";
import Hero from "@/components/ui/hero/Hero";
import NextArticle from "@/components/ui/next-article/NextArticle";
import Quote from "@/components/ui/quote/Quote";
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
  description:
    "Desarrollo de software personalizado, adaptado a la escalabilidad de su empresa. Transformamos problemas complejos en soluciones elegantes y escalables.",
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

const dataBlog = {
  timeline: "5 min",
  category: {
    name: "Diseño UX/UI",
    description: "Diseño UX/UI",
    slug: "diseno-uxui",
    status: true,
    categoryId: 8,
    color: "blue",
  },
  blogName: "El Futuro de la Arquitectura Serverless en 2024",
  blogKey: "Serverless",
  url: "https://res.cloudinary.com/dl0wif5vm/image/upload/v1767764593/b4bxn2wxkmbc77o8cgm0.jpg",
  createdAt: "2026-01-10T19:10:08.747Z",
};

const nextArticleData = {
  title: "a",
  header: "a",
  buttonText: "a2",
  articleUrl: "url",
};

const quoteData = {
  quoteText: "ASD",
  userImage:
    "https://res.cloudinary.com/dl0wif5vm/image/upload/v1767764593/b4bxn2wxkmbc77o8cgm0.jpg",
  userName: "asd",
  userPosition: "asd",
};

export default function page() {
  return (
    <div className="flex flex-col gap-20">
      <Hero {...data} />

      <Details details={detailsData} />

      <HeroBlog {...dataBlog} />

      <NextArticle {...nextArticleData} />

      <Quote {...quoteData} />
    </div>
  );
}
