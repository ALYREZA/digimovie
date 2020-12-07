import produce from 'immer';
import initialState from '../../initialState';

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      default:
        return draft;
    }
  });

export default appReducer;
