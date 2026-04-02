import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SourceList from '@/components/citations/SourceList';
import { getAllSources } from '@/lib/sources';

export default function HousingPage() {
  const sources = getAllSources();

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Topics', href: '/topics/' },
          { label: 'Housing', href: '/topic/housing/', isCurrent: true }
        ]} 
      />
      
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Housing in Canada</h1>
          <p className="mt-2 text-lg text-gray-600">Affordability, supply, prices, and policy responses</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl border p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Housing Data Coming Soon</h2>
          <p className="text-gray-600 mb-6">
            We're currently integrating CMHC data, Teranet-National Bank HPI, and municipal housing starts.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Data integration in progress
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-bold text-gray-900 mb-4">Planned Data Sources</h3>
          <SourceList sources={sources.filter(s => s.category === 'government')} />
        </div>
      </div>
    </div>
  );
}
