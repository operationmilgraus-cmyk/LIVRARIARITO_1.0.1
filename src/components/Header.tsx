import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import brandLogoImg from '../assets/images/regenerated_image_1788371608058.jpg';

interface HeaderProps {
  onOpenSearch: () => void;
  onNavigateToCatalog: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onNavigateToCatalog
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Catálogo', href: '#catalogo' },
    { label: 'Editora Rito', href: '#editora-rito' },
    { label: 'Missão', href: '#missao' },
    { label: 'Fundador', href: '#fundador' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            id="brand-logo"
            className="flex items-center group focus:outline-none"
            aria-label="Livraria Rito - Página Inicial"
          >
            <img
              src={brandLogoImg}
              alt="Livraria Rito"
              id="header-brand-logo-img"
              className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Navigation - Home, Catálogo, Missão, FAQ */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-100/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & Badges */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search */}
            <button
              onClick={onOpenSearch}
              id="search-trigger-btn"
              className="p-2 rounded-lg text-slate-600 hover:text-blue-700 hover:bg-slate-100 transition-colors"
              title="Pesquisar livros por título, autor ou categoria"
              aria-label="Pesquisar"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onNavigateToCatalog}
              id="header-cta-btn"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 shadow-sm hover:shadow-md hover:shadow-blue-700/25 transition-all"
            >
              Ver Catálogo
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-200/70 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-100 hover:text-blue-700"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToCatalog();
                }}
                className="w-full py-2.5 rounded-xl font-semibold text-white bg-blue-700 hover:bg-blue-800 text-center block shadow-sm"
              >
                Ver Catálogo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};


