import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Layout, Lightbulb, LineChart, Settings, Terminal, Zap } from 'lucide-react';

type Skill = {
  name: string;
  icon: React.ElementType;
  description: string;
  level: number;
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skills: Skill[] = [
    {
      name: 'Web Development ',
      icon: Layout,
      description: 'Developing responsive, secure, and scalable full-stack websites using modern frameworks (React, Node.js, PHP) and robust UI/UX practices.',
      level: 85,
    },
    {
      name: 'Graphics Designing',
      icon: Code,
      description: 'Crafting visually compelling designs for branding, marketing campaigns, and digital platforms using Adobe Photoshop, Illustrator, Canva, and AI tools.',
      level: 90,
    },
    {
      name: 'Video Editing and Motion Graphics',
      icon: Terminal,
      description: 'Editing and producing compelling short-form video content, ads, and animations for digital campaigns using Adobe Premiere Pro, Final Cut Pro, and CapCut.',
      level: 80,
    },
    {
      name: 'Digital Marketing',
      icon: LineChart,
      description: 'Executing data-driven digital marketing campaigns across social media, SEO, Google Ads, and email marketing to boost brand visibility, engagement, and ROI.',
      level: 75,
    },
    {
      name: 'UI/UX Design & Content Creation',
      icon: Zap,
      description: 'Designing intuitive user interfaces and compelling user experiences, along with creating diverse digital content including engaging ad copy, blogs, and branding assets.',
      level: 70,
    },
    {
      name: 'Strategic Program Management',
      icon: Lightbulb,
      description: 'Leading strategic planning, team leadership, and cross-functional coordination for impactful digital literacy and civic engagement programs, ensuring stakeholder alignment and measurable impact.',
      level: 85,
    },
  ];

  return (
    <section id="skills" className="section bg-neutral-50 dark:bg-neutral-900">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          <motion.h2 
            className="mb-4"
            variants={itemVariants}
          >
            My <span className="text-blue-800 dark:text-blue-400">Skills</span>
          </motion.h2>
          <motion.p 
            className="text-neutral-700 dark:text-neutral-300"
            variants={itemVariants}
          >
            My expertise spans across various domains, allowing me to tackle complex projects and deliver comprehensive solutions as per your requirement.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="card p-6 backdrop-blur-sm bg-white/80 dark:bg-neutral-800/80"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <div className="flex items-start mb-4">
                <motion.div 
                  className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <skill.icon size={24} />
                </motion.div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium">{skill.name}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                    {skill.description}
                  </p>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Proficiency
                  </span>
                  <span className="text-sm font-medium text-blue-800 dark:text-blue-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-600 dark:to-blue-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ 
                      delay: index * 0.1,
                      duration: 1,
                      ease: "easeOut"
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;