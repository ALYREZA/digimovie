import {createSelector} from 'reselect';

const selecetUser = (state) => state.user;

const makeSelectLoading = () =>
  createSelector(selecetUser, (user) => user.loading);
const makeSelectToken = () => createSelector(selecetUser, (user) => user.token);
const makeSelectError = () => createSelector(selecetUser, (user) => user.error);
const makeSelectErrorMessage = () =>
  createSelector(selecetUser, (user) => user.errorMessage);

export {
  makeSelectLoading,
  makeSelectToken,
  makeSelectError,
  makeSelectErrorMessage,
};
