import { Component } from "./component.interface";

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
  blogKey: string;
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
  components: Component[];
}

export interface ResponseImage {
  _id: string;
  url: string;
  imageId: number;
  __v: number;
}

export interface ResponseCategoryProjects {
  _id: string;
  name: string;
  description: string;
  slug: string;
  status: boolean;
  color: string;
  category_proyectId: number;
  __v: number;
}

export interface ResponseProjects {
  _id: string;
  projectName: string;
  projectSlug: string;
  description: string;
  user: string;
  image: Image;
  category: Category;
  status: boolean;
  isPage: boolean;
  technologies: string[];
  createdAt: string;
  projectId: number;
  components: Component[];
  __v: number;
}

export interface Image {
  _id: string;
  url: string;
  imageId: number;
  __v: number;
}

export interface Category {
  _id: string;
  name: string;
  description: string;
  slug: string;
  status: boolean;
  color: string;
  category_proyectId: number;
  __v: number;
}

export type ColorType = "red" | "blue" | "green" | "yellow" | "purple";

export type ImageType = "ROUNDED" | "CIRCLE" | "SQUARE";
