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

  const inputStyle = {
    padding: '11px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    outline: 'none',
  };

  const buttonStyle = {
    padding: '0px 12px',
    fontSize: '16px',
    border: '1px solid #007bff',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    marginLeft: '10px',
    height: '40px',
  };

  return (
    <div>
      <input
        style={inputStyle}
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button style={buttonStyle} onClick={handleSearch}>
        Search
      </button>
      <MovieList movies={movies} />
    </div>
  );
}
