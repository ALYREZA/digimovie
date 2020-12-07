import produce from 'immer';

export const initialState = {
  loading: true,
};
/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      default:
        return draft;
    }
  });

export default loginReducer;
