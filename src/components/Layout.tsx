import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Home, Bell, Search, Mail, Bot, User, Users, LogOut,
  Settings, Bookmark, ListChecks, UserPlus, X
} from 'lucide-react';
import TrendingSidebar from './TrendingSidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPostModal, setShowPostModal] = React.useState(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  const menuItems = [
    { icon: Home, label: 'Home', path: '/home' },
    { icon: Search, label: 'Explore', path: '/explore' },
    { icon: Bell, label: 'Notifications', path: '/notifications' },
    { icon: Mail, label: 'Messages', path: '/messages' },
    { icon: Bot, label: 'Grok', path: '/grok' },
    { icon: ListChecks, label: 'Lists', path: '/lists' },
    { icon: Bookmark, label: 'Bookmarks', path: '/bookmarks' },
    { icon: Users, label: 'Communities', path: '/communities' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  // Handle mobile navigation
  const handleMobileNavigation = (path: string) => {
    navigate(path);
    setShowMobileMenu(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Desktop Sidebar - Hidden on mobile */}
      <header className="hidden md:flex fixed h-screen flex-col justify-between w-72 xl:w-80 px-4 border-r border-gray-800">
        <div className="space-y-0 mt-2">
          <div className="p-2 hover:bg-gray-900 rounded-full w-fit cursor-pointer mb-2">
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-white fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>

          <nav className="space-y-0">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex items-center space-x-4 p-3 hover:bg-gray-900 rounded-full w-full transition-colors ${
                  location.pathname === item.path 
                    ? 'font-bold bg-gray-900' 
                    : 'text-gray-200'
                }`}
              >
                <item.icon className="h-6 w-6" />
                <span className="text-xl">{item.label}</span>
              </button>
            ))}
          </nav>

          <button 
            onClick={() => setShowPostModal(true)}
            className="bg-blue-500 text-white rounded-full py-3 px-6 w-full text-lg font-bold hover:bg-blue-600 transition-colors mt-2"
          >
            Post
          </button>
        </div>

        <div className="mb-2 p-2">
          <button
            onClick={() => navigate('/profile')}
            className="flex items-center space-x-3 p-2 hover:bg-gray-900 rounded-full w-full transition-colors"
          >
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
              className="h-10 w-10 rounded-full"
              alt="Profile"
            />
            <div className="flex-1 text-left">
              <div className="font-bold text-sm">Jane Doe</div>
              <div className="text-gray-500 text-sm">@janedoe</div>
            </div>
            <Settings className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </header>

      {/* Mobile Header - Visible only on mobile */}
      <div className="md:hidden fixed top-0 w-full bg-black z-40 border-b border-gray-800">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setShowMobileMenu(true)}
            className="hover:bg-gray-800 p-2 rounded-full"
          >
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
              className="h-8 w-8 rounded-full"
              alt="Profile"
            />
          </button>
          <svg viewBox="0 0 24 24" className="h-8 w-8 text-white fill-current">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <div className="w-8" /> {/* Spacer for centering logo */}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="bg-black/50 absolute inset-0"
            onClick={() => setShowMobileMenu(false)}
          />
          
          {/* Slide-out Menu */}
          <div className="bg-black w-[280px] absolute left-0 top-0 h-full border-r border-gray-800 animate-slide-in">
            <div className="p-4 flex justify-between items-center border-b border-gray-800">
              <h2 className="text-xl font-bold">Account info</h2>
              <button 
                onClick={() => setShowMobileMenu(false)}
                className="p-2 hover:bg-gray-800 rounded-full"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4 border-b border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
                  className="h-10 w-10 rounded-full"
                  alt="Profile"
                />
                <button className="px-3 py-1.5 border border-gray-600 rounded-full text-sm font-bold">
                  Add account
                </button>
              </div>
              <div className="font-bold">Jane Doe</div>
              <div className="text-gray-500">@janedoe</div>
              
              <div className="flex gap-4 mt-3 text-sm">
                <div>
                  <span className="font-bold">100</span>{' '}
                  <span className="text-gray-500">Following</span>
                </div>
                <div>
                  <span className="font-bold">50</span>{' '}
                  <span className="text-gray-500">Followers</span>
                </div>
              </div>
            </div>

            <nav className="p-2">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleMobileNavigation(item.path)}
                  className={`flex items-center space-x-4 p-4 hover:bg-gray-900 rounded-full w-full transition-colors ${
                    location.pathname === item.path 
                      ? 'font-bold' 
                      : 'text-gray-200'
                  }`}
                >
                  <item.icon className="h-6 w-6" />
                  <span className="text-xl">{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="p-4 border-t border-gray-800">
              <button className="flex items-center space-x-4 p-4 hover:bg-gray-900 rounded-full w-full transition-colors text-gray-200">
                <LogOut className="h-6 w-6" />
                <span className="text-xl">Log out</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 md:ml-72 xl:ml-80 mt-[73px] md:mt-0">
        <div className="max-w-[600px] border-l border-r border-gray-800 min-h-screen">
          {children}
        </div>
      </main>

      {/* Right sidebar - Hidden on mobile */}
      <div className="hidden lg:block">
        <TrendingSidebar />
      </div>

      {/* Post Modal */}
      {showPostModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-black w-full max-w-xl rounded-2xl border border-gray-800">
            <div className="p-4 border-b border-gray-800">
              <button 
                onClick={() => setShowPostModal(false)}
                className="hover:bg-gray-900 p-2 rounded-full"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <div className="flex space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
                  alt="Profile"
                  className="h-12 w-12 rounded-full"
                />
                <div className="flex-1">
                  <textarea
                    placeholder="What is happening?!"
                    className="w-full bg-transparent text-xl outline-none resize-none placeholder-gray-600 min-h-[150px]"
                  />
                  <div className="flex justify-between items-center mt-4 border-t border-gray-800 pt-4">
                    <div className="flex space-x-4 text-blue-500">
                      <button className="p-2 hover:bg-blue-500/10 rounded-full">
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"
                          />
                        </svg>
                      </button>
                      <button className="p-2 hover:bg-blue-500/10 rounded-full">
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z"
                          />
                        </svg>
                      </button>
                    </div>
                    <button className="bg-blue-500 text-white rounded-full px-4 py-2 font-bold hover:bg-blue-600">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}