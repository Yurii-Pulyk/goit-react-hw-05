import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList/MovieList';
import { fetchTrendingFilms } from '../../userService';
export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const movies = await fetchTrendingFilms();
        setTrendingMovies(movies);
      } catch (error) {}
    }
    getTrendingMovies();
  }, []);
  return (
    <div>
      <h1>Trending movies </h1>
      <MovieList movies={trendingMovies} />
    </div>
  );
}
