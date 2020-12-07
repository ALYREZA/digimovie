import {call, put, select, takeLatest} from 'redux-saga/effects';
import request from '../../utils/request';
import {signInFailure, signInUserSuccessfully} from './actions';
import {REQUEST_SIGN_IN} from './constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function saveOnStorage(token: string) {
  let result;
  try {
    //await AsyncStorage.setItem('userToken', token);
    result = 'token';
  } catch (err) {
    result = null;
  }
  return result;
}

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
    const saveToken = yield call(saveOnStorage, repos.token);
    if (saveToken) {
      yield put(signInUserSuccessfully(repos.token));
    } else {
      yield put(signInFailure('can not save token on your phone'));
    }
  } catch (err) {
    yield put(signInFailure('validation failed'));
  }
}

export default function* LoginData() {
  yield takeLatest(REQUEST_SIGN_IN, getUserToken);
}
