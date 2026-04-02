export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Terms of Use</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose max-w-none text-gray-600">
          <p>Last updated: April 2, 2026</p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Use of Data</h2>
          <p>
            All data on TrueNorth Research Hub is provided for informational purposes. 
            While we strive for accuracy, always verify critical information with original sources.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Open Source</h2>
          <p>
            Code is available under MIT License. Data is sourced from public government sources 
            and remains under original copyright where applicable.
          </p>
        </div>
      </div>
    </div>
  );
}
