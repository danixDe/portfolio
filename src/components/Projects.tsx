import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProjectCard from './ProjectCard';
import { projectsData } from './ProjectData';

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  // Check scroll position to update arrow visibility
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

    setShowLeftArrow(scrollLeft > 20);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);

    // Trigger scrollbar thumb fade-in
    setIsAnimating(true);
    clearTimeout((handleScroll as any).timeout);
    (handleScroll as any).timeout = setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollTo = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current || isAnimating) return;

    setIsAnimating(true);

    const container = scrollContainerRef.current;
    const cardWidth = 370; // card width + margin
    const scrollAmount = direction === 'left' ? -cardWidth * 2 : cardWidth * 2;
    const currentScroll = container.scrollLeft;
    const targetScroll = currentScroll + scrollAmount;

    if (direction === 'left' && targetScroll < 0) {
      container.scrollLeft = container.scrollWidth - container.clientWidth;
      setTimeout(() => {
        smoothScroll(container, container.scrollLeft - cardWidth * 2, 500);
      }, 50);
      return;
    }

    if (direction === 'right' && targetScroll > container.scrollWidth - container.clientWidth) {
      container.scrollLeft = 0;
      setTimeout(() => {
        smoothScroll(container, cardWidth * 2, 500);
      }, 50);
      return;
    }

    smoothScroll(container, targetScroll, 500);
  };

  const smoothScroll = (element: HTMLElement, target: number, duration: number) => {
    const start = element.scrollLeft;
    const change = target - start;
    let startTime: number | null = null;

    function animateScroll(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeInOutQuad = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      element.scrollLeft = start + change * easeInOutQuad;

      if (elapsed < duration) {
        window.requestAnimationFrame(animateScroll);
      } else {
        setIsAnimating(false);
        handleScroll();
      }
    }

    window.requestAnimationFrame(animateScroll);
  };

  return (
    <section id="projects" className="py-20 px-4 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <h2 className="text-4xl font-cyber font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-primary to-neon-secondary">
            Featured Projects
          </span>
        </h2>

        <div className="relative">
          {/* Left navigation button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: showLeftArrow ? 1 : 0 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full backdrop-blur-sm text-white/90 -ml-5 group-hover:scale-110 transition-all duration-300"
            onClick={() => scrollTo('left')}
            aria-label="Scroll left"
          >
            <FaChevronLeft size={24} />
          </motion.button>

          {/* Scrollable container with iPhone scrollbar */}
          <div
            ref={scrollContainerRef}
            className={`flex overflow-x-auto py-4 snap-x snap-mandatory iphone-scroll ${isAnimating ? 'scrolling' : ''}`}
            style={{ scrollBehavior: 'smooth' }}
          >
            {projectsData.map((project, index) => (
            <div key ={index} className='group'>
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                features={project.features}
                tech={project.tech}
                links={project.links}
                image = {project.image}
              />
            </div>
            ))}
          </div>

          {/* Right navigation button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: showRightArrow ? 1 : 0 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full backdrop-blur-sm text-white/90 -mr-5 group-hover:scale-110 transition-all duration-300"
            onClick={() => scrollTo('right')}
            aria-label="Scroll right"
          >
            <FaChevronRight size={24} />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
