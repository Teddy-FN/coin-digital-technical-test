import * as types from "./type";

const initalState = {
  data: [],
  loading: false,
  error: false,
};

export const getAllCategoriesMovies = (state = initalState, action) => {
  switch (action.type) {
    case types.SUCCESS_GET_ALL_CATEGORY_MOVIE: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        erorr: false,
      };
    }
    case types.LOADING_GET_ALL_CATEGORY_MOVIE: {
      return {
        ...state,
        data: [],
        loading: true,
        error: false,
      };
    }
    case types.FAILED_GET_ALL_CATEGORY_MOVIE: {
      return {
        loading: false,
        error: true,
      };
    }

    default:
      return { ...state };
  }
};
