import React from 'react';
import { Code2, Database, Globe, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const strengths = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Strong foundation in algorithms and data structures"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Full-Stack Developer",
      description: "Experience with both frontend and backend technologies"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Expert",
      description: "Proficient in MySQL, Oracle, and database optimization"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Focused",
      description: "Enjoys exploring new technologies and contributing to open-source"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="fade-in-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Bio Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Hello! I'm Saikiran Kurapati, a passionate developer with a love for building elegant and efficient applications. With a background in computer science, I have a strong foundation in Java and enjoy solving complex problems.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I also have experience building web applications with React and Node.js, and I enjoy exploring new technologies and contributing to open-source projects. My goal is to create solutions that make a positive impact and deliver exceptional user experiences.
              </p>
            </div>

            {/* Strengths Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
                    {strength.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {strength.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;