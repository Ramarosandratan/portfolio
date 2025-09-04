import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FullpageWrapper from './components/FullpageWrapper';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const sectionNames = ["Hero", "About", "Skills", "Projects", "Contact"];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSectionChange = (index) => {
    setActiveIndex(index);
  };

  const goToSection = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={isMobile ? "min-h-[100dvh] [touch-action:pan-y] overscroll-contain" : ""}>
      <Navbar sectionNames={sectionNames} activeIndex={activeIndex} goToSection={goToSection} isMobile={isMobile} />
      {isMobile ? (
        <>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </>
      ) : (
        <FullpageWrapper activeIndex={activeIndex} onSectionChange={handleSectionChange}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </FullpageWrapper>
      )}
    </div>
  );
}

export default App;
