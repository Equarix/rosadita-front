import Image from "next/image";

export interface NextArticleProps {
  title: string;
  header: string;
  buttonText: string;
  articleUrl: string;
}

export default function NextArticle({
  title,
  header,
  buttonText,
  articleUrl,
}: NextArticleProps) {
  return (
    <section className="relative w-full h-[280px] md:h-[320px] flex justify-center items-center overflow-hidden">
      <Image
        src="/images/fondoarticle.png"
        alt="Artículo destacado"
        className="absolute inset-0 w-full h-full object-cover z-0"
        width={1920}
        height={1080}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/80 to-black/20"></div>

      <div className="flex flex-col  z-20  text-left px-6 ">
        <div className="flex flex-col w-2xl">
          <span className="mb-4 text-xs font-semibold text-blue-400">
            {header} asjdahjkashj
          </span>

          <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight ">
            {title} asdklsadkasdjlk asjaskasjkjhkasjkhsajashjask asjasdjkashdjk
          </h1>
        </div>

        <div>
          <button className="mt-6  items-center gap-2 px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition">
            {buttonText} →
          </button>
        </div>
      </div>
    </section>
  );
}
