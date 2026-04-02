'use client';

import { Source, CredibilityLevel } from '@/types';
import { CREDIBILITY_COLORS, CREDIBILITY_LABELS, getReliabilityColor } from '@/lib/sources';
import { Shield, AlertCircle, HelpCircle, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface SourceBadgeProps {
  source: Source;
  showDetails?: boolean;
  compact?: boolean;
}

const CREDIBILITY_ICONS: Record<CredibilityLevel, typeof Shield> = {
  primary: CheckCircle2,
  secondary: Shield,
  tertiary: HelpCircle,
  contested: AlertCircle
};

export default function SourceBadge({ source, showDetails = false, compact = false }: SourceBadgeProps) {
  const [showModal, setShowModal] = useState(false);
  const Icon = CREDIBILITY_ICONS[source.credibility];
  const colorClass = CREDIBILITY_COLORS[source.credibility];
  const reliabilityClass = getReliabilityColor(source.reliabilityScore);

  if (compact) {
    return (
      <button
        onClick={() => setShowModal(true)}
        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${colorClass} bg-opacity-20 text-gray-700 hover:bg-opacity-30 transition-colors`}
        title={`${source.shortName} - Click for details`}
      >
        <Icon className="w-3 h-3" />
        {source.shortName}
      </button>
    );
  }

  return (
    <>
      <div 
        className="inline-flex items-center gap-2 cursor-pointer group"
        onClick={() => setShowModal(true)}
      >
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${colorClass} bg-opacity-20 text-gray-800`}>
          <Icon className="w-3.5 h-3.5" />
          {CREDIBILITY_LABELS[source.credibility]}
        </span>
        <span className="text-sm text-blue-600 group-hover:underline underline-offset-2">
          {source.shortName}
        </span>
        {source.reliabilityScore >= 9 && (
          <span className={`text-xs px-1.5 py-0.5 rounded ${reliabilityClass}`}>
            {source.reliabilityScore}/10
          </span>
        )}
      </div>

      {showModal && (
        <SourceModal source={source} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

function SourceModal({ source, onClose }: { source: Source; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{source.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{source.category} • {source.subcategory}</p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              ✕
            </button>
          </div>

          <div className="space-y-4">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${CREDIBILITY_COLORS[source.credibility]} bg-opacity-20`}>
              {CREDIBILITY_ICONS[source.credibility]({ className: 'w-4 h-4' })}
              {CREDIBILITY_LABELS[source.credibility]}
              <span className="text-gray-600">• Reliability: {source.reliabilityScore}/10</span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500 block">Update Frequency</span>
                <span className="font-medium capitalize">{source.updateFrequency}</span>
              </div>
              {source.nextUpdate && (
                <div>
                  <span className="text-gray-500 block">Next Update</span>
                  <span className="font-medium">{new Date(source.nextUpdate).toLocaleDateString('en-CA')}</span>
                </div>
              )}
              {source.lastVerified && (
                <div>
                  <span className="text-gray-500 block">Last Verified</span>
                  <span className="font-medium">{new Date(source.lastVerified).toLocaleDateString('en-CA')}</span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <a 
                href={source.urls.main}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
              >
                🔗 View Source
              </a>
              {source.urls.table && (
                <a 
                  href={source.urls.table}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200 transition-colors"
                >
                  📊 Data Table
                </a>
              )}
              <a 
                href={`https://web.archive.org/web/*/${source.urls.main}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200 transition-colors"
              >
                📄 Archive
              </a>
            </div>

            {source.methodology && (
              <div className="pt-2 border-t">
                <a 
                  href={source.methodology}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  View Methodology →
                </a>
              </div>
            )}

            {source.contact && (
              <div className="pt-2 border-t text-sm text-gray-600">
                <p>Contact: {source.contact.name}</p>
                <p>Email: {source.contact.email}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
