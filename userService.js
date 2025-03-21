import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjEwZDE0ODFkNTU2OTkxNmNiMWZlNGNlNjdiNTI3NyIsIm5iZiI6MTc0MjQ2MTU0OC42NTUsInN1YiI6IjY3ZGJkYTZjOWYzNThmNGExMzdmOWY0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0gioeT_BzGEYNM3UFDBK1mqlMbLXyM9TgfUT7W9e9gE'; // Твій API ключ

const headers = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    Accept: 'application/json',
  },
};

// Отримання популярних фільмів
export const fetchTrendingFilms = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?language=en-US`,
      headers
    );
    return response.data.results;
  } catch (error) {
    console.error(
      'Error fetching trending films:',
      error.response?.data || error.message
    );
    return [];
  }
};

// Отримання деталей про фільм
export const fetchFilmsId = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?language=en-US`,
      headers
    );
    return response.data;
  } catch (error) {
    console.error(
      'Error fetching movie details:',
      error.response?.data || error.message
    );
    return null;
  }
};
