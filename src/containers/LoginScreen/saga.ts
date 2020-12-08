import {call, put, takeLatest} from 'redux-saga/effects';
import request from '../../utils/request';
import {signInFailure, signInUserSuccessfully} from './actions';
import {REQUEST_SIGN_IN} from './constants';

export function* getUserToken({username, password}) {
  const requestURL = 'https://imdb.hriks.com/user/auth-token';

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password}),
    });
    yield put(signInUserSuccessfully(repos.token));
  } catch (err) {
    yield put(signInFailure('try again'));
  }
}

export default function* LoginData() {
  yield takeLatest(REQUEST_SIGN_IN, getUserToken);
}
