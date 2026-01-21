import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { mockResources } from '../data/mock';
import { FileText, BookOpen, FileVideo, HelpCircle, ArrowLeft, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useNavigate } from 'react-router-dom';

const ResourcesPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const getTypeIcon = (type) => {
    switch(type) {
      case 'blog':
        return FileText;
      case 'case-study':
        return BookOpen;
      case 'video':
        return FileVideo;
      case 'guide':
        return HelpCircle;
      default:
        return FileText;
    }
  };

  const getTypeBadge = (type) => {
    const badges = {
      'blog': { label: 'Blog Post', color: 'bg-blue-100 text-blue-700' },
      'case-study': { label: 'Case Study', color: 'bg-green-100 text-green-700' },
      'guide': { label: 'Guide', color: 'bg-purple-100 text-purple-700' },
      'video': { label: 'Video', color: 'bg-orange-100 text-orange-700' }
    };
    return badges[type] || badges['blog'];
  };

  const filteredResources = mockResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'all' || resource.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-white hover:bg-white/10 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Resources & Insights
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Explore our collection of blog posts, case studies, guides, and FAQs 
            to learn more about CAM reconciliations and commercial property management.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            
            <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full md:w-auto">
              <TabsList className="grid grid-cols-3 md:grid-cols-5 w-full md:w-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="blog">Blogs</TabsTrigger>
                <TabsTrigger value="case-study">Cases</TabsTrigger>
                <TabsTrigger value="guide">Guides</TabsTrigger>
                <TabsTrigger value="faq">FAQs</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredResources.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No resources found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => {
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
                      
                      <p className="text-gray-600 mb-4">
                        {resource.description}
                      </p>

                      <Button 
                        variant="ghost" 
                        className="text-slate-600 font-semibold p-0 h-auto hover:bg-transparent"
                      >
                        Read More →
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your CAM Process?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join our waitlist and be among the first to experience automated CAM reconciliations.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/#waitlist')}
            className="bg-slate-600 hover:bg-slate-700 text-white"
          >
            Get Your Free Demo
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourcesPage;
