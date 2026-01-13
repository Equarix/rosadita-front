import Chip from "@/components/ui/chip/Chip";
import { ResponseBlog } from "@/interface/api.interface";
import { getColorCategory } from "@/modules/category/colorCategory";
import cx from "@/utils/cx";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import Image from "next/image";
import { BiSolidUserCircle } from "react-icons/bi";
import { LuArrowRight, LuCalendar, LuClock } from "react-icons/lu";
import { motion } from "motion/react";
import Link from "next/link";

interface CardBlogProps {
  blog: ResponseBlog;
}

export default function CardBlog({ blog }: CardBlogProps) {
  const color = getColorCategory(blog.category.color);

  return (
    <Link href={`/blog/detalle/${blog.blogSlug}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col w-full h-full border rounded-2xl border-slate-200"
      >
        <header className="w-full relative min-h-40.75 rounded-t-2xl">
          <Image
            src={blog.image.url}
            width={163}
            alt={blog.blogName}
            height={195}
            className="w-full object-cover rounded-t-2xl max-h-40.75"
          />

          <Chip
            className={cx(
              color,
              "text-white max-w-max px-2 py-1 rounded text-xs absolute top-2 left-3 border-none"
            )}
          >
            {blog.category.name}
          </Chip>
        </header>

        <section className="p-5 flex flex-col gap-2.5">
          <header className="flex items-center text-[#64748B] text-xs gap-5.75">
            <span className="flex items-center gap-1">
              <LuCalendar />

              {format(new Date(blog.createdAt), "dd 'de' MMM, yyyy", {
                locale: es,
              })}
            </span>

            <span className="flex items-center gap-1">
              <LuClock />
              {blog.timeline}
            </span>
          </header>

          <article className="flex flex-col gap-3">
            <h3 className="font-bold text-xl">{blog.blogName}</h3>
            <p>{blog.description}</p>
          </article>
        </section>

        <footer className="pt-10.25 flex items-center justify-between px-5 pb-5">
          <div className="flex items-center gap-2">
            <BiSolidUserCircle size={24} />
            <span className="text-sm font-medium">{blog.user.name}</span>
          </div>

          <LuArrowRight size={24} className="text-blue-600" />
        </footer>
      </motion.div>
    </Link>
  );
}
