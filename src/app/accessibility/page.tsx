export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Accessibility</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg-px-8 py-12">
        <div className="prose max-w-none text-gray-600">
          <p>TrueNorth Research Hub is committed to accessibility for all users.</p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Standards</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>WCAG 2.1 AA compliance</li>
            <li>Keyboard navigation support</li>
            <li>Screen reader compatibility</li>
            <li>High contrast mode support</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Keyboard Shortcuts</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><kbd className="px-2 py-1 bg-gray-100 rounded">/</kbd> - Search</li>
            <li><kbd className="px-2 py-1 bg-gray-100 rounded">Esc</kbd> - Close/Back</li>
            <li><kbd className="px-2 py-1 bg-gray-100 rounded">H</kbd> - Home</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
