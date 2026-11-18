import React, { useState } from 'react';
import leftBg from './backgrounds/left_bg.png';
import DashboardPage from './DashboardPage'; // Import your dashboard component

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('login'); // 'login' | 'signup'
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); // State to handle admin routing
  const [loginError, setLoginError] = useState(''); // Error state for wrong credentials
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (loginError) setLoginError(''); // Clear error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'login') {
      // Check for Admin Credentials
      if (formData.email.trim() === 'admin@gmail.com' && formData.password === 'admin12345') {
        setIsAdminLoggedIn(true);
      } else {
        setLoginError('Invalid email or password. (Hint: admin@gmail.com / admin12345)');
        console.log('Logging in with:', {
          email: formData.email,
          password: formData.password,
          rememberMe: formData.rememberMe,
        });
      }
    } else {
      console.log('Signing up with:', {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });
    }
  };

  // If admin successfully logs in, render the DashboardPage instead of the auth screen
  if (isAdminLoggedIn) {
    return <DashboardPage />;
  }

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col lg:flex-row bg-[#16181d] text-white selection:bg-white selection:text-[#16181d]">
      
      {/* LEFT SECTION: Editorial Image & Brand Logo */}
      <div className="relative w-full lg:w-1/2 h-48 lg:h-screen shrink-0 bg-[#0f1013] overflow-hidden">
        <img
          src={leftBg}
          alt="Wear at Your Own Risk Editorial"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* Subtle dark gradient overlay for logo legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40" />

        {/* Top-Left Brand Mark */}
        <div className="relative z-10 p-6 sm:p-8">
          <a href="#home" className="inline-block select-none">
            <span className="block text-[28px] font-bold tracking-[0.04em] leading-none text-white">
              WEAR
            </span>
            <span className="block text-[9px] font-medium tracking-[0.12em] uppercase text-gray-200 mt-1">
              AT YOUR OWN RISK
            </span>
          </a>
        </div>
      </div>

      {/* RIGHT SECTION: Navigation, Auth Form & Footer */}
      <div className="w-full lg:w-1/2 flex-1 lg:h-screen overflow-hidden flex flex-col justify-between bg-[#16181d] px-8 sm:px-14 lg:px-16 py-6">
        
        {/* Top-Right Navigation */}
        <header className="w-full flex items-center justify-end gap-8 text-[13px] text-gray-200 shrink-0">
          <a
            href="#browse"
            className="hover:text-white transition-colors duration-200"
          >
            Browse
          </a>
          <a
            href="#how-it-works"
            className="hover:text-white transition-colors duration-200"
          >
            How It Works
          </a>
          <button
            type="button"
            aria-label="Account menu"
            className="flex items-center gap-1.5 text-gray-200 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            {/* User Outline Icon */}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            {/* Chevron Down Icon */}
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </header>

        {/* Center Auth Form Container */}
        <main className="w-full max-w-[420px] mx-auto my-auto py-2">
          
          {/* LOGIN / SIGN UP Tabs */}
          <div className="grid grid-cols-2 border-b border-[#2c303a] mb-6">
            <button
              type="button"
              onClick={() => {
                setActiveTab('login');
                setLoginError('');
              }}
              className={`pb-2.5 text-[12px] font-semibold tracking-[0.08em] uppercase transition-all cursor-pointer relative ${
                activeTab === 'login'
                  ? 'text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              LOGIN
              {activeTab === 'login' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('signup');
                setLoginError('');
              }}
              className={`pb-2.5 text-[12px] font-semibold tracking-[0.08em] uppercase transition-all cursor-pointer relative ${
                activeTab === 'signup'
                  ? 'text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              SIGN UP
              {activeTab === 'signup' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />
              )}
            </button>
          </div>

          {/* Dynamic Heading */}
          <h1 className="text-[28px] font-semibold tracking-tight text-white mb-5">
            {activeTab === 'login' ? 'Welcome Back.' : 'Create Account.'}
          </h1>

          {/* Error Message for Login */}
          {loginError && (
            <div className="mb-3.5 p-2.5 rounded-[4px] bg-red-950/50 border border-red-800 text-red-200 text-[11px]">
              {loginError}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {activeTab === 'signup' && (
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-[12px] font-medium text-gray-200 mb-1.5"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full h-[40px] px-3.5 rounded-[4px] bg-[#252830] border border-[#5a5f6b] text-white text-[13px] focus:outline-none focus:border-white transition-colors"
                />
              </div>
            )}

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-[12px] font-medium text-gray-200 mb-1.5"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full h-[40px] px-3.5 rounded-[4px] bg-[#252830] border border-[#5a5f6b] text-white text-[13px] focus:outline-none focus:border-white transition-colors"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-[12px] font-medium text-gray-200 mb-1.5"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="••••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full h-[40px] px-3.5 rounded-[4px] bg-[#252830] border border-[#5a5f6b] text-white placeholder-gray-400 text-[13px] focus:outline-none focus:border-white transition-colors"
              />
            </div>

            {activeTab === 'signup' && (
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-[12px] font-medium text-gray-200 mb-1.5"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  placeholder="••••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full h-[40px] px-3.5 rounded-[4px] bg-[#252830] border border-[#5a5f6b] text-white placeholder-gray-400 text-[13px] focus:outline-none focus:border-white transition-colors"
                />
              </div>
            )}

            {/* Remember Me & Forgot Password Row (Login View) */}
            {activeTab === 'login' && (
              <div className="flex items-center justify-between pt-0.5 text-[12px]">
                <label className="flex items-center gap-2 text-gray-200 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-3.5 h-3.5 rounded-[3px] border border-gray-400 bg-transparent accent-white cursor-pointer"
                  />
                  <span>Remember Me</span>
                </label>

                <a
                  href="#forgot-password"
                  className="text-gray-200 underline underline-offset-4 hover:text-white transition-colors"
                >
                  Forgot Password?
                </a>
              </div>
            )}

            {/* Primary Submit Button */}
            <div className="pt-1.5">
              <button
                type="submit"
                className="w-full h-[42px] rounded-[4px] bg-[#262932] hover:bg-[#313540] active:bg-[#1e2027] text-white text-[12px] font-semibold tracking-[0.06em] uppercase transition-colors cursor-pointer"
              >
                {activeTab === 'login' ? 'LOGIN TO ACCOUNT' : 'CREATE ACCOUNT'}
              </button>
            </div>
          </form>

          {/* Bottom Switch Prompt */}
          <p className="mt-4 text-center text-[12px] text-gray-300">
            {activeTab === 'login' ? (
              <>
                New here?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('signup');
                    setLoginError('');
                  }}
                  className="text-white underline underline-offset-4 hover:text-gray-200 cursor-pointer"
                >
                  Create an account.
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('login');
                    setLoginError('');
                  }}
                  className="text-white underline underline-offset-4 hover:text-gray-200 cursor-pointer"
                >
                  Log in here.
                </button>
              </>
            )}
          </p>
        </main>

        {/* Footer Links */}
        <footer className="w-full flex items-center justify-center gap-6 text-[12px] text-gray-300 shrink-0">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
          <a href="#terms" className="hover:text-white transition-colors">
            Terms
          </a>
          <a href="#privacy" className="hover:text-white transition-colors">
            Privacy
          </a>
        </footer>
      </div>
    </div>
  );
};

export default AuthPage;