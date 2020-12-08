import {SUCCESS_SIGN_IN, FAILURE_SIGN_IN, REQUEST_SIGN_IN} from './constants';

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

export function signInRequest(username: string, password: string) {
  return {
    type: REQUEST_SIGN_IN,
    username,
    password,
  };
}

export function signOutUser() {
  return {
    type: SIGN_OUT,
  };
}
