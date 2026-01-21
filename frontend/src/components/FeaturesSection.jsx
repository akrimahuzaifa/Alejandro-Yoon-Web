import React from 'react';
import { Clock, Target, Shield, FileText, Database, TrendingUp } from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: 'Save Weeks of Work',
      description: 'Close CAM reconciliations in days instead of weeks or months. Automated lease reading eliminates manual data entry.',
      color: 'from-blue-500/10 to-blue-600/10',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Target,
      title: 'Pinpoint Accuracy',
      description: 'Eliminate calculation errors with AI-powered lease interpretation and expense allocation based on exact lease terms.',
      color: 'from-green-500/10 to-green-600/10',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: Shield,
      title: 'Dispute-Proof Reports',
      description: 'Generate defensible CAM summaries with complete audit trails. Confidently respond to tenant questions.',
      color: 'from-slate-500/10 to-slate-600/10',
      iconBg: 'bg-slate-100',
      iconColor: 'text-slate-600'
    },
    {
      icon: FileText,
      title: 'Smart Lease Parsing',
      description: 'Automatically extract CAM terms, square footage, and allocation rules from any lease format (PDF/DOCX).',
      color: 'from-purple-500/10 to-purple-600/10',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: Database,
      title: 'Seamless Data Import',
      description: 'Import rent rolls and GL exports directly. Compare data across sources to catch discrepancies instantly.',
      color: 'from-orange-500/10 to-orange-600/10',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: TrendingUp,
      title: 'Actionable Insights',
      description: 'Get clear visibility into expense allocation, recovery rates, and potential disputes before they happen.',
      color: 'from-teal-500/10 to-teal-600/10',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600'
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to
            <span className="text-slate-600"> Streamline CAM</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Yunere combines intelligent automation with commercial real estate expertise 
            to transform how you handle CAM reconciliations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-slate-200"
              >
                <div className={`w-14 h-14 ${feature.iconBg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
