import Link from 'next/link';
import { TrendingUp, Heart, Home, TreePine, Scale, GraduationCap, Plane } from 'lucide-react';

export default function TopicsIndex() {
  const categories = [
    {
      title: 'Economy',
      description: 'Inflation, employment, housing, trade',
      href: '/category/economy/',
      icon: TrendingUp,
      count: 3
    },
    {
      title: 'Healthcare',
      description: 'Medicare, funding, wait times, outcomes',
      href: '/category/healthcare/',
      icon: Heart,
      count: 0
    },
    {
      title: 'Housing',
      description: 'Affordability, supply, homelessness',
      href: '/category/housing/',
      icon: Home,
      count: 1
    },
    {
      title: 'Climate',
      description: 'Carbon pricing, emissions, energy',
      href: '/category/climate/',
      icon: TreePine,
      count: 1
    },
    {
      title: 'Justice',
      description: 'Courts, crime, legislation',
      href: '/category/justice/',
      icon: Scale,
      count: 0
    },
    {
      title: 'Education',
      description: 'K-12, post-secondary, funding',
      href: '/category/education/',
      icon: GraduationCap,
      count: 0
    },
    {
      title: 'Immigration',
      description: 'Policy, settlement, demographics',
      href: '/category/immigration/',
      icon: Plane,
      count: 0
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">All Topics</h1>
          <p className="mt-2 text-lg text-gray-600">Browse by category or search for specific subjects</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="bg-white rounded-xl border p-6 hover:shadow-lg hover:border-blue-300 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                <cat.icon className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {cat.title}
                </h3>
                <span className="text-sm text-gray-500">{cat.count} topics</span>
              </div>
              <p className="text-gray-600 text-sm">{cat.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
