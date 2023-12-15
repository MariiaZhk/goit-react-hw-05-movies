import axios from 'axios';

const KEY = 'def629929c99c65aed82e08d2ebce959';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
  const response = await axios.get(`/trending/movie/day?api_key=${KEY}`);
  return response.data;
}

export async function fetchSearchMovies(query) {
  const response = await axios.get(
    `/search/movie?api_key=${KEY}&query=${query}`
  );
  return response.data;
}

export async function fetchMovieDetails(movieId) {
  const response = await axios.get(`/movie/${movieId}?api_key=${KEY}`);
  return response.data;
}

export async function fetchMovieCast(movieId) {
  const response = await axios.get(`/movie/${movieId}/credits?api_key=${KEY}`);
  return response.data;
}

export async function fetchMovieReview(movieId) {
  const response = await axios.get(`/movie/${movieId}/reviews?api_key=${KEY}`);
  return response.data;
}
