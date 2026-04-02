import Breadcrumbs from '@/components/layout/Breadcrumbs';

export default function ClimatePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Topics', href: '/topics/' },
          { label: 'Climate', href: '/topic/climate/', isCurrent: true }
        ]} 
      />
      
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Climate Policy in Canada</h1>
          <p className="mt-2 text-lg text-gray-600">Carbon pricing, emissions data, and environmental policy</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl border p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Climate Data Coming Soon</h2>
          <p className="text-gray-600 mb-6">
            We're integrating Environment and Climate Change Canada data, GHG emissions inventories, 
            and carbon pricing information.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Data integration in progress
          </div>
        </div>
      </div>
    </div>
  );
}
