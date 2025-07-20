import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';

// Simple landing page component
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Volt React Dashboard
          </h1>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Open source powered by React.js and Bootstrap 5
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-cyan-400 mb-2">10</div>
              <div className="text-lg">Example Pages</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
              <div className="text-lg">React Components</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-indigo-400 mb-2">Bootstrap 5</div>
              <div className="text-lg">CSS Framework</div>
            </div>
          </div>

          <div className="mt-16">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Dashboard
            </button>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Powered by React.js</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              The most popular front-end library in the world. Volt React is an admin dashboard template 
              that is built using React.js components using react hooks and a data-driven structure 
              that can kick-start your app in no time.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
                <div className="text-2xl mb-2">⚛️</div>
                <div className="font-semibold">React.js</div>
                <div className="text-sm text-gray-400">The most popular front-end library</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
                <div className="text-2xl mb-2">🎨</div>
                <div className="font-semibold">Bootstrap 5</div>
                <div className="text-sm text-gray-400">Built with the most popular CSS Framework</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
                <div className="text-2xl mb-2">📱</div>
                <div className="font-semibold">Responsive</div>
                <div className="text-sm text-gray-400">All pages and components are 100% responsive</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
                <div className="text-2xl mb-2">📚</div>
                <div className="font-semibold">Documentation</div>
                <div className="text-sm text-gray-400">Everything is well documented</div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400">
              A Themesberg production
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;

