import { MessageCircle, ThumbsUp, User, Clock } from 'lucide-react';

export default function Debate() {
  const debates = [
    {
      id: 1,
      question: "Should the Bank of Canada cut interest rates faster?",
      description: "With inflation cooling, some argue for aggressive cuts while others warn against moving too quickly.",
      participants: 234,
      views: 1205,
      lastActivity: "2 hours ago",
      tags: ["Monetary Policy", "Economy"]
    },
    {
      id: 2,
      question: "Is the CPI basket an accurate measure of inflation?",
      description: "Critics argue housing costs are underweighted. Defenders say it's internationally comparable.",
      participants: 89,
      views: 567,
      lastActivity: "5 hours ago",
      tags: ["Statistics", "Methodology"]
    },
    {
      id: 3,
      question: "Should Canada increase immigration to address labour shortages?",
      description: "Balancing economic needs with housing and service capacity.",
      participants: 445,
      views: 2300,
      lastActivity: "1 hour ago",
      tags: ["Immigration", "Labour Market"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-8 h-8 text-purple-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Debate Hub</h1>
              <p className="text-gray-600">Civil discourse on Canada&apos;s most important issues</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Start Debate */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white mb-8">
          <h2 className="text-xl font-bold mb-2">Start a New Debate</h2>
          <p className="text-purple-100 mb-4">Frame a question, provide context, and invite perspectives from across the spectrum.</p>
          <button className="px-4 py-2 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Create Debate
          </button>
        </div>

        {/* Active Debates */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Active Debates</h2>
          <div className="flex gap-2">
            <select className="px-3 py-2 border rounded-lg text-sm">
              <option>Most Active</option>
              <option>Newest</option>
              <option>Most Viewed</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {debates.map((debate) => (
            <div key={debate.id} className="bg-white rounded-xl border p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-purple-600 cursor-pointer">
                    {debate.question}
                  </h3>
                  <p className="text-gray-600 mb-4">{debate.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {debate.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {debate.participants} participants
                    </span>
                    <span>{debate.views} views</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {debate.lastActivity}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 ml-4">
                  <button className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 rounded text-sm hover:bg-green-100 transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    Join
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guidelines */}
        <div className="mt-8 bg-gray-100 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-2">Community Guidelines</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Cite sources for factual claims</li>
            <li>• Engage with ideas, not individuals</li>
            <li>• Assume good faith</li>
            <li>• Flag violations, don&apos;t escalate</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
