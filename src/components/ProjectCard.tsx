import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaGlobe } from 'react-icons/fa';

interface Tech {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface ProjectLinks {
  live?: string;
  github?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  features: string[];
  tech: Tech[];
  links: ProjectLinks;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  features, 
  tech, 
  links 
}) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 0 15px rgba(129, 230, 217, 0.3)'
      }}
      className="glass-card p-6 min-w-[320px] w-[350px] flex flex-col transition-all duration-300 mx-2 snap-center"
    >
      <h3 className="text-2xl font-cyber font-bold mb-4 text-neon-primary">
        {title}
      </h3>
      
      <p className="text-gray-300 mb-4 line-clamp-3">
        {description}
      </p>

      <div className="mb-6 flex-1 overflow-y-auto">
        <h4 className="text-neon-secondary font-semibold mb-2">Key Features:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          {features.map((feature, i) => (
            <li key={i} className="line-clamp-1">{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="text-neon-secondary font-semibold mb-2">Technologies:</h4>
        <div className="flex flex-wrap gap-3">
          {tech.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-1 text-gray-300"
            >
              <tech.icon className="text-neon-primary" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 mt-auto">
        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neon-primary hover:text-neon-secondary transition-colors"
          >
            <FaGithub /> GitHub
          </a>
        )}
        {links.live && (
          <a
            href={links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neon-primary hover:text-neon-secondary transition-colors"
          >
            <FaGlobe /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;