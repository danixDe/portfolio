import React from 'react';
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiExpress, SiTailwindcss, SiMongodb, SiCplusplus, SiC, SiRedux, SiDocker, SiFirebase, SiVite, SiPostgresql, SiLinux, SiTensorflow, SiScikitlearn, SiPostman, SiFigma } from 'react-icons/si';

const skills = [
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'C', icon: SiC, color: '#A8B9CC' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'React.js', icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Express.js', icon: SiExpress, color: '#000000' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Vite', icon: SiVite, color: '#646CFF' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Linux', icon: SiLinux, color: '#FCC624' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
];

const Skills = () => (
  <section id="skills" className="py-20 bg-cyber-dark">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-10 text-neon-primary text-center">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
        {skills.map(({ name, icon: Icon, color }) => (
          <div key={name} className="flex flex-col items-center gap-2 glass-card p-4 w-28 h-28 justify-center hover:scale-105 transition-transform">
            <Icon className="text-4xl mb-2" style={{ color }} />
            <span className="text-white text-sm font-semibold text-center">{name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills; 