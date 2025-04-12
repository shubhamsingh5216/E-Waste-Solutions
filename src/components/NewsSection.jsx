import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const NewsSection = () => {
  const articles = [
    {
      id: 1,
      title: 'New E-Waste Recycling Regulations Coming in 2025',
      excerpt: 'The Environmental Protection Agency has announced new guidelines for electronic waste disposal that will take effect next year.',
      date: 'May 15, 2025',
      image: 'https://images.unsplash.com/photo-1550376026-33cbee34f79e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Policy',
    },
    {
      id: 2,
      title: 'How Recycled Electronics Are Giving Back to Communities',
      excerpt: 'Learn how refurbished computers and phones are being distributed to schools and community centers in underserved areas.',
      date: 'April 28, 2025',
      image: 'https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Community',
    },
    {
      id: 3,
      title: 'Innovative Technologies for E-Waste Processing',
      excerpt: 'New methods are being developed to more efficiently extract precious metals and reduce environmental impact of e-waste processing.',
      date: 'April 10, 2025',
      image: 'https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Technology',
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News & Articles</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed about the latest developments in e-waste management, recycling technologies, and environmental policies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm ml-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    {article.date}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <a href="#" className="text-green-600 hover:text-green-800 font-medium flex items-center">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
            View All Articles
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
