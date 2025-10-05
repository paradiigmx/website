
import React from 'react';

const Button: React.FC<{ href: string, children: React.ReactNode, variant?: 'primary' | 'secondary' }> = ({ href, children, variant = 'primary' }) => {
  const baseClasses = "px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out transform";
  const primaryClasses = "bg-gradient-to-r from-[#0066ff] to-[#00b4d8] text-white shadow-lg shadow-cyan-500/30 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40";
  const secondaryClasses = "bg-slate-800/50 border-2 border-cyan-500/30 text-white backdrop-blur-sm hover:bg-cyan-500/10 hover:border-cyan-500/50";

  return (
    <a href={href} className={`${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses}`}>
      {children}
    </a>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <div className="text-center max-w-4xl mx-auto opacity-0 animation-fadeInUp">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 bg-gradient-to-br from-white to-cyan-400 text-transparent bg-clip-text">
          Infinite Imagination
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-12">
          Bold ideas, and design that makes an impact.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button href="#products" variant="primary">Explore Our Apps</Button>
          <Button href="#services" variant="secondary">View Services</Button>
        </div>
      </div>
    </section>
  );
};
