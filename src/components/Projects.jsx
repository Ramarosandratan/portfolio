import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

  // Détecter si on est sur mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Grouper les projets par page (2 par page sur desktop, 1 sur mobile)
  const projectsPerPage = isMobile ? 1 : 2;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const paginatedProjects = [];
  for (let i = 0; i < projects.length; i += projectsPerPage) {
    paginatedProjects.push(projects.slice(i, i + projectsPerPage));
  }

  // Reset currentPage si on dépasse le nombre total de pages
  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(0);
    }
  }, [currentPage, totalPages]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div id="projects" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 overflow-y-auto relative">
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-xl font-extrabold text-center text-gray-800 mb-8 dark:text-white sm:text-2xl md:text-3xl lg:text-4xl">My Projects</h2>

        {/* Carrousel Container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {paginatedProjects.map((pageProjects, pageIndex) => (
              <div key={pageIndex} className="w-full flex-shrink-0 px-4">
                <div className={`grid gap-6 ${pageProjects.length === 1 ? 'grid-cols-1 max-w-md mx-auto' : 'grid-cols-1 md:grid-cols-2'}`}>
                  {pageProjects.map((project, index) => (
                    <ProjectCard key={`${pageIndex}-${index}`} project={project} index={index} />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation interne - Bullets plus petits */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentPage
                  ? 'bg-blue-500 scale-125'
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
              aria-label={`Aller à la page ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation fléchée (optionnelle pour desktop) */}
        {totalPages > 1 && (
          <>
            <button
              onClick={prevPage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-300 hidden md:block"
              aria-label="Projet précédent"
            >
              ‹
            </button>
            <button
              onClick={nextPage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-300 hidden md:block"
              aria-label="Projet suivant"
            >
              ›
            </button>
          </>
        )}
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
      className="rounded-xl shadow-md p-4 bg-gray-800 text-white hover:scale-105 transition-transform duration-300 flex flex-col max-w-full overflow-hidden"
    >
      <div className="w-full flex flex-col flex-grow">
        <h3 className="font-semibold text-base text-gray-900 dark:text-white mb-2 sm:text-lg md:text-xl leading-tight">{project.title}</h3>
        <p className="text-xs text-gray-600 dark:text-gray-300 mb-4 flex-grow leading-relaxed sm:text-sm md:text-base line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-full max-w-full truncate">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-start items-center mt-auto space-x-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-1.5 px-3 rounded-lg transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
          >
            Code
          </a>
          {project.demo && project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-1.5 px-3 rounded-lg transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
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
