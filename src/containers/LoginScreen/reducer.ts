import produce from 'immer';
import {SUCCESS_SIGN_IN, FAILURE_SIGN_IN, REQUEST_SIGN_IN} from './constants';

export const initialState = {
  token: null,
  loading: false,
  error: false,
  errorMessage: null,
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) => {
  produce(state, (draft) => {
    switch (action.type) {
      case REQUEST_SIGN_IN:
        draft.error = false;
        draft.loading = true;
        draft.errorMessage = null;
        break;
      case SUCCESS_SIGN_IN:
        draft.token = action.token;
        draft.error = false;
        draft.loading = false;
        draft.errorMessage = null;
        break;
      case FAILURE_SIGN_IN:
        draft.token = null;
        draft.error = true;
        draft.loading = false;
        draft.errorMessage = action.error;
        break;
      default:
        return draft;
    }
  });
};
export default loginReducer;
