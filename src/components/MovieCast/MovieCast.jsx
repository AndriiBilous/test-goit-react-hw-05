import { useEffect, useState } from 'react';
import { fetchMovieCast } from '../Api/Api';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function MovieCast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getDetailsCast() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchMovieCast(movieId);
        setMovieCast(data.cast);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getDetailsCast();
  }, [movieId]);

  return (
    <ul>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movieCast.length > 0 ? (
        movieCast.map(({ id, name, character, profile_path }) => {
          return (
            <li key={id}>
              <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} />
              <h1>{name}</h1>
              <p>Character: {character}</p>
            </li>
          );
        })
      ) : (
        <p>Sorry we don't have any Casts</p>
      )}
    </ul>
  );
}
export default MovieCast;
