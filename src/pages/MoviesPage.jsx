import { useState } from 'react';
import { fetchMovies } from '../../userService';
import MovieList from '../components/MovieList/MovieList';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return;
    const results = await fetchMovies(query);
    setMovies(results);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <MovieList movies={movies} />
    </div>
  );
}
