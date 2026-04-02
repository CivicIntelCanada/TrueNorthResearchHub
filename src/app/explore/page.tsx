import Link from 'next/link';
import { Compass, ArrowRight } from 'lucide-react';

export default function Explore() {
  const startingPoints = [
    {
      title: 'Inflation',
      description: 'Start with current CPI data and explore monetary policy, historical context, and global comparisons',
      href: '/explore/inflation/',
      color: 'bg-red-50 text-red-600'
    },
    {
      title: 'Housing Affordability',
      description: 'Trace the crisis through interest rates, supply constraints, and policy responses',
      href: '/explore/housing/',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Federal Budget',
      description: 'Follow spending from allocation to implementation through departmental reports',
      href: '/explore/budget/',
      color: 'bg-green-50 text-green-600'
    },
    {
      title: 'Climate Policy',
      description: 'Explore carbon pricing, emissions data, and international agreements',
      href: '/explore/climate/',
      color: 'bg-teal-50 text-teal-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <Compass className="w-10 h-10 text-purple-300" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Explore Mode</h1>
          <p className="text-xl text-purple-200 max-w-2xl">
            Navigate topics through connections. Follow your curiosity down rabbit holes with clear escape hatches and full source transparency.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Choose a Starting Point</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {startingPoints.map((point) => (
            <Link
              key={point.title}
              href={point.href}
              className="group bg-white rounded-xl border p-6 hover:shadow-lg hover:border-purple-300 transition-all"
            >
              <div className={`w-12 h-12 rounded-lg ${point.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                {point.title}
              </h3>
              <p className="text-gray-600 mb-4">{point.description}</p>
              <span className="inline-flex items-center gap-1 text-purple-600 font-medium group-hover:gap-2 transition-all">
                Start exploring <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        {/* How it Works */}
        <div className="mt-16 bg-white rounded-xl border p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">How Explore Mode Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 font-bold mb-3">1</div>
              <h4 className="font-semibold text-gray-900 mb-2">Start Anywhere</h4>
              <p className="text-sm text-gray-600">Pick a topic that interests you. Each page presents key facts with full sources.</p>
            </div>
            <div>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 font-bold mb-3">2</div>
              <h4 className="font-semibold text-gray-900 mb-2">Follow Connections</h4>
              <p className="text-sm text-gray-600">Click related concepts to dive deeper. Your path is tracked automatically.</p>
            </div>
            <div>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 font-bold mb-3">3</div>
              <h4 className="font-semibold text-gray-900 mb-2">Escape Anytime</h4>
              <p className="text-sm text-gray-600">Lost? Click &quot;Exit to Topic View&quot; for structured information or &quot;Home&quot; to restart.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
