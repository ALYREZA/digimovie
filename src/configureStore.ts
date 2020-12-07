/**
 * Create the store with dynamic reducers
 */

import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import createReducer from './reducers';

export default function configureStore(initialState = {}) {
  let composeEnhancers = compose;
  const reduxSagaMonitorOptions = {};

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware];

  const enhancers = composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(enhancers),
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  return store;
}
