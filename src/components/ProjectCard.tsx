
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  link,
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        'rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm card-hover',
        className
      )}
    >
      {image && (
        <div className="aspect-video w-full overflow-hidden bg-gray-100">
          <img
            src={image || "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {link && (
          <a
            href={link}
            className="inline-flex items-center text-sm font-medium text-black hover:text-gray-700 transition-colors"
          >
            View Project <ArrowUpRight className="ml-1 h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
