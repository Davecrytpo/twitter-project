import React from 'react';
import { ArrowLeft, Calendar, Link as LinkIcon, MapPin, MoreHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('posts');

  const tabs = [
    { id: 'posts', label: 'Posts' },
    { id: 'replies', label: 'Replies' },
    { id: 'highlights', label: 'Highlights' },
    { id: 'media', label: 'Media' },
    { id: 'likes', label: 'Likes' },
  ];

  const userStats = [
    { count: '1,234', label: 'Following' },
    { count: '5.6M', label: 'Followers' },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-md">
        <div className="flex items-center px-4 py-2">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-800 rounded-full mr-4 md:hidden"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <h1 className="font-bold text-xl">Jane Doe</h1>
            <p className="text-gray-500 text-sm">2,468 posts</p>
          </div>
        </div>
      </div>

      {/* Profile Banner */}
      <div className="relative">
        <div className="h-32 md:h-48 bg-gray-800">
          <img 
            src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74"
            alt="Profile Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-16 left-4 border-4 border-black rounded-full">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
            alt="Profile"
            className="h-24 w-24 md:h-32 md:w-32 rounded-full"
          />
        </div>
        <div className="flex justify-end p-4 space-x-2">
          <button className="px-4 py-1.5 border border-gray-600 rounded-full font-bold hover:bg-gray-900">
            <MoreHorizontal className="h-5 w-5" />
          </button>
          <button className="px-4 py-1.5 border border-gray-600 rounded-full font-bold hover:bg-gray-900">
            Edit profile
          </button>
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-4 mt-14">
        <div className="mb-4">
          <h2 className="font-bold text-xl">Jane Doe</h2>
          <p className="text-gray-500">@janedoe</p>
        </div>

        <div className="text-gray-200 space-y-3 mb-4">
          <p>
            Software Engineer | Building awesome things | Love coding and design
          </p>

          <div className="flex flex-wrap gap-y-1 gap-x-4 text-gray-500">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              San Francisco, CA
            </div>
            <div className="flex items-center">
              <LinkIcon className="h-4 w-4 mr-1" />
              <a href="#" className="text-blue-500 hover:underline">github.com/janedoe</a>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              Joined March 2019
            </div>
          </div>

          <div className="flex space-x-4">
            {userStats.map((stat, index) => (
              <button key={index} className="hover:underline">
                <span className="font-bold">{stat.count}</span>{' '}
                <span className="text-gray-500">{stat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-800">
        <nav className="flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-fit px-6 py-4 hover:bg-gray-800/40 transition-colors relative ${
                activeTab === tab.id ? 'font-bold' : 'text-gray-500'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-full" />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'posts' && (
          <div className="space-y-4">
            {/* Sample Posts */}
            {[1, 2, 3].map((post) => (
              <div key={post} className="border-b border-gray-800 pb-4">
                <div className="flex space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
                    alt="Profile"
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold">Jane Doe</span>
                      <span className="text-gray-500">@janedoe</span>
                      <span className="text-gray-500">·</span>
                      <span className="text-gray-500">1h</span>
                    </div>
                    <p className="mt-2">
                      Just shipped a new feature! 🚀 #coding #webdev
                    </p>
                    <div className="mt-3 flex justify-between text-gray-500 max-w-md">
                      <button className="hover:text-blue-500">
                        <div className="flex items-center space-x-2">
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span>123</span>
                        </div>
                      </button>
                      <button className="hover:text-green-500">
                        <div className="flex items-center space-x-2">
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                          </svg>
                          <span>456</span>
                        </div>
                      </button>
                      <button className="hover:text-red-500">
                        <div className="flex items-center space-x-2">
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <span>789</span>
                        </div>
                      </button>
                      <button className="hover:text-blue-500">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}