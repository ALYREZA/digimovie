import produce from 'immer';
import {} from './actions';
import {
  REQUEST_MOVIE,
  REQUEST_NEXT_MOVIE,
  SUCCESS_MOVIE,
  FAILURE_MOVIE,
  SUCCESS_NEXT_MOVIE,
} from './constants';
export const initailState = {
  loading: false,
  error: false,
  count: 0,
  next: null,
  items: [],
};
const movieReducer = (state = initailState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case REQUEST_MOVIE:
        draft.loading = true;
        draft.error = false;
        break;
      case REQUEST_NEXT_MOVIE:
        draft.loading = false;
        draft.error = false;
        break;
      case SUCCESS_NEXT_MOVIE:
        console.log(draft.items.length);
        draft.items = [...draft.items, ...action.results];
        draft.count = action.count;
        draft.next = action.next;
        break;
      case SUCCESS_MOVIE:
        draft.loading = false;
        draft.items = action.results;
        draft.count = action.count;
        draft.next = action.next;
        break;
      case FAILURE_MOVIE:
        draft.loading = false;
        draft.error = true;
        break;
    }
  });
export default movieReducer;
