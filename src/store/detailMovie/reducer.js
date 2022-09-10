import * as types from "./type";

const initalState = {
  data: [],
  loading: false,
  error: false,
};

export const getDetailMovies = (state = initalState, action) => {
  switch (action.type) {
    case types.SUCCESS_GET_DETAIL_MOVIE: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        erorr: false,
      };
    }
    case types.LOADING_GET_DETAIL_MOVIE: {
      return {
        ...state,
        data: [],
        loading: true,
        error: false,
      };
    }
    case types.FAILED_GET_DETAIL_MOVIE: {
      return {
        loading: false,
        error: true,
      };
    }

    default:
      return { ...state };
  }
};
