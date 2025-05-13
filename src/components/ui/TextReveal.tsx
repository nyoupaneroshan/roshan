import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TextRevealProps {
  children: React.ReactNode;
  width?: "full" | "fit";
}

const TextReveal = ({ children, width = "full" }: TextRevealProps) => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className={`relative ${width === "full" ? "w-full" : "w-fit"}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-teal-800/20 dark:from-blue-400/20 dark:to-teal-400/20"
        style={{ x }}
      />
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default TextReveal;