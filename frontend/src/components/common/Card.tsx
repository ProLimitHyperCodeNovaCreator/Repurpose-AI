import React from 'react';
import { cn } from '../../utils/helpers';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  padding?: string;
}

const Card: React.FC<CardProps> = ({ children, className, hover = false, onClick, padding = 'p-4' }) => {
  return (
    <div
      className={cn(
        'bg-white/90 dark:bg-black border border-slate-200/90 dark:border-zinc-800 rounded-xl shadow-sm shadow-slate-200/40 dark:shadow-none backdrop-blur-sm',
        padding,
        hover && 'hover:border-cyan-300/80 hover:shadow-md hover:shadow-cyan-500/10 cursor-pointer transition-all duration-200',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
