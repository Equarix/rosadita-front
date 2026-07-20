import { ResponseProjects } from "@/interface/api.interface";
import Link from "next/link";

interface ProjectCardProps {
  project: ResponseProjects;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { image, category, projectName, description, projectSlug } = project;

  return (
    <Link href={`/proyectos/detalle/${projectSlug}`} className="block h-full group">
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col h-full border border-gray-100 group-hover:border-blue-100">
        <div className="relative h-48 shrink-0">
          <img src={image?.url} alt={projectName} className="w-full h-full object-cover" />
          <span className="absolute top-4 right-4 bg-blue-100 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full">
            {category?.name}
          </span>
        </div>

        <div className="p-6 flex flex-col grow">
          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{projectName}</h3>

          <p className="text-gray-500 text-[14.5px] leading-relaxed mb-6 flex-grow">
            {description}
          </p>

          <div className="h-[1px] w-16 bg-gray-300 mb-5"></div>

          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech, index) => (
              <span
                key={index}
                className="bg-[#eef2f6] text-gray-600 text-xs font-semibold px-4 py-1.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
