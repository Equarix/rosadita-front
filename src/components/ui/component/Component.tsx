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

export default function Component({ type, ...props }: ComponentType) {
  const ComponentMap: Record<ComponentEnum, ReactNode> = {
    HERO: <Hero {...props.heroComponent!} />,
    DETAILS: <Details details={props.detailsComponent!} />,
    IMAGE: <ImageComponent {...props.imageComponent!} />,
    NEXT_ARTICLE: <NextArticle {...props.nextArticleComponent!} />,
    TIME_LINE: <TimeLine items={props.timeLineComponent!} />,
    CODE: <Editor {...props.codeComponent!} />,
    QUOTE: <Quote {...props.quoteComponent!} />,
    UNKNOWN: <div>Unknown Component Type</div>,
  };

  return ComponentMap[type] || ComponentMap["UNKNOWN"];
}
