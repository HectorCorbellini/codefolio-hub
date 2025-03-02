
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  className?: string;
}

const VideoCard = ({
  title,
  description,
  thumbnail,
  videoUrl,
  duration,
  className,
}: VideoCardProps) => {
  return (
    <div 
      className={cn(
        'rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm card-hover',
        className
      )}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <a 
          href={videoUrl} 
          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-colors duration-300" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <div className="h-14 w-14 rounded-full bg-white/90 flex items-center justify-center">
            <Play className="h-6 w-6 text-black" />
          </div>
        </a>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-medium py-0.5 px-2 rounded">
          {duration}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
