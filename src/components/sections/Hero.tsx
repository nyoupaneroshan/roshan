import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import TextReveal from '../ui/TextReveal';
import ScrollingText from '../ui/ScrollingText';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-teal-50/30 dark:from-blue-900/20 dark:to-teal-900/10"></div>
        
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-200/30 dark:bg-blue-700/10 blur-3xl"
          animate={{ 
            x: [0, 10, 0], 
            y: [0, 15, 0],
            scale: [1, 1.05, 1] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-teal-200/20 dark:bg-teal-700/10 blur-3xl"
          animate={{ 
            x: [0, -15, 0], 
            y: [0, 10, 0],
            scale: [1, 1.03, 1] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      <div className="container relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="mb-4 inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hello, I'm Roshan Nyoupane
          </motion.div>
          
          <TextReveal>
            <h1 className="mb-6 text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              Transforming ideas into digital experiences
            </h1>
          </TextReveal>
          
          <motion.p 
            className="mb-8 text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl text-balance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I craft thoughtful solutions through design and development,
            focused on creating meaningful and memorable digital journeys.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-20 left-0 right-0 overflow-hidden">
        <ScrollingText baseVelocity={3}>
          <span className="text-6xl font-bold opacity-10 mx-4">
            DESIGN • DEVELOPMENT • UI/UX • WEB • MOBILE • BRAND
          </span>
        </ScrollingText>
      </div>
      
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-white dark:bg-neutral-800 shadow-md text-neutral-700 dark:text-neutral-300 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-300"
        animate={{ 
          y: [0, 10, 0] 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          ease: "easeInOut" 
        }}
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
};

export default Hero;