import { useEffect, useState } from 'react';
import { fetchTrendingMovie } from '../../components/Api/Api';
import { Link } from 'react-router-dom';
function HomePage() {
  const [trendingMovie, setTrendingMovie] = useState([]);

  useEffect(() => {
    async function getTrendingMovie() {
      try {
        const data = await fetchTrendingMovie();
        setTrendingMovie(data.results);
      } catch {
        console.log('first');
      } finally {
        console.log('first');
      }
    }
    getTrendingMovie();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendingMovie.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default HomePage;
