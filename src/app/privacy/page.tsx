export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose max-w-none text-gray-600">
          <p>Last updated: April 2, 2026</p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Data Collection</h2>
          <p>We collect minimal data necessary to provide our services. This includes:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Anonymous usage analytics</li>
            <li>Saved preferences (if you create an account)</li>
            <li>Search queries (anonymized)</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Data Sharing</h2>
          <p>We do not sell or share personal data with third parties.</p>
        </div>
      </div>
    </div>
  );
}
