import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Compass, BarChart3, MessageCircle, Calendar, Clock } from 'lucide-react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SourceList from '@/components/citations/SourceList';
import SourceBadge from '@/components/citations/SourceBadge';
import { getMockInflationData, getAllSources } from '@/lib/sources';
import { Topic } from '@/types';

// This would normally come from a database
const topics: Record<string, Topic> = {
  inflation: {
    id: 'inflation',
    slug: 'inflation',
    title: 'Inflation in Canada',
    description: 'The sustained increase in the general price level of goods and services',
    category: 'Economy',
    lastUpdated: '2026-04-02',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: 'Inflation measures how much more expensive goods and services get over time. When inflation is 2.8%, something that cost $100 last year costs $102.80 today.',
        dataPoints: [getMockInflationData()]
      },
      {
        id: 'drivers',
        title: "What's Driving Inflation",
        content: 'Shelter costs remain the largest contributor to inflation, followed by food and transportation.',
        dataPoints: []
      }
    ],
    relatedTopics: ['employment', 'housing', 'interest-rates'],
    externalSources: getAllSources().filter(s => ['statscan-cpi', 'bankofcanada-rates'].includes(s.id))
  }
};

export default function TopicPage({ params }: { params: { slug: string } }) {
  const topic = topics[params.slug];
  
  if (!topic) {
    notFound();
  }

  const inflation = getMockInflationData();

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Topics', href: '/topics/' },
          { label: topic.category, href: `/category/${topic.category.toLowerCase()}/` },
          { label: topic.title, href: `/topic/${topic.slug}/`, isCurrent: true }
        ]} 
      />
      
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                  {topic.category}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Updated {new Date(topic.lastUpdated).toLocaleDateString('en-CA')}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{topic.title}</h1>
              <p className="mt-2 text-lg text-gray-600 max-w-2xl">{topic.description}</p>
            </div>
            
            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
              <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-md shadow-sm text-sm font-medium text-gray-900">
                <BookOpen className="w-4 h-4" />
                Topic
              </button>
              <Link 
                href={`/explore/${topic.slug}/`}
                className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Compass className="w-4 h-4" />
                Explore
              </Link>
              <Link 
                href="/data/"
                className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                <BarChart3 className="w-4 h-4" />
                Data
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* At a Glance */}
            <section className="bg-white rounded-xl border p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">At a Glance</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Current CPI</div>
                  <div className="text-3xl font-bold text-gray-900">{inflation.value}%</div>
                  <div className="flex items-center gap-2 mt-2">
                    <SourceBadge source={inflation.source} compact />
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Bank of Canada Target</div>
                  <div className="text-3xl font-bold text-gray-900">2%</div>
                  <div className="text-sm text-gray-500 mt-2">Range: 1-3%</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Trend</div>
                  <div className="text-3xl font-bold text-green-600">↓</div>
                  <div className="text-sm text-gray-500 mt-2">Cooling toward target</div>
                </div>
              </div>
            </section>

            {/* Content Sections */}
            {topic.sections.map((section) => (
              <section key={section.id} className="bg-white rounded-xl border p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>
                
                {section.dataPoints && section.dataPoints.length > 0 && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-900">Latest Data</span>
                      <span className="text-xs text-blue-600">
                        {new Date(section.dataPoints[0].date).toLocaleDateString('en-CA')}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-2xl font-bold text-blue-900">
                        {section.dataPoints[0].value}{section.dataPoints[0].unit}
                      </span>
                      <SourceBadge source={section.dataPoints[0].source} compact />
                    </div>
                  </div>
                )}
              </section>
            ))}

            {/* Go Deeper */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Go Deeper</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Monetary policy transmission',
                  'Inflation expectations',
                  'Wage-price spiral',
                  'Supply shocks',
                  'Historical context (1970s)',
                  'G7 comparison'
                ].map((item) => (
                  <Link
                    key={item}
                    href={`/explore/${topic.slug}/${item.toLowerCase().replace(/\s+/g, '-')}/`}
                    className="flex items-center gap-2 p-3 bg-white rounded-lg border hover:border-blue-300 hover:shadow-sm transition-all text-sm font-medium text-gray-700 hover:text-blue-600"
                  >
                    <Compass className="w-4 h-4 text-blue-500" />
                    {item}
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Sources */}
            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Primary Sources
              </h3>
              <SourceList sources={topic.externalSources} groupByCategory={false} />
              <Link 
                href="#all-sources"
                className="mt-4 text-sm text-blue-600 hover:underline block"
              >
                View all 12 sources →
              </Link>
            </div>

            {/* Related Topics */}
            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Related Topics</h3>
              <div className="space-y-2">
                {topic.relatedTopics?.map((related) => (
                  <Link
                    key={related}
                    href={`/topic/${related}/`}
                    className="block p-3 rounded-lg border hover:border-blue-300 hover:bg-blue-50 transition-colors text-sm font-medium text-gray-700 hover:text-blue-600"
                  >
                    {related.charAt(0).toUpperCase() + related.slice(1).replace(/-/g, ' ')}
                  </Link>
                ))}
              </div>
            </div>

            {/* Citation */}
            <div className="bg-gray-50 rounded-xl border p-6">
              <h3 className="font-bold text-gray-900 mb-2">Cite This Page</h3>
              <p className="text-xs text-gray-600 mb-3">
                TrueNorth Research Hub. (2026). "{topic.title}". Retrieved from https://truenorthhub.ca/topic/{topic.slug}/
              </p>
              <button className="text-sm text-blue-600 hover:underline">
                Copy citation
              </button>
            </div>
          </div>
        </div>

        {/* Full Sources Section */}
        <section id="all-sources" className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sources & References</h2>
          <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Last verified: April 2, 2026
            </span>
            <span>•</span>
            <button className="text-blue-600 hover:underline">Report outdated data</button>
            <span>•</span>
            <button className="text-blue-600 hover:underline">Suggest source</button>
          </div>
          <SourceList sources={getAllSources()} />
        </section>
      </div>
    </div>
  );
}
