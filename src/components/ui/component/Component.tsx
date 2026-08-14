import {
  Component as ComponentType,
  ComponentType as ComponentEnum,
} from "@/interface/component.interface";
import { ReactNode } from "react";
import Hero from "../hero/Hero";
import Details from "../details/Details";
import ImageComponent from "../image-component/ImageComponent";
import NextArticle from "../next-article/NextArticle";
import TimeLine from "../time-line/TimeLine";
import Quote from "../quote/Quote";
import Editor from "../editor/Editor";
import TextComponent from "../text-component/TextComponent";
import HeaderComponent from "../header/HeaderComponent";
import ImageCaptionComponent from "../image-caption/ImageCaptionComponent";
import StatsComponent from "../stats/StatsComponent";
import QuestionsComponent from "../questions/QuestionsComponent";
import TestimonialsComponent from "../testimonials/TestimonialsComponent";
import CarrouselComponent from "../carrousel/CarrouselComponent";
import TableComponent from "../table/TableComponent";

export default function Component({ type, sectionId, ...props }: ComponentType & { sectionId?: string }) {
  const ComponentMap: Record<ComponentEnum, ReactNode> = {
    HERO: <Hero {...props.heroComponent!} />,
    DETAILS: <Details details={props.detailsComponent!} />,
    IMAGE: <ImageComponent {...props.imageComponent!} />,
    NEXT_ARTICLE: <NextArticle {...props.nextArticleComponent!} />,
    TIME_LINE: <TimeLine items={props.timeLineComponent!} />,
    CODE: <Editor {...props.codeComponent!} />,
    QUOTE: <Quote {...props.quoteComponent!} />,
    TEXT: <TextComponent {...props.textComponent!} />,
    HEADER: <HeaderComponent {...props.headerComponent!} />,
    IMAGE_CAPTION: <ImageCaptionComponent {...props.imageCaptionComponent!} />,
    STATS: <StatsComponent items={props.statsComponent!} />,
    QUESTIONS: <QuestionsComponent {...props.questionsComponent!} />,
    TESTIMONIALS: <TestimonialsComponent {...props.testimonialsComponent!} />,
    CARROUSEL: <CarrouselComponent {...props.carrouselComponent!} />,
    TABLE: <TableComponent {...props.tableComponent!} />,
    UNKNOWN: <div>Unknown Component Type</div>,
  };

  const component = ComponentMap[type] || ComponentMap["UNKNOWN"];

  return (
    <div id={sectionId || props.key} className="w-full">
      {component}
    </div>
  );
}
