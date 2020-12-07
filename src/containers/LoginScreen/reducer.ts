import produce from 'immer';
import {REQUEST_SIGN_IN, SUCCESS_SIGN_IN, FAILURE_SIGN_IN} from './constants';

export const initialState = {
  loading: false,
  token: null,
  error: false,
  errorMessage: null,
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case REQUEST_SIGN_IN:
        draft.loading = true;
        draft.error = false;
        draft.errorMessage = null;
        break;
      case SUCCESS_SIGN_IN:
        draft.loading = false;
        draft.token = action.token;
        draft.error = false;
        draft.errorMessage = null;
        break;
      case FAILURE_SIGN_IN:
        draft.loading = false;
        draft.token = null;
        draft.error = true;
        draft.errorMessage = action.error;
        break;
    }
  });

export default loginReducer;
