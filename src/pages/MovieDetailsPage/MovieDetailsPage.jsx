import { Link, useParams, Outlet } from 'react-router-dom';
import { fetchMovieDetail } from '../../components/Api/Api';
import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  //==================SCROLL=================
  const handlerScroll = () => {
    scroll.scrollToBottom();
  };
  //==================Effect=================
  useEffect(() => {
    async function getDetailsMovie() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchMovieDetail(movieId);
        setMovieDetails(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getDetailsMovie();
  }, [movieId]);

  const { poster_path, title, overview, vote_average, genres } = movieDetails;

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <Link to="/">Go back</Link>
      {poster_path && (
        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
      )}
      <div>
        <div>
          <h1>{title}</h1>
          <p>Vote average: {vote_average}</p>
        </div>
        <div>
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
        <div>
          <h3>Genres</h3>
          {genres &&
            genres.length &&
            genres.map(({ id, name }) => <p key={id}>{name}</p>)}
        </div>
      </div>
      <div>
        <h4>Additional information</h4>
        <Link onClick={handlerScroll} to="cast">
          Cast
        </Link>
        <Link onClick={handlerScroll} to="reviews">
          Reviews
        </Link>
        <Outlet />
      </div>
    </div>
  );
}
export default MovieDetailsPage;
