import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Favourite from './Favourite'
import { Route , Routes } from 'react-router-dom'
import MoviePage from './MoviePage'
import MovieSlider from './MovieSlider'
import Footer from './Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <Navbar />
      <MovieSlider />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/movie/:movieID" element={<MoviePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App