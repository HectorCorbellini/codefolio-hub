
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import CategorySection from '@/components/CategorySection';
import ProjectCard from '@/components/ProjectCard';
import VideoCard from '@/components/VideoCard';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const Index = () => {
  // Initialize animation observers
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Java Exercises Section */}
      <CategorySection
        id="java-exercises"
        title="Improved Java Exercises"
        description="Optimized solutions and best practices applied to standard Java exercises, showcasing clean code, performance improvements, and advanced Java concepts."
        alternate
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Advanced Data Structures"
            description="Reimagined implementation of core data structures with optimized time and space complexity."
            image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
            tags={['Java', 'Data Structures', 'Algorithms']}
          />
          <ProjectCard
            title="Concurrency Patterns"
            description="Enhanced multithreading exercises demonstrating proper synchronization and parallel processing techniques."
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            tags={['Java', 'Concurrency', 'Multithreading']}
          />
          <ProjectCard
            title="Functional Programming"
            description="Refactored imperative code samples using Java's functional programming capabilities for cleaner, more maintainable code."
            image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            tags={['Java', 'Streams API', 'Functional Programming']}
          />
        </div>
      </CategorySection>
      
      {/* Business Projects Section */}
      <CategorySection
        id="business-projects"
        title="Business-Oriented Projects"
        description="Real-world project models based on professional experience, showcasing practical applications of software development in business contexts."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProjectCard
            title="Financial Transaction Processor"
            description="A scalable system for processing high-volume financial transactions with strict consistency and auditability requirements."
            image="https://images.unsplash.com/photo-1563986768609-322da13575f3"
            tags={['Java', 'Spring Boot', 'Microservices', 'PostgreSQL']}
            className="lg:col-span-2"
          />
          <ProjectCard
            title="Enterprise Resource Planning Module"
            description="Custom ERP module for inventory management with real-time tracking and reporting capabilities."
            image="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d"
            tags={['Java', 'REST API', 'Angular', 'Oracle']}
          />
          <ProjectCard
            title="Automated Compliance System"
            description="Regulatory compliance monitoring system with configurable rule engines and comprehensive reporting."
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            tags={['Java', 'Rule Engine', 'Spring Security', 'Audit']}
          />
        </div>
      </CategorySection>
      
      {/* Watch Section */}
      <CategorySection
        id="videos"
        title="Development Process Watch"
        description="Watch demonstrations of coding workflows, implementation techniques, and completed project walkthroughs."
        alternate
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <VideoCard
            title="Implementing Clean Architecture"
            description="Step-by-step implementation of clean architecture principles in a Java Spring Boot application."
            thumbnail="https://images.unsplash.com/photo-1550063873-ab792950096b"
            videoUrl="#"
            duration="15:32"
          />
          <VideoCard
            title="Microservices Communication"
            description="Demonstration of different communication patterns between microservices using Java."
            thumbnail="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
            videoUrl="#"
            duration="23:17"
          />
          <VideoCard
            title="Performance Optimization"
            description="Techniques for identifying and resolving performance bottlenecks in Java applications."
            thumbnail="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            videoUrl="#"
            duration="18:45"
          />
        </div>
      </CategorySection>
      
      {/* Collaborative Projects Section */}
      <CategorySection
        id="collaborations"
        title="Collaborative Projects"
        description="Projects developed as part of teams, highlighting communication, coordination, and collaborative problem-solving abilities."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="Open Source Contribution: Spring Framework"
            description="Contributions to the Spring Framework, focusing on documentation improvements and minor feature enhancements."
            image="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            tags={['Java', 'Spring', 'Open Source', 'Community']}
          />
          <ProjectCard
            title="Cross-functional Team Project: E-commerce Platform"
            description="Development of a scalable e-commerce platform with a team of designers, product managers, and other developers."
            image="https://images.unsplash.com/photo-1556761175-b413da4baf72"
            tags={['Java', 'Microservices', 'DevOps', 'Team Collaboration']}
          />
          <ProjectCard
            title="Hackathon Winner: AI-Powered Code Assistant"
            description="48-hour hackathon project developing an AI assistant for Java developers to automate routine coding tasks."
            image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
            tags={['Java', 'Machine Learning', 'Team Project', 'Innovation']}
            className="md:col-span-2"
          />
        </div>
      </CategorySection>
      
      <Footer />
    </div>
  );
};

export default Index;
