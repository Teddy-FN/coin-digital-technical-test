import axios from "axios";
import * as types from "./type";

export const setError = (value) => {
  return {
    type: types.FAILED_GET_ALL_CATEGORY_MOVIE,
    payload: value,
  };
};

export const setLoading = (value) => {
  return {
    type: types.LOADING_GET_ALL_CATEGORY_MOVIE,
    payload: value,
  };
};

export const setData = (value) => {
  return {
    type: types.SUCCESS_GET_ALL_CATEGORY_MOVIE,
    payload: value,
  };
};

export const getCategoriesMovies = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49"
        // {
        //   headers: {
        //     Authorization:
        //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDZhYjdhNjM3Nzk0M2QzNjZmMTkxNzExMjM3NGZmMiIsInN1YiI6IjYwNzY1ZmE2MWRhN2E2MDA3NzNkYjZiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.76pWuO7P1zX-gVW4I3QJBM7AjwmXPXB1nUZi6UKwD0w",
        //   },
        // }
      );
      const data = res?.data?.genres;
      dispatch(setData(data));
    } catch (error) {
      // dispatch(setError(error));
    }
  };
};
