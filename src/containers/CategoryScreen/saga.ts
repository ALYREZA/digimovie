import {call, put, takeLatest} from 'redux-saga/effects';
import request from '../../utils/request';
import {getCategorySuccessfully, categoryRequestFailure} from './actions';
import {REQUEST_CATEGORY} from './constants';

export function* getCategory() {
  const requestURL = 'https://imdb.hriks.com/category';
  try {
    const categories = yield call(request, requestURL, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    });
    console.log({categories});
    yield put(getCategorySuccessfully(categories.results, categories.count));
  } catch (erro) {
    yield put(categoryRequestFailure('does not work'));
  }
}

export default function* CategoryData() {
  yield takeLatest(REQUEST_CATEGORY, getCategory);
}
