import Button from "@/components/ui/button/Button";
import cx from "@/utils/cx";
import { LuSearch } from "react-icons/lu";

interface SearchBlogProps {
  className?: string;
}

export default function SearchBlog({ className }: SearchBlogProps) {
  return (
    <div
      className={cx(
        "w-full max-w-xl min-h-14.5 bg-white border border-slate-200 shadow rounded-xl flex items-center px-4 gap-4",
        className
      )}
    >
      <div>
        <LuSearch size={24} />
      </div>

      <input
        type="text"
        className="py-4.5 px-4 text-[#94A3B8] w-full"
        placeholder="Buscar artículos, temas o autores..."
      />

      <Button variant="secondary" className="py-2 px-4">
        Buscar
      </Button>
    </div>
  );
}
