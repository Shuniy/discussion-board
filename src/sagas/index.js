import { all } from "redux-saga/effects";
import categoriesSaga from "./categories";
import postsSaga from "./posts";
import commentsSaga from "./comments";
import postSaga from "./post";

export default function* rootSaga() {
  yield all([...categoriesSaga, ...postsSaga, ...commentsSaga, ...postSaga]);
}
