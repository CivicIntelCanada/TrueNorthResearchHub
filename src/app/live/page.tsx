import { Radio, Calendar, Clock, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function LiveCentre() {
  const liveFeeds = [
    {
      title: 'House of Commons',
      status: 'live',
      description: 'Parliament in session',
      url: 'https://www.ourcommons.ca/en',
      type: 'government'
    },
    {
      title: 'Bank of Canada Press Conference',
      status: 'upcoming',
      description: 'Next: April 9, 2026',
      url: 'https://www.bankofcanada.ca/',
      type: 'government'
    },
    {
      title: 'Statistics Canada Releases',
      status: 'scheduled',
      description: 'CPI Data: May 20, 2026',
      url: 'https://www.statcan.gc.ca/',
      type: 'data'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Radio className="w-8 h-8 text-red-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Live Centre</h1>
              <p className="text-gray-600">Real-time parliamentary proceedings, press conferences, and data releases</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Feed Area */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-black rounded-xl overflow-hidden aspect-video flex items-center justify-center">
              <div className="text-center text-white">
                <Radio className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">Live Video Feed</p>
                <p className="text-sm opacity-70 mt-2">Connect CPAC or Parliament TV API here</p>
                <a 
                  href="https://www.cpac.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open CPAC Live
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Today's Schedule</h2>
              <div className="space-y-4">
                {liveFeeds.map((feed, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        feed.status === 'live' ? 'bg-red-500 animate-pulse' : 
                        feed.status === 'upcoming' ? 'bg-yellow-500' : 'bg-gray-400'
                      }`}></div>
                      <div>
                        <h3 className="font-medium text-gray-900">{feed.title}</h3>
                        <p className="text-sm text-gray-500">{feed.description}</p>
                      </div>
                    </div>
                    <a 
                      href={feed.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      View →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Upcoming Releases
              </h3>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <p className="font-medium text-sm">Labour Force Survey</p>
                  <p className="text-xs text-gray-500 mt-1">May 9, 2026 • 8:30 AM ET</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="font-medium text-sm">Consumer Price Index</p>
                  <p className="text-xs text-gray-500 mt-1">May 20, 2026 • 8:30 AM ET</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="font-medium text-sm">Bank of Canada Decision</p>
                  <p className="text-xs text-gray-500 mt-1">April 9, 2026 • 10:00 AM ET</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl border border-blue-100 p-6">
              <h3 className="font-bold text-blue-900 mb-2">Get Alerts</h3>
              <p className="text-sm text-blue-700 mb-4">Receive notifications when new data is released or live events start.</p>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Set Up Alerts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
