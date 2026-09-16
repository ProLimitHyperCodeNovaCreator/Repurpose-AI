import React from 'react';
import { cn } from '../../utils/helpers';

const variants: Record<string, string> = {
  primary: 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white hover:from-cyan-500 hover:to-teal-500 shadow-md shadow-cyan-500/20',
  secondary:
    'bg-white text-slate-800 hover:bg-slate-50 border border-slate-200 shadow-sm dark:bg-black dark:text-slate-100 dark:border-zinc-700 dark:hover:bg-black dark:hover:border-zinc-600',
  ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-white/5',
  danger:
    'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 dark:bg-black dark:text-red-400 dark:border-red-900/60 dark:hover:bg-black dark:hover:border-red-800',
  success:
    'bg-teal-50 text-teal-800 hover:bg-teal-100 border border-teal-200 dark:bg-black dark:text-teal-300 dark:border-teal-900/50 dark:hover:bg-black dark:hover:border-teal-800',
};

const sizes: Record<string, string> = {
  xs: 'px-2 py-1 text-xs gap-1',
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-4 py-2 text-sm gap-2',
  lg: 'px-6 py-3 text-base gap-2',
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  size?: string;
  icon?: React.ReactNode;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', icon, loading, children, className, disabled, ...props }) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200',
        variants[variant] || variants.primary,
        sizes[size] || sizes.md,
        (disabled || loading) && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      ) : icon}
      {children}
    </button>
  );
};

export default Button;
