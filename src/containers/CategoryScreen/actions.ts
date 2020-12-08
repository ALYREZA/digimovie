import {
  REQUEST_CATEGORY,
  SUCCESS_CATEGORY,
  FAILURE_CATEGORY,
} from './constants';

export function categoryRequest() {
  return {
    type: REQUEST_CATEGORY,
  };
}

export function getCategorySuccessfully(result: [], count: number) {
  return {
    type: SUCCESS_CATEGORY,
    result,
    count,
  };
}
export function categoryRequestFailure(error: string) {
  return {
    type: FAILURE_CATEGORY,
    error,
  };
}
