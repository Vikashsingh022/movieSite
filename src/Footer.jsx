import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border-t border-gray-200 dark:border-gray-700 mt-12">
      {/* Top Bar */}
      <div className="bg-black text-white flex flex-col md:flex-row justify-between items-center px-6 py-4 gap-4">
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="uppercase text-sm font-semibold tracking-wider">100% Secure Checkout</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M2.5 19.5l19-7-7 19-7-19z" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="uppercase text-sm font-semibold tracking-wider">Movie Site</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 17v-2a4 4 0 018 0v2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="uppercase text-sm font-semibold tracking-wider">Outstanding Support</span>
        </div>
      </div>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-10 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & Social */}
        <div className="col-span-1 flex flex-col items-start gap-4">
          <span className="text-xl md:text-2xl font-bold mb-2">LaMetric</span>
          <span className="text-sm font-semibold mb-2">Find us in social media</span>
          <div className="flex gap-3">
            {/* <a href="#" className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm4.25 2.75a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 1.5a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm5.25.75a1 1 0 11-2 0 1 1 0 012 0z"/></svg></a>
            <a href="#" className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04A4.28 4.28 0 0016.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 012 19.54a12.13 12.13 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0024 4.59a8.5 8.5 0 01-2.54.7z"/></svg></a> */}
            <a href="https://github.com/Vikashsingh022" className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017 2 16.293 4.866 19.988 8.71 21.373.965 21.543 9.477 20.89 9.877 20.612c0-.528-.01-1.077-.015-1.994-3.568.784-4.577-1.465-4.577-1.465C5.077 16.096 4 15.42 4 15.42c-1.164-.793.088-.778.088-.778 1.289.091 1.961 1.328 1.961 1.328 1.144 1.956 3.003 1.391 3.73.987.116-.765.449-1.392.818-1.71c-2.842-.321-5.83-1.423-5.83-6.33 0-1.398.497-2.544 1.312-3.444-.131-.322-.569-1.625.124-3.398 0 0 1.07-.345 3.5.762A12.246 12.246 0 0112 5.105c1.026.002 2.054.137 3.029.403 2.435-1.107 3.504-.764 3.504-.764.695 1.773.258 3.076.126 3.398.816.9 1.312 2.046 1.312 3.444 0 4.918-2.992 6.003-5.845 6.322.463.397.88 1.185.88 2.391 0 1.722-.015 3.102-.015 3.522 0 .16-.108.349-.247.308-3.923-1.385-6.79-5.08-6.79-9.366z" clipRule="evenodd"/></svg></a>
            <a href="https://www.linkedin.com/in/vikash-rajpoot-5b283a1aa/" className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v4.75z"/></svg></a>
          </div>
        </div>
        {/* Community */}
        <div className="col-span-1">
          <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3">COMMUNITY</h4>
          <ul className="space-y-2 text-xs md:text-sm">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Community</a></li>
            <li><a href="#" className="hover:underline">Ideas</a></li>
            <li><a href="#" className="hover:underline">Developers</a></li>
          </ul>
        </div>
        {/* Company */}
        <div className="col-span-1">
          <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3">COMPANY</h4>
          <ul className="space-y-2 text-xs md:text-sm">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Team</a></li>
            <li><a href="#" className="hover:underline">Where to Buy</a></li>
            <li><a href="#" className="hover:underline">Resellers</a></li>
            <li><a href="#" className="hover:underline">Influencers</a></li>
            <li><a href="#" className="hover:underline">Affiliates</a></li>
            <li><a href="#" className="hover:underline">Media</a></li>
            <li><a href="#" className="hover:underline">Contacts & Imprint</a></li>
          </ul>
        </div>
        {/* Useful Links */}
        <div className="col-span-1">
          <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3">USEFUL LINKS</h4>
          <ul className="space-y-2 text-xs md:text-sm">
            <li><a href="#" className="hover:underline">Warranty</a></li>
            <li><a href="#" className="hover:underline">Product Declarations</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            <li><a href="#" className="hover:underline">Cookie Settings</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 