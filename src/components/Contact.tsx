import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = {
    email: 'danixde0@gmail.com',
    social: [
      { icon: FaGithub, url: 'https://github.com/danixDe', label: 'GitHub' },
      { icon: FaLinkedin, url: 'https://linkedin.com/in/arvix17', label: 'LinkedIn' },
      { icon: FaTwitter, url: 'https://twitter.com/Aravind0x', label: 'Twitter' },

    ]
  };

  return (
    <section id="contact" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-4xl"
      >
        <h2 className="text-4xl font-cyber font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-neon-secondary">
            Get In Touch
          </span>
        </h2>

        <div className="glass-card p-8 backdrop-blur-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 text-xl hover:text-neon-secondary transition-colors"
            >
              <FaEnvelope className="text-neon-secondary" />
              {contactInfo.email}
            </a>
          </motion.div>

          <div className="flex justify-center gap-8">
            {contactInfo.social.map((platform, index) => (
              <motion.a
                key={platform.label}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center gap-2 text-white hover:text-neon-secondary transition-colors"
              >
                <platform.icon className="text-3xl" />
                <span className="text-sm">{platform.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;