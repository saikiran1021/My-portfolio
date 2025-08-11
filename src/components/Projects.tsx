import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "The Saviour - Blood Donation",
      description: "A web platform to connect blood donors with recipients. Features user registration and search functionality.",
      image: "https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      technologies: ["Java", "MySQL", "HTML", "CSS"],
      githubUrl: "https://github.com/saikiran1021/BLOOD-DONATION",
      liveUrl: null
    },
    {
      title: "Self-Correcting Mentor Chatbot",
      description: "An AI-powered chatbot that provides guidance and learns from user interactions to improve responses.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      technologies: ["Python", "AI/ML", "NLP", "Prompt Engineering"],
      githubUrl: "https://github.com/saikiran1021/Self_correcting-mentor-bot",
      liveUrl: null
    },
    {
      title: "Medicine Recommender",
      description: "Suggests over-the-counter medications based on user-reported symptoms using data-driven approaches.",
      image: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      technologies: ["Python", "Machine Learning", "Data Analysis"],
      githubUrl: null,
      liveUrl: null
    },
    {
      title: "Trip Planner",
      description: "Helps plan travel itineraries by integrating mapping and weather APIs for comprehensive trip planning.",
      image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      technologies: ["JavaScript", "React", "APIs", "Maps Integration"],
      githubUrl: null,
      liveUrl: null
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="fade-in-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
              A showcase of my work and technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-700 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200 font-medium"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    ) : (
                      <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-500 dark:text-gray-400 font-medium">
                        <ExternalLink className="w-4 h-4" />
                        <span>More Info</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;