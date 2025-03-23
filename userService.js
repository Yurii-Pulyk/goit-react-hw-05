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

export const fetchCast = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?language=en-US`,
      headers
    );
    return response.data.cast;
  } catch (error) {
    console.error(
      'Error fetching cast details:',
      error.response?.data || error.message
    );
    return [];
  }
};

export const fetchReviews = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?language=en-US&page=1`,
      headers
    );
    return response.data.results;
  } catch (error) {
    console.error(
      'Error fetching movie reviews:',
      error.response?.data || error.message
    );
    return [];
  }
};

export const fetchMovies = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      headers
    );
    return response.data.results;
  } catch (error) {
    console.error(
      'Error fetching movies:',
      error.response?.data || error.message
    );
    return [];
  }
};
