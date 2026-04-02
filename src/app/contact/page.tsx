export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Contact</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl border p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions, suggestions, or found an error? We'd love to hear from you.
          </p>
          
          <div className="space-y-4">
            <div>
              <span className="text-sm font-medium text-gray-700">Email</span>
              <p className="text-gray-900">info@truenorthhub.ca</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">GitHub</span>
              <p className="text-gray-900">github.com/truenorth-hub</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
