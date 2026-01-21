import React from 'react';
import { ArrowRight, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

export const HeroSection = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg"
          alt="Modern commercial building"
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-700/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <TrendingUp className="w-4 h-4 text-slate-300" />
            <span className="text-sm font-medium text-white">Commercial Real Estate Automation</span>
          </div>

          {/* Main Headline */}
          <h1 className="md:text-6xl lg:text-7xl !font-bold !text-5xl text-white">
            Automate Your CAM Reconciliations in
            <br />
            <span className="!underline text-slate-300">Hours, Not Weeks</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Eliminate manual, error-prone CAM processes. Let AI read your leases, 
            allocate expenses accurately, and defend disputes with confidence.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-200">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="!font-medium !text-sm">Save 90%+ your Time</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="!font-medium !text-sm">High Accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="!font-medium !text-sm">Audit-ready reports</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={scrollToWaitlist}
              className="bg-slate-600 hover:bg-slate-700 text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">

              Get Your Free Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-lg backdrop-blur-sm">

              See How It Works
            </Button>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>);

};