import React from 'react';
import { Upload, Search, Calculator, Download } from 'lucide-react';

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: Upload,
      number: '01',
      title: 'Upload Your Documents',
      description: 'Simply upload your leases (PDF/DOCX), rent rolls, and GL expense exports. Yunere accepts all common formats.'
    },
    {
      icon: Search,
      number: '02',
      title: 'AI Reads & Extracts',
      description: 'Our lease reading engine automatically extracts CAM terms, square footage, exclusions, and allocation rules from each lease.'
    },
    {
      icon: Calculator,
      number: '03',
      title: 'Smart Allocation',
      description: 'Yunere then reads the General Ledger, applies Accounting logic, identifies discrepancies, and allocates expenses precisely based on each tenant\'s lease terms.'
    },
    {
      icon: Download,
      number: '04',
      title: 'Export & Deliver',
      description: 'Generate defensible CAM summaries with complete audit trails. Export reports and share with confidence.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Yunere Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four simple steps to transform weeks of manual work into days of automated precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300 z-0" style={{ width: '85%', left: '7.5%' }}></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-100 hover:border-slate-300 z-10"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-slate-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-slate-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Target Audience */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Built specifically for owners & property managers handling retail, office & flex properties
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 bg-slate-50 rounded-lg p-4">
              <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
              <span className="text-gray-700 font-medium">5,000-50,000 sq ft portfolio</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-slate-50 rounded-lg p-4">
              <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
              <span className="text-gray-700 font-medium">Multiple property types</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-slate-50 rounded-lg p-4">
              <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
              <span className="text-gray-700 font-medium">All lease structures</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
