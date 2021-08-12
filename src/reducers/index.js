import { combineReducers } from "redux";
import categoriesReducer from "./categories";
import postsReducer from "./posts";
import commentsReducer from "./comments";
import sortByReducer from "./sort";
import postReducer from "./post";

const combinedReducers = combineReducers({
  categoriesReducer,
  postReducer,
  commentsReducer,
  postsReducer,
  sortByReducer,
});

export default combinedReducers;
