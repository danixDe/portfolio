import React from 'react';
import arvix from '../assets/arvix.jpg';

const About = () => (
  <section id="about" className="py-20 bg-cyber-black">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-shrink-0 w-40 h-40 rounded-full overflow-hidden border-4 border-neon-secondary shadow-lg mb-6 md:mb-0">
        <img src={arvix} alt="Profile" className="w-full h-full object-cover" />
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4 text-neon-primary">About Me</h2>
        <p className="text-gray-300 mb-4 max-w-xl">
          Hi! I'm Aravind Bollapragada, a passionate full stack developer and open source enthusiast. I love building impactful products, exploring new technologies, and collaborating with creative minds. My journey spans web, mobile, and blockchain projects, always with a focus on clean code and great user experience.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>🌏 Based in India</li>
          <li>🎓 Computer Science Graduate</li>
          <li>🏆 Meta Certified Developer</li>
          <li>💡 Always learning something new</li>
        </ul>
      </div>
    </div>
  </section>
);

export default About; 