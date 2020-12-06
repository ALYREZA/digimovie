import produce from 'immer';

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = {}, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case 'Global':
        draft.userToken = null;
        break;
    }
  });

export default loginReducer;
