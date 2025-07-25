import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
function App() {

  return (
    <div className="min-h-screen bg-cyber-black cyber-grid">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;