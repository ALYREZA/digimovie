import {
  REQUEST_MOVIE,
  REQUEST_NEXT_MOVIE,
  SUCCESS_MOVIE,
  FAILURE_MOVIE,
  SUCCESS_NEXT_MOVIE,
} from './constants';

export function getMovieRequest(tags: string) {
  return {
    type: REQUEST_MOVIE,
    tags,
  };
}
export function getMoviesSuccessfully(
  results: [],
  count: number,
  next: string | null,
) {
  return {
    type: SUCCESS_MOVIE,
    results,
    count,
    next,
  };
}
export function getMovieFailure(error: string) {
  return {
    type: FAILURE_MOVIE,
    error,
  };
}
export function getMoreMoviesRequest(next: string) {
  return {
    type: REQUEST_NEXT_MOVIE,
    next,
  };
}
export function getMoreMoviesSuccess(
  results: [],
  count: number,
  next: string | null,
) {
  return {
    type: SUCCESS_NEXT_MOVIE,
    results,
    count,
    next,
  };
}
