import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="about" className="section bg-white dark:bg-neutral-800">
      <div className="container">
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="relative">
            <motion.div 
              className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200/50 dark:bg-blue-800/20 rounded-lg"
              variants={itemVariants}
              animate={inView ? {
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 0.9, 1],
              } : {}}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.div 
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-200/50 dark:bg-teal-800/20 rounded-lg"
              variants={itemVariants}
              animate={inView ? {
                rotate: [0, -10, 10, 0],
                scale: [1, 0.9, 1.1, 1],
              } : {}}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.div 
              className="relative overflow-hidden rounded-xl shadow-lg aspect-[4/5]"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src="https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Roshan Nyoupane"
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
              />
            </motion.div>
          </div>
          
          <motion.div variants={containerVariants}>
            <motion.h2 
              className="mb-6"
              variants={itemVariants}
            >
              About <span className="text-blue-800 dark:text-blue-400">Me</span>
            </motion.h2>
            
            <motion.div 
              className="space-y-4 text-neutral-700 dark:text-neutral-300"
              variants={containerVariants}
            >
              <motion.p variants={itemVariants}>
                Hi there! I'm Roshan Nyoupane, a passionate professional dedicated to creating exceptional digital experiences that blend creativity with technical expertise.
              </motion.p>
              <motion.p variants={itemVariants}>
                With a strong background in design and development, I approach each project with a focus on solving real problems and delivering solutions that exceed expectations.
              </motion.p>
              <motion.p variants={itemVariants}>
                When I'm not immersed in work, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities to fuel my creativity.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="mt-8 grid grid-cols-2 gap-4 text-neutral-700 dark:text-neutral-300"
              variants={containerVariants}
            >
              {[
                { title: "Location", value: "Kathmandu, Nepal" },
                { title: "Experience", value: "5+ Years" },
                { title: "Email", value: "contact@example.com" },
                { title: "Languages", value: "English, Nepali" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h4 className="font-medium text-blue-800 dark:text-blue-400">{item.title}</h4>
                  <p>{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.a 
              href="#contact"
              className="mt-8 inline-block btn btn-primary"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;