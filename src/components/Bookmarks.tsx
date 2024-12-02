import React from 'react';

export const Bookmarks: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 px-4 py-2">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">Bookmarks</h1>
          <div className="ml-auto">
            <button className="hover:bg-gray-800 p-2 rounded-full">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Empty state */}
      <div className="flex flex-col items-center justify-center p-8 text-center h-[80vh]">
        <svg className="w-12 h-12 mb-4" fill="#71767B" viewBox="0 0 24 24">
          <path d="M17.523 16.65l.49-.27s.09-.064.13-.093l.185-.127c1.61-1.033 2.656-2.457 2.656-4.04 0-1.75-1.28-3.29-3.13-4.31-1.86-1.01-4.33-1.56-6.9-1.56-2.57 0-5.03.55-6.89 1.56-1.86 1.02-3.13 2.56-3.13 4.31 0 1.58 1.05 2.997 2.646 4.028l.183.125c.042.03.133.094.133.094l.49.27-.58 2.58c-.09.34.22.64.56.51l2.88-1.1.18.08c1.37.47 2.83.72 4.33.72 1.5 0 2.96-.25 4.33-.72l.18-.08 2.88 1.1c.34.13.65-.17.56-.51l-.58-2.58zm-7.52-1.1c-1.4 0-2.79-.22-4.07-.66l-.23-.09-2.49.95.49-2.16-.55-.34s-.09-.064-.13-.093l-.184-.127c-1.39-.89-2.33-2.02-2.33-3.24 0-1.44 1.15-2.7 2.8-3.57 1.66-.89 3.88-1.37 6.17-1.37s4.51.48 6.17 1.37c1.65.87 2.8 2.13 2.8 3.57 0 1.22-.94 2.35-2.33 3.24l-.184.127c-.041.03-.13.093-.13.093l-.55.34.49 2.16-2.49-.95-.23.09c-1.28.44-2.67.66-4.07.66z" />
        </svg>
        <h2 className="text-3xl font-bold mb-2">Save Tweets for later</h2>
        <p className="text-gray-400 max-w-sm">
          Don't let the good ones fly away! Bookmark Tweets to easily find them again in the future.
        </p>
      </div>
    </div>
  );
}; 