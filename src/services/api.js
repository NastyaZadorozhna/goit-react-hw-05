import axios from 'axios';

const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODMyZDQyZDBmNTYwMjgxMWU4Yzk5OTYyMDk2ZTc2MCIsIm5iZiI6MTczMDExMzk5Ny45MzYxNDUsInN1YiI6IjY3MWY2ZDlmNmQ2YjcwNWRjODcxZWQwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i9Y3hG47i1fz9LitD7LSZC9KxVR92sUcWFMCVlShd8s';
const BASE_URL = 'https://api.themoviedb.org/3';

const options = axios.create({
    method: "GET",
    url: BASE_URL,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
      API_KEY,
    },
  });

export const getTrendingMovies = async () => {
  const response = await options.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await options.get(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`);
  return response.data.results;
};

export const getMovieDetails = async (movieId) => {
  const response = await options.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const getMovieCast = async (movieId) => {
    const response = await options.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
    return response.data.cast;
  };

  export const getMovieReviews = async (movieId) => {
    const response = await options.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
    return response.data.results;
  };
  
/* import axios from "axios";

const options = axios.create({
  method: "GET",
  url: "https://api.themoviedb.org/3/trending/movie/day",
  params: { language: "en-US" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODMyZDQyZDBmNTYwMjgxMWU4Yzk5OTYyMDk2ZTc2MCIsIm5iZiI6MTczMDExMzk5Ny45MzYxNDUsInN1YiI6IjY3MWY2ZDlmNmQ2YjcwNWRjODcxZWQwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i9Y3hG47i1fz9LitD7LSZC9KxVR92sUcWFMCVlShd8s",
  },
});

export const fetchTrendingMovies = async (page) => {
  const response = await options.get(`/trending/movie/day?page=${page}`);
  const data = response.data;
  return data;
};

export const fetchMoviesId = async (id) => {
  const response = await options.get(`/movie/${id}`);
  const data = response.data;
  return data;
};

export const fetchMoviesCredits = async (id) => {
  const response = await options.get(`/movie/${id}/credits`);
  const data = response.data;
  return data;
};
export const fetchMoviesReviews = async (id) => {
  const response = await options.get(`/movie/${id}/reviews`);
  const data = response.data;
  return data;
};
export const fetchMoviesSearch = async (q, page) => {
  const response = await options.get(`/search/movie?query=${q}&page=${page}`);
  const data = response.data;
  return data;
};
 */