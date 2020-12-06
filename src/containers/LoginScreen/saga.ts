import {call, put, select, takeLatest} from 'redux-saga/effects';
import request from '../../utils/request';
import {signInFailure, signInUserSuccessfully} from './actions';
export function* getUserToken() {
  const requestURL = 'https://imdb.hriks.com/user/auth-token';
  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    console.log({repos});
    //yield put(signInUserSuccessfully(token));
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export default function* LoginData() {
  yield takeLatest(signInUserSuccessfully, getUserToken);
}
