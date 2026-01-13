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
  return (
    <div>
      <section className="relative w-full h-150 py-24 flex items-end justify-center overflow-hidden">
        <img
          src={url}
          alt={blogName}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="flex flex-col  z-20 max-w-4xl text-left px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 text-xs font-semibold tracking-wide">
            <div className=" px-3 py-1 rounded-md bg-blue-500 text-white ">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              {category.name}
            </div>
            <div className="text-white font-inter">
              {" "}
              {createdAt} · {timeline} lectura
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            {blogName} holaaaaaaa askhasjkasas
          </h1>
        </div>
      </section>
    </div>
  );
}
