import { getAllSources } from '@/lib/sources';
import SourceList from '@/components/citations/SourceList';

export default function SourcesPage() {
  const sources = getAllSources();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Source Directory</h1>
          <p className="mt-2 text-lg text-gray-600">All data sources with credibility ratings and verification status</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl border p-6">
          <SourceList sources={sources} />
        </div>
      </div>
    </div>
  );
}
