import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import SkillQuestWidget from './components/SkillQuestWidget';
import AnalyticsDashboard from './components/AnalyticsDashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <main className="pl-16 md:pl-16 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome Back!</h1>
          <p className="text-gray-600 mb-8">
             A dynamic widget that adapts to user preferences.
          </p>
          <div className="space-y-8">
            <SkillQuestWidget />
            <AnalyticsDashboard />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;