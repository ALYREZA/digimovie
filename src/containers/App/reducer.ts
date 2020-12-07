import produce from 'immer';
import initialState from '../../initialState';

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    return draft;
  });

export default appReducer;
