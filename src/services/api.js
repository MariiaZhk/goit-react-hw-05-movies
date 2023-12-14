import axios from 'axios';

// def629929c99c65aed82e08d2ebce959;

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

const KEY = 'def629929c99c65aed82e08d2ebce959';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies(day) {
  const response = await axios.get('/trending/movie/', {
    params: {
      key: KEY,
      time_window: day,
    },
  });
  return response.data;
}

export async function fetchSearchMovies(query) {
  const response = await axios.get('/search/movie', {
    params: {
      key: KEY,
      query,
    },
  });
  return response.data;
}
export async function fetchMoviesDetails(query, movie_id) {
  const response = await axios.get('/search/movie', {
    params: {
      key: KEY,
      query,
      movie_id,
    },
  });
  return response.data;
}
