'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Compass, 
  ArrowLeft, 
  Home, 
  RotateCcw, 
  Bookmark, 
  Share2,
  ChevronRight,
  TrendingUp,
  Building2,
  Globe,
  Clock,
  BookOpen
} from 'lucide-react';
import SourceBadge from '@/components/citations/SourceBadge';
import { getMockInflationData, getSourceById } from '@/lib/sources';

// Define the rabbit hole nodes
const exploreNodes: Record<string, any> = {
  root: {
    id: 'root',
    title: 'Current Inflation: 2.8%',
    content: 'Canadian CPI inflation cooled to 2.8% in March 2026, down from 8.1% peak in June 2022. The Bank of Canada targets 2% inflation.',
    source: 'statscan-cpi',
    connections: [
      { id: 'monetary-policy', label: 'How is this controlled?', icon: Building2 },
      { id: 'shelter-costs', label: 'Why is shelter so high?', icon: TrendingUp },
      { id: 'g7-compare', label: 'How does Canada compare?', icon: Globe },
      { id: 'history', label: 'Historical context', icon: Clock }
    ]
  },
  'monetary-policy': {
    id: 'monetary-policy',
    title: 'Monetary Policy: The Bank of Canada',
    content: 'The Bank of Canada uses interest rates to control inflation. Current rate: 4.50%. When inflation is high, they raise rates to slow spending. When low, they cut rates to stimulate.',
    source: 'bankofcanada-rates',
    connections: [
      { id: 'transmission', label: 'How do rate hikes work?', icon: TrendingUp },
      { id: 'yield-curve', label: 'What is the yield curve?', icon: TrendingUp },
      { id: 'root', label: 'Back to inflation data', icon: RotateCcw }
    ]
  },
  'shelter-costs': {
    id: 'shelter-costs',
    title: 'Shelter: 6.2% Inflation',
    content: 'Shelter costs (rent, mortgage interest, utilities) are rising at 6.2%, the highest component. This is driven by higher mortgage rates and limited housing supply.',
    source: 'statscan-cpi',
    connections: [
      { id: 'housing-supply', label: 'Why is supply limited?', icon: Building2 },
      { id: 'mortgage-rates', label: 'How do mortgages affect this?', icon: TrendingUp },
      { id: 'root', label: 'Back to inflation data', icon: RotateCcw }
    ]
  },
  'g7-compare': {
    id: 'g7-compare',
    title: 'G7 Comparison',
    content: 'Canada (2.8%) is in the middle of G7 countries. US: 3.2%, UK: 3.4%, Germany: 2.9%, Japan: 2.1%. Most countries are cooling toward 2% targets.',
    source: 'statscan-cpi',
    connections: [
      { id: 'exchange-rates', label: 'How does CAD affect this?', icon: TrendingUp },
      { id: 'oil-prices', label: 'Role of oil prices', icon: TrendingUp },
      { id: 'root', label: 'Back to inflation data', icon: RotateCcw }
    ]
  },
  'history': {
    id: 'history',
    title: 'Historical Context: 1970s vs Now',
    content: 'The 1970s saw double-digit inflation (12%+) due to oil shocks. Today is different: better monetary policy framework, anchored expectations, independent central bank.',
    source: 'bankofcanada-rates',
    connections: [
      { id: 'inflation-targeting', label: 'When did targeting start?', icon: Clock },
      { id: '1970s-crisis', label: 'What caused the 1970s?', icon: BookOpen },
      { id: 'root', label: 'Back to inflation data', icon: RotateCcw }
    ]
  }
};

export default function ExploreInflation() {
  const [currentNodeId, setCurrentNodeId] = useState('root');
  const [history, setHistory] = useState<string[]>(['root']);
  
  const currentNode = exploreNodes[currentNodeId];
  const source = getSourceById(currentNode.source);

  const navigateTo = (nodeId: string) => {
    if (nodeId === 'root' && currentNodeId !== 'root') {
      setHistory(['root']);
    } else {
      setHistory([...history, nodeId]);
    }
    setCurrentNodeId(nodeId);
    window.scrollTo(0, 0);
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      setHistory(newHistory);
      setCurrentNodeId(newHistory[newHistory.length - 1]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  T
                </div>
                <span className="font-bold hidden sm:block">TrueNorth</span>
              </Link>
              
              <div className="h-6 w-px bg-gray-300"></div>
              
              <button 
                onClick={goBack}
                disabled={history.length <= 1}
                className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            </div>

            <div className="flex items-center gap-2">
              <Link 
                href="/topic/inflation/"
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Exit to Topic View
              </Link>
              
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
              
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Path Indicator */}
      <div className="bg-blue-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-blue-800 overflow-x-auto">
            <Compass className="w-4 h-4 flex-shrink-0" />
            <span className="font-medium">Exploring:</span>
            {history.map((nodeId, idx) => {
              const node = exploreNodes[nodeId];
              return (
                <span key={nodeId} className="flex items-center gap-2 flex-shrink-0">
                  {idx > 0 && <ChevronRight className="w-4 h-4 text-blue-400" />}
                  <span className={idx === history.length - 1 ? 'font-semibold' : 'opacity-70'}>
                    {node.title.split(':')[0]}
                  </span>
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Node Content */}
        <div className="bg-white rounded-2xl border shadow-sm overflow-hidden mb-8">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center text-white">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{currentNode.title}</h1>
                {source && (
                  <div className="mt-1">
                    <SourceBadge source={source} compact />
                  </div>
                )}
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {currentNode.content}
            </p>

            {source && (
              <div className="flex flex-wrap gap-3 pt-6 border-t">
                <a 
                  href={source.urls.main}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  🔗 View Source
                </a>
                <a 
                  href={source.urls.table}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  📊 Data Table
                </a>
                <a 
                  href={`https://web.archive.org/web/*/${source.urls.main}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  📄 Archive
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Connections */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-sm">?</span>
            Explore Further
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentNode.connections.map((connection: any) => (
              <button
                key={connection.id}
                onClick={() => navigateTo(connection.id)}
                className="flex items-center gap-4 p-4 bg-white border rounded-xl hover:border-purple-300 hover:shadow-md transition-all text-left group"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors">
                  <connection.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                    {connection.label}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
              </button>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link 
            href="/topic/inflation/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            View as Structured Topic
          </Link>
          
          <button 
            onClick={() => {
              setCurrentNodeId('root');
              setHistory(['root']);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Start Over
          </button>
          
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
        </div>

        {/* Help Box */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg text-sm text-gray-600">
          <p className="font-medium text-gray-900 mb-1">💡 Stuck in a rabbit hole?</p>
          <p>Use the &quot;Exit to Topic View&quot; button for structured information, &quot;Back&quot; to retrace steps, or &quot;Home&quot; to start fresh.</p>
        </div>
      </div>
    </div>
  );
}
