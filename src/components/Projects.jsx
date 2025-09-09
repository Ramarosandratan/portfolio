import React from 'react';
import { motion } from 'framer-motion';
import ProjectList from './ProjectList';

const Projects = () => {
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

  return (
    <div id="projects" className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-y-auto relative">
      <div className="w-full max-w-7xl mx-auto px-4 py-12 xl:px-6 xl:py-16">
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-8 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="w-full overflow-y-auto">
          <ProjectList projects={allProjects} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
