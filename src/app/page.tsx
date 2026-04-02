import Link from 'next/link';
import { ArrowRight, TrendingUp, BookOpen, Shield, Globe, Database } from 'lucide-react';
import { getMockInflationData, getMockUnemploymentData, getMockPolicyRate } from '@/lib/sources';
import SourceBadge from '@/components/citations/SourceBadge';

export default function HomePage() {
  const inflation = getMockInflationData();
  const unemployment = getMockUnemploymentData();
  const policyRate = getMockPolicyRate();

  const featuredTopics = [
    { 
      title: 'Inflation', 
      href: '/topic/inflation/',
      description: 'Consumer prices, monetary policy, and cost of living',
      icon: TrendingUp,
      color: 'bg-red-50 text-red-600'
    },
    { 
      title: 'Employment', 
      href: '/topic/employment/',
      description: 'Labour market, wages, and workforce trends',
      icon: BookOpen,
      color: 'bg-blue-50 text-blue-600'
    },
    { 
      title: 'Housing', 
      href: '/topic/housing/',
      description: 'Affordability, supply, and market analysis',
      icon: Database,
      color: 'bg-green-50 text-green-600'
    },
    { 
      title: 'Climate', 
      href: '/topic/climate/',
      description: 'Policy, emissions, and environmental data',
      icon: Globe,
      color: 'bg-teal-50 text-teal-600'
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Canada's Most Comprehensive<br />
            <span className="text-blue-300">Research Database</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Every fact sourced. Every source accessible. Navigate complex topics with confidence through verified data and transparent citations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/topic/inflation/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Explore Topics
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/data/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Data Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Live Data Ticker */}
      <section className="border-b bg-gray-50 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-600">Live Data</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <DataCard 
              title="Inflation (CPI)"
              value={`${inflation.value}%`}
              change={inflation.change}
              trend={inflation.trend}
              date={inflation.date}
              source={inflation.source}
            />
            <DataCard 
              title="Unemployment"
              value={`${unemployment.value}%`}
              change={unemployment.change}
              trend={unemployment.trend}
              date={unemployment.date}
              source={unemployment.source}
            />
            <DataCard 
              title="Policy Rate"
              value={`${policyRate.value}%`}
              change={policyRate.change}
              trend={policyRate.trend}
              date={policyRate.date}
              source={policyRate.source}
            />
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Topics</h2>
            <Link href="/topics/" className="text-blue-600 hover:underline flex items-center gap-1">
              View all topics <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTopics.map((topic) => (
              <Link
                key={topic.title}
                href={topic.href}
                className="group p-6 rounded-xl border hover:border-blue-300 hover:shadow-lg transition-all bg-white"
              >
                <div className={`w-12 h-12 rounded-lg ${topic.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <topic.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-sm text-gray-600">{topic.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Citation-First Approach
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Every Statistic Has a Source
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We believe in radical transparency. Every data point links to its original source, 
            with archived snapshots for permanence. No black boxes, no unverified claims.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              50+ Government Sources
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              100+ Media Partners
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              30+ International Databases
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

function DataCard({ 
  title, 
  value, 
  change, 
  trend, 
  date, 
  source 
}: { 
  title: string;
  value: string;
  change?: number;
  trend?: 'up' | 'down' | 'stable';
  date: string;
  source: any;
}) {
  const trendColor = trend === 'up' ? 'text-red-600' : trend === 'down' ? 'text-green-600' : 'text-gray-600';
  const trendIcon = trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→';

  return (
    <div className="bg-white rounded-lg p-4 border shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-600">{title}</span>
        <SourceBadge source={source} compact />
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        {change !== undefined && (
          <span className={`text-sm font-medium ${trendColor}`}>
            {trendIcon} {Math.abs(change).toFixed(1)}pp
          </span>
        )}
      </div>
      <p className="text-xs text-gray-500 mt-1">
        {new Date(date).toLocaleDateString('en-CA', { month: 'short', year: 'numeric' })}
      </p>
    </div>
  );
}
