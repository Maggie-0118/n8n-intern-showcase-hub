
import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '工作環境', href: '#work-environment' },
    { name: '工作內容', href: '#job-responsibilities' },
    { name: '研究技術', href: '#research-technologies' },
    { name: '專題介紹', href: '#project-showcase' },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 shadow-lg shadow-cyber-blue/20 backdrop-blur-md border-b border-cyber-blue/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="font-bold text-xl text-cyber-blue font-mono flex items-center group">
              <Zap className="w-6 h-6 mr-2 animate-pulse group-hover:animate-bounce" />
              <span className="relative">
                實習期末報告
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyber-blue to-cyber-purple group-hover:w-full transition-all duration-300"></div>
              </span>
            </a>
          </div>
          
          <div className="-mr-2 -my-2 md:hidden">
            <Button 
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-md p-2 inline-flex items-center justify-center text-cyber-blue hover:bg-cyber-blue/10 border border-cyber-blue/30"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="relative whitespace-nowrap text-base font-medium text-gray-300 hover:text-cyber-blue transition-all duration-300 font-mono group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{link.name}</span>
                <div className="absolute inset-0 border border-transparent group-hover:border-cyber-blue/50 rounded transition-colors duration-300 -m-2 p-2"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyber-blue to-cyber-purple group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu with cyber styling */}
      <div
        className={`${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        } absolute top-16 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50`}
      >
        <div className="rounded-lg shadow-lg ring-1 ring-cyber-blue ring-opacity-30 bg-black/90 backdrop-blur-md border border-cyber-blue/30 divide-y-2 divide-cyber-blue/20">
          <div className="pt-5 pb-6 px-5">
            <div className="mt-6">
              <nav className="grid gap-y-4">
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="p-3 flex items-center rounded-md hover:bg-cyber-blue/10 transition-colors border border-transparent hover:border-cyber-blue/30 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Zap className="w-4 h-4 mr-3 text-cyber-blue animate-pulse" />
                    <span className="text-base font-medium text-gray-300 group-hover:text-cyber-blue font-mono">
                      {link.name}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
