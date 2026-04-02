import { Source } from '@/types';
import SourceBadge from './SourceBadge';
import { groupBy } from '@/lib/utils';

interface SourceListProps {
  sources: Source[];
  groupByCategory?: boolean;
  showArchived?: boolean;
}

export default function SourceList({ sources, groupByCategory = true, showArchived = true }: SourceListProps) {
  if (!sources.length) return null;

  const grouped = groupByCategory ? groupBy(sources, 'category') : { all: sources };

  const categoryLabels: Record<string, string> = {
    government: '🏛️ Government Data',
    media: '📰 News & Media',
    international: '🌐 International',
    academic: '📚 Academic & Research',
    think_tank: '💡 Think Tanks',
    all: '📚 Sources'
  };

  return (
    <div className="space-y-6">
      {Object.entries(grouped).map(([category, categorySources]) => (
        <div key={category} className="border rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-4 py-3 border-b">
            <h4 className="font-semibold text-gray-900">
              {categoryLabels[category] || category}
            </h4>
            <span className="text-sm text-gray-500">
              {categorySources.length} source{categorySources.length !== 1 ? 's' : ''}
            </span>
          </div>
          
          <div className="divide-y">
            {categorySources.map((source) => (
              <div key={source.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-900">{source.name}</span>
                      <SourceBadge source={source} compact />
                    </div>
                    
                    {source.updateFrequency !== 'static' && (
                      <p className="text-sm text-gray-500 mb-2">
                        Updates: <span className="capitalize">{source.updateFrequency}</span>
                        {source.nextUpdate && ` • Next: ${new Date(source.nextUpdate).toLocaleDateString('en-CA')}`}
                      </p>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
                      <a 
                        href={source.urls.main}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                      >
                        View source
                      </a>
                      {source.urls.table && (
                        <>
                          <span className="text-gray-300">|</span>
                          <a 
                            href={source.urls.table}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline"
                          >
                            Data table
                          </a>
                        </>
                      )}
                      {showArchived && (
                        <>
                          <span className="text-gray-300">|</span>
                          <a 
                            href={`https://web.archive.org/web/*/${source.urls.main}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline"
                          >
                            Archive
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-right text-sm text-gray-500">
                    {source.reliabilityScore >= 9 && (
                      <span className="inline-flex items-center gap-1 text-green-600">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
