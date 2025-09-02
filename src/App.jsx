import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FullpageWrapper from './components/FullpageWrapper';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSectionChange = (index) => {
    setActiveIndex(index);
  };

  const goToSection = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <Navbar activeIndex={activeIndex} goToSection={goToSection} />
      <FullpageWrapper onSectionChange={handleSectionChange}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </FullpageWrapper>
    </div>
  );
}

export default App;
