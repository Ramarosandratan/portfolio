import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FullpageWrapper from './components/FullpageWrapper';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <FullpageWrapper>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </FullpageWrapper>
      <Footer />
    </div>
  );
}

export default App;
