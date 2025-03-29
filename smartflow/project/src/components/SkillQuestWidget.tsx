import React, { useState, useEffect } from 'react';
import { Trophy, Star, Users, Brain, Zap, Award, Crown, Target } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  icon: React.ReactNode;
}

interface User {
  id: string;
  name: string;
  score: number;
  avatar: string;
}

const SkillQuestWidget: React.FC = () => {
  const [streak, setStreak] = useState(0);
  const [xp, setXp] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [activeUsers] = useState<User[]>([
    { id: '1', name: 'Alex', score: 850, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50' },
    { id: '2', name: 'Sarah', score: 720, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50' },
    { id: '3', name: 'Mike', score: 690, avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=50' },
  ]);

  const [achievements] = useState<Achievement[]>([
    { id: '1', title: 'First Quest', description: 'Complete your first challenge', completed: true, icon: <Trophy size={24} /> },
    { id: '2', title: 'Rising Star', description: 'Achieve a 3-day streak', completed: false, icon: <Star size={24} /> },
    { id: '3', title: 'Social Butterfly', description: 'Interact with 5 users', completed: false, icon: <Users size={24} /> },
  ]);

  const [aiSuggestion, setAiSuggestion] = useState('Try completing the "Rising Star" achievement next!');

  useEffect(() => {
    const timer = setInterval(() => {
      setXp((prev) => prev + Math.floor(Math.random() * 5));
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const handleChallengeComplete = () => {
    setStreak((prev) => prev + 1);
    setXp((prev) => prev + 50);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-500 to-blue-900 rounded-2xl shadow-2xl">
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 animate-confetti">
          🎉✨🎊
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          {/* User Progress Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Brain /> Skill Quest
              </h2>
              <div className="flex items-center gap-2">
                <Zap className="text-yellow-300" />
                <span className="text-white font-bold">{xp} XP</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-white/80">
                <span>Daily Streak</span>
                <span>{streak} days</span>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full transition-all duration-500"
                  style={{ width: `${(streak / 7) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* AI Companion Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Brain className="text-white" size={20} />
              </div>
              <div className="flex-1">
                <p className="text-white/90">{aiSuggestion}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Achievements Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
              <Award /> Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div 
                  key={achievement.id}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                    achievement.completed ? 'bg-white/20' : 'bg-white/5'
                  }`}
                >
                  <div className={`${achievement.completed ? 'text-yellow-300' : 'text-white/50'}`}>
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{achievement.title}</h4>
                    <p className="text-white/70 text-sm">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leaderboard Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
              <Crown /> Leaderboard
            </h3>
            <div className="space-y-3">
              {activeUsers.map((user, index) => (
                <div key={user.id} className="flex items-center gap-3 p-2">
                  <span className="text-white/80 w-6">{index + 1}</span>
                  <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                  <span className="text-white flex-1">{user.name}</span>
                  <span className="text-yellow-300 font-medium">{user.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Button */}
      <div className="mt-6 text-center">
        <button
          onClick={handleChallengeComplete}
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:scale-105 transition-transform duration-300"
        >
          <Target size={20} />
          Complete Daily Challenge
        </button>
      </div>
    </div>
  );
};

export default SkillQuestWidget;