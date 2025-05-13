import React from 'react';
import { Clock } from 'lucide-react';

interface ReadingTimeProps {
  text: string;
}

const ReadingTime = ({ text }: ReadingTimeProps) => {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);

  return (
    <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
      <Clock size={16} className="mr-1" />
      <span>{minutes} min read</span>
    </div>
  );
};

export default ReadingTime;