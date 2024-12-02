import React, { useState } from 'react';
import { Settings, Image, Gift, Calendar, MapPin, Smile, LineChart, X } from 'lucide-react';
import Tweet from '../components/Tweet';

// Enhanced mock data
const MOCK_TWEETS = [
  {
    id: '1',
    content: 'Just deployed a new feature! 🚀 #coding #webdev\n\nCheck out our latest deployment that improves performance by 50%! Really excited about this one.',
    author: {
      id: '1',
      name: 'Jane Doe',
      username: 'janedoe',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100',
      verified: true,
      followers: 1520,
      following: 890,
    },
    createdAt: '2h',
    likes: 1234,
    replies: 89,
    reposts: 234,
    views: 12400,
    isPinned: true,
  },
  {
    id: '2',
    content: 'Check out this amazing sunset! 🌅',
    author: {
      id: '2',
      name: 'John Smith',
      username: 'johnsmith',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100',
      verified: false,
      followers: 2340,
      following: 1200,
    },
    createdAt: '4h',
    likes: 2345,
    replies: 123,
    reposts: 456,
    views: 23500,
    images: [
      'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&q=80&w=1000',
    ],
  },
];

export default function Home() {
  const [tab, setTab] = useState<'for-you' | 'following'>('for-you');
  const [tweetText, setTweetText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [showImagePreview, setShowImagePreview] = useState(false);

  const handleTweetSubmit = () => {
    if (!tweetText.trim() && selectedImages.length === 0) return;
    
    // Handle tweet submission
    console.log('Submitting tweet:', { text: tweetText, images: selectedImages });
    
    // Reset form
    setTweetText('');
    setSelectedImages([]);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    // Convert files to URLs
    const newImages = Array.from(files).map(file => URL.createObjectURL(file));
    setSelectedImages(prev => [...prev, ...newImages].slice(0, 4));
    setShowImagePreview(true);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="sticky top-0 bg-black/80 backdrop-blur-md z-10">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
              alt="Profile"
              className="h-8 w-8 rounded-full md:hidden"
            />
            <h1 className="text-xl font-bold">Home</h1>
          </div>
          <button className="p-2 hover:bg-gray-900 rounded-full">
            <Settings className="h-5 w-5" />
          </button>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-gray-800">
          {['for-you', 'following'].map((tabItem) => (
            <button
              key={tabItem}
              onClick={() => setTab(tabItem as 'for-you' | 'following')}
              className={`flex-1 py-4 hover:bg-gray-900/50 relative transition-colors ${
                tab === tabItem ? 'font-bold' : ''
              }`}
            >
              {tabItem === 'for-you' ? 'For you' : 'Following'}
              {tab === tabItem && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </header>

      {/* Tweet composer */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex space-x-4">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
            alt="Profile"
            className="h-12 w-12 rounded-full"
          />
          <div className="flex-1">
            <textarea
              value={tweetText}
              onChange={(e) => setTweetText(e.target.value)}
              placeholder="What is happening?!"
              className="w-full bg-transparent text-xl outline-none resize-none placeholder-gray-600 min-h-[120px]"
            />

            {/* Image Preview */}
            {selectedImages.length > 0 && (
              <div className="mt-2 grid grid-cols-2 gap-2 relative">
                {selectedImages.map((img, index) => (
                  <div key={index} className="relative aspect-video">
                    <img
                      src={img}
                      alt={`Upload ${index + 1}`}
                      className="rounded-xl object-cover w-full h-full"
                    />
                    <button
                      onClick={() => setSelectedImages(prev => prev.filter((_, i) => i !== index))}
                      className="absolute top-2 right-2 p-1 bg-black/50 rounded-full hover:bg-black/70"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Tweet Actions */}
            <div className="flex items-center mt-4 border-t border-gray-800 pt-4">
              <div className="flex space-x-2 text-blue-500 flex-1">
                <label className="p-2 hover:bg-blue-500/10 rounded-full cursor-pointer">
                  <Image className="h-5 w-5" />
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                  />
                </label>
                <button className="p-2 hover:bg-blue-500/10 rounded-full">
                  <Gift className="h-5 w-5" />
                </button>
                <button className="p-2 hover:bg-blue-500/10 rounded-full">
                  <LineChart className="h-5 w-5" />
                </button>
                <button className="p-2 hover:bg-blue-500/10 rounded-full">
                  <Smile className="h-5 w-5" />
                </button>
                <button className="p-2 hover:bg-blue-500/10 rounded-full">
                  <Calendar className="h-5 w-5" />
                </button>
                <button className="p-2 hover:bg-blue-500/10 rounded-full">
                  <MapPin className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex items-center space-x-4">
                {tweetText && (
                  <>
                    <div className="h-6 w-px bg-gray-800" />
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-blue-500" />
                      </div>
                      <span className="text-sm text-gray-500">Everyone can reply</span>
                    </div>
                  </>
                )}
                <button
                  onClick={handleTweetSubmit}
                  disabled={!tweetText.trim() && selectedImages.length === 0}
                  className={`px-4 py-1.5 rounded-full font-bold transition-colors ${
                    tweetText.trim() || selectedImages.length > 0
                      ? 'bg-blue-500 hover:bg-blue-600'
                      : 'bg-blue-500/50 cursor-not-allowed'
                  }`}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tweet feed */}
      <div className="divide-y divide-gray-800">
        {MOCK_TWEETS.map((tweet) => (
          <div key={tweet.id} className="hover:bg-gray-900/50 transition-colors">
            {tweet.isPinned && (
              <div className="px-4 pt-3 flex items-center text-sm text-gray-500">
                <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" />
                </svg>
                Pinned Tweet
              </div>
            )}
            <Tweet tweet={tweet} />
          </div>
        ))}
      </div>
    </div>
  );
}