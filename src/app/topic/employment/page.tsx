import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SourceList from '@/components/citations/SourceList';
import { getMockUnemploymentData, getAllSources } from '@/lib/sources';

export default function EmploymentPage() {
  const unemployment = getMockUnemploymentData();
  const sources = getAllSources().filter(s => s.subcategory === 'labour' || s.id === 'bankofcanada-rates');

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Topics', href: '/topics/' },
          { label: 'Economy', href: '/category/economy/' },
          { label: 'Employment', href: '/topic/employment/', isCurrent: true }
        ]} 
      />
      
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Employment in Canada</h1>
          <p className="mt-2 text-lg text-gray-600">Labour market trends, unemployment, and workforce participation</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">At a Glance</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <div className="text-3xl font-bold text-gray-900">{unemployment.value}%</div>
                  <div className="text-sm text-gray-600 mt-1">Unemployment Rate</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <div className="text-3xl font-bold text-gray-900">5.1%</div>
                  <div className="text-sm text-gray-600 mt-1">Core Age (25-54)</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <div className="text-3xl font-bold text-gray-900">12.4%</div>
                  <div className="text-sm text-gray-600 mt-1">Youth (15-24)</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Labour Force Survey</h2>
              <p className="text-gray-700 mb-4">
                Statistics Canada's monthly Labour Force Survey (LFS) provides comprehensive data on employment, 
                unemployment, and labour market participation across Canada.
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410028701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  View Data Table
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl border p-6">
              <h3 className="font-bold text-gray-900 mb-4">Primary Sources</h3>
              <SourceList sources={sources} groupByCategory={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
