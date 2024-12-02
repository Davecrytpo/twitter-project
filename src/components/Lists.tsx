import React from 'react';

export const Lists: React.FC = () => {
  const sampleLists = [
    { name: "Tech News", memberCount: 25, isPrivate: true },
    { name: "Programming", memberCount: 42, isPrivate: false },
    { name: "Must Read", memberCount: 15, isPrivate: true },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 px-4 py-2">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">Lists</h1>
          <div className="ml-auto flex gap-2">
            <button className="hover:bg-gray-800 p-2 rounded-full">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z" />
              </svg>
            </button>
            <button className="hover:bg-gray-800 p-2 rounded-full">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Pinned Lists */}
      <div className="p-4 border-b border-gray-800">
        <h2 className="font-bold mb-4">Pinned Lists</h2>
        <div className="text-center py-8 text-gray-400">
          Nothing to see here yet — pin your favorite Lists to access them quickly.
        </div>
      </div>

      {/* Your Lists */}
      <div className="p-4">
        <h2 className="font-bold mb-4">Your Lists</h2>
        <div className="space-y-4">
          {sampleLists.map((list, index) => (
            <div key={index} className="flex items-center hover:bg-gray-900 p-3 rounded-lg cursor-pointer">
              <div className="w-12 h-12 bg-gray-800 rounded-lg mr-3" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">{list.name}</span>
                  {list.isPrivate && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM8 6.75c0-2.21 1.79-4 4-4s4 1.79 4 4V7H8v-.25z" />
                    </svg>
                  )}
                </div>
                <div className="text-gray-400 text-sm">{list.memberCount} members</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 