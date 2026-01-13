interface Metadata {
  totalItems: number;
  itemCount: number;
  totalPages: number;
  currentPage: number;
}

export interface ResponseApi<T> {
  message: string;
  body: T;
  status: number;
  token?: string;
  errors?: string[];
  metadata?: Metadata;
}
export interface ResponseCategory {
  _id: string;
  name: string;
  description: string;
  categoryId: number;
  slug: string;
  color: string;
  __v: number;
  status: boolean;
}

export interface ResponseBlog {
  _id: string;
  blogName: string;
  blogSlug: string;
  description: string;
  user: {
    name: string;
  };
  image: ResponseImage;
  category: ResponseCategory;
  timeline: string;
  createdAt: string;
  blogId: number;
  __v: number;
  status: boolean;
}

export interface ResponseImage {
  _id: string;
  url: string;
  imageId: number;
  __v: number;
}

export type ColorType = "red" | "blue" | "green" | "yellow" | "purple";
