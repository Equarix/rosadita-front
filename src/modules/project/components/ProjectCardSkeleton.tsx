export default function ProjectCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden animate-pulse flex flex-col h-full border border-gray-100">
      <div className="relative h-48 bg-slate-200 shrink-0">
        <div className="absolute top-4 right-4 bg-slate-300 w-16 h-7 rounded-full" />
      </div>

      <div className="p-6 flex flex-col grow">
        <div className="h-6 w-3/4 bg-slate-300 rounded mb-4" />
        
        <div className="flex flex-col gap-2.5 mb-6 flex-grow">
          <div className="h-3.5 w-full bg-slate-200 rounded" />
          <div className="h-3.5 w-5/6 bg-slate-200 rounded" />
          <div className="h-3.5 w-4/6 bg-slate-200 rounded" />
        </div>

        <div className="h-[1px] w-16 bg-slate-300 mb-5"></div>

        <div className="flex flex-wrap gap-2">
          <div className="h-7 w-20 bg-slate-200 rounded-full" />
          <div className="h-7 w-24 bg-slate-200 rounded-full" />
        </div>
      </div>
    </div>
  );
}
