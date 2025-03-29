import React, { useState } from 'react';
import {
  Brain,
  Activity,
  Target,
  BarChart2,
  Gamepad2,
  Compass,
  ChevronRight,
  Menu,
  X,
  MessageSquare,
  Trophy,
  TrendingUp,
} from 'lucide-react';

interface NavItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  notifications?: number;
  preview: React.ReactNode;
}

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      id: 'ai-chat',
      title: 'AI Assistant',
      icon: <Brain size={24} />,
      notifications: 3,
      preview: (
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <Brain size={16} className="text-white" />
            </div>
            <div className="flex-1 bg-blue-50 rounded-lg p-2">
              <p className="text-sm text-blue-900">How can I help you today?</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Productivity tips</button>
            <button className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Learn more</button>
          </div>
        </div>
      ),
    },
    {
      id: 'activity',
      title: 'Activity Feed',
      icon: <Activity size={24} />,
      notifications: 5,
      preview: (
        <div className="space-y-2">
          {[
            { user: 'Alex', action: 'completed a challenge' },
            { user: 'Sarah', action: 'started a new streak' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium">{activity.user}</span>
              <span className="text-gray-600">{activity.action}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'progress',
      title: 'Progress Tracker',
      icon: <Target size={24} />,
      preview: (
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Daily Goals</span>
              <span>4/5 completed</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="h-full w-4/5 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Trophy size={16} className="text-yellow-500" />
            <span className="text-sm">5 day streak!</span>
          </div>
        </div>
      ),
    },
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: <BarChart2 size={24} />,
      preview: (
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-blue-50 p-2 rounded-lg">
              <div className="text-xs text-gray-600">Productivity</div>
              <div className="flex items-center gap-1">
                <TrendingUp size={14} className="text-green-500" />
                <span className="font-medium">85%</span>
              </div>
            </div>
            <div className="bg-purple-50 p-2 rounded-lg">
              <div className="text-xs text-gray-600">Focus Time</div>
              <div className="font-medium">2.5hrs</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'learning',
      title: 'Learning Hub',
      icon: <Gamepad2 size={24} />,
      notifications: 2,
      preview: (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Current Course</span>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">75% complete</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare size={16} className="text-blue-500" />
            <span className="text-sm">New lesson available!</span>
          </div>
        </div>
      ),
    },
    {
      id: 'recommendations',
      title: 'For You',
      icon: <Compass size={24} />,
      preview: (
        <div className="space-y-2">
          <div className="text-sm font-medium">Recommended for you</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-2 rounded-lg">
              <div className="text-xs">New Course</div>
              <div className="text-sm font-medium">AI Basics</div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-red-100 p-2 rounded-lg">
              <div className="text-xs">Challenge</div>
              <div className="text-sm font-medium">Code Daily</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg md:hidden"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-xl z-40 transition-all duration-300 
          ${isExpanded ? 'w-80' : 'w-16'} 
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="h-full flex flex-col p-4">
          {/* Logo */}
          <div className="flex items-center h-12 mb-8">
            {isExpanded ? (
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SmartFlow 
              </h1>
            ) : (
              <Brain size={28} className="text-blue-600" />
            )}
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setActiveItem(item.id)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <button
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all
                    ${isExpanded ? 'hover:bg-gray-100' : 'hover:bg-gray-100'}`}
                >
                  <div className="relative">
                    <div className="text-gray-700">{item.icon}</div>
                    {item.notifications && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        {item.notifications}
                      </div>
                    )}
                  </div>
                  {isExpanded && (
                    <span className="flex-1 text-left text-gray-700">{item.title}</span>
                  )}
                  {isExpanded && <ChevronRight size={16} className="text-gray-400" />}
                </button>

                {/* Preview Panel */}
                {isExpanded && activeItem === item.id && (
                  <div className="absolute left-full top-0 ml-2 w-64 bg-white rounded-lg shadow-lg border p-4">
                    <h3 className="font-medium mb-3">{item.title}</h3>
                    {item.preview}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* User Profile */}
          <div className="pt-4 border-t">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              {isExpanded && (
                <div className="flex-1">
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-gray-500">Pro Member</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;