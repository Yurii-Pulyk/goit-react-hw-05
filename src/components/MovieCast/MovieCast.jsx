import { useEffect, useState } from 'react';
import { fetchCast } from '../../../userService';
import { Link, useParams } from 'react-router-dom';

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      const data = await fetchCast(movieId);
      setCast(data);
    }
    getCast();
  }, [movieId]);
  if (cast.length === 0) return <p>No cast information available.</p>;
  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : 'https://via.placeholder.com/200x300?text=No+Image'
            }
            alt={actor.name}
          />
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
}
