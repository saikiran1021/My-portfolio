import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import ShieldAvatar from './ShieldAvatar';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start order-1 md:order-1">
            <div className="animate-fadeInUp">
              <ShieldAvatar />
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center md:text-left order-2 md:order-2 space-y-6">
            <div className="animate-fadeInUp animation-delay-200">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mb-4">
                SAIKIRAN
              </h1>
              <p className="text-2xl md:text-3xl text-blue-500 dark:text-blue-400 font-medium">
                Java & Web Developer
              </p>
            </div>

            <div className="animate-fadeInUp animation-delay-400">
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0 leading-relaxed">
                Passionate about building elegant and efficient applications with a strong foundation in Java and modern web technologies.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4 animate-fadeInUp animation-delay-600">
              <a
                href="https://github.com/saikiran1021"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/kurapati-sai-kiran-93bbb8234"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:saikirankurapati57@gmail.com"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 transform hover:scale-110"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            {/* CTA Button */}
            <div className="animate-fadeInUp animation-delay-800">
              <a
                href="https://drive.google.com/uc?export=download&id=1SglpmkssmP2pRg77MOiDcNncBlCaPdvX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;