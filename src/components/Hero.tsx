
import { ArrowDown } from 'lucide-react';
import { useRevealAnimation } from '@/utils/animations';

const Hero = () => {
  const revealRef = useRevealAnimation();

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20 pb-10"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal stagger-delay-1">
            <span className="inline-block py-1 px-3 mb-5 rounded-full bg-black/5 text-sm font-medium">
              Full-Stack Java Developer
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 reveal stagger-delay-2">
            Crafting elegant solutions with code
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 reveal stagger-delay-3">
            Specializing in Java development with expertise in creating optimized, 
            business-oriented solutions and collaborative projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal stagger-delay-4">
            <a 
              href="#java-exercises" 
              className="px-8 py-3 rounded-lg bg-black text-white font-medium transition-all hover:bg-black/90 hover:shadow-lg"
            >
              Explore Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-lg border border-black text-black font-medium transition-all hover:bg-black/5"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#java-exercises" aria-label="Scroll down">
          <ArrowDown className="text-gray-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
