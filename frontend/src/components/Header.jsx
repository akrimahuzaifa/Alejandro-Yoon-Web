import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_364bd733-e31d-4750-b3e0-c1d8e3c5b458/artifacts/oyr3as3a_Transparent%20Logo.png" 
              alt="Yunere Logo" 
              className="h-40 w-auto md:h-48"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className={`text-sm font-medium transition-colors hover:text-slate-600 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className={`text-sm font-medium transition-colors hover:text-slate-600 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('resources')}
              className={`text-sm font-medium transition-colors hover:text-slate-600 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Resources
            </button>
            <Button 
              onClick={() => scrollToSection('waitlist')}
              className="bg-slate-600 hover:bg-slate-700 text-white"
            >
              Get Free Demo
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white rounded-lg shadow-lg mt-2">
            <nav className="flex flex-col space-y-4 px-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-left text-sm font-medium text-gray-900 hover:text-slate-600 transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-left text-sm font-medium text-gray-900 hover:text-slate-600 transition-colors"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('resources')}
                className="text-left text-sm font-medium text-gray-900 hover:text-slate-600 transition-colors"
              >
                Resources
              </button>
              <Button 
                onClick={() => scrollToSection('waitlist')}
                className="bg-slate-600 hover:bg-slate-700 text-white w-full"
              >
                Get Free Demo
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
