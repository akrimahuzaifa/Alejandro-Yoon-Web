import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img 
              src="https://customer-assets.emergentagent.com/job_364bd733-e31d-4750-b3e0-c1d8e3c5b458/artifacts/oyr3as3a_Transparent%20Logo.png" 
              alt="Yunere Logo" 
              className="h-32 w-auto mb-4"
            />
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Automate your CAM reconciliations with AI-powered lease reading and expense allocation. 
              Save time, increase accuracy, and eliminate disputes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('resources')}
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Resources
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('waitlist')}
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Get Demo
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:contact@yunere.com" 
                  className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  contact@yunere.com
                </a>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Yunere. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
