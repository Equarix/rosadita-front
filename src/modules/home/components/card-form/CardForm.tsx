import { ReactNode } from "react";

interface CardFormProps {
  icon: ReactNode;
  label: string;
  value: string;
}

export default function CardForm({ icon, label, value }: CardFormProps) {
  return (
    <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md ">
      <div className="flex items-center justify-center bg-blue-600 rounded-2xl w-8 h-8">
        {icon}
      </div>
      <div>
        <h1 className="font-black">{label}</h1>
        <h2 className="text-gray-500 font-inter">{value}</h2>
      </div>
    </div>
  );
}
