import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight, Search } from 'lucide-react';
import okhatiImage from '../../img/okhati.png';



type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  status:string;
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
  
  const categories = ['All', 'Web Development', 'E-commerce', 'UI/UX Design', 'Digital Marketing'];

const projects = [
  {
    id: 1,
    title: 'Okhati Nepal',
    category: 'E-commerce',
    description: 'A fully responsive e-commerce platform developed with a modern design and seamless user experience for online product sales and management.',
    image: 'https://raw.githubusercontent.com/nyoupaneroshan/roshan/refs/heads/main/src/img/okhati.png',
    status: 'live',
    tags: ['WordPress', 'WooCommerce', 'IMEPay'],
    links: {
      live: 'https://okhatinepal.com.np'
    },
  },
  {
    id: 2,
    title: 'Sunflower Academy',
    category: 'Web Development', // Changed from Web Design to Web Development to reflect tech stack
    description: 'A fully responsive and interactive website for an educational institution, designed to provide comprehensive information and a modern user experience.',
    image: 'https://raw.githubusercontent.com/nyoupaneroshan/roshan/refs/heads/main/src/img/sunflower.png',
    status: 'live',
    tags: ['React', 'Tailwind CSS', 'TypeScript', 'Vite'],
    links: {
      live: 'https://www.sunfloweracademy.edu.np/',
    },
  },
  {
    id: 3,
    title: 'Saunak Bhatta',
    category: 'Web Development', // Changed from Web Design to Web Development to reflect tech stack
    description: 'A complete redesign and development of a personal portfolio website, tailored to specific requirements to enhance user engagement and visual appeal.',
    image: 'https://raw.githubusercontent.com/nyoupaneroshan/roshan/refs/heads/main/src/img/saunak.png',
    status: 'live',
    tags: ['HTML', 'CSS', 'JavaScript', 'Figma'], // Figma here suggests UI/UX input, but the output is Web Dev
    links: {
      live: 'https://example.com', // Replace with actual live link if available
      github: 'https://github.com/', // Replace with actual GitHub link if available
    },
  },
  {
    id: 4,
    title: '11 TechMedia',
    category: 'UI/UX Design', // UI/UX is appropriate here based on tags
    description: 'Developed intuitive user interfaces and compelling user experiences for 11 TechMedia\'s digital presence, focusing on user flow and visual harmony.', // Added a more descriptive text
    image: 'https://raw.githubusercontent.com/nyoupaneroshan/roshan/refs/heads/main/src/img/11techmedia.png',
    status: 'live',
    tags: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
    links: {
      live: 'https://example.com', // Replace with actual live link if available
    },
  },
  {
    id: 5,
    title: 'United Holidays',
    category: 'Web Development', // Changed from Mobile to Web Development, as your CV lists unitedholidays.com.np as a web project. If it's truly a mobile app, you might need a "Mobile App Development" category.
    description: 'Designed and developed a feature-rich travel agency website, providing seamless vacation planning and booking functionalities for users.', // Adjusted description for a web platform
    image: 'https://raw.githubusercontent.com/nyoupaneroshan/roshan/refs/heads/main/src/img/unitedholidays.png',
    status: 'live',
    tags: ['WordPress', 'Travel Booking System'], // Adjusted tags assuming it's a WordPress-based travel site as per your CV
    links: {
      live: 'https://unitedholidays.com.np', // Added live link from your CV
      // github: 'https://github.com/', // Remove if not applicable or replace with actual
    },
  },
  {
    id: 6,
    title: 'DRC Nepal',
    category: 'Web Development', // Changed from Web Design to Web Development, as it's a built website
    description: 'A responsive personal portfolio website showcasing diverse projects and skills with a clean, modern, and elegant design.',
    image: 'https://raw.githubusercontent.com/nyoupaneroshan/roshan/refs/heads/main/src/img/drcn.png',
    status: 'live',
    tags: ['React', 'TailwindCSS', 'Framer Motion', 'Netlify'],
    links: {
      live: 'https://drcn.com.np',
      github: 'https://github.com/', // Replace with actual GitHub link if available
    },
  },
  {
    id: 7,
    title: 'Jivan Parivartan',
    category: 'Digital Marketing', // Changed from SEO to Digital Marketing to encompass broader aspects, but can be 'Healing & Wellness Platform' or 'Web Development' if you built the site. Given the previous request, 'Healing & Wellness Platform' might be a specific category if you have enough projects. If this project primarily involved *marketing* a healing service, 'Digital Marketing' could work.
    description: 'Developed a dedicated platform for holistic healing and wellness, offering singing bowl training, Reiki sessions, various healing modalities, and related spiritual practices.', // Clarified it's a platform you developed.
    image: 'https://raw.githubusercontent.com/nyoupaneroshan/roshan/refs/heads/main/src/img/jivanparivartan.png',
    status: 'live',
    tags: ['Healing & Wellness', 'WordPress', 'SEO', 'Content Strategy'], // Added more relevant tags
    links: {
      live: 'https://jivanparivartan.com.np', // Changed to a more appropriate domain name
      github: 'https://github.com/', // Replace with actual GitHub link if applicable
    },
  },
  {
    id: 8,
    title: 'Rajdhani Bulletin',
    category: 'Web Development', // Assuming you built the news portal
    description: 'Developed a dynamic news portal for real-time updates and trending news, optimized for readability and user engagement.',
    image: 'https://raw.githubusercontent.com/nyoupaneroshan/roshan/refs/heads/main/src/img/rajdhanibulletin.png', // Add actual image path
    status: 'live',
    tags: ['WordPress', 'News Portal', 'Content Management'],
    links: {
      live: 'https://rajdhanibulletin.com/',
    },
  },
  {
    id: 9,
    title: 'Yashaswee Legal Counsel',
    category: 'Web Development',
    description: 'Created a professional website for a legal consultancy, providing clear information on services and facilitating client outreach.',
    image: 'https://raw.githubusercontent.com/nyoupaneroshan/roshan/refs/heads/main/src/img/yashasweelegalcounsel.png', // Add actual image path
    status: 'live',
    tags: ['WordPress', 'Business Website', 'Legal'],
    links: {
      live: 'https://yashasweelegalcounsel.com',
    },
  },
  {
    id: 10,
    title: 'Maryada.org',
    category: 'Web Development', // Or 'Non-profit Website' if you want a more specific category
    description: 'Developed an informative website for an NGO, aimed at raising awareness and facilitating their outreach and initiatives.',
    image: 'https://raw.githubusercontent.com/nyoupaneroshan/roshan/refs/heads/main/src/img/maryadafoundation.png', // Add actual image path
    status: 'live',
    tags: ['WordPress', 'NGO', 'Social Impact'],
    links: {
      live: 'https://maryada.org',
    },
  },
  {
  id: 11, // Use a new ID, e.g., 8, assuming Maryada.org was 10
  title: 'White Happydent Toothpaste Digital Campaign',
  category: 'Digital Marketing', // This aligns with your role and skills
  description: 'Executed data-driven Facebook and Instagram campaigns, improving engagement by 25% and click-through rates by 15% for a leading toothpaste brand. Launched SEO-optimized website (whitehappydent.com) to drive conversions.', // Directly uses quantifiable achievements from your CV
  image: 'https://raw.githubusercontent.com/nyoupaneroshan/roshan/refs/heads/main/src/img/whitehappydent.png', // **Crucial: Add an actual image path for this project**
  status: 'live', // Assuming the campaigns/website are ongoing or were live
  tags: ['Facebook Ads', 'Instagram Ads', 'SEO', 'Content Strategy', 'Social Media Marketing', 'Google Ads'], // Relevant tags based on your CV
  links: {
    live: 'https://whitehappydent.com', // As mentioned in your CV
    // You might also add links to specific campaign examples or social media pages if available and relevant.
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
        project.status.toLowerCase().includes(query) ||
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
              No projects match your search.
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
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        project.status === 'live' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                      }`}>
                        {project.status}
                      </span>
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
{/*                       
                      <a
                        href={project.links.live || project.links.github || '#'}
                        target={hasLinks ? "_blank" : undefined}
                        rel={hasLinks ? "noopener noreferrer" : undefined}
                        className={`text-sm font-medium text-blue-800 dark:text-blue-400 flex items-center ${
                          !hasLinks ? 'opacity-50 cursor-not-allowed' : 'hover:underline'
                        }`}
                        onClick={(e) => !hasLinks && e.preventDefault()} // Prevent default if no link
                      >
                        View Details
                        <ArrowRight size={16} className="ml-1" />
                      </a> */}
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