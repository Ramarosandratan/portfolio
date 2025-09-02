import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Développeur Full Stack - Freelance',
      description: 'Conception et développement d\'une application no-code avec Retool. Conception de base de données avec Supabase. (09/2023 - 01/2024)',
      image: '/portfolio/images/freelance.png',
      link: '#'
    },
    {
      title: 'Sprint',
      description: 'Un Framework personnel créer a partir d\'un projet Maven multi modules',
      image: '/portfolio/images/sprint.png',
      link: 'https://github.com/Ramarosandratan/Sprint'
    },
    {
      title: 'Extension de ERPNext Frappe',
      description: 'Une application web Symfony moderne intégrée à ERPNext pour la gestion des employés, le traitement de la paie et la génération de bulletins de salaire.',
      image: '/portfolio/images/erpnext-logo.png',
      link: 'https://github.com/Ramarosandratan/frappe_newapp'
    },
    {
      title: 'DWH',
      description: 'Un travaux pratique réaliser avec airflow',
      image: '/portfolio/images/Apache-Airflow.png',
      link: 'https://github.com/Ramarosandratan/DWH'
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
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
