export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">About TrueNorth Research Hub</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-blue max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">
            TrueNorth Research Hub is Canada's most comprehensive research database, built on the principle 
            that every fact must be sourced and every source must be accessible.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To provide Canadians with transparent, well-sourced information on politics, economics, and public policy. 
            We believe that informed citizens make better decisions, and that trust comes from transparency.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Citation-First Approach</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Every statistic links to its original source</li>
            <li>• Sources are archived for permanence</li>
            <li>• Credibility levels are clearly indicated</li>
            <li>• Conflicting data is flagged with context</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Open Source</h2>
          <p className="text-gray-600">
            This project is open source under the MIT License. Contribute on GitHub or suggest improvements.
          </p>
        </div>
      </div>
    </div>
  );
}
