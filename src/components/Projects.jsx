import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  const allProjects = [
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
      github: 'https://github.com/Ramarosandratan/DW',
      demo: '#',
      tags: ['Apache Airflow', 'Data Warehouse', 'ETL', 'Python']
    }
  ];


  // Detect if on mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <div id="projects" className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-y-auto relative">
      <div className="w-full max-w-7xl mx-auto px-4 py-12">
        <motion.h2
          className="text-lg font-bold text-center mb-8 text-gray-800 dark:text-white sm:text-xl md:text-2xl lg:text-3xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {allProjects.map((project, index) => (
            <MemoizedProjectCard
              key={index}
              project={project}
              index={index}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index, isMobile }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={isMobile ? {} : { scale: 1.05 }}
      className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
      aria-label={`Project: ${project.title}`}
    >
      {/* 16:9 Aspect Ratio Image Container */}
      <div className="relative aspect-video bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title} project`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Project Title */}
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2 leading-tight" aria-label="Project title">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4 flex-grow leading-relaxed line-clamp-3" aria-label="Project description">
          {project.description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-4" aria-label="Technologies used">
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tagIndex}
              className="bg-blue-500 text-white text-xs font-medium px-3 py-1.5 rounded-full border-2 border-blue-400 transition-all duration-300 hover:bg-blue-600 hover:border-blue-500"
              aria-label={`Technology: ${tag}`}
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-start items-center mt-auto space-x-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-2xl shadow-lg scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
            aria-label={`View source code for ${project.title}`}
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Code
          </motion.a>
          {project.demo && project.demo !== '#' && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-2xl shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
              aria-label={`View live demo of ${project.title}`}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const MemoizedProjectCard = React.memo(ProjectCard);

export default Projects;
