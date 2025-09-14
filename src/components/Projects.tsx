import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from './ProjectData';

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-4 relative z-20 min-h-[800px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <h2 className="text-4xl font-cyber font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-primary to-neon-secondary">
            Featured Projects
          </span>
        </h2>
        <div className="relative flex flex-col gap-16 before:content-[''] before:absolute before:left-8 before:top-10 before:bottom-10 before:w-1 before:bg-gradient-to-b before:from-neon-primary before:to-neon-secondary">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02, boxShadow: '0 8px 32px 0 rgba(129,230,217,0.15)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative flex flex-col md:flex-row items-center bg-cyber-dark rounded-2xl shadow-lg overflow-hidden min-h-[300px] pl-20 p-10"
  >
              <span className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-neon-primary rounded-full border-4 border-cyber-dark z-10"></span>
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-72 h-60 md:h-full object-cover flex-shrink-0"
                  />
              <div className="flex-1 flex flex-col gap-2 p-8">
                <h3 className="text-2xl font-cyber font-bold text-neon-primary mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-2">{project.description}</p>
                <div className="mb-2">
                  <span className="text-neon-secondary font-semibold">Key Features:</span>
                  <ul className="list-disc list-inside text-gray-400 ml-4">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3 mb-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="flex items-center gap-1 text-gray-300 bg-cyber-black px-2 py-1 rounded-md text-sm">
                      <t.icon className="text-lg" />
                      {t.name}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-2">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-neon-primary hover:text-neon-secondary font-bold underline">GitHub</a>
                  )}
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-neon-accent hover:text-neon-secondary font-bold underline">Live</a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
