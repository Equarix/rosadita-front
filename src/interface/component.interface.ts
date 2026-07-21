import { ColorType, ImageType } from "./api.interface";

export interface Component {
  type: ComponentType;
  key?: string;
  sectionId?: string;
  headerComponent?: HeaderComponent;
  statsComponent?: StatsComponent[];
  questionsComponent?: QuestionsComponent;
  imageCaptionComponent?: ImageCaptionComponent;
  heroComponent?: HeroComponent;
  imageComponent?: ImageComponent;
  codeComponent?: CodeComponent;
  nextArticleComponent?: NextArticleComponent;
  timeLineComponent?: TimeLineComponent[];
  detailsComponent?: DetailsComponent[];
  quoteComponent?: QuoteComponent;
  textComponent?: TextComponent;
  testimonialsComponent?: TestimonialsComponent;
  carrouselComponent?: CarrouselComponent;
}

export interface CarrouselComponent {
  title: string;
  subtitle: string;
  description: string;
  urls: string[];
}

export interface TestimonialsComponent {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

export interface Testimonial {
  starts: number;
  description: string;
  name: string;
  position: string;
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

export interface HeaderComponent {
  proyectName: string;
  proyectIcon: string;
  isFixed: boolean;
  buttons?: Button[];
  items: Item[];
}

export interface Button {
  name: string;
  link?: string;
  key: string;
  isExternal: boolean;
}

export interface Item {
  name: string;
  key: string;
}

export interface StatsComponent {
  text: string;
  description: string;
  color: string;
  icon: string;
  positionIcon: string;
}

export interface QuestionsComponent {
  subHeading: string;
  header: string;
  questions: Question[];
}

export interface Question {
  question: string;
  answer: string;
}

export interface ImageCaptionComponent {
  header: string;
  description?: string;
  subheading?: string;
  images: Image[];
}

export interface Image {
  url: string;
  caption: string;
  icon: string;
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
  | "IMAGE_CAPTION"
  | "STATS"
  | "QUESTIONS"
  | "HEADER"
  | "TESTIMONIALS"
  | "CARROUSEL"
  | "UNKNOWN";

export type LanguageType =
  "TYPESCRIPT" | "PYTHON" | "JAVA" | "CSHARP" | "REACT" | "HTML" | "SQL";

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
