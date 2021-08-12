import { combineReducers } from "redux";
import categoriesReducer from "./categories";
import postsReducer from "./posts";
import commentsReducer from "./comments";
import sortByReducer from "./sort";
import postReducer from "./post";

const combinedReducers = combineReducers({
  categories: categoriesReducer,
  post: postReducer,
  comment: commentsReducer,
  posts: postsReducer,
  sortBy: sortByReducer,
});

export default combinedReducers;
