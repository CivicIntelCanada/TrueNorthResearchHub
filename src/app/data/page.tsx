import { TrendingUp, DollarSign, Users, Building2, ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
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
                  <div className="flex flex-col">
                    <span className={`text-sm font-medium ${
                      indicator.trend === 'down' ? 'text-green-600' : 
                      indicator.trend === 'up' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {indicator.change > 0 ? '+' : ''}{indicator.change}pp
                    </span>
                    <span className="text-xs text-gray-500">{indicator.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <SourceBadge source={indicator.source} compact />
                </div>

                {/* Components or Breakdown */}
                {indicator.components && (
                  <div className="space-y-2 pt-4 border-t">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Components</p>
                    {indicator.components.map((comp) => (
                      <div key={comp.label} className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{comp.label}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{comp.value}</span>
                          <span className="text-xs text-gray-400">({comp.weight})</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {indicator.breakdown && (
                  <div className="space-y-2 pt-4 border-t">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">By Demographic</p>
                    {indicator.breakdown.map((item) => (
                      <div key={item.label} className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{item.label}</span>
                        <span className="font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {indicator.nextDecision && (
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600">
                      Next decision: <span className="font-medium">{indicator.nextDecision}</span>
                    </p>
                  </div>
                )}
              </div>

              <div className="px-6 py-4 bg-gray-50 border-t flex items-center justify-between">
                <div className="flex gap-3">
                  <a 
                    href={indicator.source.urls.main}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    View source
                  </a>
                  <span className="text-gray-300">|</span>
                  <a 
                    href={indicator.source.urls.table}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Data table
                  </a>
                </div>
                <button className="text-sm text-gray-500 hover:text-gray-700">
                  📥 Download
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Data Providers */}
        <div className="mt-12 p-6 bg-white rounded-xl border">
          <h3 className="font-semibold text-gray-900 mb-4">Data Providers</h3>
          <div className="flex flex-wrap gap-4">
            {getAllSources().map((source) => (
              <a
                key={source.id}
                href={source.urls.main}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm font-medium text-gray-700">{source.shortName}</span>
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Last system update: April 2, 2026, 1:19 PM ET • Next scheduled update: April 3, 2026, 6:00 AM ET
          </p>
        </div>
      </div>
    </div>
  );
}

function TrendIndicator({ trend, change }: { trend: 'up' | 'down' | 'stable'; change: number }) {
  if (trend === 'stable') {
    return (
      <div className="flex items-center gap-1 text-gray-500 bg-gray-100 px-2 py-1 rounded text-sm">
        <Minus className="w-4 h-4" />
        <span>Stable</span>
      </div>
    );
  }
  
  const isPositive = trend === 'down'; // For inflation, down is good
  const Icon = trend === 'up' ? ArrowUpRight : ArrowDownRight;
  const colorClass = isPositive ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50';
  
  return (
    <div className={`flex items-center gap-1 px-2 py-1 rounded text-sm ${colorClass}`}>
      <Icon className="w-4 h-4" />
      <span>{trend === 'up' ? 'Rising' : 'Falling'}</span>
    </div>
  );
}
