import { Link, NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchFilmsId } from '../../userService';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkRef = useRef(location.state);
  useEffect(() => {
    async function getMovie() {
      try {
        const data = await fetchFilmsId(movieId);
        setMovie(data);
      } catch {}
    }
    getMovie();
  }, [movieId]);
  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <Link to={backLinkRef.current}>Go back</Link>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <p>
        <strong>Overview:</strong> {movie.overview}
      </p>
      <p>
        <strong>Release Date:</strong> {movie.release_date}
      </p>
      <p>
        <strong>Rating:</strong> {movie.vote_average}
      </p>
      <p>Additional information</p>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Suspense
        fallback={
          <p>
            <b>Loading ...</b>
          </p>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
}
