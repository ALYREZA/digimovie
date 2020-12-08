import {call, put, takeLatest, all} from 'redux-saga/effects';
import {REQUEST_MOVIE, REQUEST_NEXT_MOVIE} from './constants';
import {
  getMoreMoviesSuccess,
  getMovieFailure,
  getMoviesSuccessfully,
} from './actions';
import request from '../../utils/request';

export function* getMovies({tags}) {
  const requestURL = `https://imdb.hriks.com/movie/?tags=${tags}`;
  try {
    const movies = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    yield put(getMoviesSuccessfully(movies.results, movies.count, movies.next));
  } catch (error) {
    yield put(getMovieFailure('something went wrong'));
  }
}
export function* getMoreMovies({next}) {
  try {
    const movies = yield call(request, next, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    yield put(getMoreMoviesSuccess(movies.results, movies.count, movies.next));
  } catch (error) {
    yield put(getMovieFailure('something went wrong'));
  }
}

export default function* MovieData() {
  yield all([
    takeLatest(REQUEST_MOVIE, getMovies),
    takeLatest(REQUEST_NEXT_MOVIE, getMoreMovies),
  ]);
}
