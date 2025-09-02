import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">À propos de moi</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/portfolio/images/profil.png" alt="Profile" className="w-48 h-48 rounded-full mx-auto object-cover" />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed">
              Étudiant en informatique motivé et passionné par le développement web.
              Compétences solides en langages tels que PHP et Java, ainsi qu'en
              front-end (HTML, CSS, JavaScript). Curieux et rigoureux, capable de
              s'adapter rapidement aux nouvelles technologies et appréciant le travail
              en équipe pour élaborer des solutions innovantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
