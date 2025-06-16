import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { popularMovies } from './moviesData';

const MovieSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const movieData = popularMovies.slice(0, 5); // Using first 5 popular movies

  useEffect(() => {
    // Auto-slide every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === movieData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [movieData.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === movieData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? movieData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-[70vh] w-[90%] mx-auto overflow-hidden">
      {/* Movie Slides */}
      <div 
        className="absolute inset-0 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {movieData.map((movie, index) => (
          <div
            key={movie.id}
            className="absolute inset-0 w-full h-full"
            style={{ left: `${index * 100}%` }}
          >
            <div 
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${movie.backdrop_path})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 p-4 md:p-8 text-white">
                  <h2 className="text-2xl md:text-6xl font-bold mb-2 md:mb-4">{movie.title}</h2>
                  <p className="text-sm md:text-xl mb-4 md:mb-6 max-w-xl md:max-w-2xl line-clamp-3 md:line-clamp-none">{movie.overview}</p>
                  <Link 
                    to={`/movie/${movie.id}`}
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-lg font-semibold transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 dark:bg-gray-700/50 dark:hover:bg-gray-700/70 text-white p-2 rounded-full transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 dark:bg-gray-700/50 dark:hover:bg-gray-700/70 text-white p-2 rounded-full transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {movieData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white dark:bg-gray-300' : 'bg-white/50 dark:bg-gray-300/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSlider; 