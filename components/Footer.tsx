
import React from 'react';
import { TwitterIcon, LinkedInIcon, MailIcon } from './icons';

const SocialLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
    {children}
  </a>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-12 px-6 border-t border-slate-800">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center gap-6 mb-8">
          <SocialLink href="#"><TwitterIcon /></SocialLink>
          <SocialLink href="#"><LinkedInIcon /></SocialLink>
          <SocialLink href="#"><MailIcon /></SocialLink>
        </div>
        <p className="text-slate-500">
          © {currentYear} ParadiigmX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
