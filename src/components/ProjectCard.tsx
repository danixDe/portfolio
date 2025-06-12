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
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  features,
  tech,
  links,
  image,
}) => {
  const handleCardClick = () => {
    if (links?.live) {
      window.open(links.live, '_blank', 'noopener,noreferrer');
    }
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      onClick={handleCardClick}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 0 15px rgba(129, 230, 217, 0.3)',
      }}
      className="relative group glass-card p-6 min-w-[360px] w-[400px] h-[780px] flex flex-col transition-all duration-300 mx-2 snap-center overflow-hidden"
    >
      {/* Top Image Section */}
      <div className="relative w-full h-56 mb-4 rounded-md overflow-hidden">
        <img
          src={image}
          alt={`${title} preview`}
          className="w-full h-full object-cover rounded-md transition-all duration-300 group-hover:blur-sm"
        />

        {/* Icons appear centered in the image only on hover */}
        <div
          className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          onClick={stopPropagation}
        >
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm text-neon-primary hover:text-neon-secondary p-2 rounded-full shadow-lg"
            >
              <FaGithub size={24} />
            </a>
          )}
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm text-neon-primary hover:text-neon-secondary p-2 rounded-full shadow-lg"
            >
              <FaGlobe size={24} />
            </a>
          )}
        </div>
      </div>

      {/* Project Title */}
      <h3 className="text-2xl font-cyber font-bold mb-4 text-neon-primary">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 mb-4 line-clamp">{description}</p>

      {/* Features */}
      <div className="mb-6 flex-1 overflow-y-auto">
        <h4 className="text-neon-secondary font-semibold mb-2">Key Features:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          {features.map((feature, i) => (
            <li key={i} className="line-clamp-1">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="mb-2">
        <h4 className="text-neon-secondary font-semibold mb-2">Technologies:</h4>
        <div className="flex flex-wrap gap-3">
          {tech.map((t, i) => (
            <div key={i} className="flex items-center gap-1 text-gray-300">
              <t.icon className="text-neon-primary" />
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
