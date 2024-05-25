import { Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.jsx';
import HomePage from '../../pages/HomePage/HomePage.jsx';
import NotFoundPage from '../NotFoundPage/NotFoundPage.jsx';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage.jsx';
import MoviesPage from '../../pages/MoviesPage/MoviesPage.jsx';
import MovieCast from '../MovieCast/MovieCast.jsx';
import MovieReviews from '../MovieReviews/MovieReviews.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
function App() {
  return (
    <>
      <Navigation />
      <SearchBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
export default App;
