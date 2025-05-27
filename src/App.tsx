import React from 'react';
import { GraduationCap } from 'lucide-react';
import PeriodicTable from './components/PeriodicTable';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-4 border-b border-gray-700 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GraduationCap className="text-blue-400" size={28} />
              <h1 className="text-xl font-bold">CyberElement</h1>
            </div>
            <div className="text-sm text-gray-400">
              The Periodic Table of Cybersecurity & IT
            </div>
          </div>
        </div>
      </header>
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              Explore the Elements of Tech
            </h2>
            <p className="text-gray-400 text-lg">
              An interactive guide to the fundamental concepts and terminology in cybersecurity, networking, and IT.
            </p>
          </div>
          
          <PeriodicTable />
        </div>
      </main>
      
      <footer className="bg-gray-800 py-6 border-t border-gray-700 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>Designed for educational purposes. Click on any element to learn more about it.</p>
          <p className="mt-2">© {new Date().getFullYear()} CyberElement | The Periodic Table of Tech Terminology</p>
        </div>
      </footer>
    </div>
  );
}

export default App;