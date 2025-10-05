
import React from 'react';
import { useInView } from '../hooks/useInView';

interface CardProps {
  children: React.ReactNode;
  index: number;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export const Card: React.FC<CardProps> = ({ children, index, variant = 'primary' }) => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'text-center';
      case 'tertiary':
        return 'text-center p-6 bg-transparent border-none shadow-none hover:transform-none hover:shadow-none';
      case 'primary':
      default:
        return 'p-8 md:p-10';
    }
  };

  const baseClasses = "group relative w-full h-full bg-slate-900/30 border border-slate-800 rounded-3xl backdrop-blur-sm transition-all duration-500 ease-out";
  const hoverClasses = "hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-900/50 hover:-translate-y-2";

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${variant !== 'tertiary' ? hoverClasses : ''} ${getVariantClasses()} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
