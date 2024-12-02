import React from 'react';
import { Search, X } from 'lucide-react';

const TRENDING_TOPICS = [
  {
    category: 'Technology',
    title: '#AI',
    posts: '200K',
  },
  {
    category: 'Sports',
    title: 'Premier League',
    posts: '145K',
  },
  {
    category: 'Entertainment',
    title: '#Oscars2024',
    posts: '500K',
  },
  {
    category: 'Business',
    title: '#Stocks',
    posts: '120K',
  },
  {
    category: 'Politics',
    title: '#Elections2024',
    posts: '300K',
  },
];

const SUGGESTED_FOLLOWS = [
  {
    name: 'Elon Musk',
    username: 'elonmusk',
    avatar: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&q=80&w=100&h=100',
    verified: true,
  },
  {
    name: 'Bill Gates',
    username: 'BillGates',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=100&h=100',
    verified: true,
  },
  {
    name: 'Tim Cook',
    username: 'tim_cook',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100',
    verified: true,
  },
];

export default function TrendingSidebar() {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <div className="hidden xl:block w-[350px] p-4 fixed right-0 h-screen overflow-y-auto">
      <div className="sticky top-0 bg-black pb-4">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="w-full bg-gray-900 rounded-full py-3 pl-12 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-3.5 text-blue-500 hover:bg-blue-500/10 p-0.5 rounded-full"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      <div className="bg-gray-900 rounded-2xl mb-4">
        <h2 className="text-xl font-bold p-4">What's happening</h2>
        {TRENDING_TOPICS.map((topic, i) => (
          <div
            key={i}
            className="px-4 py-3 hover:bg-white/5 cursor-pointer transition-colors"
          >
            <div className="text-sm text-gray-500">{topic.category} · Trending</div>
            <div className="font-bold mt-0.5">{topic.title}</div>
            <div className="text-sm text-gray-500">{topic.posts} posts</div>
          </div>
        ))}
        <button className="p-4 text-blue-500 hover:bg-white/5 w-full text-left transition-colors rounded-b-2xl">
          Show more
        </button>
      </div>

      <div className="bg-gray-900 rounded-2xl">
        <h2 className="text-xl font-bold p-4">Who to follow</h2>
        {SUGGESTED_FOLLOWS.map((user, i) => (
          <div
            key={i}
            className="px-4 py-3 hover:bg-white/5 flex items-center justify-between transition-colors"
          >
            <div className="flex items-center space-x-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-10 w-10 rounded-full"
              />
              <div>
                <div className="font-bold flex items-center">
                  {user.name}
                  {user.verified && (
                    <svg className="h-5 w-5 ml-1 text-blue-500" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"
                      />
                    </svg>
                  )}
                </div>
                <div className="text-gray-500">@{user.username}</div>
              </div>
            </div>
            <button className="bg-white text-black px-4 py-1.5 rounded-full font-bold hover:bg-gray-200 transition-colors">
              Follow
            </button>
          </div>
        ))}
        <button className="p-4 text-blue-500 hover:bg-white/5 w-full text-left transition-colors rounded-b-2xl">
          Show more
        </button>
      </div>
    </div>
  );
}