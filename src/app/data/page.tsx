import { TrendingUp, ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import SourceBadge from '@/components/citations/SourceBadge';
import { getMockInflationData, getMockUnemploymentData, getMockPolicyRate, getAllSources } from '@/lib/sources';

export default function DataDashboard() {
  const indicators = [
    {
      title: 'Consumer Price Index (CPI)',
      value: '2.8%',
      change: -0.1,
      trend: 'down' as const,
      period: 'March 2026',
      source: getMockInflationData().source,
      description: 'Year-over-year change in consumer prices',
      components: [
        { label: 'Shelter', value: '6.2%', weight: '29.8%' },
        { label: 'Food', value: '3.4%', weight: '16.5%' },
        { label: 'Transportation', value: '2.1%', weight: '15.2%' },
      ]
    },
    {
      title: 'Unemployment Rate',
      value: '6.4%',
      change: -0.1,
      trend: 'down' as const,
      period: 'March 2026',
      source: getMockUnemploymentData().source,
      description: 'Percentage of labour force actively seeking work',
      breakdown: [
        { label: 'Youth (15-24)', value: '12.4%' },
        { label: 'Core (25-54)', value: '5.1%' },
        { label: '55+', value: '4.8%' },
      ]
    },
    {
      title: 'Policy Interest Rate',
      value: '4.50%',
      change: 0,
      trend: 'stable' as const,
      period: 'March 12, 2026',
      source: getMockPolicyRate().source,
      description: 'Bank of Canada overnight target rate',
      nextDecision: 'April 9, 2026'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Economic Indicators Dashboard</h1>
          <p className="mt-2 text-gray-600">Real-time data from Statistics Canada, Bank of Canada, and official sources</p>
          
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Customize View
            </button>
            <button className="px-4 py-2 border rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Export Data
            </button>
            <button className="px-4 py-2 border rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Set Alerts
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {indicators.map((indicator) => (
            <div key={indicator.title} className="bg-white rounded-xl border shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">{indicator.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{indicator.description}</p>
                  </div>
                  <TrendIndicator trend={indicator.trend} change={indicator.change} />
                </div>

                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-bold text-gray-900">{indicator.value}</span>
                  <div
