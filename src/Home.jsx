import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import Banner from './Banner';
import MovieCard from './MovieCard';
import { SearchContext } from './Search';
import { popularMovies, topRatedMovies, voteMovies, allMovies } from './moviesData';

const categories = {
  Popular: popularMovies,
  "Top Rated": topRatedMovies,
  Vote: voteMovies,
  "All Movies": allMovies,
};

const Home = () => {
  const { q, f } = useContext(SearchContext);
  const { query } = q;
  const { fav } = f;
  const location = useLocation();
  const navigate = useNavigate();

  // Get initial category from URL
  function getCategoryFromURL() {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    // If no category param, and on the root path, default to 'All Movies'
    if (!cat && location.pathname === '/') {
      return 'All Movies';
    }
    if (cat && (Object.keys(categories).includes(cat) || cat === 'Favourites')) {
      return cat;
    }
    return 'All Movies'; // Fallback default
  }

  const [selectedCategory, setSelectedCategory] = useState(getCategoryFromURL());
  const [displayData, setDisplayData] = useState(categories[selectedCategory] || []);

  // Sync category with URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    if (cat && (Object.keys(categories).includes(cat) || cat === 'Favourites')) {
      setSelectedCategory(cat);
    }
    // eslint-disable-next-line
  }, [location.search]);

  // Update URL when category changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (selectedCategory !== params.get('category')) {
      params.set('category', selectedCategory);
      navigate({ search: params.toString() }, { replace: true });
    }
    // eslint-disable-next-line
  }, [selectedCategory]);

  useEffect(() => {
    let filteredArray = [];
    if (selectedCategory === 'Favourites') {
      filteredArray = allMovies.filter((obj) => fav.includes(obj.id) && (obj.title || '').toLowerCase().includes(query.toLowerCase()));
    } else if (selectedCategory === 'All Movies') {
      filteredArray = allMovies.filter((obj) => (obj.title || '').toLowerCase().includes(query.toLowerCase()));
    } else {
      filteredArray = categories[selectedCategory].filter((obj) => (obj.title || '').toLowerCase().includes(query.toLowerCase()));
    }
    setDisplayData(filteredArray);
  }, [query, selectedCategory, fav]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 dark:text-white py-8 px-2 md:px-8">
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[...Object.keys(categories), 'Favourites'].map((cat) => (
            <button
              key={cat}
              className={`px-8 py-3 rounded-full text-xl md:text-2xl font-semibold shadow transition-all duration-200 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400 ${selectedCategory === cat ? 'bg-indigo-600 text-white border-indigo-400 scale-105' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-indigo-500 hover:text-white'}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {displayData.length === 0 ? (
            <div className="col-span-full text-xl md:text-3xl text-gray-400 mt-10 text-center">No movies found.</div>
          ) : (
            displayData.map((obj) => (
              <MovieCard key={obj.id} obj={obj} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
