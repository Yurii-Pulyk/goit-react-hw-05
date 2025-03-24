import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../components/MovieList/MovieList';
import { fetchMovies } from '../../userService';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    if (!query) return;

    async function getMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMovies(query);
        setMovies(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, [query]);

  const changeSearchText = event => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    if (!inputValue.trim()) return;
    setSearchParams({ query: inputValue });
  };

  return (
    <>
      <input type="text" value={inputValue} onChange={changeSearchText} />
      <button onClick={handleSearch}>Search</button>

      {isLoading && <b>Loading movies...</b>}
      {error && <b>Whoops, there was an error. Please reload the page...</b>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}
