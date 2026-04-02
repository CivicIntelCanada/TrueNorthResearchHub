import Link from 'next/link';
import { TrendingUp, DollarSign, Building2 } from 'lucide-react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export default function EconomyCategory() {
  const topics = [
    {
      title: 'Inflation',
      description: 'Consumer prices, CPI, and purchasing power',
      href: '/topic/inflation/',
      icon: TrendingUp,
      stat: '2.8%'
    },
    {
      title: 'Employment',
      description: 'Labour market, unemployment, wages',
      href: '/topic/employment/',
      icon: Building2,
      stat: '6.4%'
    },
    {
      title: 'Housing',
      description: 'Affordability, supply, prices',
      href: '/topic/housing/',
      icon: DollarSign,
      stat: '—'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Categories', href: '/categories/' },
          { label: 'Economy', href: '/category/economy/', isCurrent: true }
        ]} 
      />
      
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Economy</h1>
          <p className="mt-2 text-lg text-gray-600">Economic indicators, monetary policy, and market analysis</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <Link
              key={topic.title}
              href={topic.href}
              className="bg-white rounded-xl border p-6 hover:shadow-lg hover:border-blue-300 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                  <topic.icon className="w-6 h-6" />
                </div>
                <span className="text-2xl font-bold text-gray-900">{topic.stat}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {topic.title}
              </h3>
              <p className="text-gray-600 text-sm">{topic.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
