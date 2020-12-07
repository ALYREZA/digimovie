import {createSelector} from 'reselect';

const selectUser = (state) => state;

const makeSelectLoading = () =>
  createSelector(selectUser, (getLoading) => getLoading);

export {makeSelectLoading};
