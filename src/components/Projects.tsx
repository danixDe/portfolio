import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaGlobe, FaReact, FaNodeJs, FaMobile } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiFlutter, SiDart, SiTailwindcss, SiEthereum } from 'react-icons/si';
import { TbLayoutDashboard, TbApiApp } from "react-icons/tb";

const Projects = () => {
  const projects = [
    {
      title: "Blinder - Student Community Hub",
      description: "An exclusive online community platform for students with college email domains, featuring real-time feed filtering and community engagement.",
      features: [
        "College domain email verification",
        "Real-time feed search",
        "Dynamic post creation",
        "Community segmentation",
        "Dark mode support"
      ],
      tech: [
        { name: "React.js", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb }
      ],
      links: {
        live: "https://gvpblind-pi69.onrender.com/",
        github: "https://github.com/danixDe/Blinder/"
      }
    },
    {
      title: "AuraHP - Blood Donation Platform",
      description: "A comprehensive blood donation platform connecting medical facilities with donors, featuring real-time notifications and location-based services.",
      features: [
        "Dual login system (Medical & Donor)",
        "Real-time blood request notifications",
        "Donation history tracking",
        "Google Maps integration",
        "Analytics dashboard"
      ],
      tech: [
        { name: "Flutter", icon: SiFlutter },
        { name: "Dart", icon: SiDart },
        { name: "React.js", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
        { name: "MongoDB", icon: SiMongodb }
      ],
      links: {
        github: "https://github.com/danixDe/Aura"
      }
    },
    {
      title: "SolanaXchange",
      description: "Web 3 technology for crypto phantom and solflare wallet integration, Connection and Token Generation and Transactions",
      features: [
        "Phantom/ Solflare Wallet Connection",
        "Token Generation",
        "Minting Tokens",
        "Web 3 login",
        "Block chain Transactions"
      ],
      tech: [
        { name: "React.js", icon: FaReact },
        { name: "Web3.js", icon: SiEthereum },
        { name: "TailwindCss", icon: SiTailwindcss },
        { name: "shadcn/ui", icon: TbLayoutDashboard }
      ],
      links: {
        github: "https://github.com/danixDe/SolanaXchange"
      }
    },
    {
      title: "AlumNet - Alumni Network",
      description: "A platform connecting college students with alumni, featuring AI-powered chatbot for enhanced interaction.",
      features: [
        "Alumni directory",
        "AI chatbot integration",
        "Student-alumni interaction",
        "Profile management"
      ],
      tech: [
        { name: "React.js", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb }
      ],
      links: {
        github: "https://github.com/danixDe/sih"
      }
    },
    {
      title: "Finance Tracker",
      description: "A simple web app to track expenses, visualize spending, and manage budgets. ",
      features: [
        "CRUD Transactions",
        "Monthly Expenses Chart",
        "Category wise breakdown pie chart",
        "Setting Budget and vs. Actual Comparision",
        "Basic spending Insights"
      ],
      tech: [
        { name: "React.js", icon: FaReact },
        { name: "Tailwindcss", icon: SiTailwindcss },
        { name: "shadcn/ui", icon: TbLayoutDashboard },
        { name: "Router DOM", icon: FaReact }
      ],
      links: {
        live: "https://finance-tracker-bg4y.vercel.app/",
        github: "https://github.com/danixDe/Finance_Tracker"
      }
    },
    {
      title: "Fake Store",
      description: "This is a responsive shopping website built using React.js and the Fake Store API as an E-Commerce Web Application",
      features: [
        "JWT Login",
        "Product Listing Page",
        "Product Details Page",
        "Cart and Trasactions"
      ],
      tech: [
        { name: "React.js", icon: FaReact },
        { name: "Tailwindcss", icon: SiTailwindcss },
        { name: "shadcn/ui", icon: TbLayoutDashboard },
        { name: "Fake Store Api", icon: TbApiApp }
      ],
      links: {
        live: "https://fake-stor.netlify.app/",
        github: "https://github.com/danixDe/fake_store"
      }
    },
  
  ];

  return (
    <section id="projects" className="py-20 px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 hover:shadow-neon-primary/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-cyber font-bold mb-4 text-neon-primary">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-neon-secondary font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-neon-secondary font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
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

              <div className="flex gap-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neon-primary hover:text-neon-secondary transition-colors"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neon-primary hover:text-neon-secondary transition-colors"
                  >
                    <FaGlobe /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;