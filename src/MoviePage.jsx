import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allMovies } from './moviesData';

const MoviePage = () => {
  const { movieID } = useParams();
  const movie = allMovies.find((m) => String(m.id) === String(movieID));

  if (!movie) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 dark:text-white">
        <h2 className="text-2xl md:text-4xl mb-4">Movie not found</h2>
        <Link to="/" className="text-lg md:text-2xl text-indigo-600 dark:text-indigo-400 underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 dark:text-white flex flex-col items-center py-6 px-4 md:py-12 md:px-8">
      <div className="w-full max-w-4xl bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/2 w-full h-80 md:h-auto relative">
          <img src={movie.backdrop_path} alt={movie.title} className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        <div className="md:w-1/2 w-full flex flex-col p-4 md:p-8 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{movie.title}</h2>
          <div className="flex gap-4 items-center text-base md:text-lg">
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">⭐ {movie.vote_average}</span>
            <span className="text-gray-600 dark:text-gray-400 text-base">Votes: {movie.vote_count}</span>
          </div>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 mb-2">{movie.overview}</p>
          <div className="w-full aspect-video rounded-xl overflow-hidden mt-4">
            <iframe
              className="w-full h-full"
              src={`${movie.video_url}?autoplay=0&mute=1&controls=1&rel=0`}
              title={`${movie.title} Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-only; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <Link to="/" className="mt-6 inline-block text-lg md:text-xl text-indigo-600 dark:text-indigo-400 underline">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;