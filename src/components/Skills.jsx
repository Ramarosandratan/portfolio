import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'PHP', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'C', level: 60 },
    { name: 'C#', level: 60 },
    { name: 'Laravel', level: 80 },
    { name: 'Symfony', level: 75 },
    { name: 'Express.js', level: 70 },
    { name: 'Git', level: 85 },
    { name: 'MySQL', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MongoDB', level: 70 },
    { name: 'Agile/Scrum', level: 80 },
    { name: 'Linux', level: 75 },
    { name: 'Windows', level: 85 }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Mes Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-right mt-2 text-sm text-gray-600">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
