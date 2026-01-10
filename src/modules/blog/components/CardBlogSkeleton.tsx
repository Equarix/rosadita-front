export default function CardBlogSkeleton() {
  return (
    <div className="flex flex-col w-full h-full border rounded-2xl min-h-121.5 border-slate-200 animate-pulse">
      {/* Image */}
      <div className="w-full min-h-40.75 bg-slate-200 rounded-t-2xl relative">
        {/* Category chip */}
        <div className="absolute top-2 left-3 h-5 w-16 bg-slate-300 rounded" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2.5">
        {/* Meta */}
        <div className="flex items-center gap-5.75">
          <div className="h-3 w-24 bg-slate-200 rounded" />
          <div className="h-3 w-14 bg-slate-200 rounded" />
        </div>

        {/* Title + description */}
        <div className="flex flex-col gap-3 mt-2">
          <div className="h-6 w-4/5 bg-slate-300 rounded" />
          <div className="h-4 w-full bg-slate-200 rounded" />
          <div className="h-4 w-5/6 bg-slate-200 rounded" />
        </div>
      </div>

      {/* Footer */}
      <div className="pt-10.25 flex items-center justify-between px-5 pb-5">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 bg-slate-300 rounded-full" />
          <div className="h-4 w-20 bg-slate-200 rounded" />
        </div>

        <div className="h-6 w-6 bg-slate-300 rounded" />
      </div>
    </div>
  );
}
