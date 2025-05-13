import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
function App() {

  return (
    <div className="min-h-screen bg-cyber-black cyber-grid">
      <Navbar />
      <Hero />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;