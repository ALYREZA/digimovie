import {
  SUCCESS_SIGN_IN,
  SIGN_OUT,
  FAILURE_SIGN_IN,
  REQUEST_SIGN_IN,
} from './constants';

export function signInUserSuccessfully(token: string) {
  return {
    type: SUCCESS_SIGN_IN,
    token,
  };
}

export function signInFailure(error: string) {
  return {
    type: FAILURE_SIGN_IN,
    error,
  };
}

export function signInRequest() {
  return {
    type: REQUEST_SIGN_IN,
  };
}

export function signOutUser() {
  return {
    type: SIGN_OUT,
  };
}
