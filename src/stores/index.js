/* eslint "global-require": 0 */

import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import reducers from '../reducers';

const getMiddleware = (history) => {
  const reduxRouterMiddleware = routerMiddleware(history);
  const { NODE_ENV } = process.env;

  if (NODE_ENV === 'production') {
    return applyMiddleware(
      thunkMiddleware,
      reduxRouterMiddleware,
    )(createStore);
  }
  return applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
    reduxRouterMiddleware,
  )(createStore);
};

const createStoreWithMiddleware = (initialState, history) => {
  const middleware = getMiddleware(history);
  return middleware(reducers, initialState);
};

export default function configureStore(initialState, history) {
  const store = createStoreWithMiddleware(initialState, history);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
