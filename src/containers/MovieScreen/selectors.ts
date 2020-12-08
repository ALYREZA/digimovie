import {createSelector} from '@reduxjs/toolkit';

const selectMovie = (state) => state.movie;

export const makeSelectLoading = () =>
  createSelector(selectMovie, (movie) => movie.loading);
export const makeSelectError = () =>
  createSelector(selectMovie, (movie) => movie.error);
export const makeSelectItems = () =>
  createSelector(selectMovie, (movie) => movie.items);
export const makeSelectCount = () =>
  createSelector(selectMovie, (movie) => movie.count);
export const makeSelectNext = () =>
  createSelector(selectMovie, (movie) => movie.next);
