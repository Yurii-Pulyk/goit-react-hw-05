import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import MovieCast from '../MovieCast/MovieCast';
import MovieReviews from '../MovieReview/MovieReview';

const HomePage = lazy(() => import('../../pages/HomePage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));

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
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
