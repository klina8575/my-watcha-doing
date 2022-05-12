import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import movie, { movieSaga } from "./movie";
import movieDetail, { movieDetailSaga } from "./movieDetail";
import loading from "./loading";

const rootReducer = combineReducers({
  movie,
  movieDetail,
  loading,
});

export function* rootSaga() {
  yield all([movieSaga(), movieDetailSaga()]);
}

export default rootReducer;
