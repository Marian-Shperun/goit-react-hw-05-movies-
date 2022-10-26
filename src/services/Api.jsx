import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '520faa847257d57af54017c37ef43fe0';

export const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';
export const noPicture = `${IMG_PATH}uc4RAVW1T3T29h6OQdr7zu4Blui.jpg`;

export async function getTrending() {
  try {
    const resTrending = await axios.get(`/trending/movie/day`, {
      baseURL: `${BASE_URL}`,
      params: { api_key: API_KEY },
    });
    return await resTrending.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getBySearch(query) {
  try {
    const resSearch = await axios.get(`/search/movie`, {
      baseURL: `${BASE_URL}`,
      params: {
        api_key: API_KEY,
        pages: 1,
        include_adult: false,
        query: query,
      },
    });
    return await resSearch.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieById(movie_id) {
  try {
    const resId = await axios.get(`/${movie_id}`, {
      baseURL: `${BASE_URL}/movie`,
      params: { api_key: API_KEY },
    });
    return resId.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCasts(movie_id) {
  try {
    const resCasts = await axios.get(`/credits`, {
      baseURL: `${BASE_URL}/movie/${movie_id}`,
      params: { api_key: API_KEY },
    });
    return resCasts.data.cast;
  } catch (error) {
    console.log(error);
  }
}

export async function getReviews(movie_id) {
  try {
    const Reviews = await axios.get(`/reviews`, {
      baseURL: `${BASE_URL}/movie/${movie_id}`,
      params: { api_key: API_KEY },
    });
    return Reviews.data.results;
  } catch (error) {
    console.log(error);
  }
}
