import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Github } from 'lucide-react';

const ProjectList = ({ projects }) => {
  return (
    <div className="h-full overflow-y-auto pr-4 space-y-4 custom-scrollbar">
      <ul className="space-y-3">
        {projects.map((project, index) => (
          <motion.li
            key={index}
            className="p-4 rounded-lg transition-all duration-200 ease-in-out border bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600 max-w-sm mx-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">{project.title}</h4>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-sm sm:text-base lg:text-lg xl:text-xl px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.github && project.github !== '#' && (
              <div className="mt-4">
                <Button asChild className="mt-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl px-6 py-3 hover:scale-105 xl:px-8 xl:py-4 xl:text-lg 2xl:px-10 2xl:py-5 2xl:text-xl">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
              </div>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;