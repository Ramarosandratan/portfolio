import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Full Stack Developer - Freelance',
      description: 'Design and development of a no-code application with Retool. Database design with Supabase.',
      image: '/portfolio/images/freelance.png',
      github: '#',
      demo: '#',
      tags: ['Retool', 'Supabase', 'No-code', 'Full Stack']
    },
    {
      title: 'Sprint Framework',
      description: 'A personal framework created from a multi-module Maven project.',
      image: '/portfolio/images/sprint.png',
      github: 'https://github.com/Ramarosandratan/Sprint',
      demo: '#',
      tags: ['Java', 'Maven', 'Framework']
    },
    {
      title: 'ERPNext Frappe Extension',
      description: 'A modern Symfony web application integrated with ERPNext for employee management, payroll processing, and payslip generation.',
      image: '/portfolio/images/erpnext-logo.png',
      github: 'https://github.com/Ramarosandratan/frappe_newapp',
      demo: '#',
      tags: ['Symfony', 'ERPNext', 'PHP', 'Web Application']
    },
    {
      title: 'Data Warehouse with Airflow',
      description: 'A practical project implemented with Apache Airflow for setting up a Data Warehouse.',
      image: '/portfolio/images/Apache-Airflow.png',
      github: 'https://github.com/Ramarosandratan/DWH',
      demo: '#',
      tags: ['Apache Airflow', 'Data Warehouse', 'ETL', 'Python']
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-pink-100">
      <div className="px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 }); // Trigger when 20% of the element is in view

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, boxShadow: "0 12px 20px rgba(0,0,0,0.15)" }}
      className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col h-full"
    >
      <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-3">{project.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 flex-grow leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-start items-center mt-auto space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Voir le code
          </a>
          {project.demo && project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Démo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
