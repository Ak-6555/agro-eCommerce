import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'New Rice Variety Launch',
    excerpt: 'Rahman Agro introduces a drought-resistant rice variety with increased yield potential.',
    date: 'May 15, 2025',
    image: 'https://images.pexels.com/photos/2463720/pexels-photo-2463720.jpeg',
    category: 'Product Launch'
  },
  {
    id: 2,
    title: 'Agricultural Workshop Series',
    excerpt: 'Join our upcoming farmer workshops to learn about modern farming techniques.',
    date: 'June 10, 2025',
    image: 'https://images.pexels.com/photos/7728088/pexels-photo-7728088.jpeg',
    category: 'Event'
  },
  {
    id: 3,
    title: 'Sustainable Farming Initiative',
    excerpt: 'Rahman Agro partners with local universities on a sustainable farming research program.',
    date: 'April 28, 2025',
    image: 'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg',
    category: 'Sustainability'
  }
];

const NewsSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Latest News & Events</h2>
            <p className="mt-2 text-lg text-gray-600">Stay updated with our latest initiatives and news</p>
          </div>
          <a href="#" className="hidden sm:flex items-center text-green-600 hover:text-green-800 font-medium">
            View all news
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />
                <span className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  {item.date}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <a 
            href="#" 
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            View all news
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;