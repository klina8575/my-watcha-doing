import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import common, { commonSaga } from "./common";
import movie, { movieSaga } from "./movie";
import movieDetail, { movieDetailSaga } from "./movieDetail";
import loading from "./loading";

const rootReducer = combineReducers({
  common,
  movie,
  movieDetail,
  loading,
});

export function* rootSaga() {
  yield all([commonSaga(), movieSaga(), movieDetailSaga()]);
}

export default rootReducer;
