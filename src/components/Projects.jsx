import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Projet 1',
      description: 'Description du projet 1.',
      image: '/vite.svg',
      link: '#'
    },
    {
      title: 'Projet 2',
      description: 'Description du projet 2.',
      image: '/vite.svg',
      link: '#'
    },
    {
      title: 'Projet 3',
      description: 'Description du projet 3.',
      image: '/vite.svg',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Voir le projet</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
