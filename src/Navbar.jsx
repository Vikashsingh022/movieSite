import React, { useState ,useContext, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { SearchContext } from './Search';

const Navbar = () => {
  let [input, setInput] = useState("");
  let {q}= useContext(SearchContext);
  let {query,setQuery} = q;
  const navigate = useNavigate();
  const location = useLocation();
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // New state for mobile menu

  // Theme state
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    setQuery(input);
    setInput("");
    setShowSearchInput(false); // Hide input after search
    // Always go to home page, keep current category if present
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    navigate({ pathname: '/', search: cat ? `?category=${cat}` : '' });
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Green Bar */}
      <div className="w-full h-2 bg-emerald-600"></div>

      <div className="navbar bg-[#FDF5E6] text-black dark:bg-gray-900 dark:text-white shadow flex items-center justify-between py-2 px-4">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl md:text-2xl">MovieSite</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 flex-grow justify-center">
          <Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-base font-semibold" to="/?category=All%20Movies">All Movies</Link>
          <Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-base font-semibold" to="/?category=Popular">Popular</Link>
          <Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-base font-semibold" to="/?category=Top%20Rated">Top Rated</Link>
          <Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-base font-semibold" to="/?category=Vote">Vote</Link>
          <Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-base font-semibold" to="/?category=Favourites">Favourite</Link>
        </div>

        {/* Right Section: Search, Theme Toggle, Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Search Icon */}
          <button 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition hidden md:block"
            onClick={() => setShowSearchInput(!showSearchInput)}
            aria-label="Toggle search input"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Theme Toggle Button */}
          <button
            className="p-2 rounded-full border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-yellow-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.95 7.07l-.71-.71M6.34 6.34l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Search Input (conditionally visible) */}
      {showSearchInput && (
        <div className="px-4 py-2 bg-[#FDF5E6] dark:bg-gray-900 shadow-inner flex justify-center">
          <form onSubmit={handleSearch} className="w-full max-w-lg flex gap-2">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              className="input input-bordered flex-grow text-lg bg-white dark:bg-gray-800 text-black dark:text-white"
              placeholder="Search movies..."
            />
            <button type="submit" className="btn btn-primary px-4 py-2 text-lg">Search</button>
          </form>
        </div>
      )}

      {/* Mobile Navigation Menu (conditionally visible) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FDF5E6] dark:bg-gray-900 shadow-md py-4">
          <div className="flex flex-col items-center gap-4">
            <Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-base font-semibold" to="/?category=All%20Movies">All Movies</Link>
            <Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-base font-semibold" to="/?category=Popular">Popular</Link>
            <Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-base font-semibold" to="/?category=Top%20Rated">Top Rated</Link>
            <Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-base font-semibold" to="/?category=Vote">Vote</Link>
            <Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-base font-semibold" to="/?category=Favourites"> Favourite  </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar