import { cloneElement, isValidElement, ReactElement, ReactNode } from "react";

export interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="w-87.5 min-h-75.75 bg-white rounded-2xl shadow-lg p-6 flex flex-col overflow-hidden hover:shadow-2xl transition relative">
      <span className="block size-48 rounded-full bg-linear-to-r from-[#EFF6FF] to-[#DBEAFE] opacity-50 absolute top-0 right-0 translate-x-1/4 -translate-y-1/4" />

      <div className="bg-blue-600 rounded-2xl size-14 flex items-center justify-center">
        {isValidElement(icon) &&
          cloneElement(icon as ReactElement<{ className: string }>, {
            className: "text-white w-8 h-8",
          })}
      </div>
      <h3 className="font-inter font-bold text-xl pt-6 pb-2.5 z-10">{title}</h3>
      <p className="text-gray-500 text-sm z-10">{description}</p>
    </div>
  );
}
