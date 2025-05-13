import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      title: "Meta Front-End Developer",
      issuer: "Coursera",
      date: "May 2025",
      credentialLink: "https://www.coursera.org/account/accomplishments/professional-cert/Q17GQIEF1CLD",
      image: "https://unsplash.com/photos/a-white-square-with-a-blue-logo-on-it-WfcHl9YfTyQ/300x192",
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-4xl"
      >
        <h2 className="text-4xl font-cyber font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-ghibli-sunset to-neon-accent">
            Certifications
          </span>
        </h2>

        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 hover:shadow-neon-primary/5 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-cyber font-bold mb-2 text-ghibli-sunset">
                    {cert.title}
                  </h3>
                  <p className="text-neon-secondary mb-2">
                    Issued by {cert.issuer} • {cert.date}
                  </p>
                  <div className="mb-4">
                  </div>
                  <a
                    href={cert.credentialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neon-primary hover:text-neon-secondary transition-colors"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;