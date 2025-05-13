import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import ScrollProgress from './components/ui/ScrollProgress';
import BackToTop from './components/ui/BackToTop';
import { Moon, Sun } from 'lucide-react';
import { useKeyboardShortcut } from './hooks/useKeyboardShortcut';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' || 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  useKeyboardShortcut([
    { key: 'd', ctrlKey: true, callback: toggleDarkMode },
    { key: 'k', ctrlKey: true, callback: () => document.querySelector('#projects input')?.focus() },
    { key: 'ArrowUp', ctrlKey: true, callback: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      
      <button 
        aria-label="Toggle dark mode"
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-neutral-800 shadow-lg text-neutral-900 dark:text-white"
        onClick={toggleDarkMode}
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      
      <BackToTop />
      
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;