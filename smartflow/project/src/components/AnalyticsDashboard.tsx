import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell
} from 'recharts';
import {
  Brain, Users, Clock, Target, Globe, TrendingUp,
  Download, Laptop, Smartphone, Tablet, Moon, Sun
} from 'lucide-react';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const AnalyticsDashboard: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeUsers, setActiveUsers] = useState(1234);
  const [timeRange, setTimeRange] = useState<'weekly' | 'monthly' | 'yearly'>('monthly');

  // Simulated data
  const userEngagementData = [
    { name: 'Mon', users: 2400, sessions: 1800, retention: 75 },
    { name: 'Tue', users: 3000, sessions: 2200, retention: 78 },
    { name: 'Wed', users: 2780, sessions: 2000, retention: 72 },
    { name: 'Thu', users: 3890, sessions: 2800, retention: 80 },
    { name: 'Fri', users: 2390, sessions: 1800, retention: 69 },
    { name: 'Sat', users: 2000, sessions: 1500, retention: 65 },
    { name: 'Sun', users: 2500, sessions: 1900, retention: 71 },
  ];

  const deviceUsageData = [
    { name: 'Desktop', value: 45, icon: <Laptop size={16} /> },
    { name: 'Mobile', value: 35, icon: <Smartphone size={16} /> },
    { name: 'Tablet', value: 20, icon: <Tablet size={16} /> },
  ];

  const trafficSourcesData = [
    { name: 'Direct', value: 30 },
    { name: 'Social', value: 25 },
    { name: 'Organic', value: 20 },
    { name: 'Referral', value: 15 },
    { name: 'Ads', value: 10 },
  ];

  const conversionData = [
    { name: 'Visits', value: 1000 },
    { name: 'Signups', value: 800 },
    { name: 'Active', value: 600 },
    { name: 'Premium', value: 300 },
  ];

  useEffect(() => {
    // Simulate real-time active users
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 10) - 5);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white'}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <TrendingUp className="text-blue-500" />
          Advanced Analytics
        </h2>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Download size={16} />
            Export Report
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Users size={20} />
            <span>Active Users</span>
          </div>
          <div className="text-2xl font-bold">{activeUsers.toLocaleString()}</div>
          <div className="text-sm opacity-80">+5.2% from last week</div>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Clock size={20} />
            <span>Avg. Session</span>
          </div>
          <div className="text-2xl font-bold">12m 30s</div>
          <div className="text-sm opacity-80">+2.1% from last week</div>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Target size={20} />
            <span>Conversion Rate</span>
          </div>
          <div className="text-2xl font-bold">3.2%</div>
          <div className="text-sm opacity-80">+0.8% from last week</div>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Brain size={20} />
            <span>AI Interactions</span>
          </div>
          <div className="text-2xl font-bold">8,542</div>
          <div className="text-sm opacity-80">+12.3% from last week</div>
        </div>
      </div>

      {/* Time Range Selector */}
      <div className="flex gap-2 mb-8">
        {(['weekly', 'monthly', 'yearly'] as const).map((range) => (
          <button
            key={range}
            onClick={() => setTimeRange(range)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              timeRange === range
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {range.charAt(0).toUpperCase() + range.slice(1)}
          </button>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* User Engagement Chart */}
        <div className="p-6 rounded-xl bg-white shadow-lg">
          <h3 className="text-lg font-semibold mb-4">User Engagement</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userEngagementData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#8884d8" />
              <Line type="monotone" dataKey="sessions" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Device Usage Chart */}
        <div className="p-6 rounded-xl bg-white shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Device Usage</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={deviceUsageData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {deviceUsageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Traffic Sources Chart */}
        <div className="p-6 rounded-xl bg-white shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Traffic Sources</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={trafficSourcesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8">
                {trafficSourcesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Conversion Funnel */}
        <div className="p-6 rounded-xl bg-white shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Conversion Funnel</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={conversionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="value" fill="#8884d8" stroke="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Insights Panel */}
      <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Brain size={24} />
          <h3 className="text-lg font-semibold">AI Insights</h3>
        </div>
        <div className="space-y-3">
          <p>• User engagement has increased by 15% compared to last week, with peak activity during weekday afternoons.</p>
          <p>• Mobile usage is trending upward, suggesting a need to optimize mobile experiences.</p>
          <p>• Social media traffic shows strong growth potential, recommend increasing presence on key platforms.</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;