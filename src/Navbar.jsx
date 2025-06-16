import React, { useState ,useContext, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { SearchContext } from './Search';

const Navbar = () => {
  let [input, setInput] = useState("");
  let {q}= useContext(SearchContext);
  let {query,setQuery} = q;
  const navigate = useNavigate();
  const location = useLocation();

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
    // Always go to home page, keep current category if present
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    navigate({ pathname: '/', search: cat ? `?category=${cat}` : '' });
  }

  return (
    <div>
      <div className="navbar bg-base-100 text-white dark:bg-gray-900 dark:text-white shadow">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl text-white dark:text-white" to="/" >Movie App </Link>
          <Link className="btn btn-ghost text-xl text-white dark:text-white" to="/?category=Favourites"> Favourite  </Link>
        </div>
        <form className="flex gap-2 w-2/5" onSubmit={handleSearch}>
          <div className="form-control flex flex-row justify-end bg-base-100 border-none"  >
            <input 
              onChange={(e) => setInput(e.target.value)} 
              value={input} 
              type="text" 
              className="input input-bordered w-2/5 text-2xl bg-white text-black dark:bg-gray-800 dark:text-white" 
              placeholder="Search movies..."
              onKeyDown={e => { if (e.key === 'Enter') handleSearch(e); }}
            />
            <button type="submit" className="btn btn-active btn-primary w-1/6 ml-3 text-xl">Search</button>
          </div>
        </form>
        <button
          className="ml-4 p-2 rounded-full border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-yellow-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
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
      </div>
    </div>
  )
}

export default Navbar