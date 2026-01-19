import {
  JSONContent,
  TextComponent as TextComponentInterface,
} from "@/interface/component.interface";
import React, { Fragment, ReactNode } from "react";

export default function TextComponent({ content }: TextComponentInterface) {
  if (!content) return null;

  return <div className="text-gray-200">{renderNode(content)}</div>;
}

const renderNode = (node: JSONContent): ReactNode => {
  const { type, content, text, marks, attrs } = node;

  // Handle Marks (Bold, Italic, Link, etc.)
  let renderedContent: ReactNode = text;

  if (marks && text) {
    renderedContent = marks.reduce((acc, mark) => {
      switch (mark.type) {
        case "bold":
          return <strong className="font-bold text-primary">{acc}</strong>;
        case "italic":
          return <em className="italic">{acc}</em>;
        case "strike":
          return <s className="line-through">{acc}</s>;
        case "code":
          return (
            <code className="bg-gray-800 text-gold-500 rounded px-1 py-0.5 font-mono text-sm">
              {acc}
            </code>
          );
        case "link":
          return (
            <a
              href={mark.attrs?.href}
              target={mark.attrs?.target}
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              {acc}
            </a>
          );
        default:
          return acc;
      }
    }, text as ReactNode);
  } else if (content) {
    renderedContent = content.map((child, index) => (
      <Fragment key={index}>{renderNode(child)}</Fragment>
    ));
  }

  // Handle Nodes (Paragraph, Heading, Lists, etc.)
  switch (type) {
    case "doc":
      return <div className="space-y-4">{renderedContent}</div>;

    case "paragraph":
      return (
        <p className="leading-relaxed text-lg mb-4 text-gray-300">
          {renderedContent}
        </p>
      );

    case "heading":
      const level = attrs?.level || 1;
      const HeadingTag = `h${level}` as any;
      const sizes: Record<number, string> = {
        1: "text-4xl font-bold mb-6",
        2: "text-3xl font-bold mb-5",
        3: "text-2xl font-semibold mb-4",
        4: "text-xl font-semibold mb-3",
        5: "text-lg font-medium mb-2",
        6: "text-base font-medium mb-2",
      };
      return (
        <HeadingTag className={sizes[level] || sizes[1]}>
          {renderedContent}
        </HeadingTag>
      );

    case "bulletList":
      return (
        <ul className="list-disc list-outside ml-6 mb-4 space-y-1">
          {renderedContent}
        </ul>
      );

    case "orderedList":
      const start = attrs?.start || 1;
      return (
        <ol
          start={start}
          className="list-decimal list-outside ml-6 mb-4 space-y-1"
        >
          {renderedContent}
        </ol>
      );

    case "listItem":
      return <li className="pl-1">{renderedContent}</li>;

    case "blockquote":
      return (
        <blockquote className="border-l-4 border-gold-500 pl-4 py-2 my-4 italic text-gray-400 bg-gray-900/50 rounded-r">
          {renderedContent}
        </blockquote>
      );

    case "codeBlock":
      const language = attrs?.language || "text";
      return (
        <pre className="bg-[#1e1e1e] p-4 rounded-lg overflow-x-auto mb-4 border border-gray-800">
          <code className={`language-${language} text-sm font-mono`}>
            {renderedContent}
          </code>
        </pre>
      );

    case "horizontalRule":
      return <hr className="border-t border-gray-700 my-8" />;

    case "hardBreak":
      return <br />;

    case "image":
      return (
        <div className="my-6">
          <img
            src={attrs?.src}
            alt={attrs?.alt || ""}
            title={attrs?.title}
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      );

    case "text":
      // Text nodes are handled above in marks processing
      return <>{renderedContent}</>;

    default:
      // Render children for unknown container types, or nothing if leaf
      return <>{renderedContent}</>;
  }
};
