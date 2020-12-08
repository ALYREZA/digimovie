import produce from 'immer';
import {
  REQUEST_CATEGORY,
  SUCCESS_CATEGORY,
  FAILURE_CATEGORY,
} from './constants';
export const initialState = {
  loading: false,
  error: false,
  items: [],
  count: 0,
};
const categoryReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case REQUEST_CATEGORY:
        draft.loading = true;
        break;
      case SUCCESS_CATEGORY:
        draft.loading = false;
        draft.items = action.result;
        draft.count = action.count;
        break;
      case FAILURE_CATEGORY:
        draft.loading = false;
        draft.error = true;
        break;
    }
  });

export default categoryReducer;
