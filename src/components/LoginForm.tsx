import React, { useState, useEffect } from 'react';
import { Apple, Chrome } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TwitterLogo } from './TwitterLogo';
import { SocialButton } from './SocialButton';
import { Divider } from './Divider';

export const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    if (isAuth === 'true') {
      navigate('/home');
    }
  }, [navigate]);

  const handleNext = () => {
    if (!email) {
      setError('Please enter your email');
      return;
    }
    setError('');
    setShowPassword(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // Basic validation
      if (!email || !password) {
        setError('Please fill in all fields');
        return;
      }

      // Here you should implement proper authentication
      // For demo purposes, we'll use basic validation
      if (email && password.length >= 6) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', email);
        navigate('/home');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred during login');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="flex justify-center">
          <TwitterLogo />
        </div>
        
        <h1 className="mt-6 text-center text-3xl font-bold">Sign in to X</h1>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <SocialButton
            icon={<Chrome className="w-5 h-5" />}
            label="Sign in with Google"
          />
          <SocialButton
            icon={<Apple className="w-5 h-5" />}
            label="Sign in with Apple"
          />
          
          <Divider />
          
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Phone, email, or username"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#1DA1F2] focus:border-[#1DA1F2] focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            {showPassword && (
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#1DA1F2] focus:border-[#1DA1F2] focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            )}
            
            {!showPassword ? (
              <button
                type="button"
                onClick={handleNext}
                className="w-full bg-black text-white font-bold py-3 px-4 rounded-full hover:bg-gray-900 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-3 px-4 rounded-full hover:bg-gray-900 transition-colors"
              >
                Log in
              </button>
            )}
          </div>
          
          {error && (
            <div className="text-red-500 text-sm text-center">
              {error}
            </div>
          )}
        </form>
        
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{' '}
          <button 
            onClick={() => setShowPassword(false)}
            className="text-[#1DA1F2] hover:underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}; 