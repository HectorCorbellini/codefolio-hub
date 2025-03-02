
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useRevealAnimation } from '@/utils/animations';

interface CategorySectionProps {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
  alternate?: boolean;
}

const CategorySection = ({
  id,
  title,
  description,
  children,
  className,
  alternate = false,
}: CategorySectionProps) => {
  const revealRef = useRevealAnimation();

  return (
    <section
      id={id}
      className={cn(
        'py-20 px-6 md:px-12 lg:px-24',
        alternate ? 'bg-gray-50' : 'bg-white',
        className
      )}
      ref={revealRef}
    >
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 mb-5 rounded-full bg-black/5 text-sm font-medium reveal">
            {id.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 reveal stagger-delay-1">
            {title}
          </h2>
          <p className="text-lg text-gray-600 reveal stagger-delay-2">
            {description}
          </p>
        </div>
        
        <div className="reveal stagger-delay-3">
          {children}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
