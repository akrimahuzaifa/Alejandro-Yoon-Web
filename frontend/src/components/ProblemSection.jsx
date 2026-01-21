import React from 'react';
import { AlertCircle, Clock, FileX, TrendingDown } from 'lucide-react';

export const ProblemSection = () => {
  const problems = [
  {
    icon: Clock,
    title: 'Weeks of Manual Work',
    description: 'Sorting through lease PDFs, Excel spreadsheets, and GL exports eats up valuable time every quarter.'
  },
  {
    icon: FileX,
    title: 'Error-Prone Processes',
    description: 'Manual data entry and complex calculations lead to costly mistakes and under-recovered expenses.'
  },
  {
    icon: AlertCircle,
    title: 'Tenant Disputes',
    description: 'Without clear documentation and audit trails, defending CAM charges becomes a nightmare.'
  },
  {
    icon: TrendingDown,
    title: 'Lost Revenue',
    description: 'Buried lease terms and calculation errors mean thousands in unrealized CAM recovery each year.'
  }];


  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="md:text-5xl !font-bold !text-4xl mb-4 text-gray-900">
            CAM reconciliation is a <span className="text-red-600">Time-Consuming Nightmare</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Property managers waste countless hours on manual processes that lead to errors, 
            disputes, and lost revenue. There's a better way.
          </p>
        </div>

        {/* Image Section */}
        <div className="mb-12 flex justify-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white p-6 max-w-2xl">
            <img 
              src="https://customer-assets.emergentagent.com/job_minimal-launch-2/artifacts/ttqe8i0n_image.png"
              alt="Stressed professional working on CAM reconciliations"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">

                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>);

          })}
        </div>
      </div>
    </section>);

};