import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">À propos de moi</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/vite.svg" alt="Profile" className="w-48 h-48 rounded-full mx-auto" />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed">
              Je suis un développeur passionné avec une expérience en React, Node.js et plus.
              J'aime créer des applications web modernes et responsives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
