import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";

import { getAllCategoriesMovies } from "./category/reducer";
import { getAllMovies } from "./movies/reducer";
import { getDetailMovies } from "./detailMovie/reducer";
const rootReducer = combineReducers({
  getAllCategoriesMovies,
  getAllMovies,
  getDetailMovies,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
