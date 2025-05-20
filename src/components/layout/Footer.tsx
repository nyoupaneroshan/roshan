import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
// import { Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/nyoupaneroshan/', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/roshan-nyoupane/', label: 'LinkedIn' },
    // { icon: Twitter, href: 'https://twitter.com/', label: 'Twitter' },
    { icon: Mail, href: 'mailto:roshan@11techmedia.com.np', label: 'Email' },
  ];

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-800 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-semibold">
              Roshan<span className="text-blue-800 dark:text-blue-400">.</span>
            </a>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400 max-w-md">
              Creating meaningful digital experiences through thoughtful design and development.
            </p>
          </div> 
          
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-700 text-center text-sm text-neutral-600 dark:text-neutral-400">
          <p>© {currentYear} <a href="https://11techmedia.com.np">Roshan Nyoupane</a>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;