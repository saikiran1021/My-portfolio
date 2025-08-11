import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    'Java',
    'JavaScript',
    'React',
    'Node.js',
    'MySQL',
    'HTML5',
    'CSS3',
    'Git & GitHub',
    'REST APIs',
    'SAP',
    'Prompt Engineering',
    'Oracle'
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="fade-in-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern applications
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-default group"
              >
                <span className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;