import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import RepurposeMark from '../components/brand/RepurposeMark';

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100/90 via-slate-50 to-slate-100/80 dark:from-black dark:via-black dark:to-black dark:bg-black flex items-center justify-center p-4 relative overflow-hidden text-slate-800 dark:text-slate-200">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-400/12 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="relative w-full max-w-md">
        <Link to="/" className="flex items-center justify-center gap-3 mb-8">
          <RepurposeMark className="w-12 h-12 rounded-2xl shadow-lg shadow-cyan-500/30" alt="" />
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              repurpose<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600 dark:from-cyan-400 dark:to-teal-400">.ai</span>
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">Drug repurposing intelligence</p>
          </div>
        </Link>
        <div className="bg-white/90 dark:bg-black backdrop-blur-md border border-slate-200/90 dark:border-zinc-800 rounded-2xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-none">
          <Outlet />
        </div>
        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-6">&copy; {new Date().getFullYear()} repurpose.ai. All rights reserved.</p>
      </motion.div>
    </div>
  );
};

export default AuthLayout;
