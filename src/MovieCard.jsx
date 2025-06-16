import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from './Search';

const MovieCard = ({ obj }) => {
  let { f } = useContext(SearchContext);
  let { fav, setFav } = f;
  const [isHovered, setIsHovered] = useState(false);

  let handlefav = (id) => {
    if (fav.includes(id)) {
      let updatedArray = fav.filter((ele) => {
        return ele != id;
      });
      setFav(updatedArray);
    } else {
      let updatedArray = [...fav, id];
      setFav(updatedArray);
    }
  };

  const isFavourited = fav.includes(obj.id);

  return (
    <div
      className="card w-full max-w-xs bg-white text-black dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 dark:text-white rounded-2xl shadow-2xl mx-3 my-6 overflow-hidden transform hover:scale-105 transition duration-300 border border-gray-300 dark:border-gray-700 hover:border-indigo-500 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/movie/${obj.id}`} className="block group focus:outline-none">
        <figure className="relative w-full h-64 overflow-hidden">
          {isHovered ? (
            <div className="w-full h-full">
              <iframe
                className="w-full h-full rounded-t-2xl"
                src={`${obj.video_url}?autoplay=1&mute=1&controls=1&rel=0`}
                title={`${obj.title} Trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <img
              className="h-full w-full object-cover rounded-t-2xl"
              src={obj.backdrop_path}
              alt={obj.title}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
        </figure>
        <div className="card-body px-5 py-4 flex flex-col gap-2">
          <h2 className="card-title text-2xl font-bold mb-1 truncate" title={obj.title}>{obj.title}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 line-clamp-3 mb-2">{obj.overview}</p>
          <div className="flex justify-between items-center mt-auto">
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">⭐ {obj.vote_average}</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">Votes: {obj.vote_count}</span>
          </div>
        </div>
      </Link>
      <button
        className={`absolute top-3 right-3 z-10 p-2 rounded-full transition-colors ${isFavourited ? 'bg-pink-600 text-white' : 'bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-pink-500 hover:text-white'}`}
        onClick={(e) => { e.stopPropagation(); e.preventDefault(); handlefav(obj.id); }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill={isFavourited ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
        </svg>
      </button>
    </div>
  );
};

export default MovieCard;