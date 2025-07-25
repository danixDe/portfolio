import React from 'react';
import { FaGithub } from 'react-icons/fa';

const experiences = [
  {
    title: 'Open Source Developer',
    company: 'Various',
    date: 'May 2025 - Present',
    description: 'Contributing to open source projects, collaborating with global teams, and building impactful software for the community.'
  },
];

const Experience = () => (
  <section id="experience" className="py-20 bg-cyber-black">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-10 text-neon-primary text-center">Experience</h2>
      <div className="relative border-l-4 border-neon-secondary pl-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="mb-12 relative">
            <span className="absolute -left-6 top-0 bg-neon-secondary rounded-full w-6 h-6 flex items-center justify-center text-white shadow-lg">
              <FaGithub />
            </span>
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-neon-accent mb-1">{exp.title}</h3>
              <p className="text-neon-secondary font-semibold mb-1">{exp.company}</p>
              <p className="text-gray-400 text-sm mb-2">{exp.date}</p>
              <p className="text-white">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience; 