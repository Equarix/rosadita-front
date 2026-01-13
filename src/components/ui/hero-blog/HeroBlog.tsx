export interface HeroBlogComponentProps {
  timeline: string;
  category: Category;
  blogName: string;
  createdAt: string;
  url: string;
}

export interface Category {
  name: string;
  description: string;
  slug: string;
  status: boolean;
  categoryId: number;
  color: string;
}

export default function HeroBlog({
  timeline,
  category,
  blogName,
  createdAt,
  url,
}: HeroBlogComponentProps) {
  return <div></div>;
}
