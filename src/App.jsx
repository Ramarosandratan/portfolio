import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <div className="container mx-auto p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
        <Header />
        <main className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-28 xl:space-y-32">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
