import React from 'react';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-8 overflow-hidden">
      
      {/* Background Brand Color Containers / Geometric Shapes */}
      {/* Deep Purple Circle */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-900 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-float"
      />
      
      {/* Teal Rectangle/Blob */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal rounded-[100px] mix-blend-multiply filter blur-[60px] opacity-60"
        style={{ animation: 'float 7s ease-in-out infinite reverse' }}
      />
      
      {/* Orange Accent */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange rounded-full mix-blend-multiply filter blur-[70px] opacity-50 animate-float"
      />

      {/* Main Glassmorphism Container */}
      <main className="relative z-10 w-full max-w-4xl min-h-[600px] bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-2xl border border-slate-200/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-[40px] flex flex-col md:flex-row overflow-hidden">
        {/* Decorative Brand Overlay Side (Left side on desktop) */}
        <div className="hidden md:flex md:w-5/12 relative border-r border-white/30 bg-white/20 p-12 flex-col justify-end">
           {/* 'welcome' liquid glass text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
            <h1 className="text-6xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-200 drop-shadow-lg" style={{ fontFamily: 'Georgia, serif' }}>
              welcome
            </h1>
          </div>
          <div className="relative z-10 mt-auto">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center font-black text-white text-xl">4</div>
              <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center font-black text-white text-xl">U</div>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Pact Pipeline</h2>
            <p className="text-sm text-slate-700 mt-2 font-medium">B2B Strategy & Growth</p>
          </div>
        </div>

        {/* Content Area (Right side) */}
        <div className="flex-1 p-8 sm:p-12 md:p-16 flex flex-col justify-center bg-white/40">
          {children}
        </div>
      </main>

    </div>
  );
};

export default Layout;
