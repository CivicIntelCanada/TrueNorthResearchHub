import { Shield, Search, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export default function FactCheck() {
  const recentChecks = [
    {
      claim: "Inflation is at 8% in Canada",
      verdict: "false",
      explanation: "Current CPI inflation is 2.8% (March 2026), not 8%.",
      source: "Statistics Canada",
      date: "2026-04-02"
    },
    {
      claim: "Bank of Canada raised rates in March 2026",
      verdict: "false",
      explanation: "The Bank held rates at 4.50% on March 12, 2026.",
      source: "Bank of Canada",
      date: "2026-03-12"
    },
    {
      claim: "Unemployment is rising",
      verdict: "misleading",
      explanation: "Unemployment decreased from 6.5% to 6.4% in March 2026.",
      source: "Statistics Canada",
      date: "2026-04-02"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Fact Check</h1>
              <p className="text-gray-600">Verify claims with sourced data and transparent methodology</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <div className="bg-white rounded-xl border p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search claims, politicians, or topics..."
              className="w-full pl-12 pr-4 py-4 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2 mt-4">
            <span className="text-sm text-gray-500">Popular:</span>
            {['Inflation', 'Interest rates', 'Housing', 'Healthcare'].map((tag) => (
              <button key={tag} className="text-sm text-blue-600 hover:underline">
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Recent Checks */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Fact Checks</h2>
        <div className="space-y-4">
          {recentChecks.map((check, idx) => (
            <div key={idx} className="bg-white rounded-xl border p-6">
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                  check.verdict === 'true' ? 'bg-green-100' :
                  check.verdict === 'false' ? 'bg-red-100' : 'bg-yellow-100'
                }`}>
                  {check.verdict === 'true' ? <CheckCircle className="w-6 h-6 text-green-600" /> :
                   check.verdict === 'false' ? <XCircle className="w-6 h-6 text-red-600" /> :
                   <AlertTriangle className="w-6 h-6 text-yellow-600" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                      check.verdict === 'true' ? 'bg-green-100 text-green-800' :
                      check.verdict === 'false' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {check.verdict}
                    </span>
                    <span className="text-sm text-gray-500">{check.date}</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">"{check.claim}"</h3>
                  <p className="text-gray-600 mb-3">{check.explanation}</p>
                  <p className="text-sm text-gray-500">Source: {check.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Claim */}
        <div className="mt-8 bg-blue-50 rounded-xl border border-blue-100 p-6">
          <h3 className="font-bold text-blue-900 mb-2">Submit a Claim</h3>
          <p className="text-sm text-blue-700 mb-4">See something that needs verification? Submit it to our editorial team.</p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Submit Claim
          </button>
        </div>
      </div>
    </div>
  );
}
