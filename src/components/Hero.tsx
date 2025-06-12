import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/danixDe', color: 'hover:text-neon-secondary' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/arvix17', color: 'hover:text-neon-accent' },
    { icon: FaTwitter, url: 'https://twitter.com/zoro_yeag3r', color: 'hover:text-neon-highlight' },
  ];

  return (
    <div id = "home" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-cyber-dark to-cyber-black opacity-90"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 z-10"
      >
        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto backdrop-blur-2xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-cyber font-bold mb-6 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-white">
              Hey, I'm 
            </span>
            <br className="md:hidden" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-secondary to-neon-accent">
              &nbsp;Aravind Bollapragada
            </span>
          </motion.h1>
          
          <div className="text-xl md:text-2xl font-cyber mb-8 h-20">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Software Engineer',
                2000,
                'Tech Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white"
            />
          </div>

          <motion.div 
            className="flex space-x-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {socialLinks.map(({ icon: Icon, url, color }, index) => (
              <motion.a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className={`text-3xl text-white ${color} transition-colors duration-300`}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-neon-secondary to-neon-accent
                       text-white font-cyber py-3.5 px-8 rounded-lg
                       hover:shadow-lg hover:shadow-neon-secondary/30
                       transition-all duration-300
                       border border-neon-secondary/20
                       backdrop-blur-sm"
          >
            View My Work
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;