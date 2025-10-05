
import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void; isCta?: boolean }> = ({ href, children, onClick, isCta = false }) => (
  <li>
    <a
      href={href}
      onClick={onClick}
      className={isCta
        ? "block px-6 py-2 bg-gradient-to-r from-[#0066ff] to-[#00b4d8] rounded-full text-white font-semibold transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
        : "block text-slate-300 hover:text-cyan-300 transition-colors duration-300 py-2"}
    >
      {children}
    </a>
  </li>
);

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: "#products", text: "Products" },
    { href: "#services", text: "Services" },
    { href: "#features", text: "Features" },
  ];

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-2xl py-3' : 'py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-3xl font-bold bg-gradient-to-r from-white to-cyan-400 text-transparent bg-clip-text">
          ParadiigmX
        </a>
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>{link.text}</NavLink>
            ))}
            <NavLink href="#contact" isCta>Get Started</NavLink>
          </ul>
        </nav>
        <button
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-around">
            <span className={`block w-full h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
          </div>
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-slate-900/95 backdrop-blur-xl transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center">
          <ul className="flex flex-col items-center space-y-8 text-2xl">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} onClick={closeMenu}>{link.text}</NavLink>
            ))}
            <li className="pt-4">
              <NavLink href="#contact" isCta onClick={closeMenu}>Get Started</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
