import React, { useState, useEffect } from 'react';
import { motion, useTransform, useSpring } from 'framer-motion'; // Added useTransform, useSpring
import { ArrowDown } from 'lucide-react';
import TextReveal from '../ui/TextReveal';
import ScrollingText from '../ui/ScrollingText';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Create spring values for smooth parallax effect
  const springX = useSpring(mousePosition.x, { stiffness: 150, damping: 20 });
  const springY = useSpring(mousePosition.y, { stiffness: 150, damping: 20 });

  // Use useTransform to map mouse position to element movement
  // These values (e.g., -0.05, 0.05) control the intensity of the parallax
  const parallaxX1 = useTransform(springX, (x) => (x - window.innerWidth / 2) * -0.03); // Slower
  const parallaxY1 = useTransform(springY, (y) => (y - window.innerHeight / 2) * -0.03);

  const parallaxX2 = useTransform(springX, (x) => (x - window.innerWidth / 2) * 0.04); // Faster
  const parallaxY2 = useTransform(springY, (y) => (y - window.innerHeight / 2) * 0.04);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 dot-grid-overlay"> {/* Added dot-grid-overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-teal-50 dark:from-blue-950 dark:to-teal-950 animated-gradient"></div> {/* Removed opacity, added animated-gradient */}
        
        {/* Animated Blob 1 (with parallax) */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-200/40 dark:bg-blue-700/15 blur-3xl mix-blend-multiply dark:mix-blend-screen" // Adjusted opacity, added mix-blend
          animate={{ 
            x: [0, 10, 0], 
            y: [0, 15, 0],
            scale: [1, 1.05, 1] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 12, // Slower animation
            ease: "easeInOut" 
          }}
          style={{ 
            translateX: parallaxX1, 
            translateY: parallaxY1 
          }} // Apply parallax
        />
        
        {/* Animated Blob 2 (with parallax) */}
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-teal-200/30 dark:bg-teal-700/10 blur-3xl mix-blend-multiply dark:mix-blend-screen" // Adjusted opacity, added mix-blend
          animate={{ 
            x: [0, -15, 0], 
            y: [0, 10, 0],
            scale: [1, 1.03, 1] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15, // Slower animation
            ease: "easeInOut" 
          }}
          style={{ 
            translateX: parallaxX2, 
            translateY: parallaxY2 
          }} // Apply parallax
        />

        {/* You could add more blobs or shapes here for more complexity */}
      </div>
      
      {/* Main Content */}
      <div className="container relative z-20"> {/* Increased z-index for content */}
        <motion.div 
          className="max-w-3xl mx-auto text-center" // Centered content for better visual balance
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
            <h1 className="mb-6 text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-900 dark:text-white"
                style={{ textShadow: '0 0 10px rgba(0,0,0,0.1), 0 0 20px rgba(0,0,0,0.05)' }} // Subtle text shadow
            >
              Transforming ideas into digital experiences
            </h1>
          </TextReveal>
          
          <motion.p 
            className="mb-8 text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto text-balance" // Added mx-auto for centering
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I craft thoughtful solutions through design and development,
            focused on creating meaningful and memorable digital journeys.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4" // Centered buttons
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a href="#projects" className="btn btn-primary hover:scale-105 transition-transform"> {/* Added hover effect */}
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline hover:scale-105 transition-transform"> {/* Added hover effect */}
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scrolling Text (adjusted position for better visibility if content is centered) */}
      <div className="absolute bottom-10 left-0 right-0 overflow-hidden z-10"> {/* Adjusted bottom, z-index */}
        <ScrollingText baseVelocity={3}>
          <span className="text-5xl md:text-6xl font-bold opacity-5 mx-4 whitespace-nowrap"> {/* Reduced opacity further, added whitespace-nowrap */}
            BRAND • DESIGN • DEVELOPMENT • UI/UX • WEB • MOBILE • BRAND • DESIGN • DEVELOPMENT • UI/UX • WEB • MOBILE
          </span>
        </ScrollingText>
      </div>
      
      {/* Scroll Down Arrow */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-white dark:bg-neutral-800 shadow-md text-neutral-700 dark:text-neutral-300 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-300 z-30" // Increased z-index
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