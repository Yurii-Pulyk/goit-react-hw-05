import { Routes, Route, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import HomePage from '../../pages/HomePage';
import AppHeader from '../AppHeader/AppHeader';
import MoviesPage from '../../pages/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import NotFoundPage from '../../pages/NotFoundPage';
import { Suspense } from 'react';

// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };
// const { genreId, authorName } = useParams();
// console.log(genreId, authorName);

export default function App() {
  return (
    <div>
      <AppHeader />
      <Suspense
        fallback={
          <p>
            <b>Loading page...</b>
          </p>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          {/* <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/movies/:movieId/cast" element={<MovieCast />} />
          <Route path="/movies/:movieId/reviews" element={<MovieReviews />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
