import { useEffect, useState } from 'react';
import { fetchMovieReviews } from '../Api/Api';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function MovieReviews() {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getDetailsReviews() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchMovieReviews(movieId);
        setMovieReviews(data.results);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getDetailsReviews();
  }, [movieId]);

  return (
    <ul>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movieReviews.length > 0 ? (
        movieReviews.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          );
        })
      ) : (
        <p>Sorry we don't have any Reviews</p>
      )}
    </ul>
  );
}
export default MovieReviews;
