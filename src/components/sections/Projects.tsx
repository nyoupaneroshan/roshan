import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight, Search } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    live?: string;
    github?: string;
  };
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = ['All', 'Web Design', 'Development', 'UI/UX', 'Mobile'];
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Development',
      description: 'A fully responsive e-commerce platform with a modern design and seamless user experience.',
      image: 'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      links: {
        live: 'https://example.com',
        github: 'https://github.com/',
      },
    },
    {
      id: 2,
      title: 'Health & Fitness App',
      category: 'Mobile',
      description: 'A mobile application for tracking workouts, nutrition, and overall health progress.',
      image: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React Native', 'Firebase', 'Redux', 'Expo'],
      links: {
        live: 'https://example.com',
      },
    },
    {
      id: 3,
      title: 'Corporate Website Redesign',
      category: 'Web Design',
      description: 'A complete redesign of a corporate website focusing on brand identity and user engagement.',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['HTML', 'CSS', 'JavaScript', 'Figma'],
      links: {
        live: 'https://example.com',
        github: 'https://github.com/',
      },
    },
    {
      id: 4,
      title: 'Task Management Dashboard',
      category: 'UI/UX',
      description: 'A comprehensive task management dashboard with intuitive controls and visual analytics.',
      image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
      links: {
        live: 'https://example.com',
      },
    },
    {
      id: 5,
      title: 'Travel Booking App',
      category: 'Mobile',
      description: 'A feature-rich travel booking application for seamless vacation planning and booking.',
      image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
      links: {
        github: 'https://github.com/',
      },
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'Web Design',
      description: 'A personal portfolio website showcasing projects and skills with an elegant design.',
      image: 'https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'TailwindCSS', 'Framer Motion', 'Netlify'],
      links: {
        live: 'https://example.com',
        github: 'https://github.com/',
      },
    },
  ];
  
  const filteredProjects = useMemo(() => {
    let filtered = activeCategory === 'All'
      ? projects
      : projects.filter(project => project.category === activeCategory);

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [activeCategory, searchQuery, projects]);

  return (
    <section id="projects" className="section bg-white dark:bg-neutral-800">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="mb-4">
            Featured <span className="text-blue-800 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            Explore a selection of my work across various domains and technologies.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-blue-800 text-white dark:bg-blue-700'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600'
                }`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <motion.div 
            className="relative w-full md:w-64"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
            />
          </motion.div>
        </div>
        
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-12"
            >
              <p className="text-neutral-600 dark:text-neutral-400">
                No projects found matching your criteria.
              </p>
            </motion.div>
          ) : (
            <motion.div 
              key={activeCategory + searchQuery}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="card overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-xs font-medium text-blue-800 dark:text-blue-400 uppercase tracking-wider">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-medium mt-1">{project.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span 
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        {project.links.github && (
                          <a 
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
                            aria-label="GitHub repository"
                          >
                            <Github size={16} />
                          </a>
                        )}
                        
                        {project.links.live && (
                          <a 
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
                            aria-label="Live preview"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                      
                      <a 
                        href={project.links.live || project.links.github || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-800 dark:text-blue-400 flex items-center hover:underline"
                      >
                        View Details
                        <ArrowRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;