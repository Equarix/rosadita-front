interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  technologies?: string[];
}

export default function ProjectCard({
  image,
  category,
  title,
  description,
  technologies = [],
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <span className="absolute top-4 right-4 bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-bold text-lg mb-2">{title}</h3>

        <p className="text-gray-500 text-sm mb-6">{description}</p>

        <div className="bg-gray-400 w-20 h-0.5 rounded-full mb-3"></div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="py-2 px-4 bg-gray-200 text-gray-600 text-xs font-semibold rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
