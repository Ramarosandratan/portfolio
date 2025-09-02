import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    'PHP', 'JavaScript', 'Java', 'Python', 'C', 'C#',
    'Laravel', 'Symfony', 'Express.js', 'Git', 'MySQL',
    'PostgreSQL', 'MongoDB', 'Agile/Scrum', 'Linux', 'Windows',
    'React', 'Tailwind CSS', 'Framer Motion', 'Shadcn/ui'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="skills" className="py-8 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
          Compétences
        </h2>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="px-5 py-2 bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-100 rounded-full text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer"
              variants={itemVariants}
              aria-label={`Skill: ${skill}`}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
