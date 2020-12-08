import {createSelector} from 'reselect';

const selectCategory = (state) => state.category;

export const makeSelectLoading = () =>
  createSelector(selectCategory, (category) => category.loading);
export const makeSelectItems = () =>
  createSelector(selectCategory, (category) => category.items);
export const makeSelectError = () =>
  createSelector(selectCategory, (category) => category.error);
