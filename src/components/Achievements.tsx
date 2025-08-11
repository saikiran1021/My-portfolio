import React from 'react';
import { Trophy, Award } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "Winner, Technirvana 2024",
      organization: "Chalapathi Institute of Engineering and Technology",
      icon: <Trophy className="w-8 h-8" />
    },
    {
      title: "Winner, Ideathon 2024",
      organization: "Chalapathi Institute of Engineering and Technology",
      icon: <Award className="w-8 h-8" />
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="fade-in-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
              Recognition for innovation and technical excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {achievement.organization}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Achievement Badge */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
              <Trophy className="w-5 h-5" />
              <span>Participated in around 15 hackathons</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;