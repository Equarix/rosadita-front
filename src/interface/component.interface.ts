import { ColorType, ImageType } from "./api.interface";

export interface Component {
  type: ComponentType;
  heroComponent?: HeroComponent;
  imageComponent?: ImageComponent;
  codeComponent?: CodeComponent;
  nextArticleComponent?: NextArticleComponent;
  timeLineComponent?: TimeLineComponent[];
  detailsComponent?: DetailsComponent[];
  quoteComponent?: QuoteComponent;
  textComponent?: TextComponent;
}

export interface HeroComponent {
  title: string;
  span: Span;
  image: string;
  buttonLive: string;
  buttonDemo: string;
  description: string;
}

export interface Span {
  text: string;
  color: ColorType;
}

export interface ImageComponent {
  url: string;
  imageType: ImageType;
}

export interface CodeComponent {
  code: string;
  type: LanguageType;
}

export interface NextArticleComponent {
  title: string;
  header: string;
  buttonText: string;
  articleUrl: string;
}

export interface TimeLineComponent {
  icon: string;
  color: string;
  title: string;
  description: string;
  position: string;
}

export interface DetailsComponent {
  header: string;
  content: string;
}

export interface QuoteComponent {
  quoteText: string;
  userImage: string;
  userName: string;
  userPosition: string;
}

export type ComponentType =
  | "HERO"
  | "IMAGE"
  | "CODE"
  | "NEXT_ARTICLE"
  | "TIME_LINE"
  | "DETAILS"
  | "QUOTE"
  | "TEXT"
  | "UNKNOWN";

export type LanguageType =
  | "TYPESCRIPT"
  | "PYTHON"
  | "JAVA"
  | "CSHARP"
  | "REACT"
  | "HTML"
  | "SQL";

export interface TextComponent {
  content: JSONContent;
}

export type JSONContent = {
  type?: string;
  attrs?: Record<string, unknown>;
  content?: JSONContent[];
  marks?: {
    type: string;
    attrs?: Record<string, unknown>;
    [key: string]: unknown;
  }[];
  text?: string;
  [key: string]: unknown;
};
