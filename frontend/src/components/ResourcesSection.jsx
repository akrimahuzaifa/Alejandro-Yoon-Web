import React from 'react';
import { ArrowRight, FileText, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { mockResources } from '../data/mock';
import { useNavigate } from 'react-router-dom';

export const ResourcesSection = () => {
  const navigate = useNavigate();

  const getTypeIcon = (type) => {
    switch(type) {
      case 'blog':
        return FileText;
      case 'case-study':
        return BookOpen;
      default:
        return FileText;
    }
  };

  const getTypeBadge = (type) => {
    const badges = {
      'blog': { label: 'Blog Post', color: 'bg-blue-100 text-blue-700' },
      'case-study': { label: 'Case Study', color: 'bg-green-100 text-green-700' }
    };
    return badges[type] || badges['blog'];
  };

  return (
    <section id="resources" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Resources & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about CAM reconciliations, industry best practices, 
            and how leading property managers are transforming their operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {mockResources.map((resource) => {
            const Icon = getTypeIcon(resource.type);
            const badge = getTypeBadge(resource.type);
            
            return (
              <div 
                key={resource.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-slate-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${badge.color}`}>
                    {badge.label}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Icon className="w-4 h-4" />
                    <span>{resource.date}</span>
                    <span>•</span>
                    <span>{resource.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-slate-600 transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {resource.description}
                  </p>

                  <button className="text-slate-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={() => navigate('/resources')}
            variant="outline"
            className="border-2 border-slate-600 text-slate-600 hover:bg-slate-50"
          >
            View All Resources
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
